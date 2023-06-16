import {Button} from "@kozakl/components/button";
import {IconButton} from "@kozakl/components/icon-button";
import {XMark} from "@kozakl/components/icons";
import {Toast} from "@kozakl/components/toasts/toast";
import {useToastsState} from "@kozakl/states";
import {Layout} from '../../components/layout';
import style from './ToastsExample.module.css';

const ToastsExample = ()=> {
    const {createToast} = useToastsState();
    return (
        <Layout title="Toasts - React Components">
            <div className={style.toastsExample}>
                <Button
                    onClick={()=>
                        createToast(
                            <>
                                <span>Zaktualizowano Profil</span>
                                <IconButton title="Close">
                                    <XMark
                                        padding="0.25em"
                                        width="1.5em"/>
                                </IconButton>
                            </>
                        )}>
                    Toast with hook
                </Button>
                <br/>
                <br/>
                <Toast
                    body={
                        <>
                            <span>Toasts example <strong>#2200</strong></span>
                            <IconButton title="Close">
                                <XMark
                                    padding="0.5em"
                                    margin="-0.75em"
                                    width="3em"/>
                            </IconButton>
                        </>
                    }/>
            </div>
        </Layout>
    );
};

export default ToastsExample;
