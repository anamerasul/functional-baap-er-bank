document.getElementById('login-submit').addEventListener('click',function(e){
        const userEmailField=document.getElementById('user-email');
       //  get user email
        const userEmail=userEmailField.value;
        console.log(userEmail);
       // get password
        const userPasswordField=document.getElementById('user-password');
        const userPassword=userPasswordField.value;
        console.log(userPassword);
       
       if (userEmail=='sontan@baap.com' &&userPassword=='secret'){
                           console.log('valid user');
                           // window.location.href="banking.html"
                           window.location.href='./banking.html';
       
       }
       else{
                           console.log("invalid user")
       
                           alert("please use valid user name and password")
       }
       });
       