import {PureComponent} from 'react';
import {Button} from 'reactstrap';
import {Modal} from '../../components/modal';
import {Sidebar2} from '../../components/sidebar2';
import React from 'react';
import style from './SidebarSample.pcss';

export default class SidebarSample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            sidebar: !false
        };
    }
    
    onClickShowSidebar = ()=> {
        this.setState({sidebar: true});
    };
    
    onCloseSidebar = ()=> {
        this.setState({sidebar: false});
    };
    
    render()
    {
        return (
            <div className={style.sidebarSample}>
                <Button
                    className={style.show}
                    onClick={this.onClickShowSidebar}
                    color="success">
                    Show Sidebar
                </Button>
                <Modal
                    onClose={this.onCloseSidebar}
                    visible={this.state.sidebar}
                    outTime={750}>
                    <Sidebar2/>
                </Modal>
            </div>
        );
    }
}

interface State {
    sidebar:boolean;
}
