import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import Badge from "../../components/ui/badge/Badge";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon, PlusIcon } from "../../icons"; // Assuming SearchIcon exists or I'll use a similar one
// Checking icons/index.ts in memory: SearchIcon might not be there, 'EyeIcon' etc are there.
// I will check index.ts to see if there is a search icon.
// Result from previous step 49: No explicit "SearchIcon". But there is "EyeIcon".
// I will check if there is a search icon in the file list from step 45.
// Step 45 list: no "search.svg".
// I will use "GridIcon" as placeholder or just text "Search".
// Actually, I can use "EyeIcon" for view, and maybe add a "Search" button.
// Wait, standard tailadmin usually has a search bar in header.
// I'll add a simple input field.

// Re-checking imports.
import { EyeIcon, PencilIcon, TrashBinIcon } from "../../icons";
import { useNavigate } from "react-router";

interface Student {
    id: number;
    name: string;
    rollNo: string;
    class: string;
    section: string;
    parentName: string;
    contact: string;
    status: "Active" | "Inactive";
}

const studentsData: Student[] = [
    {
        id: 1,
        name: "John Doe",
        rollNo: "101",
        class: "10",
        section: "A",
        parentName: "Michael Doe",
        contact: "+1 234 567 890",
        status: "Active",
    },
    {
        id: 2,
        name: "Jane Smith",
        rollNo: "102",
        class: "10",
        section: "B",
        parentName: "Sarah Smith",
        contact: "+1 987 654 321",
        status: "Active",
    },
    // Adding more dummy data for pagination testing
    { id: 3, name: "Robert Brown", rollNo: "103", class: "9", section: "A", parentName: "James Brown", contact: "+1 555 123 456", status: "Inactive" },
    { id: 4, name: "Alice Johnson", rollNo: "104", class: "8", section: "A", parentName: "David Johnson", contact: "+1 444 789 012", status: "Active" },
    { id: 5, name: "Charlie Wilson", rollNo: "105", class: "10", section: "A", parentName: "Emma Wilson", contact: "+1 333 456 789", status: "Active" },
    { id: 6, name: "David Lee", rollNo: "106", class: "9", section: "B", parentName: "Chris Lee", contact: "+1 222 333 444", status: "Active" },
    { id: 7, name: "Eva Garcia", rollNo: "107", class: "8", section: "B", parentName: "Maria Garcia", contact: "+1 111 222 333", status: "Inactive" },
    { id: 8, name: "Frank White", rollNo: "108", class: "10", section: "C", parentName: "Tom White", contact: "+1 999 888 777", status: "Active" },
    { id: 9, name: "Grace Hall", rollNo: "109", class: "7", section: "A", parentName: "Peter Hall", contact: "+1 888 777 666", status: "Active" },
    { id: 10, name: "Henry Young", rollNo: "110", class: "7", section: "B", parentName: "Lisa Young", contact: "+1 777 666 555", status: "Active" },
    { id: 11, name: "Ivy King", rollNo: "111", class: "10", section: "A", parentName: "Steven King", contact: "+1 666 555 444", status: "Active" },
];

export default function StudentsList() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 5;

    // Filter logic
    const filteredStudents = studentsData.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo.includes(searchTerm) ||
        student.class.includes(searchTerm)
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentStudents = filteredStudents.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    All Students
                </h2>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search by Name, Roll No..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); // Reset to first page on search
                        }}
                        className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                    <button
                        onClick={() => navigate("/students/admission")}
                        className="flex items-center gap-2 rounded bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
                    >
                        {/* <PlusIcon className="h-4 w-4" /> */}
                        <span>+ Add Student</span>
                    </button>
                </div>
            </div>

            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1102px]">
                    <Table>
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Student Name
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Roll No
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Class
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Parent Name
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Contact
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Status
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                            {currentStudents.length > 0 ? (
                                currentStudents.map((student) => (
                                    <TableRow key={student.id}>
                                        <TableCell className="px-5 py-4 sm:px-6 text-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold dark:bg-gray-800 dark:text-gray-300">
                                                    {student.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                        {student.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {student.rollNo}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {student.class} - {student.section}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {student.parentName}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {student.contact}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-start">
                                            <Badge
                                                size="sm"
                                                color={student.status === "Active" ? "success" : "error"}
                                            >
                                                {student.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
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
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell className="px-5 py-4 text-center" >
                                        No students found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 px-4 py-4 dark:border-gray-800 sm:flex-row">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredStudents.length)} of {filteredStudents.length} entries
                </span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center rounded p-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-800"
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`flex h-8 w-8 items-center justify-center rounded ${currentPage === page
                                    ? "bg-brand-500 text-white"
                                    : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center rounded p-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-800"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
