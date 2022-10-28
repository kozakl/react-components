import {ChangeEvent, forwardRef,
        useState} from 'react';
import {format} from 'date-fns';
import {useTextField, VideoPicker} from '@kozakl/hooks';
import {useDialogsState, useSpinnerState} from '@kozakl/states';
import {classNames} from '@kozakl/utils';
import {isURL} from '@kozakl/utils/validate';
import {Dialog} from '../dialog';
import {IconButton} from '../icon-button';
import {ChevronLeft, ChevronRight,
        CircleDownload, CircleMinus,
        CirclePlus, URL} from '../icons';
import {Range} from '../range';
import {TextField} from '../text-field';
import React from 'react';
import style from './VideosPicker.module.css';

const VideosPicker = forwardRef<HTMLInputElement, Props>((props, ref)=> {
    const directLink = useTextField();
    const [directLinkDialog, setDirectLinkDialog] = useState(false);
    const {showSpinner, hideSpinner} = useSpinnerState(),
          {createDialog} = useDialogsState();
    return (
        <div
            className={classNames(
                style.videosPicker,
                props.className
            )}>
            <input
                id={props.id}
                ref={ref}
                type="file"
                accept="video/mp4"
                multiple={props.multiple}
                disabled={!props.multiple &&
                    !!props.videos.length}
                onChange={props.onChange}/>
            <div className={style.videos}>
                {props.videos.map((video, index)=>
                    <div
                        className={style.container}
                        key={video.file ?
                            video.name + video.file.size :
                            video.url}>
                        <div className={style.videoContainer}>
                            <video
                                className={style.video}
                                title={video.name}
                                src={video.file ?
                                    video.url : `${process.env.API}/${video.url}?w=152`}
                                style={{
                                    aspectRatio: (video.width / video.height).toString()}}
                                onLoadedMetadata={(event)=> {
                                    const target = event.target as HTMLVideoElement;
                                    target.currentTime = video.start;
                                    target.play();
                                }}
                                onTimeUpdate={(event)=> {
                                    const target = event.target as HTMLVideoElement;
                                    if (target.currentTime < video.start) {
                                        target.currentTime = video.start;
                                        target.play();
                                    }
                                    if (target.currentTime >= video.end - 0.2) {
                                        target.currentTime = video.start;
                                        target.play();
                                    }
                                }}
                                muted/>
                            {props.multiple &&
                                <div className={style.arrows}>
                                    <IconButton
                                        className={style.moveLeft}
                                        title="Move left"
                                        active
                                        disabled={
                                            props.videos.length <= 1 ||
                                            index <= 0}
                                        onClick={()=>
                                            props.moveLeft(index)}>
                                        <ChevronLeft
                                            padding="0.25em"
                                            height="100%"/>
                                    </IconButton>
                                    <IconButton
                                        className={style.moveRight}
                                        title="Move right"
                                        active
                                        disabled={
                                            props.videos.length <= 1 ||
                                            index >= props.videos.length - 1}
                                        onClick={()=>
                                            props.moveRight(index)}>
                                        <ChevronRight
                                            padding="0.25em"
                                            height="100%"/>
                                    </IconButton>
                                </div>}
                            {!video.file &&
                                <a
                                    className={style.download}
                                    title="Download"
                                    href={`${process.env.API}/${video.url}?download=true`}
                                    download>
                                    <CircleDownload
                                        background="var(--background-primary)"
                                        colorPrimary="var(--color-primary)"
                                        padding="0.25em"
                                        width="1.875em"/>
                                </a>}
                            <IconButton
                                className={style.remove}
                                title="Remove"
                                active
                                onClick={()=>
                                    props.remove(index)}>
                                <CircleMinus
                                    background="var(--background-primary)"
                                    colorPrimary="var(--color-primary)"
                                    padding="0.25em"
                                    width="1.875em"/>
                            </IconButton>
                        </div>
                        <div className={style.rangeContainer}>
                            <Range
                                values={[
                                    video.start,
                                    !video.file ?
                                        video.end :
                                        video.duration | 0
                                ]}
                                step={0.1}
                                min={0}
                                max={video.duration}
                                onChange={(values)=>
                                    props.cut(index, values[0], values[1])}/>
                            <div className={style.rangeValues}>
                                {format(video.start * 1000, 'mm:ss:S')}–
                                {format(video.end * 1000, 'mm:ss:S')}
                            </div>
                        </div>
                    </div>)}
                <label
                    className={classNames(
                        style.add,
                        !props.multiple &&
                            props.videos.length &&
                                style.disabled
                    )}
                    title="Add Video/s"
                    htmlFor={props.id}>
                    <CirclePlus
                        colorPrimary="var(--background-primary)"
                        colorSecondary="var(--background-primary)"
                        width="2.25em"/>
                    <IconButton
                        className={style.directLink}
                        title="Add .mp4 video file direct link"
                        onClick={(event)=> {
                            event.preventDefault();
                            setDirectLinkDialog(true);
                        }}>
                        <URL
                            colorPrimary="var(--background-primary)"
                            width="1em"/>
                    </IconButton>
                </label>
            </div>
            <div
                className={classNames(
                    style.error,
                    props.error &&
                        style.display
                )}>
                {props.error}
            </div>
            <Dialog
                className={classNames(
                    style.videosPicker,
                    style.directLinkDialog
                )}
                visible={directLinkDialog}
                title="Add .mp4 video file direct link"
                message={
                    <div>
                        <TextField
                            opened
                            outlined
                            {...directLink}/>
                    </div>
                }
                reversed
                confirm="Add"
                confirmDisabled={!isURL(directLink.getValue())}
                onConfirm={()=> {
                    setDirectLinkDialog(false);
                    showSpinner();
                    props.addURL(directLink.getValue())
                        .then(()=>
                            hideSpinner())
                        .catch((error:Error)=> {
                            hideSpinner();
                            if (error) {
                                createDialog({
                                    title: 'Error!',
                                    message: error.message,
                                    reversed: true,
                                    dismiss: null
                                });
                            }
                        })
                }}
                onDismiss={()=>
                    setDirectLinkDialog(false)}/>
        </div>
    );
});

VideosPicker.defaultProps = {
    multiple: true
};

interface Props {
    className?:string;
    id:string;
    videos:VideoPicker[];
    multiple?:boolean;
    error:string;
    moveLeft:(index:number)=> void;
    moveRight:(index:number)=> void;
    cut:(index:number, start:number, end:number)=> void;
    remove:(index:number)=> void;
    addURL:(url:string)=> Promise<Error>;
    onChange:(event:ChangeEvent<HTMLInputElement>)=> void;
}

export default VideosPicker;
