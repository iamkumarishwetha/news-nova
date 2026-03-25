# NewsNova – Full Stack News Application

## Overview

NewsNova is a full-stack news application that allows users to browse real-time news, view detailed articles, and interact using like/dislike features.

---

## Tech Stack

* Frontend: React, TypeScript, Tailwind CSS
* Backend: Laravel
* Authentication: JWT
* API: NewsAPI
* Database: MySQL
* Caching: Laravel Cache (Database)
* Queue & Jobs: Email notifications

---

## Features

*  User Authentication (JWT-based login/register)
*  Fetch real-time news from external API
*  Like /  Dislike functionality (protected routes)
*  API caching and throttling for performance
*  Email notification on user registration (Queue + Job)
*  Responsive UI with Tailwind CSS

---

##  Screenshots

<img width="1696" height="942" alt="image" src="https://github.com/user-attachments/assets/7880838d-5bd7-4b2c-9e60-4ca6267084af" />
<img width="1740" height="919" alt="image" src="https://github.com/user-attachments/assets/b2043123-835e-4592-a073-58fe7ee8ede5" />
<img width="1664" height="880" alt="image" src="https://github.com/user-attachments/assets/12576daa-99ed-4097-864a-0ce9fcb57b0a" />
<img width="1680" height="929" alt="image" src="https://github.com/user-attachments/assets/8dbd51bb-bac3-4050-8c13-f6d56c8a644f" />



---

## Installation

### Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

##  Live Demo
https://news-nova-gamma.vercel.app/


---

## Future Improvements

* Bookmark articles
* Comments system
* Dark mode
* Infinite scrolling

---

## Author

Kumari Shwetha
