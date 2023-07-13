import {ChangeEvent, forwardRef} from 'react';
import {ImagePicker} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {isAbsolute} from '@kozakl/utils/path';
import {IconButton} from '../icon-button';
import {ChevronLeft, ChevronRight,
        CircleDownload, CircleMinus,
        CirclePlus} from '../icons';
import {useTheme} from '../theme';
import React from 'react';

const ImagesPicker = forwardRef<HTMLInputElement, Props>((props, ref)=> {
    const theme = useTheme('imagesPicker');
    return (
        <div
            className={classNames(
                theme.imagesPicker,
                props.className
            )}>
            <input
                id={props.id}
                ref={ref}
                type="file"
                accept="image/*"
                multiple={props.multiple}
                disabled={!props.multiple &&
                    !!props.images.length}
                onChange={props.onChange}/>
            <div className={theme.images}>
                {props.images.map((image, index)=>
                    <div
                        className={theme.container}
                        key={image.file ?
                            image.name + image.file.size :
                            image.url}>
                        <div className={theme.imageContainer}>
                            <img
                                className={theme.image}
                                title={image.name}
                                alt={null}
                                src={image.file ? 
                                    image.url :
                                    isAbsolute(image.url) ?
                                        `${image.url}?w=152` :
                                        `${process.env.API}/${image.url}?w=152`}
                                style={{
                                    aspectRatio: (image.width / image.height).toString()}}/>
                            {props.multiple &&
                                <div className={theme.arrows}>
                                    <IconButton
                                        className={theme.moveLeft}
                                        title="Move left"
                                        active
                                        disabled={
                                            props.images.length <= 1 ||
                                            index <= 0}
                                        onClick={()=>
                                            props.moveLeft(index)}>
                                        <ChevronLeft
                                            margin="-1em"
                                            padding="0.5em"
                                            height="4em"/>
                                    </IconButton>
                                    <IconButton
                                        className={theme.moveRight}
                                        title="Move right"
                                        active
                                        disabled={
                                            props.images.length <= 1 ||
                                            index >= props.images.length - 1}
                                        onClick={()=>
                                            props.moveRight(index)}>
                                        <ChevronRight
                                            margin="-1em"
                                            padding="0.5em"
                                            height="4em"/>
                                    </IconButton>
                                </div>}
                            {!image.file &&
                                <a
                                    className={theme.download}
                                    title="Download"
                                    href={`${process.env.API}/${image.url}?download=true`}
                                    download>
                                    <CircleDownload
                                        background="var(--background-download)"
                                        colorPrimary="var(--color-download)"
                                        circleStroke={0.75}
                                        padding="0.25em"
                                        margin="-0.8125em"
                                        width="3.25em"/>
                                </a>}
                            <IconButton
                                className={theme.remove}
                                title="Remove"
                                active
                                onClick={()=>
                                    props.remove(index)}>
                                <CircleMinus
                                    background="var(--background-remove)"
                                    colorPrimary="var(--color-remove)"
                                    circleStroke={0.75}
                                    padding="0.25em"
                                    margin="-0.8125em"
                                    width="3.25em"/>
                            </IconButton>
                        </div>
                    </div>)}
                <label
                    className={classNames(
                        theme.add,
                        !props.multiple &&
                            props.images.length &&
                                theme.disabled
                    )}
                    title="Add Image/s"
                    htmlFor={props.id}>
                    <CirclePlus
                        colorPrimary="var(--color-primary)"
                        colorSecondary="var(--color-primary)"
                        margin="-1.125em"
                        width="4.5em"/>
                </label>
            </div>
            <div
                className={classNames(
                    theme.error,
                    props.error &&
                        theme.display
                )}>
                {props.error}
            </div>
        </div>
    );
});

ImagesPicker.defaultProps = {
    multiple: true
};

interface Props {
    className?:string;
    id:string;
    images:ImagePicker[];
    multiple?:boolean;
    error:string;
    moveLeft:(index:number)=> void;
    moveRight:(index:number)=> void;
    remove:(index:number)=> void;
    onChange:(event:ChangeEvent<HTMLInputElement>)=> void;
}

export default ImagesPicker;
