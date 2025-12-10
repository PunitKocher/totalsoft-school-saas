import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import Badge from "../../components/ui/badge/Badge";
import { DollarLineIcon } from "../../icons";

interface FeeRecord {
    id: number;
    studentName: string;
    rollNo: string;
    class: string;
    amount: string;
    dueDate: string;
    status: "Paid" | "Pending" | "Overdue";
}

const feeData: FeeRecord[] = [
    { id: 1, studentName: "John Doe", rollNo: "101", class: "10 A", amount: "$500", dueDate: "2024-03-01", status: "Paid" },
    { id: 2, studentName: "Jane Smith", rollNo: "102", class: "10 B", amount: "$500", dueDate: "2024-03-10", status: "Pending" },
    { id: 3, studentName: "Robert Brown", rollNo: "103", class: "9 A", amount: "$450", dueDate: "2024-02-28", status: "Overdue" },
];

export default function FeeCollection() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Fee Collection
                </h2>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 rounded bg-success-500 px-4 py-2 text-sm font-medium text-white hover:bg-success-600">
                        <DollarLineIcon className="size-4" />
                        Collect Fee
                    </button>
                </div>
            </div>

            <div className="max-w-full overflow-x-auto">
                <Table>
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Student Name</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Class</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Amount</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Due Date</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Status</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Action</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {feeData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="px-5 py-3 text-gray-800 dark:text-white/90">
                                    <div>
                                        <span className="block font-medium">{item.studentName}</span>
                                        <span className="text-xs text-gray-500">{item.rollNo}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">{item.class}</TableCell>
                                <TableCell className="px-5 py-3 font-medium text-gray-800 dark:text-white/90">{item.amount}</TableCell>
                                <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">{item.dueDate}</TableCell>
                                <TableCell className="px-5 py-3">
                                    <Badge
                                        size="sm"
                                        color={item.status === "Paid" ? "success" : item.status === "Pending" ? "warning" : "error"}
                                    >
                                        {item.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="px-5 py-3">
                                    <button className="text-brand-500 hover:text-brand-600 font-medium text-sm">
                                        View Invoice
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
