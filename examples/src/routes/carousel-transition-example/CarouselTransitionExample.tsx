import {CarouselTransition} from '@kozakl/components/carousel-transition';
import {ChevronLeft, ChevronRight} from '@kozakl/components/icons';
import {fade, moveLeft} from '@kozakl/transitions';
import {Layout} from '../../components/layout';
import style from './CarouselTransitionExample.module.css';

const CarouselTransitionExample = ()=> {
    return (
        <Layout title="Carousel Transition - React Components">
            <div className={style.carouselTransitionExample}>
                <CarouselTransition
                    className={style.carousel1}
                    transitionPrev={fade}
                    transitionNext={moveLeft}
                    iconPrev={()=>
                        <ChevronLeft
                            colorPrimary="var(--color-secondary)"
                            colorSecondary="var(--color-primary)"
                            stroke={2}
                            strokeLinecap="round"
                            outline={3}/>}
                    iconNext={()=>
                        <ChevronRight
                            colorPrimary="var(--color-secondary)"
                            colorSecondary="var(--color-primary)"
                            stroke={2}
                            strokeLinecap="round"
                            outline={3}/>}>
                    <div className={style.item}>A</div>
                    <div className={style.item}>B</div>
                    <div className={style.item}>C</div>
                </CarouselTransition>
            </div>
        </Layout>
    );
};

export default CarouselTransitionExample;
