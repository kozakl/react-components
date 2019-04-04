import {useEffect, useState} from 'react';
import {Button} from 'reactstrap';
import {ImagePreview} from '../../components/image-preview';
import {Modal} from '../../components/modal';
import {getGalleryImages} from '../../actions';
import {Image} from '../../types';
import React from 'react';
import style from './ImagePreviewSample.pcss';

export default function ImagePreviewSample()
{
    const [imagePreview, setImagePreview] = useState(false);
    const [images, setImages] = useState<Image[]>([]);
    
    useEffect(()=> {
        getGalleryImages()
            .then(setImages);
    }, []);
    
    function onCloseImagePreview() {
        setImagePreview(false);
    }
    
    return (
        <div className={style.imagePreviewSample}>
            <Button
                onClick={()=> setImagePreview(true)}
                color="success"
                size="sm">
                Show Image Preview
            </Button>
            <Modal
                visible={imagePreview}
                onClose={onCloseImagePreview}
                center>
                <ImagePreview
                    images={images}
                    current={1}/>
            </Modal>
        </div>
    );
}
