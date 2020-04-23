import {FormEvent, FunctionComponent} from 'react';
import {Button, FormFeedback,
        Input, InputGroup} from 'reactstrap';
import {useSelect, useTextField} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {isFill} from '@kozakl/utils/validate';
import React from 'react';
import style from './Window.pcss';

const Window:FunctionComponent<Props> = (props)=>
{
    const category1 = useSelect(0),
          category2 = useSelect(0),
          desc = useTextField('');
    
    function onSubmit(event:FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
        if (validateForm()) {
            props.onAdd();
        }
    }
    
    function validateForm()
    {
        let validate = true;
        if (!isFill(desc.value)) {
            validate = false;
            desc.setError('Fill description');
        } else {
            desc.setError(null);
        }
        
        return validate;
    }
    
    const windowClass = classNames(
        style.window,
        props.className
    );
    return (
        <div className={windowClass}>
            <h5 className={style.title}>Window1</h5>
            
            <form className={style.form} onSubmit={onSubmit}>
                <label className={style.label} htmlFor="category1">Category1</label>
                <Input
                    className={style.category1}
                    value={category1.value}
                    onChange={category1.onChange}
                    id="category1"
                    type="select">
                    {props.categories1.map((category, index)=>
                        <option value={index} key={category}>
                            {category}
                        </option>)}
                </Input>
                
                <label className={style.label} htmlFor="category2">Category2</label>
                <Input
                    className={style.category2}
                    value={category2.value}
                    onChange={category2.onChange}
                    id="category2"
                    type="select">
                    {props.categories2.map((category, index)=>
                        <option value={index} key={category}>
                            {category}
                        </option>)}
                </Input>
                
                <label className={style.label} htmlFor="desc">Description</label>
                <InputGroup className={style.desc}>
                    <Input
                        value={desc.value}
                        invalid={!!desc.error}
                        onChange={desc.onChange}
                        id="desc"
                        type="textarea"
                        bsSize="sm"/>
                    <FormFeedback>
                        {desc.error}
                    </FormFeedback>
                </InputGroup>
                
                <div className={style.actions}>
                    <Button onClick={props.onCancel} size="sm" outline>
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        color="success"
                        size="sm">
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
};

Window.defaultProps = {
    categories1: [
        'Category1-1', 'Category1-2', 'Category1-3', 'Category1-4'
    ],
    categories2: [
        'Category2-1', 'Category2-2', 'Category2-3', 'Category2-4'
    ]
};

interface Props {
    className?:string;
    categories1?:string[];
    categories2?:string[];
    onAdd:()=> void;
    onCancel:()=> void;
}

export default Window;
