import React from 'react';
import {default as dynamic} from 'next/dynamic'
import {EditorProps, EditorState} from 'react-draft-wysiwyg'
import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic<EditorProps>(()=>
    import('react-draft-wysiwyg')
        .then((module)=>
            module.Editor),
    {ssr: false}
);

const TextRichArea = (props:Props)=> {
    const theme = useTheme('textRichArea');
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
                theme.textRichArea,
                props.className
            )}
            id={props.id}>
            <div
                className={classNames(
                    theme.container,
                    !props.toolbar &&
                        theme.hideToolbar
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
                    theme.border,
                    props.error &&
                        theme.error
                )}/>
            {props.error &&
                <div className={theme.error}>
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

//editor doc https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp
