import {ReactElement, ReactNode, useState} from 'react';
import {Url} from 'next/dist/shared/lib/router/router';
import {ParsedUrlQuery, ParsedUrlQueryInput} from 'querystring';
import {CaretUp, CaretDown,
        CaretsOppositeV} from '../icons';
import {Loading} from '../loading';
import {Paginate} from '../paginate';
import {useMatchMedia} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import style from './DataTable.module.css';
import React from 'react';

const DataTable = (props:Props)=> {
    const [mobile, setMobile] = useState<boolean>(null);
    
    useMatchMedia((event)=> {
        setMobile(event.matches);
    }, '(max-width: 1023px)');
    
    function renderTabs() {
        return (
            <nav
                className={classNames(
                    style.tabs,
                    +props.router.query.deleted &&
                        style.disabled,
                    props.router.query.search &&
                        style.disabled
                )}>
                {props.tabs.map((tab)=>
                    <span
                        className={classNames(
                            style.tab,
                            tab.active &&
                                style.active
                        )}
                        key={tab.name}
                        onClick={()=>
                            props.router.push({
                                query: {
                                    ...props.router.query,
                                    ...tab.query
                                }
                            }, null, {shallow: true})}>
                        {tab.name}
                    </span>)}
            </nav>
        );
    }
    
    return (
        <div
            className={classNames(
                style.dataTable,
                props.className
            )}>
            {!props.hideResults &&
                props.queryData &&
                    <div className={style.results}>
                        {props.queryData.paging.total} results
                    </div>}
            {mobile ?
                <>
                    {props.tabs &&
                        renderTabs()}
                    <ul className={style.list}>
                        {props.queryData &&
                            props.queryData.data.map(props.renderItem)}
                    </ul>
                </> :
                <>
                    {!props.hideTableHead &&
                        <div className={style.tableHeadContainer}>
                            {props.tabs &&
                                renderTabs()}
                            <table className={style.tableHead}>
                                <thead>
                                    <tr>
                                        {props.columns.map((column)=>
                                            column.deletedMode == !!+props.router.query.deleted &&
                                                <th
                                                    key={column.name?.toString() +
                                                        column.sort + column.width}
                                                    style={{
                                                        pointerEvents: column.sort ?
                                                            'auto' : 'none',
                                                        width: column.width
                                                    }}>
                                                    <span
                                                        className={style.column}
                                                        onClick={()=>
                                                            props.router.push({
                                                                query: {
                                                                    ...props.router.query,
                                                                    sort: column.sort,
                                                                    sortType: props.router.query.sortType ==  'desc' ?
                                                                        'asc' : 'desc',
                                                                    page: 0
                                                                }
                                                            }, null, {shallow: true})}>
                                                        {column.name}
                                                        <span>
                                                            {props.router.query.sort == column.sort ?
                                                                props.router.query.sortType == 'desc' ?
                                                                    <CaretUp
                                                                        margin="-0.3125em"
                                                                        width="1.25em"/> :
                                                                    <CaretDown
                                                                        margin="-0.3125em"
                                                                        width="1.25em"/> :
                                                                column.sort &&
                                                                    <CaretsOppositeV
                                                                        margin="-0.3125em"
                                                                        width="1.25em"/>}
                                                        </span>
                                                    </span>
                                                </th>)}
                                    </tr>
                                </thead>
                            </table>
                        </div>}
                    {props.queryData &&
                        <div className={style.tableBodyContainer}>
                            {!!props.queryData.data.length ?
                                <table className={style.tableBody}>
                                    <tbody>
                                        <tr>
                                            {props.columns.map((column)=>
                                                column.deletedMode == !!+props.router.query.deleted && 
                                                <td
                                                    key={column.name?.toString() +
                                                        column.sort + column.width}
                                                    style={{
                                                        visibility: 'hidden',
                                                        width: column.width
                                                    }}/>)}
                                        </tr>
                                        {props.queryData &&
                                            props.queryData.data.map(props.renderRow)}
                                    </tbody>
                                </table> : 
                                <div className={style.noResult}>
                                    No Result
                                </div>}
                        </div>}
                </>}
            {!props.hidePaginate &&
                props.queryData &&
                !!props.queryData.data.length &&
                    <Paginate
                        className={style.paginate}
                        total={props.queryData?.paging.pages || 1}
                        current={+props.router.query.page || 0}
                        onChange={(item)=> {
                            window.scrollTo({top: 0, behavior: 'smooth'});
                            props.router.push({
                                query: {
                                    ...props.router.query,
                                    page: item.selected
                                }
                            }, null, {shallow: true});
                        }}/>}
            {props.loading &&
                <div className={style.loadingContainer}>
                    <Loading className={style.loading}/>
                </div>}
        </div>
    );
};

interface Props {
    className?:string;
    router: {
        query:ParsedUrlQuery;
        push:(url:Url, as?:Url, options?:{})=> void;
    },
    tabs?: {
        name:string;
        active:boolean;
        query:ParsedUrlQueryInput;
    }[],
    columns: {
        name?:string | ReactElement;
        sort?:string;
        width:string;
        deletedMode:boolean;
    }[],
    queryData: {
        data?: {
            id?:number;
            deleted?:boolean;
        }[],
        paging?: {
            total:number;
            page:number;
            pages:number;
        }
    },
    loading?:boolean;
    hideResults?:boolean;
    hideTableHead?:boolean;
    hidePaginate?:boolean;
    renderItem:(element: {
        id?:number;
        deleted?:boolean;
    }, index?:number)=> ReactNode;
    renderRow:(element: {
        id?:number;
        deleted?:boolean;
    }, index?:number)=> ReactNode;
}

export default DataTable;
