function upgradeProductNumber(product, price, increase){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(increase == true){
        productNumber = parseInt(productNumber)+1;
    }else{
        productNumber = parseInt(productNumber)-1;
    }
    productInput.value = productNumber;
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}
// phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    upgradeProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    upgradeProductNumber('phone', 1219, false);
})

// increade decrease Case number event handler
document.getElementById('case-plus').addEventListener('click', function(){
    upgradeProductNumber('case', 59, true);
    
})
document.getElementById('case-minus').addEventListener('click', function(){
    upgradeProductNumber('case', 59, false);
})
let count = 0;console.log(parseInt(count + 1));
