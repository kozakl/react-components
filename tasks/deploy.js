import {exec} from 'child_process';
import {copySync, existsSync,
        removeSync, renameSync,
        readFileSync, writeFileSync} from 'fs-extra';
import {join} from 'path';

const git = exec('git rev-parse --abbrev-ref HEAD && git describe --tags');
git.stdout.on('data', (result)=> {
    const server = process.argv[2],
          name = require('../package.json').name;
    if (!result.includes('fatal:'))
    {
        const lines = result.trim().split(/\s*[\r\n]+\s*/g),
               branch = lines[0],
               tag = lines[1];
        if (branch === 'master' && tag)
            deploy(server, join(name, tag));
        else
            deploy(server, join(name, branch));
    }
    else
        deploy(server, name)
});

function deploy(server, project)
{
    removeSync(join(server, project));
    copySync('./public', join(server, project));
    if (existsSync(join(server, project, 'bundle.js'))) {
        const cache = Math.random();
        renameSync(join(server, project, 'bundle.js'),
                   join(server, project, `bundle-${cache}.js`));
        writeFileSync(join(server, project, 'index.html'),
            readFileSync(join(server, project, 'index.html'), 'utf8')
                .replace('bundle.js', `bundle-${cache}.js`));
    }
    
    const git = exec(`cd ${server} &&\
                      git add . &&\
                      git commit -m "Update: ${project}." &&\
                      git push origin`);
    git.stdout.on('data', console.log);
    git.stderr.on('data', console.log);
}
