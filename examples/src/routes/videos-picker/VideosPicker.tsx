import {useEffect} from 'react';
import {VideosPicker} from '@kozakl/components/videos-picker';
import {useVideosPicker} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './VideosPicker.module.css';

const Index = ()=> {
    const videoShortPicker = useVideosPicker();
    
    useEffect(()=> {
        videoShortPicker.setInitial([
            {
                'name': 'Flower.mp4',
                'url': 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                'duration': 5,
                'start': 0,
                'end': 5,
                'width': 960,
                'height': 540
            },
            {
                'name': 'Big buck bunny.mp4',
                'url': 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
                'duration': 9 * 60 + 56,
                'start': 0,
                'end': 9 * 60 + 56,
                'width': 960,
                'height': 540
            }
        ]);
    }, []);
    
    return (
        <Layout title="Videos Picker - React Components">
            <div className={style.videosPicker}>
                <VideosPicker {...videoShortPicker}/>
            </div>
        </Layout>
    );
};

export default Index;
