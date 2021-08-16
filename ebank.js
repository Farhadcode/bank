document.getElementById('submitBtn').addEventListener('click',SubmitData= ()=>{
    //email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    //password
       
    const passwordField = document.getElementById('user-password');
    const userPassword =passwordField.value;
    // console.log(userPassword);

    if ( userEmail == 'ebank@gmail.com' &&  userPassword =='password') {
        console.log('valide user');
        window.location.href = 'banking.html';
        
    }
})

