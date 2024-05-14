<template>
  <h1>Not Found</h1>
  <h2>error 404</h2>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
h1 {
  font-size: 10vw;
  text-align: center;
  margin-top: 30vh;
  color: #f1f1f1;
}
h2 {
  font-size: 5vw;
  text-align: center;
  color: #f1f1f1;
}
h2::after {
  content: "😭";
}
</style>
