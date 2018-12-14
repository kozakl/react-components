import * as React from 'react';
import * as style from './Sidebar2.pcss';
import {PureComponent, MouseEvent} from 'react';
import {classNames} from '@kozakl/utils';
import {Checkbox} from '../checkbox';
import {Input} from '../input';
import {Modal} from '../modal';

export default class Sidebar2 extends PureComponent<Props, State>
{
    constructor()
    {
        super(undefined);
        
        this.state = {
            terms: false
        };
    }
    
    onClickTerms = (event:MouseEvent)=> {
        event.preventDefault();
        this.setState({terms: true});
    };
    
    onCloseTerms = ()=> {
        this.setState({terms: false});
    };
    
    render()
    {
        const sidebar2Class = classNames(
            style.sidebar2,
            this.props.active && style.active
        );
        return (
            <div className={sidebar2Class}>
                <a className={style.close} onClick={this.props.onClose}>
                    <img src={require('res/icons/close.svg')}/>
                </a>
                <h3 className={style.headline}>
                    Porozmawiaj z ekspertem
                </h3>
                <div className={style.info}>
                    Podaj nam swoje imię i numer telefonu. Oddzwonimy.
                </div>
                <Input
                    className={style.name}
                    placeholder="Imie"/>
                <Input
                    className={style.tel}
                    placeholder="Telefon (9 cyfr)"/>
                
                <Checkbox className={style.statement}>
                    Oświadczam że zapoznałem się z&nbsp;
                    <a className={style.terms} onClick={this.onClickTerms}>
                        regulaminem
                    </a>&nbsp;
                    i akceptuję...
                </Checkbox>
                <div className={style.send}>
                    Wyślij
                </div>
                <Modal visible={this.state.terms} onClose={this.onCloseTerms}>
                    <div className={style.terms}>
                        Regulamin
                    </div>
                </Modal>
            </div>
        );
    }
}

interface Props {
    active?:boolean;
    onClose?:()=> void;
}

interface State {
    terms:boolean;
}
