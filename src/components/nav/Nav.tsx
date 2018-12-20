import * as React from 'react';
import * as style from './Nav.pcss';
import {FunctionComponent} from 'react';
import {Toggle} from "./toggle";

const Nav:FunctionComponent<Props> = (props)=>
{
    return (
        <nav className={style.nav}>
            {/*<Toggle opened/>*/}
            <ul className={style.list}>
                <li>
                    <a className={style.link}>
                        Kalkulator zdolności kredytowej
                    </a>
                </li>
                <li>
                    <a className={style.link}>
                        Wiedza
                    </a>
                </li>
                <li>
                    <a className={style.link}>
                        Korzyści
                    </a>
                </li>
            </ul>
        </nav>
    )
};

interface Props {
    title:string;
    confirm?:string;
    dismiss?:string;
    onConfirm?:()=> void;
    onDismiss?:()=> void;
}

export default Nav;
