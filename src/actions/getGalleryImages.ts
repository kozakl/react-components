import {ErrorResult, Image} from '../types';

export function getGalleryImages():Promise<Image[]>
{
    return fetch('./data/gallery.json')
        .then((response)=> response.json())
        .then((result:Result)=> {
            if (result.error)
                throw result.error;
            return result;
        })
        .catch((error)=> {
            alert(error);
            throw error;
        });
}

interface Result extends Array<Image>, ErrorResult { }
