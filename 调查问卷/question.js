Vue.component("my-question",{
    template:'\
        <div  class="bigDiv">\
            <div v-if="this.page == 1" class="bigDiv">\
                <span>1、请问您的性别是：</span>\
                <div v-for="(item,index) in first">\
                    <input type="radio" name="sexy" @change="radio_change($event,index)" :checked="item.checked" :value="item.name">{{item.name}}\
                </div>\
                <div class="bottomDiv">\
                    <my-button :title="nextTitle" @myclick="nextPage" :banded="firstDisable"></my-button>\
                    <my-button :title="resetTitle" @myclick="resetPage" :banded="false"></my-button>\
                </div>\
            </div>\
            <div v-else-if="this.page == 2" class="bigDiv">\
                <span>2、请选择您的兴趣爱好：</span>\
                <div v-for="(item,index) in second">\
                    <input type="checkbox" :value="item.name" :checked="item.checked" @change=box_change($event,index)>{{item.name}}\
                </div>\
                <div class="bottomDiv">\
                    <my-button :title="lastTitle" @myclick="lastPage" :banded="false"></my-button>\
                    <my-button :title="nextTitle" @myclick="nextPage" :banded="secondDisable"></my-button>\
                    <my-button :title="resetTitle" @myclick="resetPage" :banded="false"></my-button>\
                </div>\
            </div>\
            <div v-else class="bigDiv">\
                <span>3、请介绍一下自己：</span>\
                <div>\
                    <textarea @blur="checkLength" :value="third"/>\
                </div>\
                <div class="bottomDiv">\
                    <my-button :title="submitTitle" @myclick="submitPage" :banded="this.thirdDisable"></my-button>\
                    <my-button :title="lastTitle" @myclick="lastPage" :banded="false"></my-button>\
                    <my-button :title="resetTitle" @myclick="resetPage" :banded="false"></my-button>\
                </div>\
            </div>\
        </div>',
    props:{
          
    },
    data() {
        return {
            page:1,
            first:[
                {name:'男',checked:false},
                {name:'女',checked:false},
                {name:'保密',checked:false}
            ],
            second:[
                {name:'看书',checked:false},
                {name:'游泳',checked:false},
                {name:'跑步',checked:false},
                {name:'看电影',checked:false},
                {name:'听音乐',checked:false}
            ],
            third:'',
            nextTitle:'下一页',
            lastTitle:'上一页',
            resetTitle:'重置',
            submitTitle:'提交',
            firstDisable:true,
            secondDisable:true,
            thirdDisable:true,
        }
    },
    methods: {
        resetPage(){
            if(this.page == 1){
                this.first.forEach(function(item){
                    item.checked = false;
                });
                this.firstDisable = true;
            }else if(this.page == 2){
                this.second.forEach(function(item){
                    item.checked = false;
                })
                this.secondDisable = true;
            }else if(this.page == 3){
                this.third = '';
                this.thirdDisable = true;
            }
        },
        lastPage(){
            this.page--;
        },
        nextPage(){
            this.page++;
        },
        submitPage(){

        },
        radio_change:function(el,index){
            // console.log(el + index + el.target.value);
            this.first[index].checked = true;
            this.firstDisable = false;
        },
        box_change:function(el,index){
            // console.log(el + index + el.target.checked);
            this.second[index].checked = el.target.checked;
            var count = 0;
            this.second.forEach(function(item){
                if(item.checked){
                    count++;
                }
            })
            this.secondDisable = count < 3;
        },
        checkLength(el){
            var string = el.target.value;
            // console.log(el+'------'+string);
            this.thirdDisable = string.length < 10;
            this.third = string;
        }
    },
})