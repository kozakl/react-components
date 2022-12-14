import {default as ReactPaginate} from 'react-paginate';
import {classNames} from '@kozakl/utils';
import {ChevronLeft, ChevronRight} from '../icons';
import {IconButton} from '../icon-button';
import {useTheme} from '../theme';
import React from 'react';
import style from './Paginate.module.css';

const Paginate = (props:Props)=> {
    const theme = useTheme('paginate');
    return (
        <ReactPaginate
            containerClassName={classNames(
                style.paginate,
                theme.paginate,
                props.className
            )}
            pageClassName={theme.page}
            activeClassName={theme.active}
            previousClassName={theme.prev}
            nextClassName={theme.next}
            pageCount={props.total}
            forcePage={props.current}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            previousLabel={
                <IconButton
                    title="Prev page"
                    disabled={
                        props.total <= 1 ||
                        props.current <= 0}>
                    <ChevronLeft/>
                </IconButton>}
            nextLabel={
                <IconButton
                    title="Next page"
                    disabled={
                        props.total <= 1 ||
                        props.current >= props.total - 1}>
                    <ChevronRight/>
                </IconButton>}
            hrefBuilder={props.hrefBuilder}
            onPageChange={props.onChange}/>
    );
};

interface Props {
    className?:string;
    total:number;
    current:number;
    hrefBuilder?: (
        pageIndex: number,
        pageCount: number,
        selectedPage: number
    )=> void;
    onChange?:(selectedItem:{selected:number})=> void;
}

export default Paginate;
