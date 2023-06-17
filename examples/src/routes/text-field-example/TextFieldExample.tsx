import {TextField} from "@kozakl/components/text-field";
import {useTextField} from '@kozakl/hooks';
import {Layout} from '../../components/layout';
import style from './TextFieldExample.module.css';

const TextFieldExample = ()=> {
    const textField1 = useTextField(),
          textField2 = useTextField(),
          textField3 = useTextField(),
          textField4 = useTextField(),
          textField5 = useTextField(),
          textField6 = useTextField(),
          textField7 = useTextField(),
          textField8 = useTextField();
    return (
        <Layout title="Text Field - React Components">
            <div className={style.textFieldExample}>
                <TextField
                    {...textField1}/>
                <br/>
                
                <TextField
                    placeholder="Placeholder"
                    {...textField2}/>
                <br/>
                
                <TextField
                    placeholder="Placeholder"
                    opened
                    {...textField3}/>
                <br/>
                
                <TextField
                    placeholder="Placeholder"
                    openable={false}
                    {...textField4}/>
                <br/>
                
                <TextField
                    outlined
                    {...textField5}/>
                <br/>
                
                <TextField
                    placeholder="Placeholder"
                    outlined
                    {...textField6}/>
                <br/>
                
                <TextField
                    placeholder="Placeholder"
                    opened
                    outlined
                    {...textField7}/>
                <br/>
                
                <TextField
                    placeholder="Placeholder"
                    openable={false}
                    outlined
                    {...textField8}/>
            </div>
        </Layout>
    );
};

export default TextFieldExample;
