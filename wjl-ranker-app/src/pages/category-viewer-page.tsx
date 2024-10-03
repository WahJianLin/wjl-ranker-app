import { useParams } from "react-router-dom";
import { CategeoryApi, ICategory } from "../api/category-api";
import { useEffect, useState } from "react";
import TanTable from "../components/tan-table";
import { IUser, UserApi } from "../api/user-api";
import {
  AccessorKeyColumnDef,
  createColumnHelper,
} from "@tanstack/react-table";

function CategoryViewerPage() {
  const [state, setState] = useState<ICategoryViewerPageState>({
    categoryDetail: {} as ICategory,
    columns: [],
  });
  const { id } = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const categoryDetail: ICategory = await CategeoryApi.getCategoryById(
        parseInt(id!, 10)
      );
      const users: IUser[] = await UserApi.getAllUsers();
      setState({ categoryDetail, columns: getColumns(users) });
    }
    fetchDetails();
  }, []);

  const getColumns = (users: IUser[]): AccessorKeyColumnDef<any, any>[] => {
    const columnHelper = createColumnHelper<IUser>();
    const columnDetails: AccessorKeyColumnDef<any, any>[] = [
      columnHelper.accessor("rankingItemName" as "name", {
        header: "temp name",
        cell: (info) => info.getValue(),
      }),
    ];

    users.forEach((user: IUser) => {
      columnDetails.push(
        columnHelper.accessor(`${user.id}` as "id", {
          header: user.name,
          cell: (info) => info.getValue(),
        })
      );
    });
    return columnDetails;
  };

  return (
    <>
      <div>
        <div>{state.categoryDetail.id}</div>
        <div>{state.categoryDetail.name}</div>
        <div>{state.categoryDetail.description}</div>
      </div>
      <TanTable columns={state.columns} />
    </>
  );
}

interface ICategoryViewerPageState {
  readonly categoryDetail: ICategory;
  readonly columns: AccessorKeyColumnDef<any, any>[];
}

interface IColumnDetails extends IUser {
  // readonly
}

export default CategoryViewerPage;
