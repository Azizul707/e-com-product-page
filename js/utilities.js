
let total = 0
function getProductNameAndPrice(event){
    const productName = event.childNodes[3].childNodes[3].innerText;
    const productList = document.getElementById('items-field');
    const p = document.createElement('p');
    let  count = productList.childElementCount;
    p.innerText =`${count + 1}. ${productName}`;
    productList.appendChild(p);
    const price = event.childNodes[3].childNodes[5].innerText.split(' ')[0];
    console.log(price);
    const totalPrice = document.getElementById('total-price').innerText.split(' ')[0];
    total = (parseFloat(totalPrice) + parseFloat(price));
    console.log(totalPrice);
}