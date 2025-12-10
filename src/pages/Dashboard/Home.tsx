import PageMeta from "../../components/common/PageMeta";
import SchoolStats from "../../components/school/SchoolStats";
import AttendanceChart from "../../components/school/AttendanceChart";
// RecentOrders removed
// Actually, let's just keep the imports we need.

export default function Home() {
  return (
    <>
      <PageMeta
        title="School Admin Dashboard | TailAdmin"
        description="This is the School Admin Dashboard for TailAdmin."
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6">
          <SchoolStats />
        </div>

        <div className="col-span-12 xl:col-span-8">
          <AttendanceChart />
        </div>

        <div className="col-span-12 xl:col-span-4">
          {/* Placeholder for Notice Board or Calendar Widget */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 h-full">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4">Notice Board</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-1 h-full bg-brand-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white/90">Staff Meeting</p>
                  <p className="text-sm text-gray-500">Today at 2:00 PM</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-1 h-full bg-brand-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-white/90">Parent-Teacher Conference</p>
                  <p className="text-sm text-gray-500">Tomorrow at 10:00 AM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

