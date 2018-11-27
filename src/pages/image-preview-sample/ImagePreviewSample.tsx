import * as React from 'react';
import * as style from './ImagePreviewSample.pcss';
import {PureComponent} from 'react';
import {Button} from 'reactstrap';
import {Dialog} from '../../components/dialog';
import {Modal} from '../../components/modal';
import {ImagePreview} from '../../components/image-preview';

export default class ImagePreviewSample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            infoDialog: false,
            deleteDialog: false
        };
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
                <ImagePreview
                    images={[
                      {
                        "path": "/assets/gallery/image1",
                        "width": 2304,
                        "height": 1536
                      },
                      {
                        "path": "/assets/gallery/image2",
                        "width": 1048,
                        "height": 699
                      },
                      {
                        "path": "/assets/gallery/image3",
                        "width": 2592,
                        "height": 3872
                      },
                      {
                        "path": "/assets/gallery/image4",
                        "width": 2592,
                        "height": 3872
                      },
                      {
                        "path": "/assets/gallery/image5",
                        "width": 2592,
                        "height": 3872
                      },
                      {
                        "path": "/assets/gallery/image6",
                        "width": 2304,
                        "height": 1536
                      },
                      {
                        "path": "/assets/gallery/image7",
                        "width": 2304,
                        "height": 1536
                      },
                      {
                        "path": "/assets/gallery/image8",
                        "width": 2304,
                        "height": 1536
                      },
                      {
                        "path": "/assets/gallery/image9",
                        "width": 2304,
                        "height": 1536
                      },
                      {
                        "path": "/assets/gallery/image10",
                        "width": 2304,
                        "height": 1536
                      }
                    ]}
                    current={1}/>
            </div>
        );
    }
}

interface State {
    infoDialog:boolean;
    deleteDialog:boolean;
}
