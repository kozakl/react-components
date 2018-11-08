import gm from 'gm';
import {existsSync, lstatSync,
        mkdirpSync, readFileSync} from 'fs-extra';
import {basename, dirname,
        extname, join} from 'path';
import {listFiles} from '@kozakl/utils/file';

const filter = ['.jpg', '.png'],
      buffer = readFileSync(process.argv[2], 'utf8'),
      images = JSON.parse(buffer).values();
makeImage(images.next().value);

function makeImage(image)
{
    if (lstatSync(image.src).isFile())
        makeSizes(image);
    else
    {
        listFiles(image.src, filter).forEach((src)=> {
            const diff = src.replace(image.src, ''),
                  dest = dirname(join(image.dest, diff));
            makeSizes({
                ...image,
                src, dest
            });
        });
    }
    
    const next = images.next();
    if (!next.done)
        makeImage(next.value);
}

function makeSizes(image)
{
    if (!existsSync(image.dest))
        mkdirpSync(image.dest);
    
    image.sizes.forEach((size)=> {
        const dest = join(
            image.dest,
            (size.name || basename(image.src, extname(image.src))) +
            (size.suffix || '') +
            (image.ext || extname(image.src))
        );
        if (!process.argv.includes('--debug')) {
            gm(image.src)
                .noProfile()
                .resize(size.value)
                .blur(size.blur || image.blur || '0x0.001')
                .quality(size.quality || image.quality)
                .write(dest, err => err && console.log(err));
        } else {
            gm(image.src)
                .noProfile()
                .resize(size.value)
                .blur(size.blur || image.blur || '0x0.001')
                .quality(size.quality || image.quality)
                .fill('#FFFFFF')
                .font('Helvetica', 0.1 * size.value)
                .drawText(
                    0.4 * size.value,
                    0.11 * size.value,
                    size.suffix
                )
                .write(dest, err => err && console.log(err));
        }
    });
}
