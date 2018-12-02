import * as React from 'react';
import * as style from './ImagePreviewSample.pcss';
import {PureComponent} from 'react';
import {Button} from 'reactstrap';
import {Dialog} from '../../components/dialog';
import {Modal} from '../../components/modal';
import {ImagePreview} from '../../components/image-preview';
import {getGalleryImages} from '../../actions';
import {Image} from '../../types';

export default class ImagePreviewSample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            images: [],
            infoDialog: false,
            deleteDialog: false
        };
    }
    
    async componentDidMount()
    {
        const images = await getGalleryImages();
        this.setState({images});
    }
    
    onClickInfo = ()=> {
        this.setState({infoDialog: true});
    };
    
    onClickDelete = ()=> {
        this.setState({deleteDialog: true});
    };
    
    onConfirmInfo = ()=> {
        this.setState({infoDialog: false});
    };
    
    onDismissInfo = ()=> {
        this.setState({infoDialog: false});
    };
    
    onConfirmDelete = ()=> {
        this.setState({deleteDialog: false});
    };
    
    onDismissDelete = ()=> {
        this.setState({deleteDialog: false});
    };
    
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
    infoDialog:boolean;
    deleteDialog:boolean;
}
