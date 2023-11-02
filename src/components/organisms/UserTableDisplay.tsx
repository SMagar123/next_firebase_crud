import { useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BiSolidUserDetail } from "react-icons/bi";
import UserDetails from "@/components/organisms/UserDetails";

type UserDetails = {
  username: string;
  email: string;
  userId: string;
  actions: any;
};

const columnHelper = createColumnHelper<UserDetails>();
const columns = [
  columnHelper.accessor("userId", {
    header: "User Id",
  }),
  columnHelper.accessor("username", {
    header: "Username",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.display({
    header: "View",
    id: "actions",
  }),
];

const UserTableDisplay = ({ allUsers }: any) => {
  const data = useMemo(() => allUsers, [allUsers]);
  const [individualUser, setIndividualUser] = useState({});

  const displayButton = (rowData: UserDetails) => {
    console.log("clicked row::", rowData);
    const element = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (element) {
      element.showModal();
    }
    setIndividualUser(rowData);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log("individual user::", individualUser);

  if (data?.length === 0) {
    return (
      <div className="col-span-12 border p-4 shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          <span className="loading loading-bars loading-lg"></span>
        </h1>
      </div>
    );
  }

  return (
    <div className="col-span-12">
      <table className="border border-black w-full">
        <thead className="bg-gray-700 text-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border border-black p-2">
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
            <tr key={row.id} className="hover:bg-slate-300">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border border-black py-4 text-center cursor-pointer font-medium"
                >
                  {cell.column.id === "actions" ? (
                    <BiSolidUserDetail
                      onClick={() => displayButton(row?.original)}
                      className="text-2xl text-gray-800 text-center w-full"
                    />
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <UserDetails userDetail={individualUser} />
        </div>
      </dialog>
    </div>
  );
};

export default UserTableDisplay;
