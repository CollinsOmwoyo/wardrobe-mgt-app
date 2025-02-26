<template>
    <div class="app-container">
        <nav class="navbar">
            <h1>👕 Gen Z Wardrobe Manager 👖</h1>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/items">My Wardrobe</router-link></li>
                <li><router-link to="/add-item">Add Item</router-link></li>
            </ul>
        </nav>

        <main>
            <router-view />
        </main>
    </div>
</template>

<style scoped>
.app-container {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 20px;
    background: #f5f5f5;
    min-height: 100vh;
}

.navbar {
    background: #222;
    color: #fff;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
}

.navbar ul {
    list-style: none;
    display: flex;
    gap: 15px;
}

.navbar ul li {
    display: inline;
}

.navbar a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.navbar a:hover {
    color: #f9a826;
}
</style>
