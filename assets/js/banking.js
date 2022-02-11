document.getElementById('deposite-btn').addEventListener('click', function(e){
        // console.log('first');

        // getuser deposite

        const depositeInput=document.getElementById('user-deposite');

        const depositeAmmoutText=depositeInput.value;

                // alert('please input right number')
                document.getElementById('deposite-text').innerText="Please input a number"




        const depositeAmmout=parseFloat(depositeAmmoutText);
        console.log(typeof depositeAmmout);
        console.log(typeof depositeAmmout)

                    // get current deposite

        const depositeTotal=document.getElementById('deposite-total');
        const depositeTotalText=depositeTotal.innerText;


        const previousDepositeTotal=parseFloat(depositeTotalText);

        // if(previousDepositeTotal=='NaN'){
        //         // return false;
        //         alert('up')
        // }


        depositeTotal.innerText=previousDepositeTotal+depositeAmmout;
        console.log(depositeTotalText);

        
        

        // update balance
        const balanceTotal=document.getElementById('balance-total');
        const balanceTotalText=balanceTotal.innerText;

        const previousBalanceTotal=parseFloat(balanceTotalText);

        balanceTotal.innerText=previousBalanceTotal+depositeAmmout;




        // reset input
        depositeInput.value='';



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




// // advance function
// // advance function
// // advance function

// // advance function
// document.getElementById('deposite-btn').addEventListener('click', function(e){
//         // console.log('first');
//         // getuser deposite

//         const depositeInput=document.getElementById('user-deposite');

//         const depositeAmmoutText=depositeInput.value;
//         const depositeAmmout=parseFloat(depositeAmmoutText);



//                     // get current deposite

//         const depositeTotal=document.getElementById('deposite-total');
//         const depositeTotalText=depositeTotal.innerText;


//         const previousDepositeTotal=parseFloat(depositeTotalText);




//         depositeTotal.innerText=previousDepositeTotal+depositeAmmout;
//         console.log(depositeTotalText);

        
        

//         // update balance
//         const balanceTotal=document.getElementById('balance-total');
//         const balanceTotalText=balanceTotal.innerText;

//         const previousBalanceTotal=parseFloat(balanceTotalText);

//         balanceTotal.innerText=previousBalanceTotal+depositeAmmout;




//         // reset input
//         depositeInput.value='';



// });

// // handle withdraw btton
// document.getElementById('withdraw-btn').addEventListener('click',function(e) {

//         // get withdraw from input
// // console.log('withdraw click')
// const withdrawInput=document.getElementById('user-withdraw');


// const withdrawAmmoutText=withdrawInput.value;

// const withdrawAmmout=parseFloat(withdrawAmmoutText);

// console.log(withdrawAmmout);

// // get previous withdraw from withdraw total
// const previousWithdrawAmmoutText=document.getElementById('withdraw-total');

// const previousWithdrawAmmoutTextValue=previousWithdrawAmmoutText.innerText;

// const previousWithdrawAmmoutTextValueToNum=parseFloat(previousWithdrawAmmoutTextValue);

// // update total withdraw
// const totalWithdraw=previousWithdrawAmmoutTextValueToNum+withdrawAmmout;

// previousWithdrawAmmoutText.innerText=totalWithdraw;


// // update balance
// const balanceTotal=document.getElementById('balance-total');
// const balanceTotalText=balanceTotal.innerText;

// const previousBalanceTotal=parseFloat(balanceTotalText);

// balanceTotal.innerText=previousBalanceTotal-withdrawAmmout;




// // clear withdraw input

// withdrawInput.value="";

// });
