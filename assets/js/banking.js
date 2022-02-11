document.getElementById('deposite-btn').addEventListener('click', function(e){
        // console.log('first');

        // getuser deposite

        const depositeInput=document.getElementById('user-deposite');

        const depositeAmmout=depositeInput.value;
        console.log(depositeAmmout);
        // get current deposite

        const depositeTotal=document.getElementById('deposite-total');
        const depositeTotalText=depositeTotal.innerText;

        depositeTotal.innerText=depositeAmmout
        console.log(depositeTotalText)


        // reset input
        depositeInput.value='';

})