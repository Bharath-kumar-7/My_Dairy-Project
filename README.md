# 🧠 My Dairy – Full Stack Journal Application

> A modern digital diary where users can register, log in, write daily thoughts, and manage personal posts securely.

---

## 🌐 Live Demo

*(Add link if deployed, e.g., Render / Vercel / Railway)*
👉 [Live Preview](#)

---

## 📸 Project Overview

| Login Page                                                                     | Feed Page                                                                    | Post Page                                                                    | Dedicated Page                                                                         |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| ![Login](https://github.com/Bharath-kumar-7/My_Dairy-Project/assets/login.png) | ![Feed](https://github.com/Bharath-kumar-7/My_Dairy-Project/assets/feed.png) | ![Post](https://github.com/Bharath-kumar-7/My_Dairy-Project/assets/post.png) | ![Dedicated](https://github.com/Bharath-kumar-7/My_Dairy-Project/assets/dedicated.png) |

*(Add your actual screenshots in `/assets` folder and update URLs)*

---

## 🚀 Features

✅ **User Registration & Authentication** (hashed password using `bcrypt`)
✅ **Create, View, and Manage Personal Posts**
✅ **MySQL Database Integration**
✅ **Beautiful Responsive UI with Bootstrap 5**
✅ **Secure Data Handling with Express.js**
✅ **Modular & Scalable Folder Structure**

---

## 🧩 Tech Stack

| Category               | Technologies              |
| ---------------------- | ------------------------- |
| **Frontend**           | HTML5, CSS3, Bootstrap 5  |
| **Backend**            | Node.js, Express.js       |
| **Database**           | MySQL (via `mysql2`)      |
| **Security**           | Bcrypt (Password Hashing) |
| **Version Control**    | Git, GitHub               |
| **Hosting (optional)** | Render / Vercel / Railway |

---

## ⚙️ Installation & Setup (From Scratch → Pro)

### 🔹 1. Clone Repository

```bash
git clone https://github.com/Bharath-kumar-7/My_Dairy-Project.git
cd My_Dairy-Project
```

### 🔹 2. Backend Setup

Navigate to the backend root folder (where `index.js` is located):

#### Install dependencies

```bash
npm init -y
npm install express cors bcrypt mysql2
```

#### Start the server

```bash
node index.js
```

> 🟢 Server will start at **[http://localhost:3000](http://localhost:3000)**

### 🔹 3. MySQL Configuration

Create a database named `Dairy` and add the following tables:

```sql
CREATE DATABASE Dairy;
USE Dairy;

CREATE TABLE Users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    EmailID VARCHAR(255) UNIQUE,
    HashedPassword VARCHAR(255)
);

CREATE TABLE Posts (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    postTitle VARCHAR(255),
    postDescription TEXT,
    FOREIGN KEY (UserID) REFERENCES Users(ID)
);
```

Edit credentials inside **index.js**:

```js
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',  // change this
    database: 'Dairy'
});
```

---

## 💻 Frontend Setup

Simply open the following pages in your browser (no build required):

* `Registration.html` → User signup
* `Login.html` → User login
* `FeedPage.html` → List of your posts
* `Post.html` → Create new post
* `DedicatedPage.html` → View single post

Ensure the backend server is running locally on port 3000.

---

## 📁 Folder Structure

```
My_Dairy-Project/
│
├── index.js                 # Express backend server
├── Login.html / .css        # User login page
├── Registration.html         # User registration page
├── FeedPage.html / .css     # Dashboard (posts feed)
├── Post.html / .css         # Create post form
├── DedicatedPage.html / .css# View individual post
└── README.md
```

---

## 🔐 API Endpoints

| Method | Endpoint                  | Description                |
| ------ | ------------------------- | -------------------------- |
| `POST` | `/registerUser`           | Register new user          |
| `POST` | `/UserLogin`              | Authenticate user          |
| `POST` | `/newPost`                | Create a new diary post    |
| `GET`  | `/getMyposts?userID=...`  | Fetch all posts for a user |
| `GET`  | `/getPostById?postID=...` | Get post details by ID     |

---

## 🧠 Technical Highlights

* **Async/Await + Promise handling**
* **RESTful API Design**
* **CORS-enabled Communication**
* **MySQL Integration via Connection Pool**
* **Clean modular HTML/CSS (Comfortaa font, Gradient UI)**

---

## 🛠️ Requirements

| Tool    | Version              |
| ------- | -------------------- |
| Node.js | ≥ 16.x               |
| npm     | ≥ 8.x                |
| MySQL   | ≥ 8.x                |
| Browser | Latest Chrome / Edge |

---

## 🧩 Environment Setup Table

| Step                 | Command            | Description               |
| -------------------- | ------------------ | ------------------------- |
| Install dependencies | `npm install`      | Installs all Node modules |
| Run backend          | `node index.js`    | Starts Express server     |
| Create DB            | `mysql -u root -p` | Access MySQL shell        |
| Open UI              | `open Login.html`  | Launch app frontend       |

---

## 💼 Technical Skills Demonstrated

* 🔹 Full Stack Development (MERN-like with MySQL)
* 🔹 Backend API design using Express
* 🔹 Authentication (bcrypt hashing)
* 🔹 Database schema design
* 🔹 Bootstrap 5 responsive design
* 🔹 REST integration with Fetch API
* 🔹 Git & version control proficiency

---

## 🧑‍💻 Author

**Bharath Kumar**
📧 [Your Email Here]
🌐 [Your Portfolio / LinkedIn]
🗓️ *Created in 2025 with ❤️ for learning and innovation.*

---

## 🏷️ Tags

`#FullStack` `#NodeJS` `#Express` `#MySQL` `#Bootstrap` `#WebDevelopment` `#CRUD` `#Authentication` `#Frontend` `#Backend` `#JavaScript` `#ModernUI`

---

## 🪄 Future Enhancements

* ✨ JWT authentication
* ✨ Edit/Delete posts
* ✨ Dark mode support
* ✨ Cloud database deployment
* ✨ Mobile responsive improvements

---

## 📜 License

This project is licensed under the **MIT License** – feel free to modify and use it for learning.

---

> 💬 *If you like this project, give it a ⭐ on GitHub to support future improvements!*
