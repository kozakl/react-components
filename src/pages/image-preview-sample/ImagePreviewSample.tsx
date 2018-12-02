import * as React from 'react';
import * as style from './ImagePreviewSample.pcss';
import {PureComponent} from 'react';
import {ImagePreview} from '../../components/image-preview';
import {getGalleryImages} from '../../actions';
import {Image} from '../../types';

export default class ImagePreviewSample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            images: []
        };
    }
    
    async componentDidMount()
    {
        const images = await getGalleryImages();
        this.setState({images});
    }
    
    render()
    {
        return (
            <div className={style.dialogSample}>
                {this.state.images.length &&
                    <ImagePreview
                        images={this.state.images}
                        current={1}/>}
            </div>
        );
    }
}

interface State {
    images:Image[];
}
