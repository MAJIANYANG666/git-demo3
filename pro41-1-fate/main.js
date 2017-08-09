let n=1
let loading=false;
let hasNext=true
function YYY(){
    if(loading===true){return}
    let request=new XMLHttpRequest()
    request.open('GET',`./page-${n+1}.html`)  //同级目录的...
    request.onerror=function(){
        loading=false;
    }
    request.onload=function(){
        loading=false;
        n+=1
        let response=request.responseText
        let data =window.JSON.parse(response)
        for(let i=0;i<data.content.length;i++){
            let liString=`
                <li>
                  <div class="oneToOne"><img src="${data.content[i].url}" ></div>
                  <h3>${data.content[i].text}</h3>
                  <p>${data.content[i].p}</p>
                </li>
               `
            list.insertAdjacentHTML('beforeend',liString);
        }
        if(data.hasNextPage===false){
            hasNext=false;
            loadMoreButton.textContent='没了'
        }
    }
    loading=true;
    request.send()
}
loadMoreButton.onclick=YYY
window.onscroll=function(){
    var doc = document.documentElement;
    //var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    var viewportOffset = loadMoreButton.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var buttonTop = viewportOffset.top;
    var clientHeight=doc.clientHeight;
    if(buttonTop>clientHeight-100){
    } else{
        if(hasNext===true){loadMoreButton.click()}
    }
}/**
 * Created by Administrator on 2017/8/8.
 */
