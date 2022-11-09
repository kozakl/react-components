import {useEffect} from 'react';
import {ImagesPicker} from '@kozakl/components/images-picker';
import {useImagesPicker} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './ImagesPicker.module.css';

const Index = ()=> {
    const imagesPicker = useImagesPicker();
    
    useEffect(()=> {
        imagesPicker.setInitial([
            {
                'name': 'Hand.jpg',
                'url': 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/painted-hand-298-332.jpg',
                'width': 298,
                'height': 332
            },
            {
                'name': 'Grapefruit Slice.jpg',
                'url': 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
                'width': 332,
                'height': 332
            }
        ]);
    }, []);
    
    return (
        <Layout title="Images Picker - React Components">
            <div className={style.imagesPicker}>
                <ImagesPicker {...imagesPicker}/>
            </div>
        </Layout>
    );
};

export default Index;
