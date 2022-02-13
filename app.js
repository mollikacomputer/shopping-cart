function upgradeCaseNumber(isAdd){
    const caseInput = document.getElementById('case-input');
    let caseNumber = caseInput.value;
    if(isAdd == true){
        caseNumber = parseInt(caseNumber)+1;
    }else{
        caseNumber = parseInt(caseNumber)-1;
    }
    caseInput.value = caseNumber;
    // update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}
document.getElementById('case-plus').addEventListener('click', function(){
    upgradeCaseNumber(true);
    
})
document.getElementById('case-minus').addEventListener('click', function(){
    upgradeCaseNumber(false);
})
