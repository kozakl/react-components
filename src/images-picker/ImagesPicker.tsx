import {ChangeEvent, forwardRef} from 'react';
import {ImagePicker} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {IconButton} from '../icon-button';
import {ChevronLeft, ChevronRight,
        CircleDownload, CircleMinus,
        CirclePlus} from '../icons';
import React from 'react';
import style from './ImagesPicker.module.css';

const ImagesPicker = forwardRef<HTMLInputElement, Props>((props, ref)=> {
    return (
        <div
            className={classNames(
                style.imagesPicker,
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
            <div className={style.images}>
                {props.images.map((image, index)=>
                    <div
                        className={style.container}
                        key={image.file ?
                            image.name + image.file.size :
                            image.url}>
                        <div className={style.imageContainer}>
                            <img
                                className={style.image}
                                title={image.name}
                                alt={null}
                                src={image.file ? 
                                    image.url : `${process.env.API}/${image.url}?w=152`}
                                style={{
                                    aspectRatio: (image.width / image.height).toString()}}/>
                            {props.multiple &&
                                <div className={style.arrows}>
                                    <IconButton
                                        className={style.moveLeft}
                                        title="Move left"
                                        active
                                        disabled={
                                            props.images.length <= 1 ||
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
                                            props.images.length <= 1 ||
                                            index >= props.images.length - 1}
                                        onClick={()=>
                                            props.moveRight(index)}>
                                        <ChevronRight
                                            padding="0.25em"
                                            height="100%"/>
                                    </IconButton>
                                </div>}
                            {!image.file &&
                                <a
                                    className={style.download}
                                    title="Download"
                                    href={`${process.env.API}/${image.url}?download=true`}
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
                                    colorPrimary="var(--background-primary)"
                                    colorSecondary="var(--background-primary)"
                                    padding="0.25em"
                                    width="1.875em"/>
                            </IconButton>
                        </div>
                    </div>)}
                <label
                    className={classNames(
                        style.add,
                        !props.multiple &&
                            props.images.length &&
                                style.disabled
                    )}
                    title="Add Image/s"
                    htmlFor={props.id}>
                    <CirclePlus
                        colorPrimary="var(--background-primary)"
                        width="3em"/>
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
