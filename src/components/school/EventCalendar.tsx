import React from 'react';
import { ChevronRightIcon } from '../../icons';

const events = [
    {
        id: 1,
        title: 'Annual Sports Day',
        date: '15 Aug',
        time: '09:00 AM - 04:00 PM',
        type: 'Holiday',
        color: 'bg-brand-500',
    },
    {
        id: 2,
        title: 'Parent Teacher Meeting',
        date: '20 Aug',
        time: '10:00 AM - 01:00 PM',
        type: 'Meeting',
        color: 'bg-success-500',
    },
    {
        id: 3,
        title: 'Science Exhibition',
        date: '05 Sep',
        time: '11:00 AM - 03:00 PM',
        type: 'Event',
        color: 'bg-warning-500',
    },
];

const EventCalendar: React.FC = () => {
    return (
        <div className="col-span-12 rounded-xl border border-gray-200 bg-white py-6 shadow-default dark:border-gray-800 dark:bg-white/[0.03] xl:col-span-4">
            <div className="mb-6 flex items-center justify-between px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Upcoming Events
                </h4>
                <button className="text-primary hover:text-opacity-90">
                    View All
                </button>
            </div>

            <div className="flex flex-col gap-6 px-7.5">
                {events.map((event) => (
                    <div key={event.id} className="flex items-center gap-5">
                        <div className={`flex h-15 w-15 flex-col items-center justify-center rounded-lg ${event.color} bg-opacity-10 text-brand-600 dark:bg-opacity-20`}>
                            <span className="text-sm font-semibold">{event.date.split(' ')[0]}</span>
                            <span className="text-xs font-medium">{event.date.split(' ')[1]}</span>
                        </div>
                        <div className="flex-1">
                            <h5 className="font-medium text-black dark:text-white">
                                {event.title}
                            </h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {event.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;
