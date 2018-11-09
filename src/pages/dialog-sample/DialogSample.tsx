import * as React from 'react';
import * as style from './DialogSample.pcss';
import {PureComponent} from 'react';
import {Button} from 'reactstrap';
import {Dialog} from '../../components/dialog';
import {Modal} from '../../components/modal';

export default class DialogSample extends PureComponent<{}, State>
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
                <Button
                    className={style.info}
                    onClick={this.onClickInfo}
                    color="success"
                    size="sm">
                    Show Info Dialog
                </Button>
                <Button
                    onClick={this.onClickDelete}
                    color="danger"
                    size="sm">
                    Show Delete Dialog
                </Button>
                <Modal visible={this.state.infoDialog}>
                    <Dialog
                        onConfirm={this.onConfirmInfo}
                        onDismiss={this.onDismissInfo}
                        title="Info!">
                        <p>
                            Info Text
                        </p>
                    </Dialog>
                </Modal>
                <Modal visible={this.state.deleteDialog}>
                    <Dialog
                        onConfirm={this.onConfirmDelete}
                        onDismiss={this.onDismissDelete}
                        confirm="Delete"
                        title="Warning!">
                        <p>
                            Are you sure you want to delete?
                        </p>
                    </Dialog>
                </Modal>
            </div>
        );
    }
}

interface State {
    infoDialog:boolean;
    deleteDialog:boolean;
}
