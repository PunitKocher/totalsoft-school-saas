import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function AddTeacher() {
    return (
        <>
            <PageMeta
                title="Add Teacher | TailAdmin"
                description="Add new teacher details"
            />
            <PageBreadcrumb pageTitle="Add New Teacher" />

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* Personal Info */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-default dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="border-b border-gray-100 px-6.5 py-4 dark:border-gray-800">
                            <h3 className="font-medium text-black dark:text-white">
                                Personal Information
                            </h3>
                        </div>
                        <form action="#" className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter phone number"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col gap-9">
                    {/* Professional Info */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-default dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="border-b border-gray-100 px-6.5 py-4 dark:border-gray-800">
                            <h3 className="font-medium text-black dark:text-white">
                                Professional Information
                            </h3>
                        </div>
                        <form action="#" className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Qualification
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. M.Sc. Mathematics"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Experience (Years)
                                </label>
                                <input
                                    type="number"
                                    placeholder="e.g. 5"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Department / Subject
                                </label>
                                <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option>Select Subject</option>
                                    <option>Mathematics</option>
                                    <option>Science</option>
                                    <option>English</option>
                                    <option>History</option>
                                    <option>Physical Education</option>
                                </select>
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Salary
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter salary amount"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <button className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white">
                    Cancel
                </button>
                <button className="flex justify-center rounded bg-brand-500 py-2 px-6 font-medium text-white hover:bg-opacity-90">
                    Save Teacher
                </button>
            </div>
        </>
    );
}
