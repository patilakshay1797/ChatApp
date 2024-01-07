<template>
    <div class="chatBoxWrapper">
        <div class="chatBoxHeader">
            <!-- <span>image</span> -->
            <span class="personOrGroupName">Shubham Chavan</span>
        </div>
        <div class="chatBoxHistory">
            <div>
                <div v-for="(msgObj, index) in allChatMsgList">
                    <div class="">
                        <div v-if="msgObj.ownerOfMsg === 'self'" class="messageWrapper flexEnd ">
                            <div class="message self borderRadiusRight">
                                {{ msgObj.msg }}
                            </div>
                        </div>
                        <div v-else class="messageWrapper friend flexStart ">
                            <div class="message borderRadiusLeft">
                                {{ msgObj.msg }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="chatBoxInput">
            <div contenteditable="true" class="chatInput" placeholder="Write a message" data-placeholder="Write a message" @onChange="changeInputMsg">
            </div>
            <el-icon class="sendIcon" @click="addMessageToList"><Promotion /></el-icon>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const chatInputText = ref("");
const allChatMsgList = ref([]);

const addMessageToList = () => {
    let inputMsg = document.querySelector(".chatInput").textContent
    let msgObj = {
        // self / friend
        ownerOfMsg: "self",
        msgOrder: allChatMsgList.length + 1,
        msg: inputMsg
    }
    allChatMsgList.value.push(msgObj);
    document.querySelector(".chatInput").innerHTML = "";
}
</script>

<style scoped>
.chatBoxWrapper {
    border-radius: 8px;
    box-shadow: 0px 5px 20px 8px rgba(0,0,0,.1);
}
.chatBoxHeader {
    height: 60px;
    background-color: rgb(55, 136, 209);
    border-radius: 8px 8px 0 0;
    /* border: solid 1px red; */
    display: flex;
    align-items: center;
    padding: 20px;
}
.chatBoxHistory {
    height: 300px;
    background-color:white;
    overflow: auto;
    /* border: solid 1px blue; */
}
.chatBoxInput {
    width: 100%;
    min-height: 50px;
    background-color:snow;
    /* border: solid 1px blue; */
    padding: 8px;
    display: flex;
    align-items: center;
    border-top: solid 0.5px black;
    border-radius: 0 0 8px 8px;
}
.chatInput {
    width: 290px;
    text-align: justify;
    color: rgb(51, 71, 91);
    
}

.chatInput:focus-visible {
    outline: none;   
}

.chatInput[data-placeholder]:not([data-placeholder=""]):empty::before {
    color: rgb(123, 152, 182);
    content: attr(data-placeholder);
}

.chatBoxInput i {
    height: 25px;
    width: 50px;
    cursor: pointer;
    /* border-left: solid 0.5px black; */
}

.sendIcon {
    color: grey;
}


.el-icon svg {
    height: 25px;
    width: 25px
}

.messageWrapper{
    display: flex;
    flex-direction: column;
}

.message {
    background-color: rgb(234, 240, 246);
    color: rgb(66, 91, 118);
    margin: 10px;
    padding: 10px;
    height: fit-content;
    max-width: 336px;
    word-wrap: break-word;
    text-align: left;
}

.borderRadiusRight {
    border-radius: 8px 0 8px 8px;
}

.borderRadiusLeft {
    border-radius: 0 8px 8px 8px;
}

.personOrGroupName {
    font-size: larger;
}

.messageWrapper .self {
    background-color: rgb(55, 136, 209);
    color: white;
}
</style>