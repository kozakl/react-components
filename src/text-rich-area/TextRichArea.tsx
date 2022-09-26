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
    return (
        <div
            className={classNames(
                style.textRichArea,
                props.className
            )}
            id={props.id}>
            <div className={style.container}>
                <Editor
                    editorState={props.state}
                    placeholder={props.placeholder}
                    onEditorStateChange={props.onChange}
                    stripPastedStyles
                    toolbar={{
                        options: props.toolbar == 'tiny' ? [
                            'inline',
                            'fontSize',
                            'colorPicker',
                            'link',
                            'remove',
                            'history'
                        ] : props.toolbarOptions,
                        inline: props.inlineOptions
                    }}/>
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
    toolbar: 'tiny',
    toolbarOptions: [
        'inline',
        'blockType',
        'fontSize',
        'fontFamily',
        'list',
        'textAlign',
        'colorPicker',
        'link',
        'embedded',
        'emoji',
        'image',
        'remove',
        'history'
    ],
    inlineOptions: [
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'monospace',
        'superscript',
        'subscript'
    ]
}

interface Props {
    className?:string;
    id:string;
    state?:EditorState;
    placeholder?:string;
    toolbar?:'tiny' | 'full';
    toolbarOptions?:string[];
    inlineOptions?:string[];
    error?:string;
    onChange?:(state:EditorState)=> void;
}

export default TextRichArea;
