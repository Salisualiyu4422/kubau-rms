const icon = (name) => `<i class="fa-solid fa-${name}" aria-hidden="true"></i>`;
const regular = (name) => `<i class="fa-regular fa-${name}" aria-hidden="true"></i>`;
const STORAGE = "kubismis.prototype.v1";
const SESSION_KEY = "kubismis.session";
const departments = ["Administration", "Finance", "Works", "Health", "Education", "Agriculture", "Environment", "Planning", "Personnel/HR", "Legal", "Procurement", "Social Development", "Information", "Revenue"];
const seed = {
  correspondence: [
    { id: "KUB-C-0261", subject: "Request for quarterly expenditure returns", type: "Incoming", sender: "Kaduna State Ministry of Local Government", recipient: "Secretary's Office", department: "Finance", date: "05 Oct 2026", status: "Processing" },
    { id: "KUB-C-0260", subject: "Community water point maintenance update", type: "Internal", sender: "Works Department", recipient: "Director, Works", department: "Works", date: "04 Oct 2026", status: "Forwarded" },
    { id: "KUB-C-0259", subject: "October market sanitation schedule", type: "Outgoing", sender: "Secretary's Office", recipient: "Anchau Market Association", department: "Environment", date: "03 Oct 2026", status: "Completed" },
    { id: "KUB-C-0258", subject: "Staff establishment circular", type: "Incoming", sender: "Local Government Service Board", recipient: "Personnel/HR", department: "Personnel/HR", date: "02 Oct 2026", status: "Received" },
    { id: "KUB-C-0257", subject: "Ward development consultation", type: "Internal", sender: "Planning Department", recipient: "Secretary's Office", department: "Planning", date: "30 Sep 2026", status: "Archived" }
  ],
  memos: [
    { id: "KUB-M-0248", subject: "Request for release of Q4 operating funds", from: "Amina Sani", to: "The Executive Chairman", department: "Finance", date: "05 Oct 2026", priority: "High", status: "Submitted" },
    { id: "KUB-M-0247", subject: "Staff capacity development workshop", from: "Kabiru Adamu", to: "Secretary", department: "Personnel/HR", date: "04 Oct 2026", priority: "Normal", status: "Under Review" },
    { id: "KUB-M-0246", subject: "Road grading equipment maintenance", from: "Hassan Balarabe", to: "Director of Works", department: "Works", date: "02 Oct 2026", priority: "Medium", status: "Approved" },
    { id: "KUB-M-0245", subject: "Primary health outreach programme", from: "Maryam Yakubu", to: "Secretary", department: "Health", date: "01 Oct 2026", priority: "High", status: "Draft" },
    { id: "KUB-M-0244", subject: "August revenue reconciliation", from: "Salisu Abdullahi", to: "The Executive Chairman", department: "Revenue", date: "28 Sep 2026", priority: "Normal", status: "Approved" }
  ],
  directives: [
    { id: "KUB-D-019", title: "Prepare Q4 departmental work plans", description: "Submit costed work plans for the final quarter.", issuedBy: "Secretary", department: "All Departments", officer: "Department Directors", issued: "01 Oct 2026", deadline: "10 Oct 2026", priority: "High", progress: 68, status: "In Progress" },
    { id: "KUB-D-018", title: "Inspect Anchau market drainage", description: "Provide an inspection report and a costed response.", issuedBy: "Executive Chairman", department: "Works", officer: "Hassan Balarabe", issued: "28 Sep 2026", deadline: "06 Oct 2026", priority: "Urgent", progress: 42, status: "Overdue" },
    { id: "KUB-D-017", title: "Reconcile September collections", description: "Reconcile collector returns with digital receipts.", issuedBy: "Secretary", department: "Revenue", officer: "Amina Sani", issued: "25 Sep 2026", deadline: "08 Oct 2026", priority: "High", progress: 75, status: "Assigned" },
    { id: "KUB-D-016", title: "Update staff records and next of kin", description: "Complete the annual staff information review.", issuedBy: "Personnel/HR", department: "Personnel/HR", officer: "Bilkisu Umar", issued: "20 Sep 2026", deadline: "02 Oct 2026", priority: "Normal", progress: 100, status: "Completed" }
  ],
  departments: departments.map((name, index) => ({ id: `DPT-${String(index + 1).padStart(2, "0")}`, name, head: ["Bilkisu Umar", "Amina Sani", "Hassan Balarabe", "Dr. Maryam Yakubu", "Abubakar Garba", "Musa Ibrahim", "Fatima Adamu"][index % 7], staff: [112, 46, 88, 74, 92, 69, 42, 35, 57, 18, 26, 31, 24, 61][index], tasks: [12, 8, 16, 7, 11, 9, 4, 5, 6, 2, 8, 3, 2, 14][index], performance: [92, 88, 76, 90, 84, 81, 86, 78, 89, 93, 87, 79, 91, 82][index], status: "Active" })),
  staff: [
    { id: "KLG-ADM-001", name: "Bilkisu Umar", department: "Administration", position: "Director of Administration", phone: "+234 803 555 0142", email: "b.umar@kubau.gov.ng", status: "Active", employed: "12 Mar 2014" },
    { id: "KLG-FIN-014", name: "Amina Sani", department: "Finance", position: "Principal Finance Officer", phone: "+234 806 555 0231", email: "a.sani@kubau.gov.ng", status: "Active", employed: "08 Jun 2017" },
    { id: "KLG-WKS-022", name: "Hassan Balarabe", department: "Works", position: "Civil Engineer II", phone: "+234 809 555 0168", email: "h.balarabe@kubau.gov.ng", status: "Active", employed: "21 Jan 2019" },
    { id: "KLG-HLT-038", name: "Maryam Yakubu", department: "Health", position: "Public Health Officer", phone: "+234 802 555 0314", email: "m.yakubu@kubau.gov.ng", status: "On Leave", employed: "16 Sep 2016" },
    { id: "KLG-EDU-051", name: "Abubakar Garba", department: "Education", position: "Education Officer", phone: "+234 807 555 0227", email: "a.garba@kubau.gov.ng", status: "Active", employed: "03 Feb 2015" },
    { id: "KLG-AGR-063", name: "Musa Ibrahim", department: "Agriculture", position: "Agricultural Extension Officer", phone: "+234 805 555 0181", email: "m.ibrahim@kubau.gov.ng", status: "Active", employed: "11 Nov 2020" },
    { id: "KLG-REV-079", name: "Salisu Abdullahi", department: "Revenue", position: "Revenue Supervisor", phone: "+234 810 555 0449", email: "s.abdullahi@kubau.gov.ng", status: "Active", employed: "05 May 2018" },
    { id: "KLG-ENV-084", name: "Fatima Adamu", department: "Environment", position: "Environmental Health Officer", phone: "+234 803 555 0256", email: "f.adamu@kubau.gov.ng", status: "Active", employed: "23 Aug 2019" },
    { id: "KLG-HR-096", name: "Kabiru Adamu", department: "Personnel/HR", position: "Senior Personnel Officer", phone: "+234 806 555 0332", email: "k.adamu@kubau.gov.ng", status: "Active", employed: "17 Apr 2013" },
    { id: "KLG-PLN-107", name: "Zainab Sulaiman", department: "Planning", position: "Planning Officer", phone: "+234 809 555 0364", email: "z.sulaiman@kubau.gov.ng", status: "Suspended", employed: "14 Jul 2021" }
  ],
  meetings: [
    { id: "MTG-2026-104", title: "Weekly Executive Management Meeting", date: "06 Oct 2026", time: "10:00 AM", location: "Council Chamber", organizer: "Secretary", participants: "Chairman, Directors (14)", agenda: "Q4 work plans; revenue performance; open directives", status: "Scheduled" },
    { id: "MTG-2026-103", title: "Anchau Market Rehabilitation Review", date: "07 Oct 2026", time: "11:30 AM", location: "Works Conference Room", organizer: "Director, Works", participants: "Works, Procurement, Market leaders", agenda: "Contract milestones and drainage inspection", status: "Scheduled" },
    { id: "MTG-2026-102", title: "Monthly Revenue Performance Review", date: "01 Oct 2026", time: "09:00 AM", location: "Finance Boardroom", organizer: "Director, Finance", participants: "Finance, Revenue, Collector supervisors", agenda: "September collections and reconciliation", status: "Completed" },
    { id: "MTG-2026-101", title: "Primary Health Outreach Planning", date: "28 Sep 2026", time: "01:00 PM", location: "Health Department", organizer: "Director, Health", participants: "Health, Information, Ward focal persons", agenda: "Outreach timetable and community notices", status: "Completed" }
  ],
  documents: [
    { id: "DOC-2026-421", name: "October Revenue Summary.pdf", type: "Financial Documents", department: "Finance", uploadedBy: "Amina Sani", date: "05 Oct 2026", size: "1.8 MB", status: "Active" },
    { id: "DOC-2026-420", name: "Q4 Secretariat Circular.pdf", type: "Circulars", department: "Administration", uploadedBy: "Bilkisu Umar", date: "04 Oct 2026", size: "642 KB", status: "Active" },
    { id: "DOC-2026-419", name: "Anchau Road Works - Site Note.docx", type: "Project Documents", department: "Works", uploadedBy: "Hassan Balarabe", date: "03 Oct 2026", size: "2.1 MB", status: "Active" },
    { id: "DOC-2026-418", name: "September Council Minutes.pdf", type: "Meeting Minutes", department: "Administration", uploadedBy: "Secretary's Office", date: "01 Oct 2026", size: "884 KB", status: "Archived" },
    { id: "DOC-2026-417", name: "Staff Leave Schedule.xlsx", type: "Administrative Documents", department: "Personnel/HR", uploadedBy: "Kabiru Adamu", date: "29 Sep 2026", size: "326 KB", status: "Active" }
  ],
  revenue: [
    { id: "KUB-REV-2026-000245", payer: "Muhammad Musa", source: "Market fees", area: "Anchau Market", collector: "COL-023", date: "05 Oct 2026", amount: 15000, method: "POS", status: "Paid" },
    { id: "KUB-REV-2026-000244", payer: "Hauwa Bello", source: "Shop/stall fees", area: "Pambegua", collector: "COL-018", date: "05 Oct 2026", amount: 25000, method: "Bank transfer", status: "Paid" },
    { id: "KUB-REV-2026-000243", payer: "Abdullahi Garba", source: "Business permits", area: "Anchau", collector: "COL-023", date: "05 Oct 2026", amount: 50000, method: "POS", status: "Paid" },
    { id: "KUB-REV-2026-000242", payer: "Binta Sani", source: "Motor park fees", area: "Kubau Motor Park", collector: "COL-011", date: "04 Oct 2026", amount: 8000, method: "Cash", status: "Paid" },
    { id: "KUB-REV-2026-000241", payer: "Musa Adamu", source: "Sanitation fees", area: "Karreh", collector: "COL-006", date: "04 Oct 2026", amount: 5000, method: "POS", status: "Paid" },
    { id: "KUB-REV-2026-000240", payer: "Sani Ibrahim", source: "Property/tenement rates", area: "Anchau", collector: "COL-018", date: "03 Oct 2026", amount: 35000, method: "Bank transfer", status: "Paid" }
  ],
  collectors: [
    { id: "COL-023", name: "Salisu Abdullahi", area: "Anchau Market", target: 120000, collected: 98500, transactions: 24, performance: 82, status: "Active" },
    { id: "COL-018", name: "Musa Adamu", area: "Pambegua District", target: 100000, collected: 112000, transactions: 31, performance: 112, status: "Active" },
    { id: "COL-011", name: "Binta Sani", area: "Kubau Motor Park", target: 90000, collected: 76400, transactions: 19, performance: 85, status: "Active" },
    { id: "COL-006", name: "Yakubu Tanko", area: "Karreh Ward", target: 75000, collected: 52100, transactions: 16, performance: 69, status: "Active" },
    { id: "COL-029", name: "Hauwa Bello", area: "Pambegua Market", target: 80000, collected: 63400, transactions: 21, performance: 79, status: "On Leave" }
  ],
  expenditure: [
    { id: "EXP-2026-188", description: "Rural access road grading", category: "Infrastructure", department: "Works", vendor: "North Star Civil Works", date: "04 Oct 2026", amount: 2850000, status: "Approved" },
    { id: "EXP-2026-187", description: "Primary healthcare outreach supplies", category: "Health", department: "Health", vendor: "Community Health Supplies", date: "03 Oct 2026", amount: 684500, status: "Pending" },
    { id: "EXP-2026-186", description: "Q4 office operations", category: "Administration", department: "Administration", vendor: "Council Stores", date: "02 Oct 2026", amount: 420000, status: "Approved" },
    { id: "EXP-2026-185", description: "Classroom rehabilitation materials", category: "Education", department: "Education", vendor: "Arewa Building Materials", date: "29 Sep 2026", amount: 1230000, status: "Under Review" }
  ],
  budget: [
    { id: "BUD-2026-01", category: "Personnel", approved: 485000000, released: 363750000, spent: 341200000, balance: 144000000, utilization: 70, status: "On Track" },
    { id: "BUD-2026-02", category: "Infrastructure", approved: 320000000, released: 224000000, spent: 186000000, balance: 134000000, utilization: 58, status: "On Track" },
    { id: "BUD-2026-03", category: "Administration", approved: 145000000, released: 116000000, spent: 98200000, balance: 46800000, utilization: 68, status: "On Track" },
    { id: "BUD-2026-04", category: "Health", approved: 98000000, released: 68600000, spent: 51400000, balance: 46600000, utilization: 52, status: "On Track" },
    { id: "BUD-2026-05", category: "Education", approved: 135000000, released: 94500000, spent: 71200000, balance: 63800000, utilization: 53, status: "On Track" },
    { id: "BUD-2026-06", category: "Agriculture", approved: 72000000, released: 50400000, spent: 38200000, balance: 33800000, utilization: 53, status: "On Track" }
  ],
  projects: [
    { id: "PRJ-026", name: "Anchau township road rehabilitation", location: "Anchau", department: "Works", contractor: "North Star Civil Works", budget: 68500000, start: "12 Jun 2026", completion: "20 Dec 2026", progress: 64, status: "Ongoing" },
    { id: "PRJ-025", name: "Primary healthcare centre upgrade", location: "Pambegua", department: "Health", contractor: "Arewa Health Infrastructure", budget: 42800000, start: "02 Apr 2026", completion: "30 Nov 2026", progress: 72, status: "Ongoing" },
    { id: "PRJ-024", name: "Classroom block renovation", location: "Karreh", department: "Education", contractor: "Unity Construction Ltd.", budget: 31500000, start: "10 Feb 2026", completion: "30 Aug 2026", progress: 100, status: "Completed" },
    { id: "PRJ-023", name: "Community drainage construction", location: "Anchau", department: "Works", contractor: "Giwa Engineering Services", budget: 27400000, start: "01 May 2026", completion: "15 Sep 2026", progress: 43, status: "Delayed" },
    { id: "PRJ-022", name: "Anchau central market rehabilitation", location: "Anchau", department: "Planning", contractor: "Kudan Development Works", budget: 78500000, start: "15 Aug 2026", completion: "15 Mar 2027", progress: 18, status: "Ongoing" },
    { id: "PRJ-021", name: "Solar borehole maintenance programme", location: "Various wards", department: "Water & Sanitation", contractor: "Community Water Initiative", budget: 19600000, start: "02 Jan 2026", completion: "30 Jul 2026", progress: 100, status: "Completed" }
  ],
  complaints: [
    { id: "CMP-2026-0841", citizen: "Ibrahim Yusuf", category: "Roads", location: "Anchau, Unguwar Rimi", description: "A damaged culvert is restricting access after rainfall.", date: "05 Oct 2026", department: "Works", priority: "High", status: "Submitted" },
    { id: "CMP-2026-0840", citizen: "Hauwa Musa", category: "Waste", location: "Pambegua Market", description: "Waste collection has been missed this week.", date: "04 Oct 2026", department: "Environment", priority: "Medium", status: "Assigned" },
    { id: "CMP-2026-0839", citizen: "Sani Abdullahi", category: "Water", location: "Karreh ward", description: "Community borehole pump requires inspection.", date: "03 Oct 2026", department: "Works", priority: "Normal", status: "In Progress" },
    { id: "CMP-2026-0838", citizen: "Zainab Garba", category: "Health", location: "Pambegua", description: "Request for an additional outreach clinic date.", date: "02 Oct 2026", department: "Health", priority: "Normal", status: "Resolved" },
    { id: "CMP-2026-0837", citizen: "Musa Ibrahim", category: "Environment", location: "Anchau town", description: "Blocked drainage near the community health post.", date: "30 Sep 2026", department: "Environment", priority: "High", status: "In Progress" }
  ],
  applications: [
    { id: "APP-2026-0312", applicant: "Anchau Traders Association", service: "Market permit", submitted: "05 Oct 2026", department: "Revenue", reference: "KUB/APP/0312", status: "Under Review" },
    { id: "APP-2026-0311", applicant: "Hajara Event Services", service: "Event permit", submitted: "04 Oct 2026", department: "Administration", reference: "KUB/APP/0311", status: "Submitted" },
    { id: "APP-2026-0310", applicant: "Pambegua Agro Ventures", service: "Business permit", submitted: "02 Oct 2026", department: "Revenue", reference: "KUB/APP/0310", status: "Approved" },
    { id: "APP-2026-0309", applicant: "Community Sports Committee", service: "General application", submitted: "30 Sep 2026", department: "Social Development", reference: "KUB/APP/0309", status: "Completed" }
  ],
  businesses: [
    { id: "BUS-2026-1124", name: "Anchau Modern Stores", owner: "Muhammad Musa", category: "Retail trade", ward: "Anchau", permit: "Active", renewed: "14 Mar 2026", status: "Active" },
    { id: "BUS-2026-1123", name: "Pambegua Grain Exchange", owner: "Hauwa Bello", category: "Agriculture", ward: "Pambegua", permit: "Due for renewal", renewed: "22 Oct 2025", status: "Pending" },
    { id: "BUS-2026-1122", name: "Karreh Motor Repairs", owner: "Sani Abdullahi", category: "Automotive", ward: "Karreh", permit: "Active", renewed: "06 Jun 2026", status: "Active" }
  ],
  audit: [
    { id: "AUD-84721", user: "Administrator", action: "Approved Memo KUB-M-0246", module: "Memo Management", date: "05 Oct 2026", time: "10:42 AM", device: "10.20.4.18 · Chrome / Windows", status: "Success" },
    { id: "AUD-84720", user: "Finance Officer", action: "Uploaded October Revenue Summary", module: "Documents", date: "05 Oct 2026", time: "10:08 AM", device: "10.20.4.22 · Edge / Windows", status: "Success" },
    { id: "AUD-84719", user: "Secretary", action: "Assigned Directive KUB-D-018", module: "Directives", date: "05 Oct 2026", time: "09:34 AM", device: "10.20.4.11 · Chrome / Windows", status: "Success" },
    { id: "AUD-84718", user: "System", action: "Authentication attempt", module: "Access", date: "05 Oct 2026", time: "09:11 AM", device: "Local browser demonstration", status: "Demo" }
  ]
};

const navGroups = [
  { label: "Workspace", items: [["dashboard", "Dashboard", "chart-pie"]] },
  { label: "Secretariat", items: [["correspondence", "Correspondence", "envelope"], ["memos", "Memos", "file-lines", "5"], ["directives", "Directives", "list-check", "2"], ["meetings", "Meetings", "calendar-days"]] },
  { label: "Administration", items: [["departments", "Departments", "building"], ["staff", "Staff", "users"], ["documents", "Documents", "folder-open"]] },
  { label: "Finance", items: [["revenue", "Revenue", "naira-sign"], ["collectors", "Collectors", "people-carry-box"], ["expenditure", "Expenditure", "money-bill-transfer"], ["budget", "Budget", "scale-balanced"]] },
  { label: "Projects", items: [["projects", "All Projects", "diagram-project"], ["projects-ongoing", "Ongoing", "spinner"], ["projects-completed", "Completed", "circle-check"], ["projects-delayed", "Delayed", "triangle-exclamation"]] },
  { label: "Citizens", items: [["complaints", "Complaints", "comments", "7"], ["applications", "Applications", "file-circle-check"], ["businesses", "Businesses", "store"]] },
  { label: "Governance", items: [["reports", "Reports", "chart-column"], ["audit", "Audit Logs", "clock-rotate-left"], ["receipt", "Digital Receipt", "receipt"], ["profile", "User Profile", "user"], ["settings", "Settings", "gear"]] }
];

const configs = {
  correspondence: { title: "Correspondence", subtitle: "Register and track incoming, outgoing, and internal correspondence.", description: "Official letters and correspondence", action: "Register correspondence", id: "id", search: ["id", "subject", "sender", "recipient"], filters: [["type", "All types", ["Incoming", "Outgoing", "Internal"]], ["status", "All statuses", ["Received", "Processing", "Forwarded", "Completed", "Archived"]]], columns: [["Reference", "id"], ["Subject", "subject"], ["Direction", "type"], ["Sender", "sender"], ["Recipient", "recipient"], ["Department", "department"], ["Date", "date"], ["Status", "status"]], fields: [["subject", "Subject"], ["type", "Type", "select", ["Incoming", "Outgoing", "Internal"]], ["sender", "Sender"], ["recipient", "Recipient"], ["department", "Department", "select", departments], ["date", "Date"], ["status", "Status", "select", ["Received", "Processing", "Forwarded", "Completed", "Archived"]]] },
  memos: { title: "Memo Management", subtitle: "Review, route, and maintain an auditable record of internal memos.", description: "Memos across the secretariat", action: "Create memo", id: "id", search: ["id", "subject", "from", "department"], filters: [["department", "All departments", departments], ["status", "All statuses", ["Draft", "Submitted", "Under Review", "Approved", "Rejected", "Archived"]]], columns: [["Memo no.", "id"], ["Subject", "subject"], ["From", "from"], ["To", "to"], ["Department", "department"], ["Date", "date"], ["Priority", "priority"], ["Status", "status"]], fields: [["subject", "Subject"], ["from", "From"], ["to", "To"], ["department", "Department", "select", departments], ["date", "Date"], ["priority", "Priority", "select", ["Normal", "Medium", "High", "Urgent"]], ["status", "Status", "select", ["Draft", "Submitted", "Under Review", "Approved", "Rejected", "Archived"]]] },
  directives: { title: "Directives", subtitle: "Track instructions issued by the Chairman and Secretary through to completion.", description: "Departmental directives and follow-up", action: "Issue directive", id: "id", search: ["id", "title", "department", "officer"], filters: [["department", "All departments", departments], ["priority", "All priorities", ["Urgent", "High", "Medium", "Normal"]], ["status", "All statuses", ["Pending", "Assigned", "In Progress", "Completed", "Overdue"]]], columns: [["Directive", "id"], ["Title", "title"], ["Assigned department", "department"], ["Officer", "officer"], ["Issued", "issued"], ["Deadline", "deadline"], ["Progress", "progress"], ["Priority", "priority"], ["Status", "status"]], fields: [["title", "Title"], ["description", "Description", "textarea"], ["issuedBy", "Issued by"], ["department", "Department", "select", departments], ["officer", "Assigned officer"], ["issued", "Date issued"], ["deadline", "Deadline"], ["priority", "Priority", "select", ["Normal", "Medium", "High", "Urgent"]], ["progress", "Progress (%)", "number"], ["status", "Status", "select", ["Pending", "Assigned", "In Progress", "Completed", "Overdue"]]] },
  departments: { title: "Departments", subtitle: "Department directory, workforce overview, and operational performance.", description: "Departments and directorates", action: "Add department", id: "id", search: ["name", "head"], filters: [["status", "All statuses", ["Active", "Inactive"]]], columns: [["Department", "name"], ["Head of department", "head"], ["Staff", "staff"], ["Pending tasks", "tasks"], ["Performance", "performance"], ["Status", "status"]], fields: [["name", "Department name"], ["head", "Head of department"], ["staff", "Staff count", "number"], ["tasks", "Pending tasks", "number"], ["performance", "Performance (%)", "number"], ["status", "Status", "select", ["Active", "Inactive"]]] },
  staff: { title: "Staff Directory", subtitle: "Find staff records and maintain department and employment information.", description: "Staff records", action: "Add staff member", id: "id", search: ["id", "name", "department", "position", "email"], filters: [["department", "All departments", departments], ["status", "All statuses", ["Active", "On Leave", "Suspended", "Retired"]]], columns: [["Staff member", "name"], ["Staff ID", "id"], ["Department", "department"], ["Position", "position"], ["Phone", "phone"], ["Email", "email"], ["Employed", "employed"], ["Status", "status"]], fields: [["name", "Full name"], ["department", "Department", "select", departments], ["position", "Position"], ["phone", "Phone"], ["email", "Email", "email"], ["employed", "Date employed"], ["status", "Employment status", "select", ["Active", "On Leave", "Suspended", "Retired"]]] },
  meetings: { title: "Meetings", subtitle: "Coordinate council meetings, agendas, attendance, and minutes.", description: "Upcoming and recent meetings", action: "Create meeting", id: "id", search: ["title", "location", "organizer"], filters: [["status", "All meetings", ["Scheduled", "Completed", "Cancelled"]]], columns: [["Meeting", "title"], ["Date", "date"], ["Time", "time"], ["Location", "location"], ["Organizer", "organizer"], ["Participants", "participants"], ["Status", "status"]], fields: [["title", "Meeting title"], ["date", "Date"], ["time", "Time"], ["location", "Location"], ["organizer", "Organizer"], ["participants", "Participants"], ["agenda", "Agenda", "textarea"], ["status", "Status", "select", ["Scheduled", "Completed", "Cancelled"]]] },
  documents: { title: "Document Library", subtitle: "A searchable, department-aware library for council records and working documents.", description: "Digital document register", action: "Upload document", id: "id", search: ["name", "type", "department", "uploadedBy"], filters: [["type", "All categories", ["Administrative Documents", "Memos", "Reports", "Circulars", "Policies", "Contracts", "Project Documents", "Financial Documents", "Meeting Minutes"]], ["status", "All statuses", ["Active", "Archived"]]], columns: [["File name", "name"], ["Category", "type"], ["Department", "department"], ["Uploaded by", "uploadedBy"], ["Date", "date"], ["Size", "size"], ["Status", "status"]], fields: [["name", "File name"], ["type", "Category", "select", ["Administrative Documents", "Memos", "Reports", "Circulars", "Policies", "Contracts", "Project Documents", "Financial Documents", "Meeting Minutes"]], ["department", "Department", "select", departments], ["uploadedBy", "Uploaded by"], ["date", "Date"], ["size", "File size"], ["status", "Status", "select", ["Active", "Archived"]]] },
  revenue: { title: "Revenue Management", subtitle: "Monitor local revenue collection, transaction records, and performance.", description: "Digital revenue transactions", action: "Record collection", id: "id", search: ["id", "payer", "source", "area", "collector"], filters: [["source", "All revenue sources", ["Market fees", "Shop/stall fees", "Business permits", "Motor park fees", "Property/tenement rates", "Advertisement fees", "Parking fees", "Sanitation fees", "Other"]]], columns: [["Receipt no.", "id"], ["Payer", "payer"], ["Revenue source", "source"], ["Collection area", "area"], ["Collector", "collector"], ["Date", "date"], ["Amount", "amount"], ["Method", "method"]], fields: [["payer", "Payer"], ["source", "Revenue source", "select", ["Market fees", "Shop/stall fees", "Business permits", "Motor park fees", "Property/tenement rates", "Advertisement fees", "Parking fees", "Sanitation fees", "Other"]], ["area", "Collection area"], ["collector", "Collector ID"], ["date", "Date"], ["amount", "Amount (₦)", "number"], ["method", "Payment method", "select", ["POS", "Bank transfer", "Cash"]], ["status", "Status", "select", ["Paid", "Pending"]]] },
  collectors: { title: "Revenue Collectors", subtitle: "Track assigned collection areas, daily targets, and collector performance.", description: "Collector assignments and results", action: "Add collector", id: "id", search: ["id", "name", "area"], filters: [["status", "All statuses", ["Active", "On Leave", "Suspended"]]], columns: [["Collector", "name"], ["Collector ID", "id"], ["Assigned area", "area"], ["Daily target", "target"], ["Collected today", "collected"], ["Transactions", "transactions"], ["Performance", "performance"], ["Status", "status"]], fields: [["name", "Full name"], ["area", "Assigned area"], ["target", "Daily target (₦)", "number"], ["collected", "Collected today (₦)", "number"], ["transactions", "Transactions", "number"], ["performance", "Performance (%)", "number"], ["status", "Status", "select", ["Active", "On Leave", "Suspended"]]] },
  expenditure: { title: "Expenditure", subtitle: "Review recorded expenditure and monitor the approval workflow.", description: "Expenditure register", action: "Add expenditure", id: "id", search: ["id", "description", "department", "vendor"], filters: [["status", "All statuses", ["Pending", "Under Review", "Approved", "Rejected"]]], columns: [["Reference", "id"], ["Description", "description"], ["Category", "category"], ["Department", "department"], ["Vendor", "vendor"], ["Date", "date"], ["Amount", "amount"], ["Status", "status"]], fields: [["description", "Description"], ["category", "Category", "select", ["Personnel", "Infrastructure", "Administration", "Health", "Education", "Works", "Agriculture", "Environment"]], ["department", "Department", "select", departments], ["vendor", "Payee / vendor"], ["date", "Date"], ["amount", "Amount (₦)", "number"], ["status", "Status", "select", ["Pending", "Under Review", "Approved", "Rejected"]]] },
  budget: { title: "Budget & Expenditure", subtitle: "Monitor approved appropriations, releases, and utilisation across key service areas.", description: "2026 annual budget", id: "id", search: ["category"], filters: [], columns: [["Category", "category"], ["Approved budget", "approved"], ["Released funds", "released"], ["Expenditure", "spent"], ["Balance", "balance"], ["Utilisation", "utilization"], ["Status", "status"]], fields: [["category", "Category"], ["approved", "Approved budget (₦)", "number"], ["released", "Released funds (₦)", "number"], ["spent", "Expenditure (₦)", "number"], ["balance", "Remaining balance (₦)", "number"], ["utilization", "Utilisation (%)", "number"], ["status", "Status", "select", ["On Track", "Attention Required"]]] },
  projects: { title: "Projects", subtitle: "Follow capital and service projects from commencement through delivery.", description: "Local government projects", action: "Create project", id: "id", search: ["id", "name", "location", "department", "contractor"], filters: [["status", "All statuses", ["Ongoing", "Completed", "Delayed", "Pending"]], ["department", "All departments", departments]], columns: [["Project", "name"], ["Location", "location"], ["Department", "department"], ["Contractor", "contractor"], ["Budget", "budget"], ["Start date", "start"], ["Expected completion", "completion"], ["Progress", "progress"], ["Status", "status"]], fields: [["name", "Project name"], ["location", "Location"], ["department", "Department", "select", departments], ["contractor", "Contractor"], ["budget", "Budget (₦)", "number"], ["start", "Start date"], ["completion", "Expected completion"], ["progress", "Progress (%)", "number"], ["status", "Status", "select", ["Pending", "Ongoing", "Completed", "Delayed"]]] },
  complaints: { title: "Citizen Complaints", subtitle: "Triage community feedback, assign follow-up, and track resolution.", description: "Community reports and service requests", action: "Log complaint", id: "id", search: ["id", "citizen", "category", "location", "description"], filters: [["department", "All departments", departments], ["priority", "All priorities", ["Urgent", "High", "Medium", "Normal"]], ["status", "All statuses", ["Submitted", "Assigned", "In Progress", "Resolved", "Closed"]]], columns: [["Complaint", "id"], ["Citizen", "citizen"], ["Category", "category"], ["Location", "location"], ["Reported", "date"], ["Department", "department"], ["Priority", "priority"], ["Status", "status"]], fields: [["citizen", "Citizen"], ["category", "Category", "select", ["Roads", "Water", "Waste", "Health", "Education", "Environment", "Revenue", "Other"]], ["location", "Location"], ["description", "Description", "textarea"], ["date", "Date"], ["department", "Assigned department", "select", departments], ["priority", "Priority", "select", ["Normal", "Medium", "High", "Urgent"]], ["status", "Status", "select", ["Submitted", "Assigned", "In Progress", "Resolved", "Closed"]]] },
  applications: { title: "Applications & Services", subtitle: "Review service applications and monitor processing status.", description: "Citizen service applications", action: "New application", id: "id", search: ["id", "applicant", "service", "reference"], filters: [["status", "All statuses", ["Submitted", "Under Review", "Approved", "Rejected", "Completed"]]], columns: [["Application", "id"], ["Applicant", "applicant"], ["Service", "service"], ["Reference", "reference"], ["Submitted", "submitted"], ["Department", "department"], ["Status", "status"]], fields: [["applicant", "Applicant"], ["service", "Service", "select", ["Business permit", "Market permit", "Event permit", "Advertisement permit", "General application", "Other service"]], ["reference", "Reference"], ["submitted", "Submitted date"], ["department", "Department", "select", departments], ["status", "Status", "select", ["Submitted", "Under Review", "Approved", "Rejected", "Completed"]]] },
  businesses: { title: "Businesses & Permits", subtitle: "Maintain a working register of local businesses and permit renewals.", description: "Local business register", action: "Register business", id: "id", search: ["id", "name", "owner", "category", "ward"], filters: [["status", "All statuses", ["Active", "Pending", "Inactive"]]], columns: [["Business", "name"], ["Owner", "owner"], ["Category", "category"], ["Ward", "ward"], ["Permit", "permit"], ["Last renewed", "renewed"], ["Status", "status"]], fields: [["name", "Business name"], ["owner", "Owner"], ["category", "Category"], ["ward", "Ward"], ["permit", "Permit status"], ["renewed", "Last renewed"], ["status", "Status", "select", ["Active", "Pending", "Inactive"]]] },
  audit: { title: "Audit Logs", subtitle: "Review a local demonstration history of administrative activity.", description: "Recent system activity", id: "id", search: ["id", "user", "action", "module", "device"], filters: [["status", "All outcomes", ["Success", "Demo", "Failed"]]], columns: [["Event ID", "id"], ["User", "user"], ["Action", "action"], ["Module", "module"], ["Date", "date"], ["Time", "time"], ["IP / Device", "device"], ["Status", "status"]], fields: [["user", "User"], ["action", "Action"], ["module", "Module"], ["date", "Date"], ["time", "Time"], ["device", "IP / Device"], ["status", "Status", "select", ["Success", "Demo", "Failed"]]] }
};

let db = loadData();
let activePage = "dashboard";
let currentPage = 1;
let chartInstances = [];
let tableSearch = "";
let globalSearch = "";
let activeFilters = {};
let tableSort = { field: "", direction: "asc" };

function loadData() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE) || "{}");
    const merged = {};
    Object.keys(seed).forEach((key) => merged[key] = Array.isArray(stored[key]) ? stored[key] : seed[key].map((item) => ({ ...item })));
    return merged;
  } catch (error) {
    console.error("Unable to read demonstration data from browser storage.", error);
    return Object.fromEntries(Object.entries(seed).map(([key, rows]) => [key, rows.map((item) => ({ ...item }))]));
  }
}

function saveData() {
  try {
    localStorage.setItem(STORAGE, JSON.stringify(db));
  } catch (error) {
    console.error("Unable to save demonstration data to browser storage.", error);
    toast("Changes could not be saved in this browser.", true);
  }
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function titleCase(value) { return String(value || "").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()); }
function money(value, compact = false) {
  const amount = Number(value || 0);
  if (compact && amount >= 1000000) return `₦${(amount / 1000000).toFixed(1)}m`;
  if (compact && amount >= 1000) return `₦${(amount / 1000).toFixed(0)}k`;
  return `₦${amount.toLocaleString("en-NG")}`;
}
function initials(name) { return String(name || "K").split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase(); }
function todayText() { return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric" }).format(new Date()); }
function dateText() { return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "long", year: "numeric" }).format(new Date()); }
function slug(value) { return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function toast(message, error = false) {
  const host = document.querySelector("#toast-region");
  if (!host) return;
  const element = document.createElement("div");
  element.className = `toast${error ? " error" : ""}`;
  element.innerHTML = `${icon(error ? "circle-exclamation" : "circle-check")}<span>${escapeHTML(message)}</span>`;
  host.append(element);
  window.setTimeout(() => element.remove(), 3500);
}
function addAudit(action, moduleName) {
  const rows = db.audit || (db.audit = []);
  rows.unshift({ id: `AUD-${Date.now()}`, user: "Administrator", action, module: moduleName, date: dateText(), time: new Intl.DateTimeFormat("en-NG", { hour: "2-digit", minute: "2-digit" }).format(new Date()), device: "Local browser demonstration", status: "Demo" });
  saveData();
}

function renderNav() {
  const nav = document.querySelector("#side-nav");
  if (!nav) return;
  nav.innerHTML = navGroups.map((group) => `<div class="nav-group"><span class="nav-group-label">${escapeHTML(group.label)}</span>${group.items.map(([id, label, glyph, count]) => `<a class="nav-link${activePage === id || (id === "projects" && activePage.startsWith("projects")) ? " active" : ""}" href="#${id}" data-page="${id}" title="${escapeHTML(label)}">${icon(glyph)}<span>${escapeHTML(label)}</span>${count ? `<span class="nav-count">${count}</span>` : ""}</a>`).join("")}</div>`).join("");
}
function pageTitle(page = activePage) {
  if (page.startsWith("projects-")) return titleCase(page.replace("projects-", "")) + " Projects";
  return ({ dashboard: "Dashboard", receipt: "Digital Receipt", reports: "Reports Centre", profile: "User Profile", settings: "Settings" })[page] || configs[page]?.title || "Dashboard";
}
function navigate(page) {
  activePage = page;
  currentPage = 1;
  tableSearch = "";
  globalSearch = "";
  activeFilters = {};
  tableSort = { field: "", direction: "asc" };
  const search = document.querySelector("#global-search");
  if (search) search.value = "";
  document.querySelector("#global-search-results")?.classList.remove("open");
  const title = pageTitle();
  document.querySelector("#breadcrumb-current").textContent = title;
  renderNav();
  chartInstances.forEach((chart) => chart.destroy());
  chartInstances = [];
  const content = document.querySelector("#page-content");
  content.innerHTML = renderPage();
  document.querySelectorAll("[data-page]").forEach((item) => {
    if (item.dataset.page === page) item.classList.add("active");
  });
  if (page === "dashboard") drawDashboardCharts();
  if (page === "revenue") drawRevenueCharts();
  if (page === "budget") drawBudgetChart();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function pageHeader(title, description, actionLabel = "", action = "") {
  return `<div class="page-heading"><div><h1>${escapeHTML(title)}</h1><p>${escapeHTML(description)}</p></div><div class="heading-actions">${actionLabel ? `<button class="button button-primary" data-action="${escapeHTML(action)}">${icon("plus")} ${escapeHTML(actionLabel)}</button>` : ""}<button class="icon-button" data-toast="This view is up to date." aria-label="Refresh view">${icon("rotate")}</button></div></div>`;
}
function renderPage() {
  if (activePage === "dashboard") return renderDashboard();
  if (activePage === "revenue") return renderRevenue();
  if (activePage === "budget") return renderBudget();
  if (activePage.startsWith("projects")) return renderProjects();
  if (activePage === "reports") return renderReports();
  if (activePage === "receipt") return renderReceipt();
  if (activePage === "profile") return renderProfile();
  if (activePage === "settings") return renderSettings();
  if (configs[activePage]) return renderTablePage(activePage);
  return renderDashboard();
}

function renderDashboard() {
  const stats = [
    ["users", "blue", "1,248", "Total Staff", "+4.8%", "Across 14 departments"],
    ["building", "green", "14", "Departments", "Stable", "All directorates active"],
    ["file-lines", "amber", "18", "Pending Memos", "+3 today", "5 awaiting your review"],
    ["stamp", "violet", "07", "Pending Approvals", "3 urgent", "Across finance and admin"],
    ["diagram-project", "teal", "24", "Active Projects", "+2 this quarter", "5 delivery milestones due"],
    ["naira-sign", "green", "₦1.84m", "Revenue Today", "+12.6%", "vs. previous working day"],
    ["comments", "rose", "12", "Pending Complaints", "4 new", "Average resolution: 3.2 days"],
    ["list-check", "blue", "09", "Open Directives", "2 overdue", "6 due this week"]
  ];
  const quick = [["file-circle-plus", "green", "New Memo", "memos"], ["list-check", "amber", "New Directive", "directives"], ["user-plus", "blue", "Add Staff", "staff"], ["cloud-arrow-up", "violet", "Upload Document", "documents"], ["calendar-plus", "teal", "Create Meeting", "meetings"], ["diagram-project", "green", "New Project", "projects"], ["naira-sign", "amber", "View Revenue", "revenue"], ["chart-column", "blue", "View Reports", "reports"]];
  return `<div class="dashboard-welcome"><div class="welcome-copy"><span class="eyebrow">MONDAY, 05 OCTOBER 2026</span><h1>Good morning, Administrator</h1><p>Welcome to the Kubau LGA Digital Secretariat. Here is your organisation's operational snapshot.</p></div><div class="welcome-meta">${icon("location-dot")} Kubau, Kaduna State <span>·</span> ${icon("calendar-days")} ${todayText()}</div></div>
    <div class="stat-grid">${stats.map(([glyph, color, value, label, trend, note]) => `<article class="stat-card"><div class="stat-top"><span class="stat-icon ${color}">${icon(glyph)}</span><span class="stat-trend${trend.includes("overdue") ? " down" : ""}">${escapeHTML(trend)}</span></div><div class="stat-value">${value}</div><div class="stat-label">${label}</div><div class="stat-note">${note}</div></article>`).join("")}</div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-heading"><div><h2>Revenue overview</h2><p>Monthly local revenue collected across all channels</p></div><div class="panel-tools"><select class="select-compact" id="revenue-period"><option>2026</option><option>2025</option></select><button class="icon-button" data-page="revenue" aria-label="View revenue">${icon("arrow-up-right-from-square")}</button></div></div><div class="chart-legend"><span><i class="legend-dot"></i> Collected revenue</span><span><i class="legend-dot alt"></i> Monthly target</span></div><div class="chart-wrap"><canvas id="dashboard-revenue-chart" aria-label="Revenue overview chart"></canvas></div></section>
      <section class="panel"><div class="panel-heading"><div><h2>Department performance</h2><p>Operational score by directorate</p></div><button class="icon-button" data-page="departments" aria-label="View departments">${icon("arrow-up-right-from-square")}</button></div><div class="chart-wrap"><canvas id="department-chart" aria-label="Department performance chart"></canvas></div></section></div>
    <div class="mini-chart-grid"><section class="panel mini-chart-card"><div class="panel-heading"><div><h2>Project status</h2><p>Portfolio health · 24 active projects</p></div></div><div class="chart-wrap"><canvas id="project-chart" aria-label="Project status chart"></canvas></div></section>
      <section class="panel mini-chart-card"><div class="panel-heading"><div><h2>Citizen complaints</h2><p>Case movement this quarter</p></div></div><div class="chart-wrap"><canvas id="complaint-chart" aria-label="Complaints chart"></canvas></div></section>
      <section class="panel"><div class="panel-heading"><div><h2>Recent activity</h2><p>Latest updates across the secretariat</p></div><button class="text-button" data-page="audit">View all</button></div><div class="activity-list">
        ${[["file-lines", "amber", "Finance Department submitted monthly revenue report", "Finance · Amina Sani", "12 min"], ["stamp", "green", "Chairman approved procurement request", "Procurement · Admin", "38 min"], ["road", "blue", "Works Department updated road project", "Works · Hassan Balarabe", "1 hr"], ["calendar-check", "green", "HR approved staff leave request", "Personnel/HR · Kabiru Adamu", "2 hrs"], ["comments", "rose", "New complaint submitted for Anchau ward", "Citizens · Service Desk", "3 hrs"], ["list-check", "amber", "Secretary issued administrative directive", "Secretariat · Secretary", "4 hrs"]].map(([glyph, color, action, meta, time]) => `<div class="activity-row"><span class="activity-mark ${color}">${icon(glyph)}</span><div class="activity-copy"><strong>${action}</strong><p>${meta}</p></div><span class="activity-time">${time}</span></div>`).join("")}
      </div></section></div>
    <section class="panel section-panel"><div class="panel-heading"><div><h2>Quick actions</h2><p>Common tasks, ready when you are</p></div><span class="status-badge active">Workspace active</span></div><div class="quick-actions">${quick.map(([glyph, color, label, page]) => `<button class="quick-action" data-quick="${page}"><span class="stat-icon ${color}">${icon(glyph)}</span><span>${label}</span></button>`).join("")}</div></section>`;
}

function chartDefaults() {
  return { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { backgroundColor: "#1f3329", padding: 9, titleFont: { size: 10 }, bodyFont: { size: 10 } } } };
}
function makeChart(id, type, data, options = {}) {
  const canvas = document.getElementById(id);
  if (!canvas || !window.Chart) return;
  chartInstances.push(new Chart(canvas, { type, data, options: { ...chartDefaults(), ...options } }));
}
function drawDashboardCharts() {
  if (!window.Chart) return;
  makeChart("dashboard-revenue-chart", "bar", { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], datasets: [
    { label: "Collected", data: [8.4, 9.1, 8.7, 10.2, 11.4, 10.6, 12.1, 13.8, 14.4, 15.2, null, null], backgroundColor: "#27815f", borderRadius: 3, barPercentage: .56 },
    { label: "Target", data: [10, 10, 10, 11, 11, 11, 12, 12, 13, 13, 13, 14], backgroundColor: "#dce8df", borderRadius: 3, barPercentage: .56 }
  ] }, { scales: { x: { grid: { display: false }, ticks: { color: "#8d9992", font: { size: 9 } }, border: { display: false } }, y: { grid: { color: "#eef2ef" }, ticks: { color: "#8d9992", font: { size: 9 }, callback: (value) => `₦${value}m` }, border: { display: false }, beginAtZero: true } } });
  makeChart("department-chart", "bar", { labels: ["Admin", "Finance", "Works", "Health", "Education", "Revenue"], datasets: [{ data: [92, 88, 76, 90, 84, 82], backgroundColor: ["#4a9872", "#6aa786", "#a7c5b1", "#77ad91", "#8eb89f", "#559778"], borderRadius: 4, barThickness: 12 }] }, { indexAxis: "y", scales: { x: { min: 0, max: 100, grid: { color: "#eef2ef" }, ticks: { color: "#8d9992", font: { size: 8 }, callback: (value) => `${value}%` }, border: { display: false } }, y: { grid: { display: false }, ticks: { color: "#69766e", font: { size: 9 } }, border: { display: false } } } });
  makeChart("project-chart", "doughnut", { labels: ["Completed", "Ongoing", "Delayed", "Pending"], datasets: [{ data: [9, 11, 3, 1], backgroundColor: ["#3e9169", "#81b696", "#d99853", "#dfe8e2"], borderWidth: 2, borderColor: "#fff", hoverOffset: 4 }] }, { cutout: "70%", plugins: { ...chartDefaults().plugins, legend: { display: true, position: "bottom", labels: { usePointStyle: true, pointStyle: "circle", boxWidth: 7, padding: 13, color: "#7d8982", font: { size: 9 } } } } });
  makeChart("complaint-chart", "bar", { labels: ["Submitted", "Assigned", "In progress", "Resolved"], datasets: [{ data: [42, 28, 19, 76], backgroundColor: ["#d79a52", "#799bb5", "#6c9c7d", "#428968"], borderRadius: 4, barThickness: 18 }] }, { scales: { x: { grid: { display: false }, ticks: { color: "#7d8982", font: { size: 8 } }, border: { display: false } }, y: { grid: { color: "#eef2ef" }, ticks: { color: "#9aa49e", font: { size: 8 } }, border: { display: false }, beginAtZero: true } } });
}

function renderTablePage(key) {
  const config = configs[key];
  const records = db[key] || [];
  const countLabel = key === "staff" ? `${records.length.toLocaleString()} staff records` : `${records.length.toLocaleString()} records`;
  const quickStats = key === "staff" ? `<div class="substat-row"><div class="substat"><span>Total staff</span><strong>1,248</strong></div><div class="substat"><span>Active</span><strong>1,184</strong></div><div class="substat"><span>On leave</span><strong>42</strong></div><div class="substat"><span>Departments</span><strong>14</strong></div></div>` : key === "complaints" ? `<div class="substat-row"><div class="substat"><span>Open cases</span><strong>12</strong></div><div class="substat"><span>New this week</span><strong>7</strong></div><div class="substat"><span>Resolved this month</span><strong>86</strong></div><div class="substat"><span>Avg. resolution</span><strong>3.2 days</strong></div></div>` : key === "memos" ? `<div class="substat-row"><div class="substat"><span>All memos</span><strong>${records.length + 37}</strong></div><div class="substat"><span>Awaiting action</span><strong>18</strong></div><div class="substat"><span>Approved this month</span><strong>42</strong></div><div class="substat"><span>Average review</span><strong>1.4 days</strong></div></div>` : key === "directives" ? `<div class="substat-row"><div class="substat"><span>Open directives</span><strong>9</strong></div><div class="substat"><span>In progress</span><strong>5</strong></div><div class="substat"><span>Completed this month</span><strong>13</strong></div><div class="substat"><span>Overdue</span><strong>2</strong></div></div>` : "";
  return `${pageHeader(config.title, config.subtitle, config.action, key)}${quickStats}<section class="panel section-panel"><div class="panel-heading"><div><h2>${config.description}</h2><p>${countLabel} · Last updated just now</p></div><span class="status-badge active">Live workspace</span></div>${renderTable(key)}</section>`;
}

function cellContent(key, record, field) {
  const value = record[field] ?? "—";
  if (field === "status") return `<span class="status-badge ${slug(value)}">${escapeHTML(value)}</span>`;
  if (field === "priority") return `<span class="priority ${slug(value)}">${escapeHTML(value)}</span>`;
  if (field === "amount" || ["target", "collected", "budget", "approved", "released", "spent", "balance"].includes(field)) return escapeHTML(money(value));
  if (field === "progress" || field === "performance" || field === "utilization") return `<div class="progress-cell"><div class="progress-track"><span style="width:${Math.min(100, Math.max(0, Number(value) || 0))}%"></span></div><small>${escapeHTML(value)}%</small></div>`;
  if (key === "staff" && field === "name") return `<span class="cell-primary"><span class="avatar">${escapeHTML(initials(value))}</span>${escapeHTML(value)}</span>`;
  if (["id"].includes(field)) return `<span class="cell-id">${escapeHTML(value)}</span>`;
  if (["date", "employed", "issued", "deadline", "completion", "start", "submitted", "renewed", "time", "device", "email", "phone", "description"].includes(field)) return `<span class="cell-muted">${escapeHTML(value)}</span>`;
  return escapeHTML(value);
}

function renderTable(key) {
  const config = configs[key];
  let rows = (db[key] || []).slice();
  const query = String(tableSearch || globalSearch).trim().toLowerCase();
  if (query) rows = rows.filter((record) => config.search?.some((field) => String(record[field] || "").toLowerCase().includes(query)) || (!config.search && JSON.stringify(record).toLowerCase().includes(query)));
  for (const [field, value] of Object.entries(activeFilters)) if (value) rows = rows.filter((record) => String(record[field] || "") === value);
  if (tableSort.field) rows.sort((left, right) => {
    const a = left[tableSort.field], b = right[tableSort.field];
    const comparison = typeof a === "number" || typeof b === "number" ? Number(a || 0) - Number(b || 0) : String(a || "").localeCompare(String(b || ""), "en", { numeric: true, sensitivity: "base" });
    return comparison * (tableSort.direction === "asc" ? 1 : -1);
  });
  const perPage = 8, pages = Math.max(1, Math.ceil(rows.length / perPage));
  currentPage = Math.min(currentPage, pages);
  const pageRows = rows.slice((currentPage - 1) * perPage, currentPage * perPage);
  return `<div class="toolbar"><div class="toolbar-left"><label class="table-search">${icon("magnifying-glass")}<input type="search" id="table-search" value="${escapeHTML(tableSearch || globalSearch)}" placeholder="Search ${escapeHTML(config.title.toLowerCase())}..." aria-label="Search ${escapeHTML(config.title)}"></label>${config.filters.map(([field, label, values]) => `<select class="filter-select" data-filter="${escapeHTML(field)}" aria-label="${escapeHTML(label)}"><option value="">${escapeHTML(label)}</option>${values.map((item) => `<option value="${escapeHTML(item)}"${activeFilters[field] === item ? " selected" : ""}>${escapeHTML(item)}</option>`).join("")}</select>`).join("")}</div><div class="toolbar-right"><button class="button button-secondary button-sm" data-action="export-${escapeHTML(key)}">${icon("file-arrow-down")} Export</button></div></div><div class="table-scroll"><table class="data-table"><thead><tr>${config.columns.map(([label, field]) => `<th><button class="sort-button" data-sort="${escapeHTML(field)}">${escapeHTML(label)} ${tableSort.field === field ? icon(tableSort.direction === "asc" ? "arrow-up-short-wide" : "arrow-down-wide-short") : ""}</button></th>`).join("")}<th>Actions</th></tr></thead><tbody>${pageRows.length ? pageRows.map((record) => { const index = db[key].indexOf(record); return `<tr>${config.columns.map(([, field]) => `<td>${cellContent(key, record, field)}</td>`).join("")}<td><div class="table-actions"><button data-record-action="view" data-key="${key}" data-index="${index}" title="View" aria-label="View record">${icon("eye")}</button><button data-record-action="edit" data-key="${key}" data-index="${index}" title="Edit" aria-label="Edit record">${icon("pen")}</button>${["memos", "applications", "expenditure"].includes(key) && ["Submitted", "Under Review", "Pending"].includes(record.status) ? `<button data-record-action="approve" data-key="${key}" data-index="${index}" title="Approve" aria-label="Approve">${icon("check")}</button>` : ""}${key === "memos" && ["Submitted", "Under Review"].includes(record.status) ? `<button data-record-action="reject" data-key="${key}" data-index="${index}" title="Reject" aria-label="Reject">${icon("xmark")}</button>` : ""}${key === "meetings" ? `<button data-record-action="attendance" data-key="${key}" data-index="${index}" title="Mark attendance" aria-label="Mark attendance">${icon("user-check")}</button><button data-record-action="minutes" data-key="${key}" data-index="${index}" title="Record minutes" aria-label="Record minutes">${icon("note-sticky")}</button>` : ""}${key === "documents" ? `<button data-record-action="download" data-key="${key}" data-index="${index}" title="Download" aria-label="Download document">${icon("download")}</button><button data-record-action="share" data-key="${key}" data-index="${index}" title="Share" aria-label="Share document">${icon("share-nodes")}</button>${record.status !== "Archived" ? `<button data-record-action="archive" data-key="${key}" data-index="${index}" title="Archive" aria-label="Archive document">${icon("box-archive")}</button>` : ""}` : ""}${key === "memos" ? `<button data-record-action="download" data-key="${key}" data-index="${index}" title="Download" aria-label="Download memo">${icon("download")}</button><button data-record-action="print" data-key="${key}" data-index="${index}" title="Print" aria-label="Print memo">${icon("print")}</button>` : ""}<button class="danger" data-record-action="delete" data-key="${key}" data-index="${index}" title="Delete" aria-label="Delete record">${icon("trash-can")}</button></div></td></tr>`; }).join("") : `<tr><td colspan="${config.columns.length + 1}"><div class="empty-state">${icon("folder-open")}No matching records found. Try changing your search or filters.</div></td></tr>`}</tbody></table></div><div class="table-footer"><span>Showing ${rows.length ? (currentPage - 1) * perPage + 1 : 0}–${Math.min(currentPage * perPage, rows.length)} of ${rows.length} records</span><div class="pagination"><button data-pagination="prev" ${currentPage === 1 ? "disabled" : ""} aria-label="Previous page">${icon("chevron-left")}</button>${Array.from({ length: pages }, (_, index) => `<button data-pagination="${index + 1}" class="${currentPage === index + 1 ? "active" : ""}">${index + 1}</button>`).join("")}<button data-pagination="next" ${currentPage === pages ? "disabled" : ""} aria-label="Next page">${icon("chevron-right")}</button></div></div>`;
}

function renderRevenue() {
  const total = db.revenue.reduce((sum, row) => sum + Number(row.amount || 0), 0) + 1835000;
  return `${pageHeader("Revenue Management", "Monitor local revenue collection, transaction records, and performance.", "Record collection", "revenue")}
    <div class="substat-row"><div class="substat"><span>Today's revenue</span><strong>₦1.84m</strong></div><div class="substat"><span>Monthly revenue</span><strong>₦14.4m</strong></div><div class="substat"><span>Annual revenue</span><strong>${money(total + 112000000, true)}</strong></div><div class="substat"><span>Revenue target</span><strong>₦180m</strong></div><div class="substat"><span>Outstanding revenue</span><strong>₦8.6m</strong></div><div class="substat"><span>Total transactions</span><strong>${(db.revenue.length + 4920).toLocaleString()}</strong></div></div>
    <div class="dashboard-grid"><section class="panel"><div class="panel-heading"><div><h2>Revenue performance</h2><p>Collected revenue vs. target · 2026</p></div></div><div class="chart-wrap"><canvas id="revenue-main-chart"></canvas></div></section><section class="panel"><div class="panel-heading"><div><h2>Revenue by source</h2><p>Share of year-to-date collections</p></div></div><div class="chart-wrap"><canvas id="revenue-source-chart"></canvas></div></section></div>
    <section class="panel section-panel"><div class="panel-heading"><div><h2>Recent transactions</h2><p>Recorded digital receipts · demo data only</p></div><button class="button button-secondary button-sm" data-page="receipt">${icon("receipt")} View sample receipt</button></div>${renderTable("revenue")}</section>`;
}
function drawRevenueCharts() {
  if (!window.Chart) return;
  makeChart("revenue-main-chart", "line", { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"], datasets: [{ label: "Revenue collected", data: [8.4, 9.1, 8.7, 10.2, 11.4, 10.6, 12.1, 13.8, 14.4, 15.2], borderColor: "#27815f", backgroundColor: "#27815f18", fill: true, tension: .35, pointRadius: 3 }, { label: "Target", data: [10, 10, 10, 11, 11, 11, 12, 12, 13, 13], borderColor: "#c7d7cb", borderDash: [5, 4], tension: .2, pointRadius: 0 }] }, { scales: { x: { grid: { display: false }, ticks: { color: "#8d9992", font: { size: 9 } }, border: { display: false } }, y: { grid: { color: "#eef2ef" }, ticks: { color: "#8d9992", font: { size: 9 }, callback: (value) => `₦${value}m` }, border: { display: false }, beginAtZero: true } }, plugins: { ...chartDefaults().plugins, legend: { display: true, position: "bottom", labels: { usePointStyle: true, boxWidth: 7, color: "#7d8982", font: { size: 9 } } } } });
  makeChart("revenue-source-chart", "doughnut", { labels: ["Market fees", "Business permits", "Stall fees", "Motor park", "Other"], datasets: [{ data: [34, 23, 18, 12, 13], backgroundColor: ["#287e5b", "#70a987", "#9bbba4", "#d4a15e", "#dce7df"], borderWidth: 2, borderColor: "#fff" }] }, { cutout: "65%", plugins: { ...chartDefaults().plugins, legend: { display: true, position: "bottom", labels: { usePointStyle: true, boxWidth: 7, padding: 11, color: "#7d8982", font: { size: 8 } } } } });
}
function renderBudget() {
  return `${pageHeader("Budget & Expenditure", "Monitor approved appropriations, releases, and utilisation across service areas.", "Add budget line", "budget")}<div class="substat-row"><div class="substat"><span>Annual budget</span><strong>₦1.34bn</strong></div><div class="substat"><span>Approved budget</span><strong>₦1.26bn</strong></div><div class="substat"><span>Released funds</span><strong>₦917.8m</strong></div><div class="substat"><span>Expenditure</span><strong>₦786.2m</strong></div><div class="substat"><span>Remaining balance</span><strong>₦553.8m</strong></div><div class="substat"><span>Average utilisation</span><strong>62.4%</strong></div></div><section class="panel"><div class="panel-heading"><div><h2>Budget allocation by category</h2><p>Approved allocation · 2026 financial year</p></div></div><div class="chart-wrap"><canvas id="budget-chart"></canvas></div></section><section class="panel section-panel"><div class="panel-heading"><div><h2>Budget lines</h2><p>Appropriation and utilisation tracking</p></div></div>${renderTable("budget")}</section>`;
}
function drawBudgetChart() {
  if (!window.Chart) return;
  makeChart("budget-chart", "bar", { labels: ["Personnel", "Infrastructure", "Administration", "Health", "Education", "Agriculture", "Environment", "Works"], datasets: [{ label: "Approved", data: [485, 320, 145, 98, 135, 72, 46, 84], backgroundColor: "#dce8df", borderRadius: 4 }, { label: "Spent", data: [341, 186, 98, 51, 71, 38, 22, 49], backgroundColor: "#378b63", borderRadius: 4 }] }, { scales: { x: { grid: { display: false }, ticks: { color: "#839088", font: { size: 9 } }, border: { display: false } }, y: { grid: { color: "#eef2ef" }, ticks: { color: "#8d9992", font: { size: 9 }, callback: (value) => `₦${value}m` }, border: { display: false }, beginAtZero: true } }, plugins: { ...chartDefaults().plugins, legend: { display: true, position: "bottom", labels: { usePointStyle: true, boxWidth: 7, color: "#7d8982", font: { size: 9 } } } } });
}

function renderProjects() {
  const state = activePage === "projects-ongoing" ? "Ongoing" : activePage === "projects-completed" ? "Completed" : activePage === "projects-delayed" ? "Delayed" : "";
  let projects = db.projects.filter((project) => !state || project.status === state);
  const query = globalSearch.toLowerCase();
  if (query) projects = projects.filter((project) => JSON.stringify(project).toLowerCase().includes(query));
  const totalValue = db.projects.reduce((sum, project) => sum + Number(project.budget || 0), 0);
  return `${pageHeader(state ? `${state} Projects` : "Projects", "Monitor local government capital projects, delivery timelines, and progress.", "Create project", "projects")}
    <div class="substat-row"><div class="substat"><span>Total projects</span><strong>24</strong></div><div class="substat"><span>Completed</span><strong>9</strong></div><div class="substat"><span>Ongoing</span><strong>11</strong></div><div class="substat"><span>Delayed</span><strong>3</strong></div><div class="substat"><span>Total project value</span><strong>${money(totalValue + 459000000, true)}</strong></div></div>
    <div class="toolbar panel"><div class="toolbar-left"><label class="table-search">${icon("magnifying-glass")}<input type="search" id="project-search" value="${escapeHTML(globalSearch)}" placeholder="Search projects..." aria-label="Search projects"></label><select class="filter-select" id="project-status"><option value="">All statuses</option>${["Ongoing", "Completed", "Delayed", "Pending"].map((item) => `<option${state === item ? " selected" : ""}>${item}</option>`).join("")}</select></div><button class="button button-secondary button-sm" data-action="export-projects">${icon("file-arrow-down")} Export</button></div>
    <div class="project-grid">${projects.length ? projects.map((project) => `<article class="project-card"><div class="project-card-top"><h3>${escapeHTML(project.name)}</h3><span class="status-badge ${slug(project.status)}">${escapeHTML(project.status)}</span></div><p>${icon("location-dot")} ${escapeHTML(project.location)} · ${escapeHTML(project.department)}</p><dl><div><dt>Contractor</dt><dd>${escapeHTML(project.contractor)}</dd></div><div><dt>Budget</dt><dd>${money(project.budget)}</dd></div><div><dt>Start date</dt><dd>${escapeHTML(project.start)}</dd></div><div><dt>Expected completion</dt><dd>${escapeHTML(project.completion)}</dd></div></dl><div class="project-progress"><div><span>Delivery progress</span><strong>${project.progress}%</strong></div><div class="progress-track"><span style="width:${project.progress}%"></span></div></div><div class="table-actions" style="justify-content:flex-end;margin-top:10px"><button data-record-action="view" data-key="projects" data-index="${db.projects.indexOf(project)}" aria-label="View project">${icon("eye")}</button><button data-record-action="edit" data-key="projects" data-index="${db.projects.indexOf(project)}" aria-label="Edit project">${icon("pen")}</button></div></article>`).join("") : `<div class="panel empty-state">${icon("diagram-project")}No projects match this view.</div>`}</div>`;
}

function renderReports() {
  const categories = [
    ["Revenue reports", "Daily revenue", "Revenue collected by source and collection area.", "chart-line", "revenue"], ["Revenue reports", "Monthly revenue", "Monthly performance against revenue targets.", "chart-column", "revenue"], ["Revenue reports", "Collector performance", "Targets, collections, and collector activity.", "people-group", "collectors"], ["Revenue reports", "Revenue by source", "Compare receipts across revenue streams.", "coins", "revenue"], ["Administrative", "Memo report", "Status and turnaround across memo workflows.", "file-lines", "memos"], ["Administrative", "Correspondence report", "Incoming and outgoing correspondence register.", "envelope", "correspondence"], ["Administrative", "Staff report", "Workforce distribution and employment status.", "users", "staff"], ["Administrative", "Department performance", "Operational scorecard by directorate.", "building", "departments"], ["Project reports", "Project status", "Progress, milestones, and project delivery.", "diagram-project", "projects"], ["Project reports", "Project expenditure", "Project allocations and expenditure overview.", "money-bill-transfer", "budget"], ["Complaint reports", "Complaints by category", "Community cases and issue categories.", "comments", "complaints"], ["Complaint reports", "Resolution performance", "Case volumes, resolution time, and follow-up.", "circle-check", "complaints"]
  ];
  return `${pageHeader("Reports Centre", "Generate operational summaries for revenue, administration, projects, and citizen services.")}<div class="panel section-panel"><div class="panel-heading"><div><h2>Report library</h2><p>Select a report to configure and generate a local demonstration output</p></div><div class="panel-tools"><select class="select-compact" id="report-period"><option>October 2026</option><option>Q3 2026</option><option>2026 YTD</option></select></div></div><div class="report-grid" style="padding:0 14px 15px">${categories.map(([group, name, description, glyph, page]) => `<article class="report-card"><span class="report-icon">${icon(glyph)}</span><span class="eyebrow" style="display:inline-block;margin-left:6px;color:#8d9992">${group}</span><h3>${name}</h3><p>${description}</p><div class="report-actions"><button class="button button-secondary button-sm" data-report="${name}" data-format="PDF">PDF</button><button class="button button-secondary button-sm" data-report="${name}" data-format="Excel">Excel</button><button class="button button-secondary button-sm" data-report="${name}" data-format="Print">Print</button></div></article>`).join("")}</div></div>`;
}

function renderReceipt() {
  return `${pageHeader("Digital Receipt", "Review a sample receipt and test print and verification interactions.")}<section class="receipt-card" id="receipt-print"><div class="receipt-brand"><span class="brand-seal">${icon("landmark")}</span><span><strong>KUBAU LOCAL GOVERNMENT</strong><small>Kaduna State, Nigeria</small></span></div><h2 class="receipt-title">OFFICIAL REVENUE RECEIPT</h2><p class="receipt-reference">Receipt No: <strong>KUB-REV-2026-000245</strong></p><div class="receipt-fields"><div class="receipt-field"><label>Payer</label><strong>Muhammad Musa</strong></div><div class="receipt-field"><label>Revenue type</label><strong>Market Stall Fee</strong></div><div class="receipt-field"><label>Collection area</label><strong>Anchau Market</strong></div><div class="receipt-field"><label>Payment method</label><strong>POS</strong></div><div class="receipt-field"><label>Date</label><strong>05 October 2026</strong></div><div class="receipt-field"><label>Collector</label><strong>COL-023</strong></div><div class="receipt-field amount"><label>Amount received</label><strong>₦15,000</strong></div></div><div class="receipt-demo-note">${icon("circle-info")} Illustrative sample receipt for demonstration only. Not a valid government payment instrument.</div><div class="receipt-actions"><button class="button button-primary button-sm" data-action="print-receipt">${icon("print")} Print Receipt</button><button class="button button-secondary button-sm" data-action="download-receipt">${icon("download")} Download</button><button class="button button-secondary button-sm" data-action="verify-receipt">${icon("shield-check")} Verify Receipt</button></div></section>`;
}
function renderProfile() {
  return `${pageHeader("My Profile", "Manage your demonstration user identity and workspace preferences.")}<section class="panel" style="padding:20px"><div style="display:flex;align-items:center;gap:14px;padding-bottom:18px;border-bottom:1px solid var(--line)"><span class="avatar" style="width:60px;height:60px;font-size:18px">AA</span><div><h2 style="margin:0;font:700 16px Manrope">Administrator</h2><p style="margin:4px 0;color:#88948d;font-size:10px">System Administrator · KLG-ADM-001</p><span class="status-badge active">Active account</span></div><button class="button button-secondary button-sm" style="margin-left:auto" data-action="edit-profile">${icon("pen")} Edit profile</button></div><div class="detail-grid" style="margin-top:15px">${[["Staff ID", "KLG-ADM-001"], ["Position", "System Administrator"], ["Department", "Administration"], ["Email", "admin@kubau.gov.ng"], ["Phone", "+234 800 000 0000"], ["Role", "Administrator"], ["Location", "Kubau LGA, Kaduna State"], ["Last sign-in", "Today · Local browser demo"]].map(([label, value]) => `<div class="detail-field"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div></section><div class="mini-chart-grid"><section class="panel"><div class="panel-heading"><div><h2>Personal information</h2><p>Demonstration account details</p></div></div><div style="padding:0 16px 14px"><div class="setting-row"><div><strong>Language</strong><small>English (Nigeria)</small></div><span class="status-badge active">Default</span></div><div class="setting-row"><div><strong>Work location</strong><small>Kubau Local Government Secretariat</small></div></div></div></section><section class="panel"><div class="panel-heading"><div><h2>Security &amp; activity</h2><p>Local-only prototype session</p></div></div><div style="padding:0 16px 14px"><div class="setting-row"><div><strong>Authentication</strong><small>No server-side account or credentials</small></div><span class="status-badge draft">Demo</span></div><div class="setting-row"><div><strong>Recent activity</strong><small>Last seen today in this browser</small></div></div></div></section></div>`;
}
function renderSettings() {
  return `${pageHeader("Settings", "Configure local appearance and preferences for this browser demonstration.")}<section class="panel section-panel"><div class="panel-heading"><div><h2>System preferences</h2><p>Changes are stored locally in this browser</p></div></div><div style="padding:0 16px 10px"><div class="setting-row"><div><strong>Dark appearance</strong><small>Use a dark theme for the workspace</small></div><label class="switch"><input type="checkbox" id="dark-mode-toggle" ${document.body.classList.contains("dark-mode") ? "checked" : ""}><span></span></label></div><div class="setting-row"><div><strong>Notification updates</strong><small>Show notifications in the top navigation</small></div><label class="switch"><input type="checkbox" checked><span></span></label></div><div class="setting-row"><div><strong>Organisation</strong><small>Kubau Local Government Area · Kaduna State</small></div><span class="status-badge draft">Prototype</span></div><div class="setting-row"><div><strong>Data storage</strong><small>Records and preferences stay in this browser only</small></div><button class="button button-danger button-sm" data-action="clear-demo-data">${icon("trash-can")} Reset local records</button></div></div></section><section class="panel section-panel"><div class="panel-heading"><div><h2>About KUB-ISMIS</h2><p>Digital Secretariat &amp; Management Information System</p></div></div><div style="padding:0 16px 15px;color:#77837c;font-size:10px;line-height:1.8">This is a frontend-only prototype for demonstration. It is not an official government website and is not connected to council services, identity systems, or authoritative records. Do not enter sensitive or confidential information.</div></section>`;
}

function getRecord(key, index) { return db[key]?.[Number(index)]; }
function searchAcrossRecords(query) {
  const matches = [];
  Object.entries(db).forEach(([key, records]) => {
    if (!configs[key]) return;
    records.forEach((record) => {
      if (JSON.stringify(record).toLowerCase().includes(query.toLowerCase())) matches.push({ key, record });
    });
  });
  return matches.slice(0, 6);
}
function renderGlobalSearchResults(query) {
  const host = document.querySelector("#global-search-results");
  if (!host) return;
  const matches = searchAcrossRecords(query);
  host.innerHTML = `<span class="global-search-label">${matches.length ? "Matching records" : "No matching records"}</span>${matches.map(({ key, record }) => {
    const name = record.name || record.title || record.subject || record.payer || record.citizen || record.description || record.id;
    return `<button type="button" data-global-search-page="${key}" data-global-search-query="${escapeHTML(query)}"><span class="global-result-icon">${icon("magnifying-glass")}</span><span><strong>${escapeHTML(name)}</strong><small>${escapeHTML(configs[key].title)}${record.id ? ` · ${escapeHTML(record.id)}` : ""}</small></span>${icon("arrow-up-right-from-square")}</button>`;
  }).join("")}`;
  host.classList.add("open");
}
function openModal(title, subtitle, body, footer = "", wide = false) {
  const host = document.querySelector("#modal-host");
  host.innerHTML = `<div class="modal-backdrop" data-modal-backdrop><section class="modal${wide ? " modal-wide" : ""}" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-header"><div><h2 id="modal-title">${escapeHTML(title)}</h2><p>${escapeHTML(subtitle || "")}</p></div><button class="modal-close" data-close-modal aria-label="Close dialog">${icon("xmark")}</button></div><div class="modal-body">${body}</div>${footer ? `<div class="modal-footer">${footer}</div>` : ""}</section></div>`;
  document.body.style.overflow = "hidden";
  host.querySelector("[data-close-modal]")?.focus();
}
function closeModal() {
  document.querySelector("#modal-host").innerHTML = "";
  document.body.style.overflow = "";
}
function detailRecord(key, record) {
  const config = configs[key];
  if (key === "memos") {
    const memoPreview = `<article class="memo-preview"><div class="memo-preview-brand">${icon("landmark")}<span><strong>KUBAU LOCAL GOVERNMENT AREA</strong><small>OFFICE OF THE SECRETARIAT · DEMONSTRATION MEMO</small></span></div><div class="memo-preview-number">${escapeHTML(record.id)}</div><div class="memo-preview-fields"><p><span>TO</span><strong>${escapeHTML(record.to)}</strong></p><p><span>FROM</span><strong>${escapeHTML(record.from)} · ${escapeHTML(record.department)}</strong></p><p><span>DATE</span><strong>${escapeHTML(record.date)}</strong></p><p><span>PRIORITY</span><strong>${escapeHTML(record.priority)}</strong></p><p><span>SUBJECT</span><strong>${escapeHTML(record.subject)}</strong></p></div><div class="memo-preview-copy">Kindly review and take the appropriate action on the matter stated above. This sample memo demonstrates a possible digital secretariat workflow and does not represent an official communication.</div><div class="memo-preview-sign">For: ${escapeHTML(record.from)}<br><small>${escapeHTML(record.department)}</small></div><span class="memo-preview-watermark">PROTOTYPE</span></article>`;
    openModal(`Memo preview · ${record.id}`, "Illustrative memo document · not an official government record", memoPreview, `<button class="button button-secondary" data-close-modal>Close</button><button class="button button-secondary" data-record-action="download" data-key="memos" data-index="${db.memos.indexOf(record)}">${icon("download")} Download</button><button class="button button-primary" data-action="print-memo">${icon("print")} Print memo</button>`, true);
    return;
  }
  if (key === "collectors") {
    const history = db.revenue.filter((transaction) => transaction.collector === record.id).slice(0, 4);
    const total = history.reduce((sum, transaction) => sum + Number(transaction.amount), 0);
    openModal(`Collector profile · ${record.name}`, `${record.id} · ${record.area}`, `<div class="substat-row"><div class="substat"><span>Today's target</span><strong>${money(record.target)}</strong></div><div class="substat"><span>Collected today</span><strong>${money(record.collected)}</strong></div><div class="substat"><span>Transactions</span><strong>${record.transactions}</strong></div><div class="substat"><span>Performance</span><strong>${record.performance}%</strong></div></div><div class="detail-grid"><div class="detail-field"><span>Weekly collections</span><strong>${money(record.collected * 5)}</strong></div><div class="detail-field"><span>Monthly collections</span><strong>${money(record.collected * 21)}</strong></div><div class="detail-field"><span>Recorded sample history</span><strong>${history.length} transactions · ${money(total)}</strong></div><div class="detail-field"><span>Current status</span><strong>${escapeHTML(record.status)}</strong></div></div><p class="detail-description">Transaction history is illustrative and saved only in this browser. Collector performance is not an official revenue record.</p>`, `<button class="button button-secondary" data-close-modal>Close</button><button class="button button-primary" data-page="revenue">${icon("chart-line")} View transactions</button>`, true);
    return;
  }
  const fields = config.columns.map(([, field]) => [titleCase(field), record[field]]);
  if (record.description && !fields.some(([label]) => label === "Description")) fields.push(["Description", record.description]);
  const content = fields.map(([label, value]) => `<div class="detail-field"><span>${escapeHTML(label)}</span><strong>${escapeHTML(value ?? "—")}</strong></div>`).join("");
  openModal(`${config.title} · ${record[config.id] || record.id || ""}`, "Record details · local prototype data", `<div class="detail-grid">${content}</div>${record.description ? `<p class="detail-description">${escapeHTML(record.description)}</p>` : ""}`, `<button class="button button-secondary" data-close-modal>Close</button><button class="button button-primary" data-modal-edit="${key}" data-modal-index="${db[key].indexOf(record)}">${icon("pen")} Edit record</button>`, key === "complaints" || key === "memos");
}
function formForRecord(key, record = {}) {
  const config = configs[key];
  const idField = config.id;
  const fields = config.fields.map(([name, label, type, options]) => {
    const value = record[name] ?? "";
    let input;
    if (type === "select") input = `<select name="${escapeHTML(name)}" required><option value="">Select ${escapeHTML(label.toLowerCase())}</option>${options.map((option) => `<option value="${escapeHTML(option)}"${String(value) === option ? " selected" : ""}>${escapeHTML(option)}</option>`).join("")}</select>`;
    else if (type === "textarea") input = `<textarea name="${escapeHTML(name)}" placeholder="${escapeHTML(label)}">${escapeHTML(value)}</textarea>`;
    else input = `<input name="${escapeHTML(name)}" type="${type || "text"}" value="${escapeHTML(value)}" placeholder="${escapeHTML(label)}"${name === "amount" || ["staff", "tasks", "performance", "progress", "target", "collected", "transactions", "budget", "approved", "released", "spent", "balance", "utilization"].includes(name) ? ' min="0"' : ""} required>`;
    return `<div class="form-field${type === "textarea" ? " full" : ""}"><label>${escapeHTML(label)}</label>${input}</div>`;
  }).join("");
  const hiddenId = record[idField] ? `<input type="hidden" name="_id" value="${escapeHTML(record[idField])}">` : "";
  return `<form id="record-form" data-key="${key}" data-edit-index="${record[idField] ? db[key].indexOf(record) : ""}">${hiddenId}<div class="form-grid">${fields}${key === "documents" ? `<div class="form-field full"><label>Attach local file (demo only)</label><input name="file" type="file"></div>` : ""}</div></form>`;
}
function showRecordForm(key, index = null) {
  const record = index === null ? {} : getRecord(key, index);
  const editing = index !== null;
  const title = `${editing ? "Edit" : "Add"} ${configs[key].title.replace(/ management| directory| library| & expenditure/gi, "").toLowerCase()}`;
  const body = formForRecord(key, record);
  openModal(title, "Fields marked by the form are stored locally in this browser.", body, `<button class="button button-secondary" data-close-modal>Cancel</button><button class="button button-primary" type="submit" form="record-form">${icon("check")} ${editing ? "Save changes" : "Save record"}</button>`, true);
}

function performRecordAction(action, key, index) {
  const row = getRecord(key, index);
  if (!row) return;
  if (action === "view") return detailRecord(key, row);
  if (action === "edit") return showRecordForm(key, index);
  if (action === "attendance") {
    row.attendanceRecorded = true; row.attendanceDate = dateText();
    saveData(); addAudit(`Attendance recorded for ${row.id}`, "Meetings");
    toast("Meeting attendance marked in local prototype data."); navigate(activePage); return;
  }
  if (action === "minutes") {
    openModal(`Meeting minutes · ${row.title}`, "Minutes are saved in this browser only.", `<form id="minutes-form" data-index="${index}"><div class="form-field"><label>Meeting notes and resolutions</label><textarea name="minutes" required placeholder="Record key discussion points, decisions, and follow-up actions...">${escapeHTML(row.minutes || "")}</textarea></div></form>`, `<button class="button button-secondary" data-close-modal>Cancel</button><button class="button button-primary" type="submit" form="minutes-form">${icon("check")} Save minutes</button>`, true); return;
  }
  if (action === "download") {
    downloadText(`${row.id || row.name || "record"}-sample.txt`, `${configs[key].title}\\n${Object.entries(row).map(([field, value]) => `${titleCase(field)}: ${value}`).join("\\n")}\\n\\nIllustrative prototype record only.`);
    return;
  }
  if (action === "share") { toast("A share link is not available for locally stored prototype documents."); return; }
  if (action === "archive") { row.status = "Archived"; saveData(); addAudit(`Archived ${row.id || row.name}`, configs[key].title); toast("Record archived."); navigate(activePage); return; }
  if (action === "print") { detailRecord(key, row); window.setTimeout(() => window.print(), 150); return; }
  if (action === "delete") {
    openModal("Delete this record?", `This removes ${row.id || row.name || row.title || "the selected record"} from local prototype data.`, `<p class="modal-confirm">This action only affects this browser's saved demonstration records.</p>`, `<button class="button button-secondary" data-close-modal>Cancel</button><button class="button button-danger" data-confirm-delete="${key}" data-delete-index="${index}">${icon("trash-can")} Delete record</button>`);
    return;
  }
  if (action === "approve" || action === "reject") {
    row.status = action === "approve" ? "Approved" : "Rejected";
    saveData(); addAudit(`${action === "approve" ? "Approved" : "Rejected"} ${row.id || row.subject || "record"}`, configs[key].title);
    toast(`Record ${action === "approve" ? "approved" : "rejected"} in this prototype.`);
    navigate(activePage); return;
  }
}

function initLogin() {
  const form = document.querySelector("#login-form");
  if (!form) return false;
  const toggle = document.querySelector("#toggle-password");
  toggle?.addEventListener("click", () => {
    const input = document.querySelector("#password");
    input.type = input.type === "password" ? "text" : "password";
    toggle.setAttribute("aria-label", input.type === "password" ? "Show password" : "Hide password");
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = form.elements.staffId.value.trim();
    const password = form.elements.password.value;
    const error = document.querySelector("#login-error");
    if (!id || !password) { error.textContent = "Enter a staff ID or email and a password."; return; }
    const session = JSON.stringify({ id, name: "Administrator", at: Date.now() });
    if (form.elements.remember.checked) localStorage.setItem(SESSION_KEY, session);
    else sessionStorage.setItem(SESSION_KEY, session);
    window.location.href = "index.html";
  });
  return true;
}

function initApp() {
  if (initLogin()) return;
  if (!document.querySelector("#page-content")) return;
  if (!localStorage.getItem(SESSION_KEY) && !sessionStorage.getItem(SESSION_KEY)) window.location.replace("login.html");
  document.querySelector("#current-date").textContent = todayText();
  renderNav();
  navigate("dashboard");
  document.querySelector("#collapse-sidebar").addEventListener("click", () => {
    if (window.innerWidth <= 720) document.body.classList.remove("mobile-nav-open");
    else if (window.innerWidth <= 960) document.body.classList.toggle("expanded");
    else document.body.classList.toggle("collapsed");
  });
  document.querySelector("#mobile-menu").addEventListener("click", () => document.body.classList.add("mobile-nav-open"));
  document.querySelector("#mobile-scrim").addEventListener("click", () => document.body.classList.remove("mobile-nav-open"));
  document.querySelector("#notification-button").addEventListener("click", () => {
    document.querySelector("#notification-panel").classList.toggle("open");
    document.querySelector("#profile-panel").classList.remove("open");
  });
  document.querySelector("#profile-button").addEventListener("click", () => {
    document.querySelector("#profile-panel").classList.toggle("open");
    document.querySelector("#notification-panel").classList.remove("open");
  });
  document.querySelector("#mark-read").addEventListener("click", () => {
    document.querySelectorAll(".unread-dot").forEach((item) => item.remove());
    document.querySelector(".notification-count").remove();
    document.querySelector(".dropdown-heading small").textContent = "All caught up";
    toast("Notifications marked as read.");
  });
  document.querySelector("#logout-button").addEventListener("click", () => {
    localStorage.removeItem(SESSION_KEY); sessionStorage.removeItem(SESSION_KEY);
    window.location.href = "login.html";
  });
  document.querySelector("#global-search").addEventListener("input", (event) => {
    globalSearch = event.target.value;
    document.querySelector("#global-search-results").classList.remove("open");
    if (configs[activePage]) { currentPage = 1; document.querySelector("#page-content").innerHTML = renderTablePage(activePage); }
    else if (activePage.startsWith("projects")) { document.querySelector("#page-content").innerHTML = renderProjects(); }
    else if (globalSearch.trim().length > 1) renderGlobalSearchResults(globalSearch.trim());
  });
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("#global-search").focus(); }
    if (event.key === "Escape") { closeModal(); document.body.classList.remove("mobile-nav-open"); document.querySelectorAll(".dropdown-panel").forEach((panel) => panel.classList.remove("open")); }
  });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a");
  if (target && !target.closest(".top-search")) document.querySelector("#global-search-results")?.classList.remove("open");
  if (!target) {
    if (event.target.matches("[data-modal-backdrop]")) closeModal();
    return;
  }
  if (target.dataset.page) {
    event.preventDefault();
    if (document.querySelector("#modal-host").innerHTML) closeModal();
    document.body.classList.remove("mobile-nav-open");
    document.querySelectorAll(".dropdown-panel").forEach((panel) => panel.classList.remove("open"));
    navigate(target.dataset.page);
    return;
  }
  if (target.dataset.globalSearchPage) {
    const key = target.dataset.globalSearchPage, query = target.dataset.globalSearchQuery;
    document.querySelector("#global-search-results").classList.remove("open");
    navigate(key);
    globalSearch = query;
    document.querySelector("#global-search").value = query;
    document.querySelector("#page-content").innerHTML = renderTablePage(key);
    return;
  }
  if (target.dataset.toast) { toast(target.dataset.toast); return; }
  if (target.dataset.quick) {
    const page = target.dataset.quick;
    if (["memos", "directives", "staff", "documents", "meetings", "projects"].includes(page)) showRecordForm(page);
    else navigate(page);
    return;
  }
  if (target.dataset.action) {
    const action = target.dataset.action;
    if (action.startsWith("export-")) { toast(`A ${pageTitle(action.replace("export-", ""))} export is ready in this prototype.`); return; }
    if (action === "print-receipt" || action === "print-memo") { window.print(); return; }
    if (action === "download-receipt") { downloadText("KUB-REV-2026-000245-receipt.txt", "KUBAU LOCAL GOVERNMENT\\nOFFICIAL REVENUE RECEIPT - SAMPLE ONLY\\nReceipt No: KUB-REV-2026-000245\\nPayer: Muhammad Musa\\nRevenue Type: Market Stall Fee\\nAmount: NGN 15,000\\nDate: 05 October 2026\\nCollector: COL-023\\n\\nIllustrative frontend prototype; not an official receipt."); return; }
    if (action === "verify-receipt") { toast("Sample receipt identified. This is not an official verification."); return; }
    if (action === "clear-demo-data") { openModal("Reset local records?", "This restores sample data in the current browser.", `<p class="modal-confirm">Your local additions and edits will be removed. This does not affect council systems.</p>`, `<button class="button button-secondary" data-close-modal>Cancel</button><button class="button button-danger" data-confirm-reset>Reset prototype data</button>`); return; }
    if (action === "edit-profile") { toast("Profile editing is available in a connected system, not this prototype."); return; }
    showRecordForm(action);
    return;
  }
  if (target.dataset.recordAction) { performRecordAction(target.dataset.recordAction, target.dataset.key, target.dataset.index); return; }
  if (target.dataset.sort) {
    const field = target.dataset.sort;
    tableSort = { field, direction: tableSort.field === field && tableSort.direction === "asc" ? "desc" : "asc" };
    currentPage = 1; document.querySelector("#page-content").innerHTML = renderTablePage(activePage); return;
  }
  if (target.dataset.closeModal !== undefined) { closeModal(); return; }
  if (target.dataset.modalEdit) { const key = target.dataset.modalEdit, index = Number(target.dataset.modalIndex); closeModal(); showRecordForm(key, index); return; }
  if (target.dataset.confirmDelete) {
    const key = target.dataset.confirmDelete, index = Number(target.dataset.deleteIndex), row = getRecord(key, index);
    db[key].splice(index, 1); saveData(); addAudit(`Deleted ${row?.id || "record"}`, configs[key].title); closeModal(); toast("Record deleted from local prototype data."); navigate(activePage); return;
  }
  if (target.dataset.confirmReset !== undefined) {
    db = Object.fromEntries(Object.entries(seed).map(([key, rows]) => [key, rows.map((item) => ({ ...item }))]));
    saveData(); closeModal(); toast("Sample data restored."); navigate("settings"); return;
  }
  if (target.dataset.pagination) {
    if (target.dataset.pagination === "prev") currentPage--;
    else if (target.dataset.pagination === "next") currentPage++;
    else currentPage = Number(target.dataset.pagination);
    document.querySelector("#page-content").innerHTML = renderTablePage(activePage); return;
  }
  if (target.dataset.report) {
    const name = target.dataset.report, format = target.dataset.format;
    if (format === "Print") window.print();
    else toast(`${name} (${format}) generated for demonstration.`);
    return;
  }
  if (target.id === "logout-button") return;
});

document.addEventListener("input", (event) => {
  if (event.target.id === "table-search") {
    tableSearch = event.target.value; currentPage = 1;
    const key = activePage;
    const panel = event.target.closest(".panel");
    const replacement = document.createElement("div");
    replacement.innerHTML = renderTable(key);
    const oldParts = panel.querySelectorAll(".table-scroll,.table-footer");
    const newParts = replacement.querySelectorAll(".table-scroll,.table-footer");
    oldParts.forEach((part, index) => part.replaceWith(newParts[index]));
  }
  if (event.target.id === "project-search") {
    globalSearch = event.target.value;
    const content = document.querySelector("#page-content");
    content.innerHTML = renderProjects();
    const search = document.querySelector("#project-search"); search?.focus(); search?.setSelectionRange(search.value.length, search.value.length);
  }
});

document.addEventListener("change", (event) => {
  if (event.target.dataset.filter) {
    activeFilters[event.target.dataset.filter] = event.target.value; currentPage = 1;
    document.querySelector("#page-content").innerHTML = renderTablePage(activePage);
  }
  if (event.target.id === "project-status") {
    const status = event.target.value;
    activePage = status ? `projects-${status.toLowerCase()}` : "projects";
    document.querySelector("#breadcrumb-current").textContent = pageTitle();
    document.querySelector("#page-content").innerHTML = renderProjects();
  }
  if (event.target.id === "dark-mode-toggle") {
    document.body.classList.toggle("dark-mode", event.target.checked);
    localStorage.setItem("kubismis.darkMode", String(event.target.checked));
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "minutes-form") {
    event.preventDefault();
    const record = getRecord("meetings", event.target.dataset.index);
    if (!record) return;
    record.minutes = new FormData(event.target).get("minutes").toString().trim();
    saveData(); addAudit(`Recorded minutes for ${record.id}`, "Meetings");
    closeModal(); toast("Meeting minutes saved in this browser."); navigate(activePage); return;
  }
  if (event.target.id !== "record-form") return;
  event.preventDefault();
  const form = event.target, key = form.dataset.key, index = form.dataset.editIndex;
  const record = Object.fromEntries(new FormData(form).entries());
  delete record._id; delete record.file;
  Object.keys(record).forEach((field) => { if (["amount", "progress", "performance", "target", "collected", "transactions", "staff", "tasks", "budget", "approved", "released", "spent", "balance", "utilization"].includes(field)) record[field] = Number(record[field]) || 0; });
  const idName = configs[key].id;
  if (index !== "") {
    record[idName] = db[key][Number(index)][idName];
    db[key][Number(index)] = { ...db[key][Number(index)], ...record };
  } else {
    const prefix = ({ correspondence: "KUB-C", memos: "KUB-M", directives: "KUB-D", departments: "DPT", staff: "KLG-NEW", meetings: "MTG-2026", documents: "DOC-2026", revenue: "KUB-REV-2026", collectors: "COL", expenditure: "EXP-2026", budget: "BUD-2026", projects: "PRJ", complaints: "CMP-2026", applications: "APP-2026", businesses: "BUS-2026", audit: "AUD" })[key] || "KUB";
    record[idName] = record[idName] || `${prefix}-${String(Date.now()).slice(-5)}`;
    if (key === "documents") {
      const file = form.elements.file?.files?.[0];
      if (file) record.size = `${(file.size / 1024).toFixed(0)} KB`;
      record.uploadedBy = record.uploadedBy || "Administrator";
    }
    if (key === "revenue" && record.amount) { record.id = `KUB-REV-${new Date().getFullYear()}-${String(db.revenue.length + 246).padStart(6, "0")}`; }
    db[key].unshift(record);
  }
  saveData();
  addAudit(`${index === "" ? "Added" : "Updated"} ${record[idName]}`, configs[key].title);
  closeModal(); toast(index === "" ? "Record added to the local prototype." : "Record updated.");
  navigate(activePage);
});

function downloadText(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob); link.download = filename; link.click();
  URL.revokeObjectURL(link.href);
  toast("Sample receipt downloaded.");
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) document.body.classList.remove("mobile-nav-open");
});
if (localStorage.getItem("kubismis.darkMode") === "true") document.body.classList.add("dark-mode");
initApp();
