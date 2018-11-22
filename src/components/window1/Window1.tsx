import * as React from 'react';
import * as style from './Window1.pcss';
import {ChangeEvent, FormEvent,
        PureComponent} from 'react';
import {Button, CustomInput, Input} from 'reactstrap';
import {isFill} from '@kozakl/utils/validate';

export default class Window1 extends PureComponent<Props, State>
{
    public static defaultProps = {
        categories: ['Category1', 'Category2', 'Category3', 'Category4'],
        categories2: ['Category2-1', 'Category2-2', 'Category2-3', 'Category2-4']
    };
    
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            category: 1,
            category2: 1,
            color: 1,
            desc: '',
            colorPicker: false
        };
    }
    
    onSubmit = (event:FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
    };
    
    onChangeCategory = (event:ChangeEvent<HTMLInputElement>)=> {
        this.setState({category: +event.target.value});
    };
    
    onChangeCategory2 = (event:ChangeEvent<HTMLInputElement>)=> {
        this.setState({category2: +event.target.value});
    };
    
    onClickColor = ()=> {
        this.setState({colorPicker: true});
    };
    
    onCloseColorPicker = ()=> {
        this.setState({colorPicker: false});
    };
    
    onChangeDesc = (event:ChangeEvent<HTMLInputElement>)=> {
        this.setState({desc: event.target.value});
    };
    
    render()
    {
        const enabled = isFill(this.state.desc);
        return (
            <div className={style.newMarker}>
                <h5 className={style.title}>Nowy Marker</h5>
                
                <form className={style.form} onSubmit={this.onSubmit}>
                    <label className={style.label} htmlFor="category">Kategoria</label>
                    
                    <CustomInput
                        className={style.category}
                        value={this.state.category}
                        onChange={this.onChangeCategory}
                        id="category"
                        type="select">
                        {!this.state.category && <option>----</option>}
                        {this.props.categories.map((category, index)=>
                            <option value={index} key={category}>
                                {category}
                            </option>)}
                    </CustomInput>
                    
                    <label className={style.label} htmlFor="category">Category2</label>
                    <CustomInput
                        className={style.category}
                        value={this.state.category2}
                        onChange={this.onChangeCategory2}
                        id="category"
                        type="select">
                        {!this.state.category2 && <option>----</option>}
                        {this.props.categories2.map((category, index)=>
                            <option value={index} key={category}>
                                {category}
                            </option>)}
                    </CustomInput>
                    
                    <label className={style.label} htmlFor="desc">Opis</label>
                    <Input
                        className={style.desc}
                        value={this.state.desc}
                        onChange={this.onChangeDesc}
                        id="desc"
                        type="textarea"
                        bsSize="sm"/>
                    
                    <div className={style.actions}>
                        <Button onClick={this.props.onCancel} size="sm" outline>
                            Anuluj
                        </Button>
                        <Button
                            disabled={!enabled}
                            type="submit"
                            color="success"
                            size="sm">
                            Dodaj
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

interface Props {
    categories:string[];
    categories2:string[];
    onAdd:()=> void;
    onCancel:()=> void;
}

interface State {
    category:number;
    category2:number;
    color:number;
    desc:string;
    colorPicker:boolean;
}
