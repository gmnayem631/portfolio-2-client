import React from "react";

const Education = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Educational <span className="text-primary">Qualification</span>
      </h2>

      <div className="flex justify-center">
        <div className="card bg-base-200 shadow-md w-full max-w-5xl">
          <div className="card-body">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary rounded-xl p-3 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337A49.948 49.948 0 0112 12.354a49.948 49.948 0 01-10.599-2.297.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134.857.209 1.733.223 2.625a.75.75 0 01-.38.657 49.087 49.087 0 01-7.01 3.81.75.75 0 01-.632 0 49.087 49.087 0 01-7.01-3.81.75.75 0 01-.38-.657c.014-.892.089-1.768.223-2.625a48.45 48.45 0 017.66 3.282.75.75 0 00.64 0z" />
                  <path d="M15.75 18.183a48.89 48.89 0 01-7.5 0V16.5a48.89 48.89 0 007.5 0v1.683z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Bachelor of Science (B.Sc.)
                </h3>
                <p className="text-primary font-semibold mt-1">
                  Disaster Science and Climate Resilience
                </p>
                <p className="text-base-content/70 mt-1">University of Dhaka</p>
              </div>
            </div>

            <div className="divider my-2" />

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-base-100 rounded-xl px-4 py-3">
                <p className="text-base-content/50 text-xs uppercase tracking-wide mb-1">
                  Status
                </p>
                <p className="font-semibold text-success">Currently Enrolled</p>
              </div>
              <div className="bg-base-100 rounded-xl px-4 py-3">
                <p className="text-base-content/50 text-xs uppercase tracking-wide mb-1">
                  Semester
                </p>
                <p className="font-semibold">8th Semester</p>
              </div>
              <div className="bg-base-100 rounded-xl px-4 py-3">
                <p className="text-base-content/50 text-xs uppercase tracking-wide mb-1">
                  Institution
                </p>
                <p className="font-semibold">University of Dhaka</p>
              </div>
              <div className="bg-base-100 rounded-xl px-4 py-3">
                <p className="text-base-content/50 text-xs uppercase tracking-wide mb-1">
                  Location
                </p>
                <p className="font-semibold">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
