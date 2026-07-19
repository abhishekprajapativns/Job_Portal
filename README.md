# Job Portal

A full-stack Job Portal web application built using the MERN stack, where candidates can search and apply for jobs, and recruiters can post jobs and manage listings.

## Features

### Candidate Side
* Secure registration and login using JWT authentication
* Browse available job listings
* Search jobs by keywords
* Filter jobs based on job type and location
* View detailed job information on a dedicated Job Detail page
* Apply to jobs directly from the platform
* Dashboard to view profile and applied jobs

### Recruiter Side
* Register and login as a Recruiter (role-based authentication)
* Recruiter Dashboard
* Post new job openings through a simple form
* Posted jobs instantly appear on the candidate's Find Jobs page

### Common
* Role-based redirection after login (Candidate / Recruiter)
* Password encryption using bcryptjs
* Responsive UI built with Tailwind CSS

## Tech Stack

**Frontend**
* React.js
* React Router DOM
* Tailwind CSS
* Axios

**Backend**
* Node.js
* Express.js

**Database**
* MongoDB (Mongoose)

**Authentication**
* JSON Web Token (JWT)
* bcryptjs

## Installation and Setup

### Clone Repository

git clone <repository-url>
cd job-portal

### Backend Setup

cd server
npm install
node index.js

### Frontend Setup

npm install
npm run dev

## API Endpoints

### Auth
* POST /api/auth/register - Register new user (candidate or recruiter)
* POST /api/auth/login - Login user and receive JWT token + role

### Jobs
* GET /api/jobs - Get all jobs
* GET /api/jobs/:id - Get a single job by ID
* POST /api/jobs - Create a new job (recruiter)

### Applications
* POST /api/applications - Apply to a job

## Future Improvements

* Connect Dashboard to show real applied jobs (JWT-protected)
* Recruiter can view and manage applicants for their posted jobs
* Resume upload functionality
* Email notifications
* Admin panel for managing users and jobs

## Author

Abhishek Prajapati
Aspiring MERN Stack Developer