import React from 'react';
import { UserCircleIcon } from '../../icons';

const activities = [
    {
        id: 1,
        action: 'New Admission',
        details: 'Student John Doe joined Class 10 A',
        time: '2 hours ago',
        icon: UserCircleIcon,
        color: 'bg-brand-500',
    },
    {
        id: 2,
        action: 'Fee Collected',
        details: '$500 received from Sarah Smith',
        time: '4 hours ago',
        icon: UserCircleIcon, // Placeholder, would use dollar icon
        color: 'bg-success-500',
    },
    {
        id: 3,
        action: 'New Teacher',
        details: 'Mr. Anderson joined as Math Teacher',
        time: '1 day ago',
        icon: UserCircleIcon,
        color: 'bg-warning-500',
    },
    {
        id: 4,
        action: 'Report Generated',
        details: 'Monthly attendance report available',
        time: '2 days ago',
        icon: UserCircleIcon,
        color: 'bg-brand-500',
    },
];

const RecentActivity: React.FC = () => {
    return (
        <div className="col-span-12 rounded-xl border border-gray-200 bg-white py-6 shadow-default dark:border-gray-800 dark:bg-white/[0.03] xl:col-span-4">
            <div className="mb-6 px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Recent Activity
                </h4>
            </div>

            <div className="px-7.5">
                <div className="flex flex-col gap-6">
                    {activities.map((activity, index) => (
                        <div key={activity.id} className="relative flex gap-5">
                            {index !== activities.length - 1 && (
                                <div className="absolute left-[22px] top-10 bottom-[-24px] w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                            )}
                            <div className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${activity.color} text-white`}>
                                <div className="h-3 w-3 rounded-full bg-white"></div>
                            </div>
                            <div className="flex-1">
                                <h5 className="font-medium text-black dark:text-white">
                                    {activity.action}
                                </h5>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                    {activity.details}
                                </p>
                                <span className="text-xs text-gray-400">
                                    {activity.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;
