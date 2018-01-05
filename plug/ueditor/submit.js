function getContent() {
    var contVal = UE.getEditor('editor').getContent();
    var contTxt = UE.getEditor('editor').getContentTxt();
    //获取内容以后向服务器请求
    if($("#title").val()!=''&&$("#autor").val()!=''&&$("#type").val()!=''&&contVal!=''){
        var titleVal = $("#title").val();
        var autorVal = $("#autor").val();
        var typeVal = $("#type").val();
        var date = new Date();
        var month = date.getMonth()+1;
        var minutes = date.getMinutes();
        if(String(minutes).length<=1){
            minutes = '0'+minutes;
        }
        var time = date.getFullYear()+ '-' + month + '-'+date.getDate()+' '+ date.getHours()+':'+minutes+':'+date.getSeconds();
        $.ajax({
            url:"http://10.40.153.111:9999/addArtical",
            type:"POST",
            data:{
                title:titleVal,
                cont:contVal,
                author:autorVal,
                ptime:time,
                catname:typeVal,
                contt:contTxt
            },
            success:function(data){
                console.log(data);
            }
        })
    }else{
        alert("内容不能为空");    
    }  
}


