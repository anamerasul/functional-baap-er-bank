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


function updateTotalField(totalFiledId,amount){

        // debugger
        const totalElement=document.getElementById(totalFiledId);
        const TotalText=totalElement.innerText;


        const previousTotal=parseFloat(TotalText);


        totalElement.innerText=previousTotal+amount;
}

function getcurrentBalance(){
        const balanceTotal=document.getElementById('balance-total');
        const balanceTotalText=balanceTotal.innerText;

        const previousBalanceTotal=parseFloat(balanceTotalText);

        return previousBalanceTotal
}


function updateBalance(Amount,isAdd){
        const balanceTotal=document.getElementById('balance-total');
        // const balanceTotalText=balanceTotal.innerText;

        // const previousBalanceTotal=parseFloat(balanceTotalText);
        const previousBalanceTotal=getcurrentBalance()
        if(isAdd==true){
                balanceTotal.innerText=previousBalanceTotal+Amount;
        }

        else{
                balanceTotal.innerText=previousBalanceTotal-Amount;
        }
       
}
document.getElementById('deposite-btn').addEventListener('click', function(e){
                 
        
        // get and update current deposite
        // const depositeTotal=document.getElementById('deposite-total');
        // const depositeTotalText=depositeTotal.innerText;


        // const previousDepositeTotal=parseFloat(depositeTotalText);


        // depositeTotal.innerText=previousDepositeTotal+depositeAmmout;
        // console.log(depositeTotalText);

        const depositeAmmout= getInputValue('user-deposite');

        if(depositeAmmout>0){
                updateTotalField('deposite-total', depositeAmmout);

                updateBalance(depositeAmmout,true);
        }
 

        // update balance
        // const balanceTotal=document.getElementById('balance-total');
        // const balanceTotalText=balanceTotal.innerText;

        // const previousBalanceTotal=parseFloat(balanceTotalText);

        // balanceTotal.innerText=previousBalanceTotal+depositeAmmout;




        // // reset input
        // depositeInput.value='';



});

// handle withdraw btton
document.getElementById('withdraw-btn').addEventListener('click',function(e) {

// console.log(withdrawAmmout);

// get previous withdraw from withdraw total
// const previousWithdrawAmmoutText=document.getElementById('withdraw-total');

// const previousWithdrawAmmoutTextValue=previousWithdrawAmmoutText.innerText;

// const previousWithdrawAmmoutTextValueToNum=parseFloat(previousWithdrawAmmoutTextValue);

// // update total withdraw
// const totalWithdraw=previousWithdrawAmmoutTextValueToNum+withdrawAmmout;

// previousWithdrawAmmoutText.innerText=totalWithdraw;



// update balance
// const balanceTotal=document.getElementById('balance-total');
// const balanceTotalText=balanceTotal.innerText;

// const previousBalanceTotal=parseFloat(balanceTotalText);

// balanceTotal.innerText=previousBalanceTotal-withdrawAmmout;
const withdrawAmmout=getInputValue('user-withdraw');
const currentBalance=getcurrentBalance()

if(withdrawAmmout>0 && withdrawAmmout<=currentBalance ){
        updateTotalField('withdraw-total', withdrawAmmout);
        updateBalance(withdrawAmmout,false);

        document.getElementById('balance-text').innerText=" ";
        document.getElementById('withdraw-text').innerText=" ";
}

else{
        document.getElementById('balance-text').innerText="insufficent balance"
        document.getElementById('withdraw-text').innerText="not enough balance for withdraw"
}



// // clear withdraw input

// withdrawInput.value="";

});

