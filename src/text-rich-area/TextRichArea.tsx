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

const TextRichArea = (props:Props)=>
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
                    stripPastedStyles
                    toolbar={{
                        options: [
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
                        inline: {
                            options: [
                                'bold',
                                'italic',
                                'underline',
                                'strikethrough',
                                'monospace',
                                'superscript',
                                'subscript'
                            ]
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
    onChange?:(state:EditorState)=> void;
}

export default TextRichArea;
