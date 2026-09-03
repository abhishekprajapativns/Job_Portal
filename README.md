# 💼 Job Portal

A full-stack Job Portal web application built with the **MERN stack**. The platform allows candidates to search and apply for jobs with resume upload, while recruiters can create, manage, and track applications for their job listings — all through a role-based authentication system.

## 🌐 Live Demo

**Frontend:** https://job-portal-morm.vercel.app
**Backend API:** https://job-portal-1p1h.onrender.com
**GitHub Repository:** https://github.com/abhishekprajapativns/Job_Portal

---

## 🚀 Features

### 👨‍💼 Candidate

* Secure registration and login using JWT authentication
* Browse and search available job listings
* View detailed job information
* Apply to jobs directly from the platform
* Track application status (Pending / Accepted / Rejected) on a personal dashboard
* Upload a resume (PDF) to their profile
* Reset forgotten password via a secure, time-limited token

### 🏢 Recruiter

* Recruiter registration and login with role-based authentication
* Post new job openings (title, company, location, salary, description, skills, category)
* View, edit, and delete their own posted jobs
* View all applications received across their job postings, with candidate contact details
* View and download a candidate's uploaded resume
* Accept or reject applications with a single click
* Reset forgotten password via a secure, time-limited token
* Posted jobs are instantly visible on the candidate's Find Jobs page

### 🔐 Common Features

* Role-based authentication and route protection
* Secure password hashing using `bcryptjs`
* JWT-based authentication middleware
* File uploads (resumes) handled with Multer
* Responsive, modern UI built with Tailwind CSS

---

## 🛠️ Tech Stack

**Frontend**
* React.js (Vite)
* React Router DOM
* Tailwind CSS
* Axios

**Backend**
* Node.js
* Express.js
* Multer (file uploads)

**Database**
* MongoDB with Mongoose (MongoDB Atlas)

**Authentication & Security**
* JSON Web Token (JWT)
* bcryptjs

---

## 📁 Project Structure

```text
job-portal/
│
├── src/                     # React frontend source code
│   ├── components/           # Navbar, Footer, ProtectedRoute
│   ├── Pages/                 # All page components
│   ├── App.jsx                 # Route definitions
│   └── main.jsx                # App entry point
│
├── public/                  # Static assets
│
└── server/                  # Node.js + Express backend
    ├── config/                # Database connection
    ├── controllers/            # Route logic (auth, jobs, applications)
    ├── middleware/              # JWT verification, file upload handling
    ├── models/                   # Mongoose schemas (User, Job, Application)
    ├── routes/                    # API route definitions
    └── uploads/resumes/           # Uploaded candidate resumes (gitignored)
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/abhishekprajapativns/Job_Portal.git
cd Job_Portal
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

```bash
node index.js
```

The backend server will start on the configured port.

### 3. Frontend Setup

Open a new terminal from the project root:

```bash
npm install
npm run dev
```

The frontend will start on the Vite development server at `http://localhost:5173`.

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint                      | Description                             | Auth Required  |
| ------ | ----------------------------- | --------------------------------------- | -------------- |
| POST   | `/api/auth/register`          | Register a new candidate or recruiter   | No             |
| POST   | `/api/auth/login`             | Login and receive JWT token and role    | No             |
| GET    | `/api/auth/me`                | Get logged-in user's profile            | Yes            |
| POST   | `/api/auth/upload-resume`     | Upload a resume (PDF)                   | Yes            |
| POST   | `/api/auth/forgot-password`   | Request a password reset token          | No             |
| POST   | `/api/auth/reset-password`    | Reset password using a token            | No             |

### Jobs

| Method | Endpoint                     | Description                            | Auth Required  |
| ------ | ---------------------------- | -------------------------------------- | -------------- |
| GET    | `/api/jobs`                  | Get all available jobs                 | No             |
| GET    | `/api/jobs/:id`              | Get a single job's details             | No             |
| GET    | `/api/jobs/my-jobs`          | Get jobs posted by the recruiter       | Yes            |
| POST   | `/api/jobs`                  | Create a new job                       | Yes            |
| PATCH  | `/api/jobs/:id`              | Update a job                           | Yes            |
| DELETE | `/api/jobs/:id`              | Delete a job                           | Yes            |

### Applications

| Method | Endpoint                                  | Description                                | Auth Required  |
| ------ | ----------------------------------------- | ------------------------------------------ | -------------- |
| POST   | `/api/applications`                       | Apply to a job                             | Yes            |
| GET    | `/api/applications/my`                    | Get the candidate's own applications       | Yes            |
| GET    | `/api/applications/recruiter`             | Get applications for the recruiter's jobs  | Yes            |
| PATCH  | `/api/applications/:id/status`            | Accept or reject an application            | Yes            |

---

## 🔮 Future Improvements

* Advanced job search and filtering (by location, category, salary range)
* Sending real password reset emails (currently the reset link is generated for testing purposes)
* Toast notifications instead of browser alerts
* Pagination for job and application lists
* Admin panel for managing users and job listings

---


## 👨‍💻 Author

**Abhishek Prajapati**
Aspiring MERN Stack Developer
[GitHub](https://github.com/abhishekprajapativns)