import {default as ReactPaginate} from 'react-paginate';
import {classNames} from '@kozakl/utils';
import {ChevronLeft, ChevronRight} from '../icons';
import {IconButton} from '../icon-button';
import React from 'react';
import style from './Paginate.module.css';

const Paginate = (props:Props)=>
{
    const paginateClass = classNames(
        style.paginate,
        props.className
    );
    return (
        <ReactPaginate
            containerClassName={paginateClass}
            pageClassName={style.page}
            activeClassName={style.active}
            previousClassName={style.prev}
            nextClassName={style.next}
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
                    <ChevronLeft
                        padding="0.25em"
                        width="1.5em"/>
                </IconButton>}
            nextLabel={
                <IconButton
                    title="Next page"
                    disabled={
                        props.total <= 1 ||
                        props.current >= props.total - 1}>
                    <ChevronRight
                        padding="0.25em"
                        width="1.5em"/>
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
