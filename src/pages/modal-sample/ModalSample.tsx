import {useState} from 'react';
import {Button} from 'reactstrap';
import {Modal} from '../../components/modal';
import React from 'react';
import style from './ModalSample.pcss';

export default function ModalSample()
{
    const [modal, setModal] = useState(false);
    return (
        <div className={style.modalSample}>
            <Button
                onClick={()=> setModal(true)}
                color="success">
                Show Modal
            </Button>
            <Modal
                visible={modal}
                onClose={()=> setModal(false)}>
                <div className={style.modal}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum,
                    et lobortis ante pretium nec.
                </div>
            </Modal>
        </div>
    );
}
