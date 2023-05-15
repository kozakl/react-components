import {PropsWithChildren, useState} from 'react';
import {Range as RangeCore} from 'react-range';
import {classNames} from '@kozakl/utils';
import {useTheme} from '../theme';
import React from 'react';

export const Range = (props:Props)=> {
    const theme = useTheme('range');
    const [values, setValues] = useState(props.values);
    
    return (
        <div
            className={classNames(
                theme.range,
                props.className
            )}>
            <RangeCore
                values={values}
                step={props.step}
                min={props.min}
                max={props.max}
                disabled={props.disabled}
                onChange={(values)=> {
                    setValues(values);
                    if (props.onChange) {
                        props.onChange(values);
                    }
                }}
                onFinalChange={(values)=> {
                    setValues(values);
                    if (props.onFinalChange) {
                        props.onFinalChange(values);
                    }
                }}
                renderTrack={({props, children})=> (
                    <div
                        className={theme.trackContainer}
                        onTouchStart={props.onTouchStart}
                        onMouseDown={props.onMouseDown}>
                        <div
                            className={theme.track}
                            ref={props.ref}>
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({props})=>
                    <div
                        className={theme.thumb}
                        {...props}
                        style={{
                            ...props.style
                        }}/>}
            />
        </div>
    );
};

Range.defaultProps = {
    step: 1
};

interface Props extends PropsWithChildren<{}> {
    className?:string;
    values:number[];
    step?:number;
    min:number;
    max:number;
    disabled?:boolean;
    onChange?:(values:number[])=> void;
    onFinalChange?:(values:number[])=> void;
}

export default Range;
