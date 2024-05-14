<template>
  <div class="poggers">
    <span id="welcome" class="unshow">Welcome</span>
    <span id="to" class="unshow">to</span>
    <span id="arerorero" class="unshow">arerorero.com</span>
  </div>
  <router-link to="/304" class="exit"></router-link>
  <button class="exit"></button>
</template>

<script>
import arerorero from "../functions/arerorero";
export default {
  setup() {
    arerorero();
  },
};
</script>

<style scoped>
.poggers {
  text-transform: uppercase;
  font-weight: bolder;
  color: #f1f1f1;
  display: flex;
  justify-content: center;
  position: relative;
}
.unshow {
  position: absolute;
  display: none;
}
.show {
  padding-top: 30vh;
  font-size: 10vw;
  position: absolute;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.arerorero {
  font-family: arial black;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 30vh;
  position: absolute;
  animation:
    arerorero-animation 4s forwards,
    rainbow 35s linear infinite;
}

.exit {
  display: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  2% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes arerorero-animation {
  0% {
    opacity: 0;
    font-size: 6vw;
  }
  12% {
    font-size: 9vw;
    opacity: 0.8;
  }
  100% {
    font-size: 10vw;
    opacity: 1;
  }
}

@keyframes rainbow {
  to {
    background-position: 4500vh;
  }
}
</style>
