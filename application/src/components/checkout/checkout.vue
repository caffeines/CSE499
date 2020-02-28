<template>
  <div class="checkout-page">
    <div class="cart-header">
      <v-container>
        <h1 class="heading-primary">Checkout</h1>
      </v-container>
    </div>
    <v-container>
      <h3 class="heading-tertiary mb-4 mt-10">Billing Details</h3>
      <v-row>
        <v-col cols="12" md="8">
          <div class="checkout__info">
            <form action="#" class="checkout__form">
              <div class="checkout__form-group">
                <label for="firstname" class="checkout__form-label"
                  >First Name*:</label
                >
                <input
                  type="text"
                  id="firstname"
                  class="checkout__form-input"
                />
                <p class="checkout__form-error error-firstname">
                  Error message
                </p>
              </div>
              <div class="checkout__form-group">
                <label for="lastname" class="checkout__form-label"
                  >Last Name*:</label
                >
                <input type="text" id="lastname" class="checkout__form-input" />
                <p class="checkout__form-error error-lastname">Error message</p>
              </div>
              <div class="checkout__form-group">
                <label for="Phone" class="checkout__form-label">Phone*:</label>
                <input type="text" id="Phone" class="checkout__form-input" />
                <p class="checkout__form-error error-phone">Error message</p>
              </div>
              <div class="checkout__form-group">
                <label for="email" class="checkout__form-label">Email*:</label>
                <input type="text" id="email" class="checkout__form-input" />
                <p class="checkout__form-error error-email">Error message</p>
              </div>
              <div class="checkout__form-group">
                <label class="checkout__form-label">Country*:</label>
                <country-select
                  class="checkout__form-input"
                  v-model="country"
                  :country="country"
                  topCountry="US"
                />
                <p class="checkout__form-error error-country">Error message</p>
              </div>
              <div class="checkout__form-group">
                <label class="checkout__form-label">District*:</label>
                <region-select
                  class="checkout__form-input"
                  v-model="region"
                  :country="country"
                  :region="region"
                />
                <p class="checkout__form-error error-region">Error message</p>
              </div>
              <div class="checkout__form-group">
                <label for="streetaddress" class="checkout__form-label"
                  >Street Address*:</label
                >
                <input
                  type="text"
                  id="streetaddress"
                  class="checkout__form-input"
                />
                <p class="checkout__form-error error-street">Error message</p>
              </div>
              <div class="checkout__form-group">
                <label for="apartment" class="checkout__form-label"
                  >Apartment, suite, unit etc.(Optional):</label
                >
                <input
                  type="text"
                  id="apartment"
                  class="checkout__form-input"
                />
              </div>
              <div class="checkout__form-group">
                <label for="town" class="checkout__form-label"
                  >Town/City*:</label
                >
                <input type="text" id="town" class="checkout__form-input" />
                <p class="checkout__form-error error-town">Error message</p>
              </div>
              <div class="checkout__form-group">
                <label for="postcode" class="checkout__form-label"
                  >Post Code(Optional):</label
                >
                <input type="text" id="postcode" class="checkout__form-input" />
              </div>

              <div class="cart-total">
                <h3 class="heading-tertiary mb-4">Your Orders</h3>

                <table class="cart-details">
                  <tbody class="cart-details__body">
                    <tr class="cart-details__row">
                      <th class="cart-details__row-header">
                        Organic Protein x2
                      </th>
                      <td class="cart-details__row-total">
                        <i class="fas fa-lira-sign"></i> 400
                      </td>
                    </tr>
                    <tr class="cart-details__row">
                      <th class="cart-details__row-header">Subtotal</th>
                      <td class="cart-details__row-total">
                        <i class="fas fa-lira-sign"></i> 400
                      </td>
                    </tr>
                    <tr class="cart-details__row">
                      <th class="cart-details__row-header">Total</th>
                      <td class="cart-details__row-total">
                        <i class="fas fa-lira-sign"></i> 400
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <button type="submit" class="btn-primary btn-primary__proceed">
                Place Order
              </button>
            </form>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="checkout__product"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: '',
      region: ''
    };
  }
};
</script>

<style></style>
