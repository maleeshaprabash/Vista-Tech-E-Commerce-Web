<div align="center">

<br/>

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Status](https://img.shields.io/badge/Status-In%20Development-orange?style=flat-square)

**A full-stack e-commerce web application for PC accessories built with the MERN stack.**  
Shop keyboards, mice, headsets, monitors, and more — with a clean UI and secure checkout.

[🛍️ Live Demo](#) · [🐛 Report a Bug](../../issues) · [✨ Request a Feature](../../issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🖥️ About the Project

**PCGear Shop** is an online store for PC accessories — built as a full-stack undergraduate project using the MERN stack. It covers everything from browsing products and managing a cart to placing orders and an admin dashboard for managing inventory.

This project was built to learn and demonstrate:
- RESTful API design with **Node.js + Express**
- Database modeling with **MongoDB + Mongoose**
- Frontend UI with **React + React Router**
- State management with **Context API**
- Authentication with **JWT tokens**

---

## ✨ Features

### 👤 Customer
- 🔐 Register & Login with JWT authentication
- 🛍️ Browse all PC accessories with search and category filter
- 📦 View detailed product pages with stock status
- 🛒 Add/remove items from cart (persists on refresh)
- ✅ Place orders and view order history

### 🔧 Admin
- 📊 Dashboard with total orders and revenue summary
- ➕ Add, edit, and delete products
- 📋 View and update all customer orders

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React, React Router, Axios, Context API |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Auth** | JSON Web Tokens (JWT), bcryptjs |
| **Dev Tools** | Nodemon, dotenv, cors |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [MongoDB](https://www.mongodb.com/) (local or MongoDB Atlas)
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/pcgear-shop.git
cd pcgear-shop
```

**2. Set up the backend**

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder (see [Environment Variables](#-environment-variables)).

```bash
npm run dev
```

> Backend runs on `http://localhost:5000`

**3. Set up the frontend**

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

> Frontend runs on `http://localhost:5173`

---

## 📁 Project Structure

```
pcgear-shop/
├── backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── middleware/
│   │   └── authMiddleware.js   # JWT verification
│   ├── models/
│   │   ├── User.js             # User schema
│   │   ├── Product.js          # Product schema
│   │   └── Order.js            # Order schema
│   ├── routes/
│   │   ├── authRoutes.js       # Register & Login
│   │   ├── productRoutes.js    # Product CRUD
│   │   └── orderRoutes.js      # Order management
│   ├── .env                    # Environment variables
│   └── server.js               # Express entry point
│
└── frontend/
    └── src/
        ├── components/
        │   ├── Navbar.jsx
        │   ├── ProductCard.jsx
        │   └── PrivateRoute.jsx
        ├── context/
        │   ├── AuthContext.jsx  # Login state
        │   └── CartContext.jsx  # Cart state
        ├── pages/
        │   ├── HomePage.jsx
        │   ├── ProductsPage.jsx
        │   ├── ProductDetailPage.jsx
        │   ├── CartPage.jsx
        │   ├── LoginPage.jsx
        │   ├── RegisterPage.jsx
        │   └── OrdersPage.jsx
        ├── App.jsx
        └── main.jsx
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
NODE_ENV=development
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 📡 API Endpoints

### Auth
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `POST` | `/api/auth/register` | Create a new account | Public |
| `POST` | `/api/auth/login` | Login and get JWT token | Public |

### Products
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/api/products` | Get all products | Public |
| `GET` | `/api/products/:id` | Get single product | Public |
| `POST` | `/api/products` | Add new product | Admin |
| `PUT` | `/api/products/:id` | Update product | Admin |
| `DELETE` | `/api/products/:id` | Delete product | Admin |

### Orders
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `POST` | `/api/orders` | Place an order | User |
| `GET` | `/api/orders/mine` | Get my orders | User |

---

## 📸 Screenshots

> _Add your screenshots here after running the app_

| Home Page | Product Page | Cart |
|-----------|-------------|------|
| ![Home]() | ![Products]() | ![Cart]() |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** this repository
2. **Create** your feature branch: `git checkout -b feature/my-feature`
3. **Commit** your changes: `git commit -m "Add my feature"`
4. **Push** to the branch: `git push origin feature/my-feature`
5. **Open a Pull Request**

Please make sure your code is clean and well-commented before submitting.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by an undergraduate student learning MERN stack

⭐ Star this repo if you found it helpful!

</div>
