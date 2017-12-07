<template>
  <div>
      <div class="do-about">
            <div class="do-about-theme">
                <div class="do-about-content">
                    <p style="line-height: 1; text-align: left; position: absolute;margin-top:170px; ">
                        <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; font-size: 24px; color: rgb(255, 255, 255);'>
                       联系我们</span>
                    </p>
                    <p style="line-height: 1.2; text-align: left; position: absolute;margin-top:200px;">
                        <strong>
                              <span style="font-size: 18px; color: rgb(255, 255, 255); font-family: SimHei;">品质，精益求精的匠心</span>
                          </strong>
                    </p>
                </div>
              
            </div>
            <div class="do-about-address">
                <div class="do-address-left">
                      <p style="line-height: 1.8;margin-left:40px;margin-top:30px;">
                         <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; font-size: 24px; color: rgb(51, 51, 51);'>成都</span>
                      </p>
                        <p style="line-height: 1.8;margin-left:40px;">
                           <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; color: rgb(153, 153, 153);'>咨询热线：010-00000000</span>
                        </p>
                          <p style="line-height: 1.8;margin-left:40px;">
                           <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; color: rgb(153, 153, 153);'>门店地址：互联网省域名市网站区666号</span>
                        </p>
                       <p style="line-height: 1.8;margin-left:40px;">
                           <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; color: rgb(153, 153, 153);'>公司地址：中国互联网省域名市网站区666号</span>
                        </p>

                </div>
                <div class="do-address-right">
                    <p style="line-height: 1.8;margin-left:40px;margin-top:30px;">
                         <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; font-size: 24px; color: rgb(51, 51, 51);'>重庆</span>
                      </p>
                        <p style="line-height: 1.8;margin-left:40px;">
                           <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; color: rgb(153, 153, 153);'>咨询热线：010-00000000</span>
                        </p>
                          <p style="line-height: 1.8;margin-left:40px;">
                           <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; color: rgb(153, 153, 153);'>门店地址：互联网省域名市网站区666号</span>
                        </p>
                       <p style="line-height: 1.8;margin-left:40px;">
                           <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; color: rgb(153, 153, 153);'>公司地址：中国互联网省域名市网站区666号</span>
                        </p>
                </div>
            </div>
             <div class="do-about-proxy">
                   <div class="do">
                       <p style="line-height: 1.5; text-align: center;margin-top:100px;">
                          <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; font-size: 24px; color: rgb(51, 51, 51);'>加盟代理</span>
                       </p>
                      <p style="line-height: 1.5; text-align: center;">
                         <span style="font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: rgb(153, 153, 153);">AGENT FRANCHISE</span>
                      </p>
                   </div>
                    <div class="do-form">
                          <div class="do-form-left">
                             <form action="">
                             <input type="text" class="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}">

                             <input type="text" class="text" value="Email Address" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email Address';}">

                            <input type="text" class="text" value="Subject" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject';}">
                             <div class="do-form-group form-button">
                              <input type="submit" class="btn btn-success btn-lg btn-block do-bg-red4" value="提交" >
                             </div>

                            </form>
                          </div>
                          <div class="do-form-right">
                             <textarea name="" id="" cols="30" rows="10" value="备注" placeholder="备注"></textarea> 
                          </div>

                    </div>
             </div>
        </div>

  </div>

</template>

<script>
    
</script>

<style lang="">
    .do-about{
    width: 100%;
}

.do-about-theme{
    background-image: url('http://file.cdn-static.cn/2656_w2000.jpg?imageMogr2/thumbnail/2000x2000/q/100');
    background-attachment: fixed;
    width: 100%;
    height: 410px;
}
.do-about-content{
    width: 300px;
    height: 400px;
    margin-left: 300px;
    text-align: center;
   position: relative;
 
}
.do-about-address{
    width: 1200px;
    height: 210px;
    margin: 0 auto;
    margin-top: 35px;
    display: flex;
}
.do-address-left{
    width: 580px;
    height: 209px;
    background: #FBFBFB;
    
}
.do-address-right{
    width: 580px;
    height: 209px;
    margin-left: 37px;
    background: #FBFBFB;
}
.do-about-proxy{
    width: 1200px;
    height: 320px;
    margin:  0 auto;
    display: flex;
    margin-top: 25px;
}
.do-about-proxy .do{
       width: 250px;
       height: 320px;
       
}
    .do-about-proxy .do-form{
        width: 780px;
        height: 246px;
        margin-left: 200px;
       }
    .do-form{
        display:flex;
       }
    .do-form-left{
        width: 410px;
        height: 246px;
      
 }
    .do-form-left input{
        width: 383px;
        height: 46px;
        margin-bottom: 15px;
       
    }
    .form-button{
        width:25%;
        display:block;
    }
    .do-form-group {
        margin-bottom:15px;
        text-align:left;
        position:relative;
    }
    .do-form-right{
        margin-right:115px;
    }
    .btn-lg{
        padding:14px 18px;
    }
    .do-bg-red4{
        background:#ff8383 !important;
    }
    .btn-lg {
    font-size: 15px;
   line-height: 1.3333333;
}
input.btn-block[type="submit"] {
    width: 100%;
    color:white;
}
.btn-success.btn-lg {
     box-shadow: 0 0.5px 3px rgba(0,0,0,0);
}
.form-button input {
    margin: 0 !important;
}
input[type="submit"] {
    cursor: pointer;
}
.btn{
    border:none;
    font-weight: 400;
   text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    background-image: none;
     white-space: nowrap;
     border-radius:5px;
   
}
.btn-block{
    display:block;
}
</style>