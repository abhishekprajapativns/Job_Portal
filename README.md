# 💼 Job Portal

A full-stack Job Portal web application built with the **MERN stack**. The platform allows candidates to search and apply for jobs with resume upload, while recruiters can create, manage, and track applications for their job listings through a role-based authentication system.

## 🌐 Live Demo

- **Frontend:** https://job-portal-morm.vercel.app
- **Backend API:** https://job-portal-1p1h.onrender.com
- **GitHub Repository:** https://github.com/abhishekprajapativns/Job_Portal

---

## 🚀 Features

### 👨‍💼 Candidate

- Secure registration and login using JWT authentication
- Browse and search available job listings
- View detailed job information
- Apply to jobs directly from the platform
- Track application status: Pending / Accepted / Rejected
- Upload a resume (PDF) to their profile
- Reset forgotten password using a secure, time-limited token

### 🏢 Recruiter

- Recruiter registration and login with role-based authentication
- Post new job openings with:
  - Job title
  - Company
  - Location
  - Salary
  - Description
  - Skills
  - Category
- View, edit, and delete their own posted jobs
- View applications received for their job postings
- View candidate contact details
- View and download candidate resumes
- Accept or reject applications
- Reset forgotten password using a secure, time-limited token
- Newly posted jobs are instantly visible on the candidate's Find Jobs page

### 🔐 Common Features

- Role-based authentication and route protection
- JWT-based authentication middleware
- Secure password hashing using `bcryptjs`
- Resume file uploads using Multer
- Responsive UI built with Tailwind CSS

---

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
- Protected routes
- Role-based access control

---

## 📁 Project Structure

```text
Job_Portal/
│
├── src/
│   ├── components/          # Navbar, Footer, ProtectedRoute
│   ├── Pages/               # Page components
│   ├── App.jsx              # Route definitions
│   └── main.jsx             # Application entry point
│
├── public/                  # Static assets
│
└── server/
    ├── config/              # Database configuration
    ├── controllers/         # Authentication, jobs and application logic
    ├── middleware/          # JWT verification and file upload handling
    ├── models/              # Mongoose schemas
    ├── routes/              # API route definitions
    └── uploads/
        └── resumes/         # Uploaded resumes (gitignored)
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

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

> **Note:** Never commit your actual `.env` file or secret credentials to GitHub.

Start the backend:

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

The frontend will start on the Vite development server:

```text
http://localhost:5173
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/auth/register` | Register a candidate or recruiter | No |
| POST | `/api/auth/login` | Login and receive JWT token and role | No |
| GET | `/api/auth/me` | Get logged-in user's profile | Yes |
| POST | `/api/auth/upload-resume` | Upload a resume | Yes |
| POST | `/api/auth/forgot-password` | Request a password reset token | No |
| POST | `/api/auth/reset-password` | Reset password using a token | No |

### Jobs

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/api/jobs` | Get all available jobs | No |
| GET | `/api/jobs/:id` | Get a single job's details | No |
| GET | `/api/jobs/my-jobs` | Get jobs posted by the recruiter | Yes |
| POST | `/api/jobs` | Create a new job | Yes |
| PATCH | `/api/jobs/:id` | Update a job | Yes |
| DELETE | `/api/jobs/:id` | Delete a job | Yes |

### Applications

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/api/applications` | Apply to a job | Yes |
| GET | `/api/applications/my` | Get candidate's applications | Yes |
| GET | `/api/applications/recruiter` | Get applications for recruiter's jobs | Yes |
| PATCH | `/api/applications/:id/status` | Accept or reject an application | Yes |

---

## 🔮 Future Improvements

- Advanced job search and filtering by location, category and salary
- Real email-based password reset functionality
- Toast notifications
- Pagination for jobs and applications
- Admin dashboard for managing users and job listings
- Job recommendations based on candidate skills
- Application analytics for recruiters

---

## 👨‍💻 Author

**Abhishek Prajapati**

Aspiring MERN Stack Developer

- GitHub: https://github.com/abhishekprajapativns