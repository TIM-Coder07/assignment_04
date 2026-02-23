let jobs = [
  {
    id: 1,
    companyName: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$120k",
    description: "Build modern UI.",
    status: "Pending",
  },
  {
    id: 2,
    companyName: "Microsoft",
    position: "Backend Developer",
    location: "USA",
    type: "Full-time",
    salary: "$110k",
    description: "Work with cloud services.",
    status: "Pending",
  },
  {
    id: 3,
    companyName: "Amazon",
    position: "Full Stack Developer",
    location: "Canada",
    type: "Full-time",
    salary: "$115k",
    description: "Develop scalable e-commerce apps.",
    status: "Pending",
  },
  {
    id: 4,
    companyName: "Meta",
    position: "React Developer",
    location: "Remote",
    type: "Contract",
    salary: "$95k",
    description: "Create interactive interfaces.",
    status: "Pending",
  },
  {
    id: 5,
    companyName: "Netflix",
    position: "UI Engineer",
    location: "USA",
    type: "Full-time",
    salary: "$105k",
    description: "Design streaming platform UI.",
    status: "Pending",
  },
  {
    id: 6,
    companyName: "Tesla",
    position: "JS Engineer",
    location: "USA",
    type: "Hybrid",
    salary: "$130k",
    description: "Build dashboards.",
    status: "Pending",
  },
  {
    id: 7,
    companyName: "Shopify",
    position: "Frontend Intern",
    location: "Remote",
    type: "Internship",
    salary: "$45k",
    description: "Assist web apps.",
    status: "Pending",
  },
  {
    id: 8,
    companyName: "Airbnb",
    position: "MERN Stack Developer",
    location: "UK",
    type: "Full-time",
    salary: "$100k",
    description: "Booking & listing platform.",
    status: "Pending",
  },
];

const jobsContainer = document.getElementById("jobsContainer");

let currentFilter = "All";

// Render Jobs
function renderJobsCard(filter = "All") {
  currentFilter = filter;
  jobsContainer.innerHTML = "";

  let filteredJobs;

  if (filter === "All") {
    filteredJobs = jobs;
  } else {
    filteredJobs = jobs.filter((job) => job.status === filter);
  }

  if (filteredJobs.length === 0) {
    jobsContainer.innerHTML = `
    <div class="col-span-full text-center p-10 bg-white rounded shadow">
      <img 
        src="./asset/jobs.png"
        alt="No Jobs"
        class="mx-auto mb-4 w-40"
      />
      <h3 class="text-xl font-semibold mb-2">No Jobs Available</h3>
    </div>
  `;
  }

  // Update Counts
  function updateDashboardCounts() {
    document.getElementById("totalCount").innerText = jobs.length;

    document.getElementById("interviewCount").innerText = jobs.filter(
      (job) => job.status === "Interview",
    ).length;

    document.getElementById("rejectedCount").innerText = jobs.filter(
      (job) => job.status === "Rejected",
    ).length;
  }

  filteredJobs.forEach((job) => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-lg shadow border border-gray-200";

    card.innerHTML = `
      <div class='flex justify-betwine'>
        <h3 class="text-lg font-semibold text-gray-800 mb-1">${job.companyName}</h3>
        <button class="py-1 px-2 bg-gray-200 text-red-700 rounded hover:bg-gray-300"
          onclick="deleteJob(${job.id}, '${currentFilter}')">
          Delete
        </button>
      </div>
      <p class="text-gray-600 mb-2">${job.position}</p>
      <div class="flex flex-wrap text-sm text-gray-500 mb-2 gap-2">
        <span>${job.location}</span> • 
        <span>${job.type}</span> • 
        <span>${job.salary}</span>
      </div>
      <p class="text-gray-700 mb-4">${job.description}</p>
      <div class="flex gap-3">
        <button class="flex-1 py-2 px-4 bg-green-100 text-green-700 font-semibold rounded-lg hover:bg-green-200"
                onclick="updateStatus(${job.id}, 'Interview')">
          Interview
        </button>
        <button class="flex-1 py-2 px-4 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200"
                onclick="updateStatus(${job.id}, 'Rejected')">
          Rejected
        </button>
      </div>
    `;

    jobsContainer.appendChild(card);
  });

  updateDashboardCounts();
  highlightActiveCard();
}


// Update Status
function updateStatus(id, newStatus) {
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  if (job.status === newStatus) return;

  job.status = newStatus;

  renderJobsCard(currentFilter);
}



// Dashboard Filter
function filterDashboard(filter) {
  renderJobsCard(filter);
}

// Highlight Active Card
function highlightActiveCard() {
  const cards = document.querySelectorAll(".dash-card");
  cards.forEach((card) => card.classList.remove("border-2", "border-blue-500"));

  if (currentFilter === "All")
    document
      .getElementById("totalCard")
      .classList.add("border-2", "border-blue-500");

  if (currentFilter === "Interview")
    document
      .getElementById("interviewCard")
      .classList.add("border-2", "border-blue-500");

  if (currentFilter === "Rejected")
    document
      .getElementById("rejectedCard")
      .classList.add("border-2", "border-blue-500");
}

// Default Load
renderJobsCard("All");
