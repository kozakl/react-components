import {
    ChangeEvent, FormEvent, FunctionComponent, useState
} from 'react';
import {Button, CustomInput, Input} from 'reactstrap';
import {isFill} from '@kozakl/utils/validate';
import React from 'react';
import style from './Window1.pcss';
import {useTextField} from "@kozakl/hooks";

const Window1:FunctionComponent<Props> = (props)=>
{
    const category1 = useSelect(1),
          category2 = useSelect(1),
          desc = useTextField('');
    
    function onSubmit(event:FormEvent<HTMLFormElement>)
    {
        event.preventDefault();
    }
    
    const enabled = isFill(desc.value);
    return (
        <div className={style.window1}>
            <h5 className={style.title}>Window1</h5>
            
            <form className={style.form} onSubmit={onSubmit}>
                <label className={style.label} htmlFor="category1">Category1</label>
                <CustomInput
                    className={style.category1}
                    value={category1.value}
                    onChange={category1.onChange}
                    id="category1"
                    type="select">
                    {props.categories1.map((category, index)=>
                        <option value={index} key={category}>
                            {category}
                        </option>)}
                </CustomInput>
                
                <label className={style.label} htmlFor="category2">Category2</label>
                <CustomInput
                    className={style.category2}
                    value={category2.value}
                    onChange={category2.onChange}
                    id="category2"
                    type="select">
                    {!category2 && <option>----</option>}
                    {props.categories2.map((category, index)=>
                        <option value={index} key={category}>
                            {category}
                        </option>)}
                </CustomInput>
                
                <label className={style.label} htmlFor="desc">Description</label>
                <Input
                    className={style.desc}
                    value={desc.value}
                    onChange={desc.onChange}
                    id="desc"
                    type="textarea"
                    bsSize="sm"/>
                
                <div className={style.actions}>
                    <Button onClick={props.onCancel} size="sm" outline>
                        Cancel
                    </Button>
                    <Button
                        disabled={!enabled}
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

Window1.defaultProps = {
    categories1: [
        'Category1-1', 'Category1-2', 'Category1-3', 'Category1-4'
    ],
    categories2: [
        'Category2-1', 'Category2-2', 'Category2-3', 'Category2-4'
    ]
};

interface Props {
    categories1?:string[];
    categories2?:string[];
    onAdd:()=> void;
    onCancel:()=> void;
}

export default Window1;

function useSelect(initialValue:number)
{
    const [value, setValue] = useState(initialValue),
          [error, setError] = useState();
    return {
        value,
        error,
        onChange: (event:ChangeEvent<HTMLInputElement>)=>
            setValue(+event.target.value),
        setError: (error:string)=> setError(error)
    }
}
