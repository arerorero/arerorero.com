<template>
  <Intro @animation-complete="handleIntroComplete" />
  <Portifolio v-if="introComplete" />
</template>

<script>
import { ref } from "vue";
import Intro from "../components/Intro.vue";
import Portifolio from "./Portifolio.vue";
export default {
  components: {
    Intro,
    Portifolio,
  },
  setup() {
    const introComplete = ref(false); // change to false when using intro
    return { introComplete };
  },
  methods: {
    handleIntroComplete() {
      this.introComplete = true;
    },
  },
};
</script>
