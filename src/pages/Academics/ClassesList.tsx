import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import Badge from "../../components/ui/badge/Badge";
import { PencilIcon, TrashBinIcon } from "../../icons";

interface ClassData {
    id: number;
    className: string;
    section: string;
    classTeacher: string;
    totalStudents: number;
}

const classesData: ClassData[] = [
    { id: 1, className: "Class 1", section: "A", classTeacher: "Mrs. Smith", totalStudents: 30 },
    { id: 2, className: "Class 1", section: "B", classTeacher: "Ms. Jones", totalStudents: 28 },
    { id: 3, className: "Class 2", section: "A", classTeacher: "Mr. Brown", totalStudents: 32 },
    { id: 4, className: "Class 10", section: "A", classTeacher: "Mr. Anderson", totalStudents: 35 },
];

export default function ClassesList() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Classes & Sections
                </h2>
                <button
                    className="rounded bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
                >
                    + Add Class
                </button>
            </div>

            <div className="max-w-full overflow-x-auto">
                <Table>
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Class Name</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Section</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Class Teacher</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Total Students</TableCell>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Action</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {classesData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="px-5 py-3 text-gray-800 dark:text-white/90">{item.className}</TableCell>
                                <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">
                                    <Badge color="light">{item.section}</Badge>
                                </TableCell>
                                <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">{item.classTeacher}</TableCell>
                                <TableCell className="px-5 py-3 text-gray-500 dark:text-gray-400">{item.totalStudents}</TableCell>
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
