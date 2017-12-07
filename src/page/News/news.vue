<template>
     <div>
         <div class="center">
            <div class="do-news-img">
                <div class="news-theme">
                    <p style="line-height: 1; text-align: left; position: absolute;margin-top:170px;">
                        <span style='font-family: "Microsoft YaHei", 微软雅黑, MicrosoftJhengHei, 华文细黑, STHeiti, MingLiu; font-size: 24px; color: rgb(255, 255, 255);'>
                        行业动态</span>
                    </p>
                    <p style="line-height: 1.2; text-align: left; position: absolute;margin-top:200px;">
                        <strong>
                              <span style="font-size: 18px; color: rgb(255, 255, 255); font-family: SimHei;">中国品牌，创造传奇</span>
                          </strong>
                    </p>
                </div>
            </div>
            <div class="do-news-content">
                <div class="do-news-one">
                    <div class="news-one">
                        <div class="do-news" style="margin-left:50px;margin-top:40px;">
                            <h2 style="font-size:40px;">10-27</h2>
                            <p style="margin-left:85px;">2017</p>
                        </div>
                       <div> 
                            <p style="margin-left:85px;line-height:1.5;margin-top:40px;">专访蒂芙尼首席宝石学家：自然狂野的力量之美</p>
                            <p style="margin-left:85px;line-height:1.5;">自1845年起，堪称传奇的蒂芙尼Blue Book高级珠宝目录甄选全世界最为璀璨华美的珠宝杰作，每年一次投递至尊贵的顾客手中。时间流转，Blue Book的内容日渐丰富、图片更加精美，蒂芙尼蓝色礼盒所使用的著名的"知更鸟蛋蓝色"成为其封面颜色，作为品牌优雅传承的一部分…</p>
                       </div>
                    </div>
                </div>
                <div class="do-news-two">
                    <div class="news-two">
                         <div class="do-news" style="margin-left:50px;margin-top:40px;">
                            <h2 style="font-size:40px;">10-10</h2>
                            <p style="margin-left:85px;">2017</p>
                        </div>
                       <div> 
                            <p style="margin-left:85px;line-height:1.5;margin-top:40px;">全球首家钻石期货交易所的印度成立</p>
                            <p style="margin-left:85px;line-height:1.5;">全球首个钻石期货交易所——「Indian Commodity Exchange Limited」（ICEX）8月28日起在印度正式开始运营。该交易所由印度金融公司「Reliance Capital」和印度贸易公司「MMTC」等企业投资成立，为印度钻石切割商提供风险对冲工具…</p>
                       </div>
                    </div>
                </div>
            </div>

        </div>

     </div>

</template>

<script>
    
</script>

<style lang="">
    .center{
    width: 100%;
}

.do-news-img{
    width: 100%;
    height: 410px;
     background-image: url('http://file.cdn-static.cn/4853_w2000.jpg?imageMogr2/thumbnail/2000x2000/q/100');
    background-attachment: fixed;
    
}
.news-theme{
    width: 500px;
    height: 400px;
    margin-left: 300px;
    position: relative;
}

.do-news-content{
    width: 1200px;
    height: 360px;
    margin: 0 auto;
    margin-top: 100px;
} 
.do-news-one {
    width: 1200px;
    height: 177px;
    
}
.do-news-one:hover{
    background: palevioletred;
    color: white;
}

.do-news-two{
     width: 1200px;
    height: 177px;
    
}
.do-news-two:hover{
    background: palevioletred;
    color: white;
}

.do-news-one .news-one{
    width: 1200px;
    height: 117px;
    margin-top: 20px;
    display: flex;
}

.do-news-two .news-two{
    width: 1200px;
    height: 117px;
    margin-top: 20px;
    display: flex;
}
</style>