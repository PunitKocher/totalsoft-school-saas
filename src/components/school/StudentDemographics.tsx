import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface StudentDemographicsState {
    series: number[];
}

const options: ApexOptions = {
    chart: {
        type: 'donut',
    },
    colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
    labels: ['Boys', 'Girls'],
    legend: {
        show: true,
        position: 'bottom',
    },
    plotOptions: {
        pie: {
            donut: {
                size: '65%',
                background: 'transparent',
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
};

const StudentDemographics: React.FC = () => {
    const [state, setState] = useState<StudentDemographicsState>({
        series: [65, 34],
    });

    return (
        <div className="col-span-12 rounded-xl border border-gray-200 bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-gray-800 dark:bg-white/[0.03] sm:px-7.5 xl:col-span-4">
            <div className="mb-3 justify-between gap-4 sm:flex">
                <div>
                    <h5 className="text-xl font-semibold text-black dark:text-white">
                        Student Demographics
                    </h5>
                </div>
            </div>
            <div className="mb-2">
                <div id="demographicsChart" className="mx-auto flex justify-center">
                    <ReactApexChart
                        options={options}
                        series={state.series}
                        type="donut"
                    />
                </div>
            </div>
        </div>
    );
};

export default StudentDemographics;
