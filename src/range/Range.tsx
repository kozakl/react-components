import {PropsWithChildren, useState} from 'react';
import {Range as RangeCore} from 'react-range';
import style from './Range.module.css';

export const Range = (props:Props)=> {
    const [values, setValues] = useState(props.values);
    
    return (
        <div className={style.range}>
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
                        className={style.trackContainer}
                        onTouchStart={props.onTouchStart}
                        onMouseDown={props.onMouseDown}>
                        <div
                            className={style.track}
                            ref={props.ref}>
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({props})=> (
                    <div
                        className={style.thumb}
                        {...props}
                        style={{
                            ...props.style
                        }}
                    />
                )}
            />
        </div>
    );
};

Range.defaultProps = {
    step: 1
};

interface Props extends PropsWithChildren<{}> {
    values:number[];
    step?:number;
    min:number;
    max:number;
    disabled?:boolean;
    onChange?:(values:number[])=> void;
    onFinalChange?:(values:number[])=> void;
}

export default Range;
