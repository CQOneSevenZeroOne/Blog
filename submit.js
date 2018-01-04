function getContent() {
    var arr = [];
    arr.push("使用editor.getContent()方法可以获得编辑器的内容");
    arr.push("内容为：");
    arr.push(UE.getEditor('editor').getContent());
    //获取内容以后向服务器请求
    var titleVal = $("#title").val();
    var autorVal = $("#autor").val();
    var typeVal = $("#type").val();
    var date = new Date();
    var month = date.getMonth()+1;
    var minutes = date.getMinutes();
    if(String(minutes).length<=1){
        minutes = '0'+minutes;
    }
    var time = date.getFullYear()+ '-' + month + '-'+date.getDate()+'-'+ date.getHours()+':'+minutes;
    var contVal = arr[2];
    $.ajax({
        url:"http://10.40.153.111:9999/addArtical",
        type:"POST",
        data:{
            title:titleVal,
            cont:contVal,
            author:autorVal,
            ptime:time,
            catname:typeVal   
        },
        success:function(data){
            console.log(data);
        }
    })
}


