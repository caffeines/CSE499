<template>
  <div>
    <div class="section-cart">
      <div class="cart-header">
        <v-container>
          <h1 class="heading-primary">Cart</h1>
        </v-container>
      </div>
    </div>
    <v-container>
      <table class="cart-table">
        <thead class="cart-table__header">
          <tr class="cart-table__product">
            <th class="cart-table-row cart-table__product-remove">&nbsp;</th>
            <th class="cart-table-row cart-table__product-image">&nbsp;</th>
            <th class="cart-table-row cart-table__product-product">Product</th>
            <th class="cart-table-row cart-table__product-price">Price</th>
            <th class="cart-table-row cart-table__product-quantity">
              Quantity
            </th>
            <th class="cart-table-row cart-table__product-subtotal">Total</th>
          </tr>
        </thead>
        <tbody class="cart-table__body">
          <tr class="cart-table__data">
            <td class="cart-table-row2 cart-table__data-remove">
              <router-link
                to="#"
                class="cart-table__data-remove-link"
                title="Remove"
                ><i class="fas fa-times"></i
              ></router-link>
            </td>
            <td class="cart-table-row2 cart-table__data-image">
              <router-link to="#"
                ><img
                  src="@/assets/img/7.jpg"
                  alt="Product"
                  title="Organic Protein"
                  class="cart-table__data-image-thumbnail"
              /></router-link>
            </td>
            <td class="cart-table-row2 cart-table__data-name">
              <router-link
                to="#"
                title="Organic Protein"
                class="cart-table__data-name-link"
                >Organic Protein</router-link
              >
            </td>
            <td class="cart-table-row2 cart-table__data-price">
              <i class="fas fa-lira-sign"></i> 200
            </td>
            <td class="cart-table-row2 cart-table__data-quantity">Quantity</td>
            <td class="cart-table-row2 cart-table__data-subtotal">
              <i class="fas fa-lira-sign"></i> 200
            </td>
          </tr>
        </tbody>
      </table>
      <div class="coupon">
        <form action="#" class="coupon-form">
          <input
            type="text"
            class="coupon-form__input"
            placeholder="Enter Coupon Code"
          /><input
            type="submit"
            value="Apply Coupon"
            class="btn-primary btn-primary__submit"
          />
        </form>

        <button type="submit" class="btn-primary btn-primary__submit">
          Update Cart
        </button>
      </div>

      <div class="cart-total">
        <h3 class="heading-tertiary mb-4">Cart details</h3>

        <table class="cart-details">
          <tbody class="cart-details__body">
            <tr class="cart-details__row">
              <th class="cart-details__row-header">Subtotal</th>
              <td class="cart-details__row-total">
                <i class="fas fa-lira-sign"></i> 200
              </td>
            </tr>
            <tr class="cart-details__row">
              <th class="cart-details__row-header">Total</th>
              <td class="cart-details__row-total">
                <i class="fas fa-lira-sign"></i> 200
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" class="btn-primary btn-primary__proceed">
          proceed to checkout
        </button>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
