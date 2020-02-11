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
          <v-col cols="12" md="3" sm="12" xs="12" v-for="todo in 4" :key="todo">
            <div class="newproducts">
              <div class="newproducts__img">
                <div class="newproducts__img-overlay"></div>
                <img
                  src="@/assets/img/7.jpg"
                  alt="Products"
                  class="newproducts__photo"
                />
                <div class="newproducts__img-content " align="center">
                  <div class="my-2">
                    <v-btn class="btn-cart" medium color="error" dark
                      >Add to Cart</v-btn
                    >
                  </div>
                  <div class="my-2">
                    <v-btn medium color="primary" class="btn-cart" dark
                      >Quick View</v-btn
                    >
                  </div>
                </div>
              </div>

              <a href="#" class="newproducts__catagory mt-2">Organic Protein</a>
              <a href="#" class="newproducts__header ">Organic Protein</a>

              <v-rating
                class="newproducts__rating"
                v-model="rating"
                background-color="pink lighten-3"
                color="pink"
                small
                dense
                half-increments
                hover
              >
              </v-rating
              ><span class="newproducts__rating-count">({{ rating }})</span>

              <p class="newproducts__price mt-3">
                <i class="fas fa-lira-sign"></i> 122
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 0
    };
  }
};
</script>

<style></style>
