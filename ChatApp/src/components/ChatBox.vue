<template>
    <div class="chatBoxWrapper">
        <div class="chatBoxHeader">
            <span>image</span>
            <span>Chatting With</span>
        </div>
        <div class="chatBoxHistory">
            Chat history box
        </div>
        <div class="chatBoxInput">
            <el-input v-model="chatInputText" class="chatInput">
            </el-input>
            <el-icon @click="addMessageToList"><Promotion /></el-icon>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const chatInputText = ref("");

const addMessageToList = () => {
    console.log(chatInputText.value);
}
</script>

<style scoped>
.chatBoxHeader {
    height: 50px;
    background-color:lightgrey;
    /* border: solid 1px red; */
}
.chatBoxHistory {
    height: 300px;
    background-color:white;
    /* border: solid 1px blue; */
}
.chatBoxInput {
    width: 100%;
    height: 50px;
    background-color:lightgrey;
    /* border: solid 1px blue; */
    padding: 8px;
    display: flex;
    align-items: center;
}
.chatInput {
    width: 100%;
    
}

.chatBoxInput i {
    height: 25px;
    width: 35px;
    cursor: pointer;
}
</style>