import {useState} from 'react';
import {Button} from '@kozakl/components/button';
import {Dialog} from '@kozakl/components/dialog';
import {useDialogsState} from '@kozakl/states';
import {Layout} from '../../components/layout';
import style from './Dialog.module.css';

const Main = ()=> {
    const [dialog, setDialog] = useState({visible: false});
    const {createDialog} = useDialogsState();
    
    return (
        <Layout title="Dialog - React Components">
            <div className={style.main}>
                <Button
                    onClick={()=> 
                        createDialog({
                            title: 'Title',
                            message: 'Message'
                        })
                    }>
                    Dialog with hook
                </Button>
                <br/>
                <br/>
                <Button
                    onClick={()=>
                        setDialog({visible: true})}>
                    Dialog standalone
                </Button>
                
                <Dialog
                    title="Title"
                    message="Message"
                    visible={dialog.visible}
                    onConfirm={()=>
                        setDialog({visible: false})}
                    onDismiss={()=>
                        setDialog({visible: false})}/>
            </div>
        </Layout>
    );
};

export default Main;
