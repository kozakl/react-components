import {PropsWithChildren} from 'react';
import {default as Head} from 'next/dist/shared/lib/head';
import {Sidebar} from '../sidebar';
import {TopBar} from '../top-bar';
import style from './Layout.module.css';

export const Layout = (props:Props)=> {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <main className={style.layout}>
                <TopBar className={style.topBar}/>
                <div className={style.container}>
                    <Sidebar className={style.sidebar}/>
                    {props.children}
                </div>
            </main>
        </div>
    );
};

interface Props extends PropsWithChildren {
    title?:string;
}

export default Layout;
