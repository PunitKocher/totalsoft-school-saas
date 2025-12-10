import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
import Badge from "../../components/ui/badge/Badge";
import { PencilIcon, TrashBinIcon } from "../../icons";
import { useNavigate } from "react-router";

interface Teacher {
    id: number;
    name: string;
    subject: string;
    qualification: string;
    contact: string;
    salary: string;
    status: "Active" | "On Leave" | "Resigned";
}

const teachersData: Teacher[] = [
    {
        id: 1,
        name: "Mr. Robert Anderson",
        subject: "Mathematics",
        qualification: "M.Sc. Mathematics",
        contact: "+1 234 567 890",
        salary: "$4,500",
        status: "Active",
    },
    {
        id: 2,
        name: "Mrs. Sarah Thompson",
        subject: "English",
        qualification: "MA English",
        contact: "+1 987 654 321",
        salary: "$4,200",
        status: "Active",
    },
    {
        id: 3,
        name: "Mr. David Wilson",
        subject: "Science",
        qualification: "M.Sc. Physics",
        contact: "+1 555 123 456",
        salary: "$4,800",
        status: "On Leave",
    },
    {
        id: 4,
        name: "Ms. Emily Davis",
        subject: "History",
        qualification: "MA History",
        contact: "+1 444 789 012",
        salary: "$4,000",
        status: "Active",
    },
    {
        id: 5,
        name: "Mr. James White",
        subject: "Physical Education",
        qualification: "B.P.Ed",
        contact: "+1 333 456 789",
        salary: "$3,500",
        status: "Active",
    },
];

export default function TeachersList() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 5;

    // Filter logic
    const filteredTeachers = teachersData.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentTeachers = filteredTeachers.slice(startIndex, startIndex + itemsPerPage);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    All Teachers
                </h2>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search by Name, Subject..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand-500 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                    <button
                        onClick={() => navigate("/teachers/add")}
                        className="flex items-center gap-2 rounded bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
                    >
                        <span>+ Add Teacher</span>
                    </button>
                </div>
            </div>

            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1102px]">
                    <Table>
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Teacher Name
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Subject
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Qualification
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Contact
                                </TableCell>
                                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                                    Salary
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
                            {currentTeachers.length > 0 ? (
                                currentTeachers.map((teacher) => (
                                    <TableRow key={teacher.id}>
                                        <TableCell className="px-5 py-4 sm:px-6 text-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 overflow-hidden rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold dark:bg-gray-800 dark:text-gray-300">
                                                    {teacher.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                                                        {teacher.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {teacher.subject}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {teacher.qualification}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {teacher.contact}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {teacher.salary}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-start">
                                            <Badge
                                                size="sm"
                                                color={teacher.status === "Active" ? "success" : teacher.status === "On Leave" ? "warning" : "error"}
                                            >
                                                {teacher.status}
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
                                        No teachers found
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
                    Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredTeachers.length)} of {filteredTeachers.length} entries
                </span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center rounded p-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-800"
                    >
                        Previous
                    </button>
                    {/* Simplified pagination logic for brevity if needed */}
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
