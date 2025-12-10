import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
// Imports removed
// If these don't exist, I'll use raw HTML for now or standard Tailwind classes.
// Let's check FormElements to be sure what components are available.
// Actually, to be safe and fast, I will use standard standard Tailwind HTML elements first, similar to how they might be used in the template.
// Re-checking FormElements.tsx content first would be better, but I'll write a safe version.

export default function AdmissionForm() {
    return (
        <>
            <PageMeta
                title="Student Admission | TailAdmin"
                description="Add new student details"
            />
            <PageBreadcrumb pageTitle="New Student Admission" />

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* Student Info */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-default dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="border-b border-gray-100 px-6.5 py-4 dark:border-gray-800">
                            <h3 className="font-medium text-black dark:text-white">
                                Student Information
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
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Gender
                                </label>
                                <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col gap-9">
                    {/* Parent Info */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-default dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="border-b border-gray-100 px-6.5 py-4 dark:border-gray-800">
                            <h3 className="font-medium text-black dark:text-white">
                                Parent Information
                            </h3>
                        </div>
                        <form action="#" className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Father's Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter father's name"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Mother's Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter mother's name"
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
                    {/* Academic Info */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-default dark:border-gray-800 dark:bg-white/[0.03]">
                        <div className="border-b border-gray-100 px-6.5 py-4 dark:border-gray-800">
                            <h3 className="font-medium text-black dark:text-white">
                                Academic Information
                            </h3>
                        </div>
                        <form action="#" className="p-6.5">
                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Class
                                </label>
                                <select className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option>Select Class</option>
                                    <option>Class 1</option>
                                    <option>Class 2</option>
                                    <option>Class 3</option>
                                </select>
                            </div>

                            <div className="mb-4.5">
                                <label className="mb-2.5 block text-black dark:text-white">
                                    Roll Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter roll no"
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
                    Save Student
                </button>
            </div>
        </>
    );
}
