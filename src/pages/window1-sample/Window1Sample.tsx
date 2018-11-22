import * as React from 'react';
import * as style from './Window1Sample.pcss';
import {PureComponent} from 'react';
import {Button} from 'reactstrap';
import {Modal} from '../../components/modal';
import {Sidebar} from '../../components/sidebar';
import Window1 from '../../components/window1/Window1';

export default class Window1Sample extends PureComponent<{}, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            sidebar: false
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
                <Window1></Window1>
            </div>
        );
    }
}

interface State {
    sidebar:boolean;
}
