
let bagItemObjects1;
bagItems1 = JSON.parse(localStorage.getItem('bagItems1')) || [];
onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary() {
  let bagSummaryElement = document.querySelector('.seconddiv');
  let totalItem = bagItemObjects1.length;
  let totalMRP = 0;

  bagItemObjects1.forEach(bagItem => {
    totalMRP += bagItem.price;

  });

  let finalPayment = totalMRP;
  

  bagSummaryElement.innerHTML = `
   <div class="priceofseconddiv">Subtotal (${totalItem} item): <b>Rs ${finalPayment}</b></div> 
           <div class="delivery-date1">Expected delivery by: 
            <b>10/04/2025</b></div>
           <button class="proceedtobuy">Proceed to Buy</button>
  `;
}

function loadBagItemObjects() {
  console.log(bagItems1);
  bagItemObjects1 = bagItems1.map(itemId => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects1);
}

function displayBagItems() {
  let containerElement = document.querySelector('.main-section');
  let innerHTML = '';
  bagItemObjects1.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems1 = bagItems1.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems1', JSON.stringify(bagItems1));
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}

function generateItemHTML(item) {
  return `
            <hr>
            <div class="img">
                <img src="${item.image}" class="images" height="180px"></div>
                <div class="heading1">
                    ${item.product_heading}
                </div>
                <div class="instock">
                    In stock
                </div>
                <div class="delete" onclick="removeFromBag(${item.id})"><a href= ""><big>Delete</big></a></div>
                <div class="date-stuff">
                <div class="shipping">Eligible for FREE Shipping</div>
                <div class="delivery-date">Expected delivery by:<b>10/04/2025</b> </div>
                <div class="price">Subtotal: <div class="pricecalculated">Rs ${item.price}</div></div>
            </div>`;
}
