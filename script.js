
onLoad();
function onLoad() {
showelementonhomepage();

  
}


function showelementonhomepage(){
    let element= document.querySelector('.shop-section');
    if (!element) {
        return;
      }
    let innerHtml='';
    items.forEach(item => {
        innerHtml+= `<div class="${item.class} box"> 
        <div class="box-content">
        <h2>${item.product_heading}</h2>
        <a href="${item.img}"><div class="box-img" style="background-image: url('${item.image}');"></div>
        </a>
    </div>
    </div>`
    });
    element.innerHTML=innerHtml;
}