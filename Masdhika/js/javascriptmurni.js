document.querySelectorAll("article:not([class*='in'])").forEach((e=>{var t=e.classList.contains("onPost"),a=t?e.querySelector(".postBody noscript").innerHTML:e.querySelector(".pSnpt .hidden").innerHTML,i=/<span.class=.postAuthor..data-img=.(.*?)..data-link=.(.*?).>(.*?)<\/span>/i.exec(a),o=/<img.alt=.(.*?)..src=.(.*?).>/i.exec(a)||"",n=/<span.class=.postSnippet..data-time=.(.*?)..data-rating=.(.*?).>(.*?)<\/span>/i.exec(a)||"",r=MasdhikaCom.blog.view.isPost?document.querySelector("link[rel='canonical']").href:e.querySelector(".pCntn a").getAttribute("href"),s=MasdhikaCom.blog.view.isPost?document.querySelector("meta[property='og:title']").content:e.querySelector(".pCntn a").getAttribute("data-text"),l=MasdhikaCom.blog.view.isPost?"":e.querySelector(".pSnpt time.hidden").getAttribute("datePublished"),c=MasdhikaCom.blog.view.isPost?"":e.querySelector(".pSnpt time.hidden").getAttribute("dateModified");if(document.querySelector("body.DevMasdhika")){var d={"@context":"http://schema.org","@type":"BlogPosting",mainEntityOfPage:{"@type":"WebPage","@id":r},headline:s,description:n[3],datePublished:l,dateModified:c,inLanguage:"id",image:{"@type":"ImageObject",url:o[2],contentUrl:o[2],caption:o[1],height:630,width:1200},aggregateRating:{"@type":"AggregateRating",itemReviewed:{"@type":"Book",name:s},ratingValue:+n[2],bestRating:10,worstRating:1,ratingCount:100*n[2]},publisher:{"@type":"Organization",name:"Blogger",logo:{"@type":"ImageObject",url:"https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=h60",width:206,height:60}},author:{url:i?.[2]??window.location.origin,"@type":"Person",name:i?.[3]??MasdhikaCom.plugin.authorBlog.defaultName}},u=document.createElement("script");u.type="application/ld+json",u.innerHTML=JSON.stringify(d),MasdhikaCom.blog.view.isPost?e.querySelector(".postBody").insertAdjacentElement("afterend",u):e.querySelector(".postInfo.M").insertAdjacentElement("afterend",u),!t&&(MasdhikaCom.plugin.authorBlog.status||(document.querySelector(".blogPosting.M").classList.add("noAuthor"),e.querySelector(".postInfo.M").remove()))}})),document.querySelector(".headerTop .L span").innerHTML=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"][(new Date).getDay()]+", "+(new Date).getDate()+" "+["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][(new Date).getMonth()],document.querySelectorAll(".onModal").forEach((e=>{e.addEventListener("click",(()=>{var t=e.getAttribute("data-target"),a=document.getElementById(t);a.classList.contains("open")?a.classList.remove("open"):a.classList.add("open")}))})),document.querySelectorAll(".header .headerBot .M .T .N .I .C > li.sub .a").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active"),e.closest(".sub").querySelector("ul").classList.toggle("active")}))}));
