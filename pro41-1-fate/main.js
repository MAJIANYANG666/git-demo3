// var loadingImage=new Image()
// loadingImage.src="https://i.loli.net/2017/08/09/598ad38cb91b2.gif"
let n = 1
let loading = false;
let hasNext = true;
function YYY() {
    if (loading === true) {
        return
    }
    let request = new XMLHttpRequest()
    request.open('GET', `./page-${n + 1}.html`)  //同级目录的...
    request.onerror = function () {
        loading = false;
    }
    request.onload = function () {
        loading = false;
        n += 1
        let response = request.responseText
        let data = window.JSON.parse(response)
        for (let i = 0; i < data.content.length; i++) {
            let liString = `
                <li>
                  <div class="oneToOne"><img src="https://i.loli.net/2017/08/09/598ad38cb91b2.gif" data-xxx="${data.content[i].url} " ></div>
                  <h3>${data.content[i].text}</h3>
                  <p>${data.content[i].p}</p>
                </li>
               `
            list.insertAdjacentHTML('beforeend', liString);
        }
        if (data.hasNextPage === false) {
            hasNext = false;
            loadMoreButton.textContent = '没了'
        }
    }
    loading = true;
    request.send()
}
loadMoreButton.onclick = YYY
window.onscroll = function () {
    if (f1(loadMoreButton)) {
        if (hasNext === true) {
            loadMoreButton.click()
        }
    }
    let images=document.querySelectorAll('img[data-xxx]')
    console.log(images)
    for(let i=0;i<=images.length;i++){
        console.log(f1(images[i]))
        console.log(images[i])
        if(f1(images[i])){

            images[i].src=images[i].getAttribute('data-xxx')
            images[i].removeAttribute('data-xxx')
        }
    }


    function f1(element){
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        var viewportOffset = element.getBoundingClientRect();

        // these are relative to the viewport, i.e. the window
        var buttonTop = viewportOffset.top;
        var clientHeight = doc.clientHeight;
        if (buttonTop <= clientHeight ) {
            return true
        }else{
            return false
        }
    }
}

/**
 * Created by Administrator on 2017/8/8.
 */
