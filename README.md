# 💼 Job Portal — MERN Stack Application

A full-stack Job Portal application built with the **MERN stack (MongoDB, Express.js, React.js, and Node.js)**. The platform allows candidates to explore job opportunities, apply for jobs, upload resumes, and track application statuses. Recruiters can create and manage job listings, review applications, and update candidate statuses.

The application also integrates **Google Gemini AI** to help recruiters generate job descriptions from a job title, with the ability to review and edit the generated content before publishing.

## 🌐 Live Demo

- **Frontend:** [Job Portal](https://job-portal-morm.vercel.app/)
- **Backend API:** [Backend API](https://job-portal-1p1h.onrender.com/)
- **GitHub Repository:** [Job_Portal](https://github.com/abhishekprajapativns/Job_Portal)

> **Deployment note:** The backend is hosted on Render's free tier and may take some time to respond after a period of inactivity.

## ✨ Key Features

### 👨‍💼 Candidate

- Register and log in securely using JWT authentication.
- Browse and search available job listings.
- Filter jobs by category, job type, and location.
- View detailed job descriptions and requirements.
- Apply for available jobs.
- Track application statuses: Pending, Accepted, and Rejected.
- Upload a PDF resume to the profile.
- Request a password reset using a time-limited token.

### 🏢 Recruiter

- Register and log in with recruiter-specific access.
- Create job listings with company, title, location, salary, description, skills, and category.
- Generate job descriptions using Google Gemini AI.
- Review and edit AI-generated descriptions before publishing.
- View, edit, and delete their own job listings.
- Review applications received for their jobs.
- View or download candidate resumes and access candidate contact details.
- Accept or reject applications.
- Request a password reset using a time-limited token.
- Publish jobs that appear on the candidate job listing page.

### 🤖 AI-Powered Job Description Generator

The application integrates the Google Gemini API to assist recruiters in creating job descriptions.

**How it works:**

1. The recruiter enters a job title and, optionally, company and location details.
2. The backend sends the request to the Gemini API.
3. Gemini generates a job description.
4. The recruiter reviews and edits the generated content before posting the job.

The Gemini API key is configured through backend environment variables and is not intended to be exposed to the frontend.

### 🔐 Authentication and Authorization

- JWT-based authentication.
- Password hashing using `bcryptjs`.
- Protected routes and authentication middleware.
- Role-based access control for candidates and recruiters.
- Server-side authorization for restricted operations.
- Job ownership checks to restrict recruiters to managing their own listings.
- Candidate-only job applications and recruiter-only job posting and AI generation.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite |
| Routing | React Router DOM |
| Styling | Tailwind CSS |
| HTTP Requests | Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JSON Web Token (JWT), bcryptjs |
| File Uploads | Multer |
| AI Integration | Google Gemini API |
| Deployment | Vercel (frontend), Render (backend) |
| Version Control | Git, GitHub |

## 📸 Screenshots

Screenshots are stored in the repository's `screenshots/` directory.

### 1. Home Page

![Home Page](./screenshots/home.png)

### 2. Find Jobs

Browse job opportunities and explore available listings.

![Find Jobs](./screenshots/find-jobs.png)

### 3. Candidate Dashboard

Manage job applications and track their current statuses.

![Candidate Dashboard](./screenshots/candidate-dashboard.png)

### 4. Recruiter Dashboard

Manage job listings and review candidate applications.

![Recruiter Dashboard](./screenshots/recruiter-dashboard.png)

### 5. Job Details and Application

View job requirements and apply for available positions.

![Job Details](./screenshots/job-details.png)

## 📁 Project Structure

```text
Job_Portal/
│
├── public/
├── screenshots/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── Pages/
│   │   ├── CandidateDashboard.jsx
│   │   ├── EditJob.jsx
│   │   ├── FindJob.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Home.jsx
│   │   ├── JobDetail.jsx
│   │   ├── Login.jsx
│   │   ├── MyJobs.jsx
│   │   ├── PostJob.jsx
│   │   ├── RecruiterDashboard.jsx
│   │   ├── Register.jsx
│   │   └── ResetPassword.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   │   ├── aiController.js
│   │   ├── applicationController.js
│   │   ├── authController.js
│   │   └── jobController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── upload.js
│   ├── models/
│   │   ├── Application.js
│   │   ├── Job.js
│   │   └── User.js
│   ├── routes/
│   │   ├── aiRoutes.js
│   │   ├── applicationRoutes.js
│   │   ├── authRoutes.js
│   │   └── jobRoutes.js
│   ├── uploads/
│   │   └── resumes/
│   ├── index.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js 18 or higher.
- npm.
- Git.
- A MongoDB Atlas account or a local MongoDB instance.
- A Google Gemini API key for the AI job description feature.

### 1. Clone the Repository

```bash
git clone https://github.com/abhishekprajapativns/Job_Portal.git

cd Job_Portal
```

### 2. Install and Configure the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret
PORT=5000
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=your_supported_gemini_model
```

Replace the placeholder values with your own configuration. Use a Gemini model supported by your API access.

Start the backend:

```bash
node index.js
```

The backend should run at:

```text
http://localhost:5000
```

### 3. Install and Run the Frontend

Open a new terminal in the project root:

```bash
npm install
npm run dev
```

Vite will display the local frontend URL, typically:

```text
http://localhost:5173
```

### 4. Configure the Frontend API URL

Create a `.env` file in the project root:

```env
# Local development
VITE_API_URL=http://localhost:5000
```

For production, configure the deployed backend URL instead:

```env
VITE_API_URL=https://job-portal-1p1h.onrender.com
```

## 🔗 API Endpoints

The following table documents the application's main API routes.

### Authentication

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/auth/register` | Register a candidate or recruiter | Public |
| POST | `/api/auth/login` | Authenticate a user | Public |
| GET | `/api/auth/me` | Retrieve the authenticated user's profile | Authenticated |
| POST | `/api/auth/upload-resume` | Upload a resume | Authenticated |
| POST | `/api/auth/forgot-password` | Request a password reset | Public |
| POST | `/api/auth/reset-password` | Reset a password using a token | Public |

### Jobs

| Method | Endpoint | Description | Access |
|---|---|---|---|
| GET | `/api/jobs` | Retrieve job listings | Public |
| GET | `/api/jobs/:id` | Retrieve job details | Public |
| GET | `/api/jobs/my-jobs` | Retrieve the logged-in recruiter's own jobs | Authenticated (returns only the logged-in recruiter's jobs) |
| POST | `/api/jobs` | Create a job listing | Authenticated recruiter |
| PATCH | `/api/jobs/:id` | Update an owned job listing | Job owner |
| DELETE | `/api/jobs/:id` | Delete an owned job listing | Job owner |

### Applications

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/applications` | Apply for a job | Authenticated candidate |
| GET | `/api/applications/my` | Retrieve the logged-in user's applications | Authenticated (returns only the logged-in user's applications) |
| GET | `/api/applications/recruiter` | Retrieve applications for the recruiter's jobs | Authenticated (returns applications for the logged-in recruiter's jobs only) |
| PATCH | `/api/applications/:id/status` | Update an application's status | Authorized job owner |

### AI

| Method | Endpoint | Description | Access |
|---|---|---|---|
| POST | `/api/ai/job-description` | Generate a job description from job details | Authenticated recruiter |

## 🔒 Environment Variables and Security

- Keep `.env` files out of version control.
- Add `.env` and `node_modules/` to `.gitignore`.
- Use a strong, unique JWT secret.
- Keep the Gemini API key on the backend.
- Enforce authentication, role checks, and job ownership on the server.
- Validate uploaded resume files for permitted file types and sizes.
- Store production secrets in your hosting provider's environment settings.
- Configure appropriate storage for uploaded resumes in production.

**Deployment consideration:** If resumes are stored on Render's temporary local filesystem, they may not persist across instance replacements or redeployments. Use a suitable persistent disk or external file storage if durable resume storage is required.

## 🚀 Future Improvements

- Add search filters for skills and salary range.
- Prevent candidates from applying to the same job more than once.
- Add email delivery for password reset links.
- Implement pagination for job listings and applications.
- Add toast notifications for user feedback.
- Build an admin dashboard for managing users and job listings.
- Introduce AI-powered cover letter generation.
- Add resume-to-job matching and personalized job recommendations.
- Provide recruiter analytics and application statistics.

## 👨‍💻 Author

**Abhishek Prajapati**

Aspiring MERN Stack Developer

- **GitHub:** [abhishekprajapativns](https://github.com/abhishekprajapativns)
- **Project Repository:** [Job_Portal](https://github.com/abhishekprajapativns/Job_Portal)
- **Live Application:** [Job Portal](https://job-portal-morm.vercel.app/)

---

If you find this project useful, feel free to explore the repository and share your feedback.