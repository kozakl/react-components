import {FunctionComponent} from 'react';
import {EditorState} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg';
import {classNames} from '@kozakl/utils';
import {removeNull} from '@kozakl/utils/array';
import React from 'react';
import style from './RichTextArea.pcss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const RichTextArea:FunctionComponent<Props> = (props)=>
{
    const richTextAreaClass = classNames(
        style.richTextArea,
        props.className
    );
    const borderClass = classNames(
        style.border,
        props.error && style.error
    );
    return (
        <div
            className={richTextAreaClass}
            id={props.id}>
            <div className={style.container}>
                <Editor
                    editorState={props.state}
                    placeholder={props.placeholder}
                    onEditorStateChange={props.onChange}
                    toolbar={{
                        options: removeNull([
                            'inline',
                            'history',
                            props.list && 'list'
                        ]),
                        inline: {
                            options: ['bold', 'italic', 'underline']
                        }
                    }}/>
            </div>
            <div className={borderClass}/>
            {props.error &&
                <div className={style.error}>
                    {props.error}
                </div>}
        </div>
    );
};

interface Props {
    className?:string;
    id:string;
    state?:EditorState;
    placeholder?:string;
    error?:string;
    list?:boolean;
    onChange?:(state:EditorState)=> void;
}

export default RichTextArea;
