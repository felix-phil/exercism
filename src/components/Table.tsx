import React, { FC, HTMLAttributes, forwardRef } from 'react';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  fixed?: boolean;
}
export const TableContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <div className="inline-block min-w-full align-middle" {...otherProps}>
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
};
export const Table: FC<TableProps> = ({
  fixed = false,
  children,
  ...otherProps
}) => {
  return (
    <table
      className={`z-1 ${fixed ? 'table-auto' : 'table-fixed'} ${
        otherProps.className
      }`}
      {...otherProps}
    >
      {children}
    </table>
  );
};

export const TableHead: FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <thead {...otherProps} className="bg-gray-100 dark:bg-gray-700">
      <tr>{children}</tr>
    </thead>
  );
};
export const TableHeadColumn: FC<HTMLAttributes<HTMLTableCellElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <th scope="col" className="p-4" {...otherProps}>
      {children}
    </th>
  );
};
interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}
export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, ...otherProps }, ref) => {
    return (
      <tbody
        {...otherProps}
        className={`${otherProps.className} bg-white flex-shrik-0 divide-gray-200 overflow-x-auto max-w-full dark:bg-gray-800 dark:divide-gray-700`}
        ref={ref}
      >
        {children}
      </tbody>
    );
  }
);

export const Row: FC<HTMLAttributes<HTMLTableRowElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <tr
      {...otherProps}
      className={
        'hover:bg-exercism-active dark:hover:bg-gray-700 h-[4rem] border border-exercism-border w-full flex ' +
        otherProps.className
      }
    >
      {/* <div className=" flex flex-row justify-between w-full"> */}
      {children}
      {/* </div> */}
    </tr>
  );
};
export const Column: FC<HTMLAttributes<HTMLTableCellElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <td
      {...otherProps}
      className={`${otherProps.className} py-4 px-6 font-medium whitespace-nowrap dark:text-white`}
    >
      {children}
    </td>
  );
};
