import { useEffect, useMemo, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import { useMemo } from "react";
// import { TimeStamp } from "firebase/firestore";
import FeatureDetails from "@/components/organisms/FeatureDetails";

type UserData = {
  featureName: string;
  description: string;
  status: string;
  approved: string;
  approvedAmount: number;
  counterAmount: number;
  proposedAmount: number;
};
const columnHelper = createColumnHelper<UserData>();

const columns = [
  columnHelper.accessor("featureName", {
    header: () => "Feature",
  }),
  columnHelper.accessor("description", {
    header: () => "Description",
    cell: (info) => info.getValue().slice(0, 100),
  }),
  columnHelper.accessor("approved", {
    header: () => "Approved",
    cell: (info) => (info.getValue() === "approved" ? "approved" : "pending"),
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
  }),
];

const UserDataTable = ({ userData, heading, userRole }: any) => {
  const data = useMemo(() => userData, [userData]);
  const [individualData, setIndividualData] = useState({});
  const [updatedRecord, setUpdatedRecord] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const handleRowClick = (rowData: any) => {
    console.log("i am clicked", rowData);
    setIndividualData(rowData);
    const element = document.getElementById(
      "feature_request_update"
    ) as HTMLDialogElement;
    if (element) {
      element.showModal(); // Ensure 'element' is of type HTMLDialogElement
    }
  };
  console.log("individual data::", individualData);
  console.log("daata::", data);
  const clearModal = () => {
    document.getElementById("close")?.click();
  };
  useEffect(() => {
    clearModal();
  }, [updatedRecord]);

  return (
    <div className="col-span-12">
      <h1 className="text-xl font-semibold mb-4">{heading}</h1>
      <table className="border border-black w-full">
        <thead className="bg-blue-700 text-white">
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
            <tr
              key={row.id}
              className="hover:bg-slate-300"
              onClick={() => {
                handleRowClick(row?.original);
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border border-black p-2 text-center cursor-pointer"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <dialog id="feature_request_update" className="modal">
        <div className="modal-box  scroll-m-5">
          <FeatureDetails
            feature={individualData}
            updatedRecord={setUpdatedRecord}
            update={updatedRecord}
            userRole={userRole}
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                id="close"
              >
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
      
    </div>
  );
};
// const removeUserId = (data1) => {
//   const userDataDisplay = data1.map((obj: any) => {
//     const { userId, ...rest } = obj;
//     return rest;
//   });
//   return userDataDisplay;
// };
export default UserDataTable;
