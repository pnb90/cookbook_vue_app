<template>
  <div class="recipes-new">
    <h1>New Recipe</h1>

    <ul>
      <li v-for="error in errors">{{ error }} </li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Title: <input v-model="newRecipeTitle">
      </div>
      <div>
        Chef: <input v-model="newRecipeChef">
      </div>
      <div>
        Prep Time: <input v-model="newRecipePrepTime">
      </div>
      <div>
        Ingredients: <input v-model="newRecipeIngredients">
      </div>
      <div>
        Directions: <input v-model="newRecipeDirections">
      </div>
      <div>
        Image URL: <input v-model="newRecipeImageUrl">
      </div>
      <input type="submit" value="Create">
    </form>  
  </div>
</template>

<style>
</style>

<script>
  var axios = require('axios');
  export default {
    data: function() {
      return {
        newRecipeTitle: "",
        newRecipeChef: "",
        newRecipePrepTime: "",
        newRecipeIngredients: "",
        newRecipeDirections: "",
        newRecipeImageUrl: "",
        errors: []
      };
    },
    created: function() {},
    methods: {
      submit: function() {
        console.log("Create the recipe...");
        var params = {
                      title: this.newRecipeTitle,
                      chef: this.newRecipeChef,
                      prep_time: this.newRecipePrepTime,
                      ingredients: this.newRecipeIngredients,
                      directions: this.newRecipeDirections,
                      image_url: this.newRecipeImageUrl
                     };
        axios.post("/api/recipes", params)
        .then(response => {
          console.log("Successful", response.data);
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
      }
    }
  };
</script>e