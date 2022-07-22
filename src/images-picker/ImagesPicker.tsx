import {ChangeEvent, forwardRef} from 'react';
import {ImagePicker} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {IconButton} from '../icon-button';
import {ChevronLeft, ChevronRight,
        Download, Plus, Remove} from '../icons';
import React from 'react';
import style from './ImagesPicker.module.css';

const ImagesPicker = forwardRef<HTMLInputElement, Props>((props, ref)=> {
    const imagesPickerClass = classNames(
        style.imagesPicker,
        props.className
    );
    const errorClass = classNames(
        style.error,
        props.error &&
            style.display
    );
    return (
        <div className={imagesPickerClass}>
            <input
                id={props.id}
                ref={ref}
                type="file"
                accept="image/*"
                multiple={props.multiple}
                onChange={props.onChange}/>
            <div className={style.images}>
                {props.images.map((image, index)=>
                    <div
                        className={style.imageContainer}
                        key={image.file ?
                            image.name + image.file.size :
                            image.url}>
                        <img
                            className={style.image}
                            title={image.name}
                            alt={null}
                            src={image.file ?
                                image.url :
                                `${process.env.API}/${image.url}?w=152`}/>
                        {props.multiple &&
                            <div className={style.arrows}>
                                <IconButton
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
                                <Download
                                    padding="0.25em"
                                    width="1.875em"/>
                            </a>}
                        <IconButton
                            className={style.remove}
                            title="Remove"
                            active
                            onClick={()=>
                                props.remove(index)}>
                            <Remove
                                padding="0.25em"
                                width="1.875em"/>
                        </IconButton>
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
                    <Plus
                        color="var(--background-primary)"
                        width="3em"/>
                </label>
            </div>
            <div className={errorClass}>
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
