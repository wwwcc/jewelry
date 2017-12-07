<template>
    <div class="container">
        <div class="header">
            <h1>LOVE</h1>
            
        </div>
        <div class="theme">
            <a href="/">
                <p><span style="color:black;margin-left:40px;">RPLEX</span>.真爱珠宝</p>
            </a>
            
        </div>
        <div class="header-nav">
            <div class="content-nav">
                <ul class="nav-list" clearfix>
                    <li class="nav-item">
                        <a href="/">首页</a>
                    </li>
                    <li class="nav-item">
                        <a href="#/center">产品中心</a>
                       </li>
                    <li class="nav-item">
                        <a href="#/story">品牌故事</a>
                       </li>
                    <li class="nav-item">
                        <a href="#/news">新闻动态</a>
                       </li>
                    <li class="nav-item">
                        <a href="#/about">联系我们</a>
                    </li>
                   
                </ul>
            </div>
           
        </div>
     </div>
</template>
<script>
    export default {
       
    }
</script>
<style scode>
    *{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.container{
    width: 100%;
}
.header{
    width: 100%;
    height: 50px;
    background: #F2F2F2;
}
.header h1{
    text-align: center;
    color: gray;
    font-family: "宋体";
   
}
 .theme{
     width: 100%;
     height: 80px;
    }
    .theme a{
        text-decoration: none;
        color: gray;
    }
  .theme p{
        text-align: center;
        padding-top: 20px;
        font-size: 28px;
        font-family: "宋体"
 } 
    .header-nav {
     width: 100%;
     height: 80px;
     line-height: 100px;
    }
    .content-nav{
        width: 600px;
        margin: 0 auto;
       
    } 
    .header .right-nav{
        width: 250px;
        height: 85px;
        float: right;
        vertical-align: middle;
        margin-top:25px;
    }
    .right-nav .hd-login,.hd-reg{
       background-color:orange;
        color:#666 !imporment;
        padding:6px 22px;
        margin: 0 6px;
        border-radius: 100px;
    }
    .right-nav a{
        text-decoration:none;
    }
     .header-nav ul {
        list-style: none;
    }
    .header-nav ul li{
        float:  left;
        margin-right: 60px; 
    }
    .header-nav ul a{
        text-decoration: none;
        color: gray;
    } 
    .clearfix{
        content:" ";
        display: block;
        clear:both;
        height:0;
        visibility: hidden;
    }
 .header-nav ul  a:hover{
            color: orchid;
    }
</style>