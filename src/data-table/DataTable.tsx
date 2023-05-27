import {ReactNode, useState} from 'react';
import {useRouter} from 'next/router';
import {ParsedUrlQueryInput} from 'querystring';
import {CaretUp, CaretDown,
        CaretsOppositeV} from '@kozakl/components/icons';
import {Loading} from '@kozakl/components/loading';
import {NavLink} from '@kozakl/components/nav-link';
import {Paginate} from '@kozakl/components/paginate';
import {useMatchMedia} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import style from './DataTable.module.css';

const DataTable = (props:Props)=> {
    const router = useRouter();
    const [mobile, setMobile] = useState<boolean>(null);
    
    useMatchMedia((event)=> {
        setMobile(event.matches);
    }, '(max-width: 1023px)');
    
    function renderTabs() {
        return (
            <nav
                className={classNames(
                    style.tabs,
                    +router.query.deleted &&
                        style.disabled,
                    router.query.search &&
                        style.disabled
                )}>
                {props.tabs.map((tab)=>
                    <NavLink
                        className={style.tab}
                        key={tab.name}
                        active={tab.active}
                        activeClass={style.active}
                        href={{
                            pathname: props.pathname,
                            query: {
                                ...router.query,
                                ...tab.query
                            }
                        }}>
                        {tab.name}
                    </NavLink>)}
            </nav>
        );
    }
    
    return (
        <div
            className={classNames(
                style.dataTable,
                props.className
            )}>
            {props.queryData &&
                <div className={style.results}>
                    {props.queryData.paging.total} results
                </div>}
            {mobile ?
                <>
                    {renderTabs()}
                    <ul className={style.list}>
                        {props.queryData &&
                            props.queryData.data.map(props.renderItem)}
                    </ul>
                </> :
                <>
                    <div className={style.tableHeadContainer}>
                        {renderTabs()}
                        <table className={style.tableHead}>
                            <thead>
                                <tr>
                                    {props.columns.map((column, index)=>
                                        column.deletedMode == !!+router.query.deleted &&
                                            <th
                                                key={column.name || index}
                                                style={{
                                                    pointerEvents: column.sort ?
                                                        'auto' : 'none',
                                                    width: column.width
                                                }}>
                                                <NavLink
                                                    className={style.column}
                                                    href={{
                                                        pathname: props.pathname,
                                                        query: {
                                                            ...router.query,
                                                            sort: column.sort,
                                                            sortType: router.query.sortType ==  'desc' ?
                                                                'asc' : 'desc',
                                                            page: 0
                                                        }
                                                    }}>
                                                    {column.name}
                                                    <span>
                                                        {router.query.sort == column.sort ?
                                                            router.query.sortType == 'desc' ?
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
                                                </NavLink>
                                            </th>)}
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className={style.tableBodyContainer}>
                        <table className={style.tableBody}>
                            <tbody>
                                <tr>
                                    {props.columns.map((column, index)=>
                                        column.deletedMode == !!+router.query.deleted && 
                                        <td
                                            key={column.name || index}
                                            style={{
                                                visibility: 'hidden',
                                                width: column.width
                                            }}/>)}
                                </tr>
                                {props.queryData &&
                                    props.queryData.data.map(props.renderRow)}
                            </tbody>
                        </table>
                    </div>
                </>}
            {props.queryData && !props.queryData.data.length &&
                <div className={style.noResult}>
                    No Result
                </div>}
            {props.queryData && !!props.queryData.data.length &&
                <Paginate
                    className={style.paginate}
                    total={props.queryData?.paging.pages || 1}
                    current={+router.query.page || 0}
                    onChange={(item)=> {
                        window.scrollTo({top: 0, behavior: 'smooth'});
                        router.push({
                            query: {
                                ...router.query,
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
    pathname:string;
    tabs: {
        name:string;
        active:boolean;
        query:ParsedUrlQueryInput;
    }[];
    columns: {
        name?:string;
        sort?:string;
        width:string;
        deletedMode:boolean;
    }[];
    queryData: {
        data?: {
            id:number;
            deleted:boolean;
        } & ReactNode[];
        paging?: {
            total:number;
            page:number;
            pages:number;
        }
    },
    loading?:boolean;
    renderItem:(element:ReactNode)=> ReactNode;
    renderRow:(element:ReactNode)=> ReactNode;
}

export default DataTable;
