import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function AttendanceChart() {
    const options: ApexOptions = {
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "left",
        },
        colors: ["#22ad5c", "#1a7cff"], // Green for Staff, Blue for Students
        chart: {
            fontFamily: "Outfit, sans-serif",
            height: 310,
            type: "area",
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "smooth",
            width: [2, 2],
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
            },
        },
        markers: {
            size: 0,
        },
        grid: {
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: true,
            x: {
                format: "dd MMM yyyy",
            },
        },
        xaxis: {
            type: "category",
            categories: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            title: {
                text: "Attendance (%)",
            },
        },
    };

    const series = [
        {
            name: "Staff",
            data: [95, 98, 92, 96, 94, 85],
        },
        {
            name: "Students",
            data: [90, 92, 88, 91, 89, 70],
        },
    ];

    return (
        <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
            <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
                <div className="w-full">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                        Attendance Overview
                    </h3>
                    <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                        Weekly attendance trends for Staff and Students
                    </p>
                </div>
            </div>

            <div className="max-w-full overflow-x-auto custom-scrollbar">
                <div className="min-w-[1000px] xl:min-w-full">
                    <Chart options={options} series={series} type="area" height={310} />
                </div>
            </div>
        </div>
    );
}
