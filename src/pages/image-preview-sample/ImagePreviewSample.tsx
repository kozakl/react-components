import {PureComponent} from 'react';
import {Button} from 'reactstrap';
import {ImagePreview} from '../../components-hooks/image-preview';
import {Modal} from '../../components/modal';
import {getGalleryImages} from '../../actions';
import {Image} from '../../types';
import React from 'react';
import style from './ImagePreviewSample.pcss';

export default class ImagePreviewSample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            images: [],
            imagePreview: false
        };
    }
    
    async componentDidMount()
    {
        const images = await getGalleryImages();
        this.setState({images});
    }
    
    onClickShowPreview = ()=> {
        this.setState({imagePreview: true});
    };
    
    onClosePreview = ()=> {
        this.setState({imagePreview: false});
    };
    
    render()
    {
        return (
            <div className={style.imagePreviewSample}>
                <Button
                    onClick={this.onClickShowPreview}
                    color="success"
                    size="sm">
                    Show Image Preview
                </Button>
                <Modal
                    visible={this.state.imagePreview}
                    onClose={this.onClosePreview}
                    center>
                    <ImagePreview
                        images={this.state.images}
                        current={1}/>
                </Modal>
            </div>
        );
    }
}

interface State {
    images:Image[];
    imagePreview:boolean;
}
