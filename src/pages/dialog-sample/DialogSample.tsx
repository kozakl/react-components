import {useState} from 'react';
import {Button} from 'reactstrap';
import {Dialog} from '../../components/dialog';
import {Modal} from '../../components/modal';
import React from 'react';
import style from './DialogSample.pcss';

export default function DialogSample()
{
    const [infoDialog, setInfoDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);
    
    function onConfirmInfo() {
        setInfoDialog(false);
    }
    
    function onDismissInfo() {
        setInfoDialog(false);
    }
    
    function onConfirmDelete() {
        setDeleteDialog(false);
    }
    
    function onDismissDelete() {
        setDeleteDialog(false);
    }
    
    return (
        <div className={style.dialogSample}>
            <Button
                className={style.info}
                onClick={()=> setInfoDialog(true)}
                color="success"
                size="sm">
                Show Info Dialog
            </Button>
            <Button
                onClick={()=> setDeleteDialog(true)}
                color="danger"
                size="sm">
                Show Delete Dialog
            </Button>
            <Modal visible={infoDialog}>
                <Dialog
                    onConfirm={onConfirmInfo}
                    onDismiss={onDismissInfo}
                    title="Info!">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et tortor id erat fermentum malesuada. Duis tincidunt nulla ipsum, et lobortis ante pretium nec.
                    </p>
                </Dialog>
            </Modal>
            <Modal visible={deleteDialog}>
                <Dialog
                    onConfirm={onConfirmDelete}
                    onDismiss={onDismissDelete}
                    confirm="Delete"
                    title="Warning!">
                    <p>
                        Are you sure you want to delete?
                    </p>
                </Dialog>
            </Modal>
        </div>
    );
}
