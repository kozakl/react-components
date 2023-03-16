import {Button} from '@kozakl/components/button';
import {Layout} from '../../components/layout';
import style from './Button.module.css';

const ButtonExample = ()=> {
    return (
        <Layout title="Button - React Components">
            <div className={style.buttonExample}>
                <Button small>
                    Small Button
                </Button>
                <br/>
                <br/>
                <Button>
                    Normal Button
                </Button>
                <br/>
                <br/>
                <Button secondary>
                    Secondary Button
                </Button>
                <br/>
                <br/>
                <Button tertiary>
                    Tertiary Button
                </Button>
                <br/>
                <br/>
                <Button disabled>
                    Disabled Button
                </Button>
            </div>
        </Layout>
    );
};

export default ButtonExample;
