import {default as dynamic} from 'next/dynamic'
import {EditorProps, EditorState} from 'react-draft-wysiwyg'
import {classNames} from '@kozakl/utils';
import React from 'react';
import style from './TextRichArea.module.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic<EditorProps>(()=>
    import('react-draft-wysiwyg')
        .then((module)=>
            module.Editor),
    {ssr: false}
);

const TextRichArea = (props:Props)=> {
    const toolbarDefault = {
        options: [
            'inline',
            'fontSize',
            'colorPicker',
            'link',
            'remove'
        ],
        inline: {
            options: [
                'bold',
                'italic',
                'underline',
                'strikethrough'
            ]
        }
    };
    return (
        <div
            className={classNames(
                style.textRichArea,
                props.className
            )}
            id={props.id}>
            <div
                className={classNames(
                    style.container,
                    !props.toolbar &&
                        style.hideToolbar
                )}>
                <Editor
                    editorState={props.state}
                    placeholder={props.placeholder}
                    toolbar={{...toolbarDefault, ...props.toolbar}}
                    stripPastedStyles
                    onEditorStateChange={props.onChange}/>
            </div>
            <div
                className={classNames(
                    style.border,
                    props.error && style.error
                )}/>
            {props.error &&
                <div className={style.error}>
                    {props.error}
                </div>}
        </div>
    );
};

TextRichArea.defaultProps = {
    toolbar: {}
}

interface Props {
    className?:string;
    id:string;
    state?:EditorState;
    placeholder?:string;
    toolbar?:object;
    error?:string;
    onChange?:(state:EditorState)=> void;
}

export default TextRichArea;

//https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp
