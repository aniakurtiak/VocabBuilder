import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectWords } from '../../redux/selectors';
import { fetchOwnWords } from '../../redux/words/operations';
import { useTable } from 'react-table';
import { HeadRow, TableBody, TableHead, TableRow, TableStyle, WordsTableContainer } from './WordsTable.styled';

export const WordsTable = () => {
    const words = useSelector(selectWords);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOwnWords());
    }, [dispatch]);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Word',
                accessor: 'en',
            },
            {
                Header: 'Translation',
                accessor: 'ua',
            },
            {
                Header: 'Progress',
                accessor: 'progress',
            },
            // {
            //     Header: '',
            //     accessor: 'progress',
            // },
        ],
        []
    );

    const data = React.useMemo(() => words || [], [words]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <WordsTableContainer>
            <TableStyle {...getTableProps()}>
                <TableHead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <HeadRow {...column.getHeaderProps()}>{column.render('Header')}</HeadRow>
                            ))}
                        </tr>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <TableRow {...cell.getCellProps()}>{cell.render('Cell')}</TableRow>
                                ))}
                            </tr>
                        );
                    })}
                </TableBody>
            </TableStyle>
        </WordsTableContainer>
    );
};
