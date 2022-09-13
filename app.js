var cashGiven = document.querySelector("#cash-given");
var billAmt = document.querySelector("#bill-amt");
var btnCheck = document.querySelector("#btn-check");
var errMsg = document.querySelector("#err-msg");
var returnChange = document.querySelector("#return-amt")
var noOfNotes = document.querySelectorAll(".no-of-notes");
var spareChange = [2000,500,100,20,10,5,1];

function validateBillnCashAmt() {
    errMsg.style.display = "none";
    console.log (billAmt.value);
    console.log(cashGiven.value);
    if (billAmt.value > 0 , cashGiven.value>0){
        if (cashGiven.value >= billAmt.value){
            var amtToReturn = cashGiven.value - billAmt.value;
            
            calcyChange(amtToReturn);
        }else {
            displayMsg("*The cash given should be atleast equal to bill amount*");
        }
    }else{
        displayMsg("Enter valid bill amount.");
    }
};

function displayMsg(mesgg) {
    errMsg.style.display ="block";
    errMsg.innerText = mesgg;
};

function calcyChange(amtToReturn) {
    //errMsg.style.display ="block";
    //errMsg.innerText="Return Change: "+ amtToReturn;
    returnChange = amtToReturn;
    for(var i =0; i < spareChange.length; i++ ){
        var numberOfNotes = Math.trunc(amtToReturn/spareChange[i]);
        amtToReturn = amtToReturn%spareChange[i];
        noOfNotes[i].innerText = numberOfNotes;
        
    }console.log(amtToReturn);
};
btnCheck.addEventListener("click",validateBillnCashAmt) ;