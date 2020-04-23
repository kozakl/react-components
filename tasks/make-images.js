import {lstatSync, readFileSync} from 'fs-extra';
import {dirname, join} from 'path';
import {listFiles} from '@kozakl/node/file';
import {makeImageSet} from '@kozakl/node/image';

const filter = ['.jpg', '.png'],
      buffer = readFileSync(process.argv[2], 'utf8'),
      images = JSON.parse(buffer).values();
makeImage(images.next().value);

async function makeImage(image)
{
    if (lstatSync(image.src).isFile()) {
        await makeImageSet(image);
    } else {
        await listFiles(image.src, filter).reduce(async (promise, src)=> {
            const diff = src.replace(image.src, ''),
                  dest = dirname(join(image.dest, diff));
            await promise;
            await makeImageSet({
                ...image,
                src, dest
            }, process.argv.includes('--debug'));
        }, Promise.resolve());
    }
    
    const next = images.next();
    if (!next.done) {
        makeImage(next.value);
    }
}
