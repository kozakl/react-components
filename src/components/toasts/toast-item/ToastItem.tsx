import {FunctionComponent, useEffect,
        useState} from 'react';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {classNames} from '@kozakl/utils';
import {deleteToast, DeleteToast} from '../../../actions';
import {StoreState, Toast, ToastType} from '../../../types';
import React from 'react';
import style from './ToastItem.pcss';

const ToastItem:FunctionComponent<Props> = (props)=>
{
    const [show, setShow] = useState(false);
    
    useEffect(()=> {
        setTimeout(()=>
            setShow(true), 0);
        
        const timer = setTimeout(onClose, 3000);
        return ()=>
            clearTimeout(timer);
    }, []);
    
    function onClose() {
        if (props.type === ToastType.ERROR) {
            return;
        }
        setShow(false);
        setTimeout(()=>
            props.deleteToast(props.id), 400);
    }
    
    const toastClass = classNames(
        style.toast,
        style[props.type as keyof typeof style],
        props.className,
        show && style.show
    );
    return (
        <div className={toastClass} key={props.id}>
            <div className={style.container}>
                <div className={style.icon}>
                    <img src={require(`res/icons/${props.type}.svg`)}/>
                </div>
                <div className={style.body}>
                    <h6 className={style.title}>
                        {props.title}
                    </h6>
                    <p className={style.message}>
                        {props.message}
                    </p>
                </div>
            </div>
            <a
                className={style.close}
                onClick={onClose}>
                <img src={require('res/icons/close.svg')}/>
            </a>
        </div>
    );
};

interface Props extends Toast {
    className?:string;
    deleteToast:(id:number)=> DeleteToast;
}

function mapDispatchToProps(
    dispatch:ThunkDispatch<StoreState, void,
        DeleteToast>) {
    return {
        deleteToast: (id:number)=>
            dispatch(deleteToast(id))
    };
}

export default connect(null, mapDispatchToProps)(ToastItem);
