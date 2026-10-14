# 💼 Job Portal

A full-stack Job Portal web application built with the **MERN stack**. This platform allows candidates to explore job opportunities, apply for positions, upload resumes, and track applications. Recruiters can post job openings, manage listings, review applications, and update application statuses through a role-based authentication system.

## 🌐 Live Demo

- **Frontend:** [Job Portal](https://job-portal-morm.vercel.app)
- **Backend API:** [Backend API](https://job-portal-1p1h.onrender.com)
- **GitHub Repository:** [Job_Portal](https://github.com/abhishekprajapativns/Job_Portal)

> **Note:** The backend is hosted on Render's free tier, so the first request may take 30–60 seconds while the server wakes up.

## 🚀 Features

### 👨‍💼 Candidate

- Secure registration and login using JWT authentication
- Browse and search available job listings
- View detailed job information
- Apply for jobs through the platform
- Track application status: Pending, Accepted, or Rejected
- Upload a PDF resume to their profile
- Request a password reset using a time-limited token

### 🏢 Recruiter

- Recruiter registration and login with role-based authentication
- Create job listings with title, company, location, salary, description, skills, and category
- View, edit, and delete their own job postings
- View applications received for their job listings
- Access candidate contact details and view or download uploaded resumes
- Accept or reject applications
- Request a password reset using a time-limited token
- Newly posted jobs appear instantly on the candidate job listing page

### 🔐 Common Features

- JWT-based authentication
- Role-based access control and protected routes
- Password hashing using `bcryptjs`
- Resume uploads using Multer
- Responsive user interface built with Tailwind CSS
- RESTful API architecture

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- Multer

### Database
- MongoDB
- Mongoose
- MongoDB Atlas

### Authentication & Security
- JSON Web Token (JWT)
- bcryptjs
- Authentication middleware
- Role-based authorization

## 📸 Screenshots

### 1. Home

![Home](./screenshots/home.png)

### 2. Find Jobs

Browse available job opportunities and explore relevant job listings.

![Find Jobs](./screenshots/find-jobs.png)

### 3. Candidate Dashboard

Manage job applications and track their current status.

![Candidate Dashboard](./screenshots/candidate-dashboard.png)

### 4. Recruiter Dashboard

Manage job postings and review applications submitted by candidates.

![Recruiter Dashboard](./screenshots/recruiter-dashboard.png)

### 5. Job Details & Application

View job descriptions and apply for available positions.

![Job Details](./screenshots/job-details.png)

## 📁 Project Structure

```text
Job_Portal/
│
├── public/                    # Static assets
├── screenshots/               # README screenshots
│   ├── home.png
│   ├── find-jobs.png
│   ├── candidate-dashboard.png
│   ├── recruiter-dashboard.png
│   └── job-details.png
│
├── src/
│   ├── components/            # Reusable UI components
│   ├── Pages/                 # Application pages
│   ├── App.jsx                # Route definitions
│   └── main.jsx               # Application entry point
│
├── server/
│   ├── config/                # Database configuration
│   ├── controllers/           # Application business logic
│   ├── middleware/            # Authentication and file uploads
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API route definitions
│   └── uploads/
│       └── resumes/           # Uploaded resumes (gitignored)
│
├── .gitignore
├── package.json
├── README.md
└── ...
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB Atlas account or a local MongoDB instance
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/abhishekprajapativns/Job_Portal.git
cd Job_Portal
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder (you can copy `.env.example`):

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Replace the placeholder values with your own. Never commit your actual `.env` file to GitHub.

Start the backend server:

```bash
node index.js
```

The backend will run on `http://localhost:5000`.

### 3. Set Up the Frontend

Open a new terminal in the project root directory:

```bash
npm install
npm run dev
```

The frontend will run at `http://localhost:5173`.

### 4. Configure the Frontend API URL

Create a `.env` file in the project root and point it to your backend:

```env
# Local development
VITE_API_URL=http://localhost:5000

# Production
# VITE_API_URL=https://job-portal-1p1h.onrender.com
```

## 🔗 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/auth/register` | Register a candidate or recruiter | No |
| POST | `/api/auth/login` | Log in and receive a JWT | No |
| GET | `/api/auth/me` | Get the logged-in user's profile | Yes |
| POST | `/api/auth/upload-resume` | Upload a resume | Yes |
| POST | `/api/auth/forgot-password` | Request a password reset | No |
| POST | `/api/auth/reset-password` | Reset a password using a token | No |

### Jobs

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/api/jobs` | Retrieve available job listings | No |
| GET | `/api/jobs/:id` | Retrieve job details | No |
| GET | `/api/jobs/my-jobs` | Retrieve jobs posted by the recruiter | Yes |
| POST | `/api/jobs` | Create a job listing | Yes |
| PATCH | `/api/jobs/:id` | Update a job listing | Yes |
| DELETE | `/api/jobs/:id` | Delete a job listing | Yes |

### Applications

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/applications` | Apply for a job | Yes |
| GET | `/api/applications/my` | Retrieve the candidate's applications | Yes |
| GET | `/api/applications/recruiter` | Retrieve applications for the recruiter's jobs | Yes |
| PATCH | `/api/applications/:id/status` | Update an application's status | Yes |

## 🔐 Environment Variables & Security

- Keep `.env` files out of version control.
- Add `.env` and `node_modules/` to `.gitignore`.
- Use strong, unique secrets for JWT authentication.
- Validate uploaded files on the server, including file type and size.
- Restrict job editing, deletion, and application management to authorized users.
- Store production secrets in your hosting provider's environment settings.

## 🔮 Future Improvements

- Advanced job search and filtering by location, category, skills, and salary
- Email delivery for password reset links
- Toast notifications for user feedback
- Pagination for jobs and applications
- Admin dashboard for managing users and job listings
- Job recommendations based on candidate skills
- Recruiter analytics and application statistics

## 👨‍💻 Author

**Abhishek Prajapati**

Aspiring MERN Stack Developer

- **GitHub:** [abhishekprajapativns](https://github.com/abhishekprajapativns)

---