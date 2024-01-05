<template>
  <div class="appWrapper">
    <div v-if="isLandingPage" class="companyLogo">
      Image or Company logo
    </div>
    <div class="chatAppWrapper">
      <div class="chatApp">
        <div v-if="isLandingPage" class="landingPage ma-12">
          <el-input v-model="userName" placeholder="Enter Name"></el-input>
          <el-input v-model="userEmail" placeholder="Enter Email"></el-input>
          <el-button type="primary" size="default" @click="registerUser(false)">Register</el-button>
        </div>
        <div v-else class="chatBox">
          <ChatBox></ChatBox>
          <el-button type="info" size="default" @click="registerUser(true)">Back</el-button>
        </div>
    </div>
  </div>
</div>
</template>

<script setup>
import ChatBox from './components/ChatBox.vue';
import {ref} from 'vue';

const isLandingPage = ref(true);
const userName = ref("");
const userEmail = ref("");

const registerUser = (booleanValue) => {
  isLandingPage.value = booleanValue  ;
}
</script>

<style scoped>
.appWrapper {
  display: flex;
  flex-grow: 1;
}
.companyLogo {
  display: flex;
  align-items: center;
  height: 250px;
  margin: auto;
}
.chatAppWrapper {
  margin: auto;
  min-width: 350px;
  /* border: solid 2px red;   */
}

@media screen and (max-width: 768px) {
  .appWrapper {
    flex-direction: column;
  }
}

.chatApp {
  height: calc(100% - 60px);
  /* margin: 30px; */
  text-align: center;
}

.chatBox{
  max-width: 500px;
}
</style>
