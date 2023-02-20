document.addEventListener("DOMContentLoaded",()=>
{
    const form = document.getElementById('signin')
    const email = document.getElementById('user_email')
    const user_pass = document.getElementById("user_pass")
    const showPass = document.getElementById('show')  
    // Show Password 
    showPass.addEventListener('change', function () {
        if (this.checked) {
            user_pass.type = "text"
            // user_con_pass.type = "text"
        }
        else {
            user_pass.type = "password"
            // user_con_pass.type = "password"
        }
    })


form.addEventListener('submit',(event) => 
{
    event.preventDefault(); // stop the form from submitting

    if((!email.value.trim().match(/^[a-z A-z]+[a-z0-9._%+-]{1,}@[a-z0-9.-]{2,}\.[a-z]{2,}$/)))
    {
        alert("Please enter Valid email address")
        email.focus();
        email.classList.add('error');
        return;
    }
    email.classList.remove('error');


    if(!user_pass.value.trim().match(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/))
    {
        alert("Please enter correct password min length of 8 characters")
        user_pass.focus();
        user_pass.classList.add('error');
        return;
    }

    form.submit()
});



});