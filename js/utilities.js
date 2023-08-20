

let total = 0;

function getProductNameAndPrice(event) {
    const productName = event.childNodes[3].childNodes[3].innerText;
    const productList = document.getElementById('items-field');
    const p = document.createElement('p');
    let count = productList.childElementCount;
    p.innerText = `${count + 1}. ${productName}`;
    productList.appendChild(p);
    
    const price = event.childNodes[3].childNodes[5].innerText.split(' ')[0];
    const productPrice = parseFloat(price);
    total += productPrice; 
    
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerText = total;

    
    const makePurchaseBtn = document.getElementById('make-purchase-btn');
    if (total >= 0) {
        makePurchaseBtn.removeAttribute('disabled');
    }


    const applyBtn = document.getElementById('apply-btn');
    if(total >= 200){
        applyBtn.removeAttribute('disabled');
        applyBtn.addEventListener('click',applyCoupon);
    }
    const discountPriceField = document.getElementById('discount-field') ;
    const discountedPriceField = document.getElementById('discounted-total');
    function applyCoupon(){
        const couponCode = document.getElementById('coupon-field').value;
        if(couponCode == 'SELL200'){
        const discountPrice = ((total * 20) / 100);
        discountPriceField.innerText = discountPrice;
        const discountedPrice = (total - discountPrice);
        discountedPriceField.innerText = discountedPrice;
        console.log(discountPrice);
    }

    }}