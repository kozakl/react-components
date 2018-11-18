import * as React from 'react';
import * as style from './Window1.pcss';
import {ChangeEvent, FormEvent,
        PureComponent} from 'react';
import {Button, CustomInput, Input} from 'reactstrap';
import {isFill} from '@kozakl/utils/validate';
/**
 * @author kozakluke@gmail.com
 */
export default class Window1 extends PureComponent<Props, State>
{
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            category: 1,
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
                        {this.props.categories.all.map((id)=>
                            <option value={id} key={id}>
                                {this.props.categories.byId[id]}
                            </option>)}
                    </CustomInput>
                    {/*
                    <label className={style.label}>Kolor</label>
                    <div className={style.colorContainer}>
                        <span
                            className={style.color}
                            style={{background: colors.byId[this.state.color].value}}
                            onClick={this.onClickColor}/>
                        <ColorPicker
                            visible={this.state.colorPicker}
                            colors={colors}
                            onChange={this.onChangeColor}
                            onClose={this.onCloseColorPicker}/>
                    </div>
                    */}
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
    categories:{
        byId: {
            [key:number]:string;
        }
        all:number[];
    };
    onAdd:()=> void;
    onCancel:()=> void;
}

interface State {
    category:number;
    color:number;
    desc:string;
    colorPicker:boolean;
}
