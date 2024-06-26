import { useSelector } from 'react-redux';
import {
  selectVisibleWords,
} from '../../redux/selectors';
import { useTable } from 'react-table';
import {
  HeadRow,
  TableBody,
  TableHead,
  TableRow,
  TableStyle,
  WordsTableContainer,
} from './WordsTable.styled';
import React from 'react';

export const WordsTable = ({ onClickEditWord, columns }) => {
  const words = useSelector(selectVisibleWords);
  // const keyword = useSelector(selectSearchKeyword);

  const data = React.useMemo(
    () => (words && words.results ? words.results : []),
    [words]
  );

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
                    {cell.render('Cell', { word: row.original })}
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
