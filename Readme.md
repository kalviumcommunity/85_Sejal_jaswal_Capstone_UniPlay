# 🏆 UniPlay

**UniPlay** is a university sports networking platform aimed at helping students connect over their shared love for sports. It enables users to join sports clubs, create or participate in matches, and connect with fellow athletes across various sports disciplines — all within their university ecosystem.

---

## 🔍 Project Overview

### 📌 Problem Statement
In many universities, students often struggle to find others who are interested in playing the same sport. Existing systems for organizing clubs or casual games are usually fragmented or offline. UniPlay solves this by creating a centralized digital space where students can discover and join ongoing sports activities.

### 🎯 Target Users
- University students  
- Sports club leaders  
- Casual players looking for games  

### ⭐ Key Features (Planned)
- 🔐 User authentication (JWT)
- 🏏 Join or create sports clubs
- 📅 Match scheduling system
- 📢 Notification system
- 💬 In-app messaging
- 📊 Dashboard for player stats and participation

---

## 🛠️ Tech Stack

| Layer       | Technology             |
|-------------|------------------------|
| Frontend    | React, Tailwind CSS    |
| Backend     | Node.js, Express.js    |
| Database    | MongoDB                |
| Auth        | JWT (JSON Web Tokens)  |
| Deployment  | Vercel (Frontend), Render (Backend), MongoDB Atlas |

---

## 📁 Folder Structure

```bash
uniplay/
├── client/         # React + Tailwind frontend
│   └── src/
├── server/         # Node.js + Express backend
│   └── routes/
│   └── models/
├── .env            # Environment variables (not committed)
└── README.md
```

---

## 🚀 Installation & Setup

Since you created the repo manually, here’s how you can set up everything locally:

### 1. Initialize Git and link remote:
```bash
git init
git remote add origin https://github.com/kalviumcommunity/S85_Sejal_Capstone_UniPlay.git
```

### 2. Create project structure:
Manually create two folders:
```bash
mkdir client server
```

Then begin developing the React frontend in `client/` and the Express backend in `server/`.

### 3. Install dependencies:

#### Frontend:
```bash
cd client
npm create vite@latest .
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

#### Backend:
```bash
cd ../server
npm init -y
npm install express mongoose cors dotenv jsonwebtoken bcryptjs
```

### 4. Setup environment variables:

Create a `.env` file inside the `server/` directory:

```env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```

### 5. Run the app locally:

#### Backend:
```bash
cd server
npm run dev
```

#### Frontend:
```bash
cd ../client
npm run dev
```

---

## 📅 Capstone Timeline

| Day | Plan |
|-----|------|
| Day 1  | Set up GitHub repo & README, create branch, initialize project |
| Day 2  | Research similar platforms, define features & sketch wireframes |
| Day 3  | Setup React project, Tailwind CSS, and routing |
| Day 4  | Build basic layout and navigation bar |
| Day 5  | Backend setup: Express, MongoDB connection |
| Day 6  | Implement user authentication system (JWT) |
| Day 7  | Design database schema for users, clubs, matches |
| Day 8  | Implement CRUD for sports clubs |
| Day 9  | Implement match scheduling feature |
| Day 10 | Add notifications system |
| Day 11 | Add chat/messaging feature (basic version) |
| Day 12 | Start frontend integration with APIs |
| Day 13 | Responsive design tweaks & minor bug fixes |
| Day 14 | Testing, clean up, and deployment |
| Day 15 | Final demo prep, documentation & submission |

---

## 👩‍💻 Git Workflow Used

- `git init` – initialized the repository  
- `git remote add origin <repo-url>` – connected remote GitHub repo  
- `git branch setup/readme-initial` – created new branch  
- `git add README.md` – staged the README file  
- `git commit -m "Initial README setup"` – committed the file  
- `git push -u origin setup/readme-initial` – pushed the branch to GitHub  
- Created a PR and requested review  

---

## 🧪 Contributing Guidelines

- Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Branch naming convention: `feature/`, `bugfix/`, `hotfix/`
- Submit pull requests with clear titles, descriptions, and screenshots if UI-related

---

## 📄 License

MIT License © 2025 Sejal Jaswal

```

---

