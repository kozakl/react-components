import * as React from 'react';
import * as style from './ModalSample.pcss';
import {PureComponent} from 'react';
import {Button} from 'reactstrap';
import {Modal} from '../../components/modal';

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
                    color="success"
                    size="sm">
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
