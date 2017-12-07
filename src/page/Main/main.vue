<template>  
   <div>
        <h3>所有注册用户</h3>
        <ul>
            <li v-for="item in list">
                {{item.username}}
            </li>
        </ul>
    </div>

</template>

<script>
      export default{
        data(){
            return{
                list: ''
            }
        },
        mounted(){
            this.$http.get('http://localhost:8080/#/login').then((res)=>{
                this.list = res.data
                console.log(res)
            })
        }
    }
</script>

<style lang="">
     ul{padding: 0;}
    ul li{list-style: none;}
</style>