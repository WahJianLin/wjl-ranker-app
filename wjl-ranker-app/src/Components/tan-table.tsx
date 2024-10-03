import {
  flexRender,
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  AccessorKeyColumnDef,
} from "@tanstack/react-table";
import React from "react";

function TanTable(props: ITanTableProps) {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];
  const table = useReactTable({
    data: dummyData, // need endpoint that gets entry rows. This means I need name of row (ex: tft) followed by scores
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(columns);
  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  );
}

interface ITanTableProps {
  readonly columns: AccessorKeyColumnDef<any, any>[];
}

type Person = {
  readonly firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const dummyData = [
  {
    rankingItemName: "TFT",
    1: 2,
  },
];

const defaultData: Person[] = [
  // {
  //   firstName: 'tanner',
  //   lastName: 'linsley',
  //   age: 24,
  //   visits: 100,
  //   status: 'In Relationship',
  //   progress: 50,
  // },
  // {
  //   firstName: 'tandy',
  //   lastName: 'miller',
  //   age: 40,
  //   visits: 40,
  //   status: 'Single',
  //   progress: 80,
  // },
  // {
  //   firstName: 'joe',
  //   lastName: 'dirte',
  //   age: 45,
  //   visits: 20,
  //   status: 'Complicated',
  //   progress: 10,
  // },
];

const columnHelper = createColumnHelper<any>();

const columns: AccessorKeyColumnDef<any, any>[] = [
  columnHelper.accessor("firstName", {
    header: "First Naasdfasdme",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

export default TanTable;
