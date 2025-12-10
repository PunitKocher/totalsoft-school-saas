import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import { PencilIcon, TrashBinIcon } from "../../icons";

interface Subject {
    id: number;
    name: string;
    code: string;
    type: "Theory" | "Practical";
}

const subjectsData: Subject[] = [
    { id: 1, name: "Mathematics", code: "MATH101", type: "Theory" },
    { id: 2, name: "Science", code: "SCI101", type: "Theory" },
    { id: 3, name: "English", code: "ENG101", type: "Theory" },
    { id: 4, name: "Physics Lab", code: "PHYLAB", type: "Practical" },
    { id: 5, name: "History", code: "HIST101", type: "Theory" },
];

export default function SubjectsList() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Subjects
                </h2>
                <button
                    className="rounded bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
                >
                    + Add Subject
                </button>
            </div>

            <div className="max-w-full overflow-x-auto">
                <Table>
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Subject Name</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Subject Code</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Type</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Action</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {subjectsData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="px-5 py-3 text-gray-800 dark:text-white/90">{item.name}</TableCell>
                                <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">{item.code}</TableCell>
                                <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">{item.type}</TableCell>
                                <TableCell className="px-5 py-3">
                                    <div className="flex items-center gap-2">
                                        <button className="text-gray-500 hover:text-brand-500">
                                            <PencilIcon className="size-4" />
                                        </button>
                                        <button className="text-gray-500 hover:text-error-500">
                                            <TrashBinIcon className="size-4" />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
