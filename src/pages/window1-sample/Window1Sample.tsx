import {PureComponent} from 'react';
import {Button} from 'reactstrap';
import {Modal} from '../../components/modal';
import {Window} from '../../components/window1';
import React from 'react';
import style from './Window1Sample.pcss';

export default class Window1Sample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            window: true
        };
    }
    
    onClickShowWindow = ()=> {
        this.setState({window: true});
    };
    
    onCancelWindow = ()=> {
        this.setState({window: false});
    };
    
    render()
    {
        return (
            <div className={style.window1Sample}>
                <Button
                    className={style.show}
                    onClick={this.onClickShowWindow}
                    color="success">
                    Show Window
                </Button>
                
                <Modal visible={this.state.window} interactive>
                    <Window
                        onAdd={null}
                        onCancel={this.onCancelWindow}/>
                </Modal>
            </div>
        );
    }
}

interface State {
    window:boolean;
}
