import fs from 'fs-extra';
import path from 'path';
import {exec} from 'child_process';

const git = exec('git rev-parse --abbrev-ref HEAD && git describe --tags');
git.stdout.on('data', (result)=> {
    const server = process.argv[2],
          name = require('../package.json').name;
    if (!result.includes('fatal:'))
    {
        const lines = result.trim().split(/\s*[\r\n]+\s*/g),
               branch = lines[0],
               tag = lines[1];
        if (branch === 'master')
            deploy(server, path.join(name, tag));
        else
            deploy(server, path.join(name, branch));
    }
    else
        deploy(server, name)
});

function deploy(server, project)
{
    fs.removeSync(path.join(server, project));
    fs.copySync('./public', path.join(server, project));
    if (fs.existsSync(path.join(server, project, 'bundle.js'))) {
        const cache = Math.random();
        fs.renameSync(path.join(server, project, 'bundle.js'),
                      path.join(server, project, `bundle-${cache}.js`));
        fs.writeFileSync(path.join(server, project, 'index.html'),
            fs.readFileSync(path.join(server, project, 'index.html'), 'utf8')
            .replace('bundle.js', `bundle-${cache}.js`));
    }
    
    const git = exec(`cd ${server} &&\
                      git add . &&\
                      git commit -m "Update: ${project}." &&\
                      git push origin`);
    git.stdout.on('data', console.log);
    git.stderr.on('data', console.log);
}
