<template>
    <aside class="menu">
        <p class="menu-label">Article</p>
        <ul class="menu-list">
            <li>
                <router-link to="/admin/posts/new">New Article</router-link>
            </li>
            <li>
                <router-link to="/admin/posts">Article List</router-link>
            </li>
        </ul>
        <p class="menu-label">User</p>
        <ul class="menu-list">
            <li>
                <router-link to="/admin/users">User List</router-link>
            </li>
        </ul>
    </aside>
</template>