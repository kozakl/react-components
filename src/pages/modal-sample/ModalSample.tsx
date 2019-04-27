import {PureComponent} from 'react';
import {Button} from 'reactstrap';
import {Modal} from '../../components/modal';
import React from 'react';
import style from './ModalSample.pcss';

export default class ModalSample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            modal: false
        };
    }
    
    onClickShow = ()=> {
        this.setState({modal: true});
    };
    
    onCloseModal = ()=> {
        this.setState({modal: false});
    };
    
    render()
    {
        return (
            <div className={style.dialogSample}>
                <Button
                    className={style.show}
                    onClick={this.onClickShow}
                    color="success">
                    Show Modal
                </Button>
                <Modal visible={this.state.modal} onClose={this.onCloseModal}>
                    <div className={style.modal}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
                    </div>
                </Modal>
            </div>
        );
    }
}

interface State {
    modal:boolean;
}
