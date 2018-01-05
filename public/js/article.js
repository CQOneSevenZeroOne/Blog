//格式化时间
Date.prototype.format = function(fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
var bt2;
var bt1;
//验证用户名
$("#count").blur(function() {
    
    if(!/^.{2,10}$/.test($(this).val())) {
        $(".errorc").html("请输入2-10个字符")
        bt1 =false;
    }else{
        $(".errorc").html("")
        bt1 = true;
    }
})
//验证邮箱
$("#email").blur(function() {
    
    if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test($(this).val())) {
        $(".errore").html("你输入的邮箱格式不正确");
         bt2 =false;

    }else{
        $(".errore").html("")
        bt2 =true;
    }
})

//点击发表,向后台发送评论数据
function publish() {
    var countval = $("#count").val();
    var emialval = $("#email").val();
    var textval = $("#massage").val();
    var time = new Date().format("yyyy-MM-dd hh:mm:ss");
   
    if(textval == ''){
        $(".alertc").html("发表文章内容不能为空")
    }
    
    if(bt1 && bt2) {
        $.ajax({
            url: "http://10.40.153.111:9999/addComm",
            type: "post",
            data: {
                usrname: countval,
                artid: urlartid,
                comment: textval,
                email: emialval,
                ptime: time
            },
            success: function(data) {
                //弹框显示发表评论成功并将评论添加至页面...
                var html = `
                <li>
            <span>${countval} <font color ="#000">:说</font></span>
            <p>${textval}</p>
            <div class="datetime">
                <p class="date">${time}<span><img src="" alt=""></span></p>
            </div>
        </li>
                `
                $(".mbc").append(html);
                $(".alertc").html("发表成功")
                
                
            }
        })
    }else{
        $(".alertc").html("你的用户名或邮箱输入有误!请重新输入!")
    }
    $(".alertc").fadeToggle("slow","linear",function(){
        setTimeout(() => {
           $(".alertc").fadeToggle("slow","linear")	
       }, 1000);
})
}
var urlartid = location.href.split("?")[1].split("=")[1];//本页面文章iD

//刷新页面加载数据库的评论
$.ajax({
    type:"post",
    url: "http://localhost:9999/showComm",
    data:{
        artid:urlartid
    },
    success:function(data){
        console.log(data)
        var html = data.map(function(item){
            return `
            <li>
            <span>${item.usrname} <font color ="#000">:说</font></span>
            <p>${item.comment}</p>
            <div class="datetime">
                <p class="date">${item.ptime}<span class= "clipro ding"></span><span class= "clipro cai"></span><span class= "clipro respon">回复</span></p>
            </div>
        </li>
            `
        }).join("");
        //console.log(html)
        $(".mbc").html(html);
        $(".clipro").on("click",function(){
      
            if($(this).hasClass("cai")){
                $(this).css({
                    "background-position-x":"-28px",
                     "background-position-y":"2px"
        
                })
                
            }else if($(this).hasClass("ding")){
                $(this).css({
                    "background-position-x":"-31px",
                     "background-position-y":"-27px"
        
                })
            }
            })
        

    }
})
//发送文章请求,获取文章内容



$.ajax({
    type:"post",
    url: "http://10.40.153.111:9999/showArtical",
    data:{
        id:urlartid
    },
    success:function(data){
       
        
     $(".artical_title").html(data[0].title);
     $(".artical_time").html(data[0].time);
     $(".artical_author").html(data[0].author);
     $(".content").html(data[0].cont);

        

    }
})


