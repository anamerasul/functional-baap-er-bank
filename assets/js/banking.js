document.getElementById('deposite-btn').addEventListener('click', function(e){
        // console.log('first');

        // getuser deposite

        const depositeInput=document.getElementById('user-deposite');

        const depositeAmmoutText=depositeInput.value;

        const depositeAmmout=parseFloat(depositeAmmoutText);
        console.log(depositeAmmout);
        // get current deposite

        const depositeTotal=document.getElementById('deposite-total');
        const depositeTotalText=depositeTotal.innerText;

        const previousDepositeTotal=parseFloat(depositeTotalText);

        depositeTotal.innerText=+previousDepositeTotal+depositeAmmout;
        console.log(depositeTotalText);

        // update balance
        const balanceTotal=document.getElementById('balance-total');
        const balanceTotalText=balanceTotal.innerText;

        const previousBalanceTotal=parseFloat(balanceTotalText);

        balanceTotal.innerText=previousBalanceTotal+depositeAmmout;




        // reset input
        depositeInput.value='';

})