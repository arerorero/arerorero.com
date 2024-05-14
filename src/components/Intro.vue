<template>
  <transition name="fade" mode="out-in">
    <div v-if="showIntro" class="intro">
      <span id="welcome" class="unshow">Welcome</span>
      <span id="to" class="unshow">to</span>
      <span @click="handleClick" id="arerorero" class="unshow">
        arerorero.com
      </span>
      <p class="info">pls click ☝🏻</p>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
import intro from "../functions/intro";
export default {
  name: "Intro",
  setup() {
    intro();

    const showIntro = ref(true);

    return { showIntro };
  },
  methods: {
    handleClick() {
      this.showIntro = false;
      this.$emit("animation-complete");
    },
  },
};
</script>

<style scoped>
.info {
  display: none;
}

.show-info {
  text-align: center;
  color: #f1f1f1;
  font-size: 1.5vw;
  margin-top: 55vh;
}

.intro {
  height: 100vh;
  background: #11061d;
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
  cursor: pointer;
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

.fade-leave-active {
  transition: opacity 0.5s ease;
}

/* Start state for leave transition */
.fade-leave-from {
  opacity: 1;
}

/* End state for leave transition */
.fade-leave-to {
  opacity: 0;
}
</style>
