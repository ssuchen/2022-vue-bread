<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">產品列表</router-link> |
    <router-link to="/cart">購物車</router-link> |
    <router-link to="/admin/products">後台管理</router-link> |
  </div>
  <div class="">這是前台畫面</div>
  <router-view />
</template>
