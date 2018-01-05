$.ajax({
    url:"http://10.40.153.111:9999/getArticle",
    type:"POST",
    success:function(data){
        console.log(data)
        var html = [];
        var str= '';
        for(i in data){
            str = `<a href="http://localhost:9999/article.html?id=${data[i].id}"><div class="artical">
            <div class="title">
                <p id="title">${data[i].title}</p>
            </div>		
            <div class="content">${data[i].contt}</div>
            <ul>
                <li class="author"><a href="">${data[i].author}</a></li>
                <li class="skim"><a href="">${data[i].clicknum}</a></li>
                <li class="comment"><a href="">${data[i].commentnum}</a></li>
                <li class="favor"><a href="">32喜欢</a></li>
                <li class="time"><a href="">${data[i].time}</a></li>
            </ul>
        </div></a>`
            html.push(str);
        }
        for(i in data){
            $(".container_l").append(html[i]);
        }
    }
})