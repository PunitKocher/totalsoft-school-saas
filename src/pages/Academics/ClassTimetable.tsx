import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "../../components/ui/table";
// Badge import removed

export default function ClassTimetable() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const periods = ["1st Period", "2nd Period", "Break", "3rd Period", "4th Period", "5th Period"];

    return (
        <div className="rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-4">
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Class Timetable - Class 10 A
                </h2>
                <button
                    className="rounded bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
                >
                    Edit Timetable
                </button>
            </div>

            <div className="max-w-full overflow-x-auto">
                <Table>
                    <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                        <TableRow>
                            <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Day / Period</TableCell>
                            {periods.map((p, i) => (
                                <TableCell key={i} isHeader className="px-5 py-3 font-medium text-gray-500 text-start">
                                    {p}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                        {days.map((day) => (
                            <TableRow key={day}>
                                <TableCell className="px-5 py-3 font-semibold text-gray-800 dark:text-white/90">
                                    {day}
                                </TableCell>
                                {periods.map((p, i) => (
                                    <TableCell key={i} className="px-5 py-3 text-gray-500 dark:text-gray-400">
                                        {p === "Break" ? (
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">LUNCH BREAK</span>
                                        ) : (
                                            <div className="flex flex-col">
                                                <span className="font-medium text-gray-800 dark:text-white">Maths</span>
                                                <span className="text-xs">Mr. Smith</span>
                                            </div>
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
