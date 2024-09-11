import { ref } from 'vue'
import { defineStore } from 'pinia'

export const UserStore = defineStore('UserStore', () => {
    const Username=ref('点击登陆')
    const HasLogin=ref(false);
    const Token=ref('');

    return{
        Username,
        HasLogin,
        Token,
    }
})
