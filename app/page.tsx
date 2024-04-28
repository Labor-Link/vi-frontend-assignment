import * as React from "react";
import { useState } from "react"; // Import useState hook
import { DataTable } from "./_components/data_table";
import { useDataFetching } from "./_hooks/useDataFetching";

export default function HomePage() {
    const { data, columns } = useDataFetching();

    // Task: Create the feature for selecting rows in DataTable
    const [selectedRows, setSelectedRows] = useState<string[]>([]); // State to store selected row IDs

    const handleRowSelection = (rowId: string) => {
        if (selectedRows.includes(rowId)) {
            setSelectedRows(selectedRows.filter((id) => id !== rowId)); // Deselect row if already selected
        } else {
            setSelectedRows([...selectedRows, rowId]); // Select row if not selected
        }
    };

    return (
        <div className="flex flex-col gap-10 items-center p-10">
            <span className="text-3xl text-gray-700 font-bold">Task Details</span>
            <div className="max-w-screen-lg flex size-full flex-col">
                <DataTable
                    columns={columns}
                    data={data}
                    selectedRows={selectedRows} // Pass selectedRows as prop to DataTable
                    onRowSelect={handleRowSelection} // Pass handleRowSelection as prop to DataTable
                />
            </div>
        </div>
    );
}
