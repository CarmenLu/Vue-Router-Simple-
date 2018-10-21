<template>
  <div>
    <img src="./assets/logo.png" />
    <h1>Vue-Router</h1>
    <ul>
      <router-link to='/index'><a href="/index">Index</a></router-link>
      <router-link to='/hello'><a href="/hello">Hello</a></router-link>
    </ul>
<router-view></router-view>
  </div>
</template>
