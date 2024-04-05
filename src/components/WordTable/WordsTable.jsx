import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectWords } from '../../redux/selectors';
import { fetchOwnWords } from '../../redux/words/operations';
import { useTable } from 'react-table';
import {
    FlagIcon,
  HeadRow,
  IconContainer,
  TableBody,
  TableHead,
  TableRow,
  TableStyle,
  WordsTableContainer,
} from './WordsTable.styled';
import sprite from '../../icons/sprites.svg';

export const WordsTable = () => {
  const words = useSelector(selectWords);
  const dispatch = useDispatch();

  const IconUk = ({ text }) => (
    <IconContainer>
      <span>{text}</span> 
      <FlagIcon>
        <use href={`${sprite}#icon-uk`}>z</use>
      </FlagIcon>
    </IconContainer>
  );

  const IconUa = ({ text }) => (
    <IconContainer>
      <span>{text}</span> 
      <FlagIcon>
        <use href={`${sprite}#icon-ua`}>z</use>
      </FlagIcon>
    </IconContainer>
  );

  useEffect(() => {
    dispatch(fetchOwnWords());
  }, [dispatch]);

  const columns = React.useMemo(
    () => [
      {
        Header: () => <IconUk text="Word" />,
        accessor: 'en',
        width: 82,
      },
      {
        Header:  () => <IconUa text='Translation'/>,
        accessor: 'ua',
        width: 116,
      },
      {
        Header: 'Progress',
        accessor: 'progress',
        width: 95,
      },
      {
        Header: '',
        accessor: 'actions',
        Cell: () => <button>Add</button>,
        width: 50,
      },
    ],
    []
  );

  const data = React.useMemo(() => words || [], [words]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <WordsTableContainer>
      <TableStyle {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <HeadRow {...column.getHeaderProps()} width={column.width}>
                  {column.render('Header')}
                </HeadRow>
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
                  <TableRow {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableRow>
                ))}
              </tr>
            );
          })}
        </TableBody>
      </TableStyle>
    </WordsTableContainer>
  );
};
