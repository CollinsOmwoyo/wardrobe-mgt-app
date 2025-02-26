A **Vue 3 & Laravel 11** web application to manage and organize your wardrobe items efficiently. Interview Test.

## 📌 Requested Features by Uzapoint

- ✅ **User Authentication** (Login/Registration)
- ✅ **Add, Edit & Delete** Clothing Items
- ✅ **Categorization** (Tops, Bottoms, Shoes, etc.)
- ✅ **Search & Filter** Items
- ✅ **Responsive UI** for Desktop & Mobile

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone will give link 
cd wardrobe-mgt-app
```

### 2️⃣ Install Laravel Backend

```sh
composer install
cp .env.example .env
php artisan key:generate
```

Edit `.env` to configure your database, then run:

```sh
php artisan migrate
php artisan serve
```

### 3️⃣ Install Vue Frontend

```sh
npm install
npm run dev
```

---

## 🛠️ Tech Stack

| Technology  | Description |
|-------------|------------|
| Laravel 11  | Backend Framework |
| Vue 3       | Frontend Framework |
| Vite        | Build Tool |
| Vue Router  | Client-side Navigation |
| Tailwind CSS | Styling |

---

## 📜 API Endpoints (Laravel)

| Method | Endpoint       | Description |
|--------|--------------|-------------|
| `GET`  | `/api/items`  | Fetch all clothing items |
| `POST` | `/api/items`  | Add a new item |
| `PUT`  | `/api/items/{id}` | Update an item |
| `DELETE` | `/api/items/{id}` | Delete an item |

---

## UI Components (Vue)

- **Home.vue** → Landing Page
- **Items.vue** → List of wardrobe items
- **ItemForm.vue** → Add/Edit clothing items
- **Navbar.vue** → Navigation bar

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 📩 Contact

For inquiries, reach out at [collinsomwoyo@gmail.com(mailto:collinsomwoyo@gmail.com).
```
