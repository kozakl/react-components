import {useState} from 'react';
import {Button} from 'reactstrap';
import {Modal} from '../../components/modal';
import {Window} from '../../components/window1';
import React from 'react';
import style from './Window1Sample.pcss';

export default function Window1Sample()
{
    const [window, setWindow] = useState(true);
    return (
        <div className={style.window1Sample}>
            <Button
                className={style.show}
                onClick={()=> setWindow(true)}
                color="success">
                Show Window
            </Button>
            <Modal visible={window} interactive>
                <Window
                    className={style.window}
                    onAdd={null}
                    onCancel={()=> setWindow(false)}/>
            </Modal>
        </div>
    );
};
