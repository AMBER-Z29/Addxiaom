new Vue({
    el:"#app",
    data:{
        arrs:[
          {ppt:"小明",shanc:"删除"},
          {ppt:"小花",shanc:"删除"},
          {ppt:"小红",shanc:"删除"}
        ],
        tx1:"待办事项",
        tj:"添加",
        asd:{
            ppt:"",shanc:"删除"
        },
    },
    methods:{
        fun1:function(){
            if(this.asd.ppt ==""){
                alert("内容不能为空")
            }else{
                this.arrs.push(
                    this.asd
                )
                this.asd = {ppt:"",shanc:"删除"}
            }
        },
        fun:function(index){
        this.arrs.splice(index,1)
         }
    },
    
    
})