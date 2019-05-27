Vue.component('my-button',{
    template:'<button @click="btnAction" :disabled="banded">{{title}}</button>',
    props:{
        banded:{
            type:Boolean,
            default:true
        },
        title:{
            type:String,
            default:''
        },
    },
    methods: {
        btnAction(){
            this.$emit('myclick');
        }
    },
})