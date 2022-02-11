// function doubleIt(num){
//         const result=num*2;
//         return result
// }



// doubleIt(2);
// console.log(doubleIt(5))

// share function
function getInputValue(InputId){
        const inputField=document.getElementById(InputId);

        const inputAmmoutText=inputField.value;
        const inputAmmout=parseFloat(inputAmmoutText);
        // reset input
        inputField.value='';
        return inputAmmout;
}

document.getElementById('deposite-btn').addEventListener('click', function(e){
                   // get current deposite
        const depositeAmmout= getInputValue('user-deposite');
        const depositeTotal=document.getElementById('deposite-total');
        const depositeTotalText=depositeTotal.innerText;


        const previousDepositeTotal=parseFloat(depositeTotalText);


        depositeTotal.innerText=previousDepositeTotal+depositeAmmout;
        console.log(depositeTotalText);

        
        

        // update balance
        const balanceTotal=document.getElementById('balance-total');
        const balanceTotalText=balanceTotal.innerText;

        const previousBalanceTotal=parseFloat(balanceTotalText);

        balanceTotal.innerText=previousBalanceTotal+depositeAmmout;




        // // reset input
        // depositeInput.value='';



});

// handle withdraw btton
document.getElementById('withdraw-btn').addEventListener('click',function(e) {
const withdrawAmmout=getInputValue('user-withdraw')
// console.log(withdrawAmmout);

// get previous withdraw from withdraw total
const previousWithdrawAmmoutText=document.getElementById('withdraw-total');

const previousWithdrawAmmoutTextValue=previousWithdrawAmmoutText.innerText;

const previousWithdrawAmmoutTextValueToNum=parseFloat(previousWithdrawAmmoutTextValue);

// update total withdraw
const totalWithdraw=previousWithdrawAmmoutTextValueToNum+withdrawAmmout;

previousWithdrawAmmoutText.innerText=totalWithdraw;


// update balance
const balanceTotal=document.getElementById('balance-total');
const balanceTotalText=balanceTotal.innerText;

const previousBalanceTotal=parseFloat(balanceTotalText);

balanceTotal.innerText=previousBalanceTotal-withdrawAmmout;




// // clear withdraw input

// withdrawInput.value="";

});




