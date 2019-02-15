<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1>{{ message2 }}</h1>
    <div>
      <input v-model="message2">
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "UwU!",
      message2: "O_o"
    };
  },
  created: function() {},
  methods: {}
};
</script>