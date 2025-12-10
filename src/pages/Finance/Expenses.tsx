import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import Badge from "../../components/ui/badge/Badge";

interface Expense {
    id: number;
    title: string;
    category: string;
    amount: string;
    date: string;
    status: "Approved" | "Pending";
}

const expenseData: Expense[] = [
    { id: 1, title: "Staff Salary - February", category: "Salary", amount: "$15,000", date: "2024-02-28", status: "Approved" },
    { id: 2, title: "Lab Equipment", category: "Infrastructure", amount: "$2,500", date: "2024-03-05", status: "Pending" },
    { id: 3, title: "Electricity Bill", category: "Utilities", amount: "$450", date: "2024-03-01", status: "Approved" },
];

export default function Expenses() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Expenses
                </h2>
                <button
                    className="rounded bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
                >
                    + Add Expense
                </button>
            </div>

            <div className="max-w-full overflow-x-auto">
                <Table>
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Title</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Category</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Amount</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Date</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Status</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {expenseData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="px-5 py-3 text-gray-800 dark:text-white/90">{item.title}</TableCell>
                                <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">{item.category}</TableCell>
                                <TableCell className="px-5 py-3 font-medium text-gray-800 dark:text-white/90">{item.amount}</TableCell>
                                <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">{item.date}</TableCell>
                                <TableCell className="px-5 py-3">
                                    <Badge
                                        size="sm"
                                        color={item.status === "Approved" ? "success" : "warning"}
                                    >
                                        {item.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
