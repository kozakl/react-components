import {exec} from 'child_process';

exec(`rm -rf ./public/assets &&\
      rm -rf ./public/chunks &&\
      find ./public -name "*.js" -delete &&\
      find ./public -name "*.map" -delete`);
