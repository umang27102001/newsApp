// 
//grab the news container
newsAccordian=document.getElementById("newsAccordian");

//create an ajax get request

const xhr =new XMLHttpRequest();
source='bbc-news';
let apiKey="4ad9db1f773a42a6bf8ddd40d7e770f0";

xhr.open('GET',
`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);
xhr.onload=function() {
    if(this.status==200){
       let json= JSON.parse(this.responseText)
        let articles=json.articles;
        let newsHTML=""
        articles.forEach((element,index)=>{

            
            newsHTML  +=`<div class="accordion-item">
<h2 class="accordion-header" id="heading${index}">
    <button class="accordion-button" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
       Breaking News ${index+1} : ${element.title}  
        </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
        data-bs-parent="#newsAccordian">
        <div class="accordion-body">
        
        ${element.description}<a href="${element.url}" target="_blank">  Read more</a>
    </div>
</div>
</div>`;

        })

        
        newsAccordian.innerHTML=newsHTML;

    }
}
xhr.send()

