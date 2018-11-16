import * as React from 'react';
import * as style from './SidebarSample.pcss';
import {PureComponent} from 'react';
import {Modal} from '../../components/modal';
import {Sidebar} from '../../components/sidebar';

export default class SidebarSample extends PureComponent<{}, State>
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
        console.log(this.state);
        this.setState({sidebar: false});
    };
    
    render()
    {
        console.log(this.state);
        return (
            <div className={style.responsiveImageSample}>
                <button onClick={this.onClickShowSidebar}>Show Sidebar</button>
                
                <Modal onClose={this.onCloseSidebar} visible={this.state.sidebar} outTime={750}>
                    <Sidebar/>
                </Modal>
            </div>
        );
    }
}

interface Images {
    [key:string]: {
        width:number;
        height:number;
    }
}

interface State {
    sidebar:boolean;
}
