import * as React from 'react';
import * as style from './DialogSample.pcss';
import Modal from '../../components/modal/Modal';
import {PureComponent} from 'react';
import {Button} from 'reactstrap';
import {Dialog} from '../../components/dialog';

export default class DialogSample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            infoDialog: false
        };
    }
    
    onClickInfo = ()=> {
        this.setState({infoDialog: true});
    };
    
    onConfirmInfo = ()=> {
        this.setState({infoDialog: false});
    };
    
    onDismissInfo = ()=> {
        this.setState({infoDialog: false});
    };
    
    render()
    {
        return (
            <div className={style.dialogSample}>
                <Button onClick={this.onClickInfo}>
                    Show Info
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
            </div>
        );
    }
}

interface State {
    infoDialog:boolean;
}
