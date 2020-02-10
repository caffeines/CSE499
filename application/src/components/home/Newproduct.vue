<template>
  <div>
    <section class="section__newproduct">
      <v-container class="my-6">
        <h2 class="heading-primary my-2" align="center">
          New
          <span class="heading-primary-span">products</span>
        </h2>
        <p class="catagory-text" align="center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          velit pariatur magnam fuga maiores
        </p>
        <v-row class="mt-5">
          <v-col cols="12" md="3" sm="12" xs="12">
            <div class="newproducts">
              <img
                src="@/assets/img/7.jpg"
                alt="Products"
                class="newproducts__photo"
              />
              <h4 class="newproducts__header">hello</h4>
              <p class="newproducts__catagory">hello</p>
              <v-rating
                v-model="rating"
                background-color="pink lighten-3"
                color="pink"
              ></v-rating>
              <p class="newproducts__price">
                BDT: 12
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
