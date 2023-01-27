import {useState} from 'react';
import {Button} from '@kozakl/components/button';
import {Modal} from '@kozakl/components/modal';
import {Layout} from '../../components/layout';
import style from './Modal.module.css';

const Main = ()=> {
    const [modal, setModal] = useState(false);
    return (
        <Layout title="Modal - React Components">
            <div className={style.main}>
                <Button
                    onClick={()=>
                        setModal(true)}>
                    Show Modal
                </Button>
                <Modal
                    visible={modal}
                    onClose={()=>
                        setModal(false)}>
                    <div className={style.modalContent}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum,
                        et lobortis ante pretium nec.
                    </div>
                </Modal>
            </div>
        </Layout>
    );
};

export default Main;
