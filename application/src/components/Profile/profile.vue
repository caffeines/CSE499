<template>
  <div class="profile-home">
    <v-container>
      <div class="profile">
        <div class="profile-img">
          <img src="@/assets/img/profile.png" alt="Profile Image" class="profile-img__photo" />
        </div>
        <div class="profile-info">
          <p class="profile-info__nametitle">
            Name:
            <span class="profile-info__name">John Doe</span>
          </p>
          <p class="profile-info__emailadd">
            Email:
            <span class="profile-info__email">something@example.com</span>
          </p>
          <p class="profile-info__phone">
            Phone:
            <span class="profile-info__phonenumber">880192929292</span>
          </p>
        </div>
      </div>
      <div class="profile-nav">
        <ul class="pnav-list">
          <li class="pnav-item">
            <a href="#" class="pnav-item-link">About</a>
          </li>
          <li class="pnav-item">
            <a href="#" class="pnav-item-link">Account</a>
          </li>
          <li class="pnav-item">
            <a href="#" class="pnav-item-link">Current Order</a>
          </li>
          <li class="pnav-item">
            <a href="#" class="pnav-item-link">Order History</a>
          </li>
        </ul>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
