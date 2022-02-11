// function doubleIt(num){
//         const result=num*2;
//         return result
// }

// doubleIt(2);
// console.log(doubleIt(5))

function getInputValue(){
        const depositeInput=document.getElementById('user-deposite');

        const depositeAmmoutText=depositeInput.value;
        const depositeAmmout=parseFloat(depositeAmmoutText);
        // reset input
        depositeInput.value='';
        return depositeAmmout;
}

document.getElementById('deposite-btn').addEventListener('click', function(e){
        // console.log('first');

        // getuser deposite

        // const depositeInput=document.getElementById('user-deposite');

        // const depositeAmmoutText=depositeInput.value;
        // const depositeAmmout=parseFloat(depositeAmmoutText);
        // console.log(typeof depositeAmmout);
        // console.log(typeof depositeAmmout)

                    // get current deposite
        const depositeAmmout= getInputValue();
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

        // get withdraw from input
// console.log('withdraw click')
const withdrawInput=document.getElementById('user-withdraw');


const withdrawAmmoutText=withdrawInput.value;

const withdrawAmmout=parseFloat(withdrawAmmoutText);

console.log(withdrawAmmout);

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




// clear withdraw input

withdrawInput.value="";

});




