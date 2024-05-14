<template>
  <ul>
    <li>
      <router-link :to="{ name: 'about-arerorero' }">arerorero</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'projects' }">projects</router-link>
    </li>
  </ul>
  <transition name="fade">
    <router-view />
  </transition>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showProjects = ref();
    const change = (route) => {
      if (route === "home") {
        showProjects.value = true;
      }
    };
    return { change };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #0b0413;
  border-bottom: black 1px solid;
  border-bottom-left-radius: 0.3em;
  border-bottom-right-radius: 0.3em;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bolder;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  cursor: pointer;
  background-color: #aaf;
  color: #11061d;
}

.router-link-exact-active {
  background-color: #aaf;
  color: #11061d;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
