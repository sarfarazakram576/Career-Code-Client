import React from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements
      .split(",")
      .map((req) => req.trim());
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    newJob.status = "active";

    axios
      .post("https://career-code-server-fb-at-oken.vercel.app/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("You successfully post this job.");
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="my-12">
      <h1 className="text-4xl text-center my-10 font-bold">Please Add a Job</h1>
      <form onSubmit={handleAddJob} className="max-w-4xl mx-auto">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border px-6 py-10">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            required
            name="title"
            className="input mb-4 w-full"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            required
            name="company"
            className="input mb-4 w-full"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            required
            name="location"
            className="input mb-4 w-full"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="text"
            required
            name="company_logo"
            className="input mb-4 w-full"
            placeholder="Company Logo URL"
          />
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border px-6 py-10">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter w-full">
            <input
              className="btn filter-reset"
              type="radio"
              required
              name="jobType"
              aria-label="All"
              value="All"
            />
            <input
              className="btn"
              type="radio"
              required
              name="jobType"
              aria-label="On-site"
              value="On-site"
            />
            <input
              className="btn"
              type="radio"
              required
              name="jobType"
              aria-label="Remote"
              value="Remote"
            />
            <input
              className="btn"
              type="radio"
              required
              name="jobType"
              aria-label="Hybrid"
              value="Hybrid"
            />
          </div>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border px-6 py-10">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue=""
            name="category"
            required
            className="select w-full"
          >
            <option value="" disabled>
              Pick a Job Category
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border px-6 py-10">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input
            required
            type="date"
            name="applicationDeadline"
            className="input w-full"
          />
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border px-6 py-10">
          <legend className="fieldset-legend">Salary Range</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="label mb-1">Minimum salary</label>
              <input
                type="text"
                required
                name="min"
                className="input mb-4 w-full"
                placeholder="Minimum salary"
              />
            </div>

            <div>
              <label className="label mb-1">Maximum salary</label>
              <input
                type="text"
                required
                name="max"
                className="input mb-4 w-full"
                placeholder="Maximum salary"
              />
            </div>

            <div>
              <label className="label mb-1">Currency Name</label>
              <select
                defaultValue=""
                name="currency"
                required
                className="select w-full"
              >
                <option value="" disabled>
                  Select a Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>EURO</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border px-6 py-10">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            required
            name="description"
            className="textarea h-24 w-full"
            placeholder="Job Description"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border px-6 py-10">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            required
            name="requirements"
            className="textarea h-24 w-full"
            placeholder="Requirements (separate by comma)"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border px-6 py-10">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            required
            name="responsibilities"
            className="textarea h-24 w-full"
            placeholder="Responsibilities (separate by comma)"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border px-6 py-10">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">Hr Name</label>
          <input
            type="text"
            required
            name="hr_name"
            className="input mb-4 w-full"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="text"
            required
            name="hr_email"
            className="input w-full"
            placeholder="HR Email"
            defaultValue={user?.email || user?.providerData[0]?.email}
          />
        </fieldset>

        <input
          type="submit"
          value="Add Job"
          className="w-full my-6 btn rounded-full"
        />
      </form>
    </div>
  );
};

export default AddJob;
