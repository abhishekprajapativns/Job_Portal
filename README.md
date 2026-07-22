# 💼 Job Portal

A full-stack Job Portal web application built with the **MERN stack**. The platform allows candidates to search and apply for jobs, while recruiters can create and manage job listings through a role-based authentication system.

## 🚀 Features

### 👨‍💼 Candidate

* Secure registration and login using JWT authentication
* Browse available job listings
* Search jobs by keywords
* Filter jobs by job type and location
* View detailed job information
* Apply to jobs directly from the platform
* View profile and applied jobs through the dashboard

### 🏢 Recruiter

* Recruiter registration and login
* Role-based authentication
* Recruiter dashboard
* Post new job openings
* Manage job listings
* Posted jobs are instantly visible on the candidate's Find Jobs page

### 🔐 Common Features

* Role-based authentication and redirection
* Secure password hashing using `bcryptjs`
* JWT-based authentication
* Responsive user interface
* Modern UI built with Tailwind CSS

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JSON Web Token (JWT)
* bcryptjs

## 📁 Project Structure

```text
job-portal/
│
├── src/            # React frontend source code
├── public/         # Static assets
├── index.html      # Frontend entry point
│
└── server/         # Node.js + Express backend
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    └── routes/
```

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
node index.js
```

The backend server will start on the configured port.

### 3. Frontend Setup

Open a new terminal from the project root:

```bash
npm install
npm run dev
```

The frontend will start on the Vite development server.

## 🔗 API Endpoints

### Authentication

| Method | Endpoint              | Description                                 |
| ------ | --------------------- | ------------------------------------------- |
| POST   | `/api/auth/register`  | Register a new candidate or recruiter       |
| POST   | `/api/auth/login`     | Login and receive JWT token and user role   |

### Jobs

| Method | Endpoint          | Description                        |
| ------ | ----------------- | ---------------------------------- |
| GET    | `/api/jobs`       | Get all available jobs             |
| GET    | `/api/jobs/:id`   | Get job details                    |
| POST   | `/api/jobs`       | Create a new job as a recruiter    |

### Applications

| Method | Endpoint              | Description       |
| ------ | ----------------------| ------------------|
| POST   | `/api/applications`   | Apply for a job   |

## 🔮 Future Improvements

* JWT-protected candidate and recruiter dashboards
* Recruiter applicant management system
* Resume upload functionality
* Email notifications
* Admin panel for managing users and job listings
* Advanced job search and filtering
* Pagination for job listings

## 🌐 Live Demo

**Backend API:** https://job-portal-1p1h.onrender.com  
**Frontend:** https://job-portal-morm.vercel.app  
**GitHub Repository:** https://github.com/abhishekprajapativns/Job_Portal

## 👨‍💻 Author

**Abhishek Prajapati**

Aspiring MERN Stack Developer