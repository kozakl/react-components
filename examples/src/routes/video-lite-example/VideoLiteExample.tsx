import {VideoLite} from '@kozakl/components/video-lite';
import {Layout} from '../../components/layout';
import style from './VideoLiteExample.module.css';

const VideoLiteExample = ()=> {
    const process = {
        env: {
            API: 'https://mikromusic.pl/api'
        }
    };
    const video = [{
        url: 'uploads/gallery/64613524dc545__MIKROMUSIC%20%C5%9Awiat%20oddala%20si%C4%99%20ode%20mnie%20%28Official%20Live%20Video%29%20%28online-video-cutter.com%29.mp4',
        start: 10,
        end: 15
    }];
    return (
        <Layout title="Video Lite - React Components">
            <div className={style.videoLiteExample}>
                <VideoLite
                    className={style.video}
                    thumb={`${process.env.API}/${video[0].url}?` +
                           `w=100&f=jpg&start=${video[0].start}`}
                    srcSet={`${process.env.API}/${video[0].url}?` + 
                                `w=595&start=${video[0].start}&end=${video[0].end} 595w,
                             ${process.env.API}/${video[0].url}?` +
                                `w=946&start=${video[0].start}&end=${video[0].end} 946w,
                             ${process.env.API}/${video[0].url}?` +
                                `w=1330&start=${video[0].start}&end=${video[0].end} 1330w`}
                    autoPlay
                    loop
                    muted
                    playsInline/>
            </div>
        </Layout>
    );
};

export default VideoLiteExample;
