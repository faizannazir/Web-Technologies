document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('signup')

    const fname = document.getElementById('user_first_name')
    const lname = document.getElementById('user_last_name')
    const email = document.getElementById('user_email')
    const user_pass = document.getElementById("user_pass")
    const user_con_pass = document.getElementById("user_con_pass")
    const showPass = document.getElementById('show')

    // Form Validation
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // stop the form from submitting
        if (fname.value.trim().length < 3 || fname.value.trim().length > 12 || !fname.checkValidity()) {
            alert("Please enter first name between 3 to 12 Alphabets characters.");
            fname.focus();
            fname.classList.add('error');
            return;
        }
        fname.classList.remove('error');

        if (lname.value.trim().length < 3 || lname.value.trim().length > 12 || !lname.checkValidity()) {
            alert("Please enter last name between 3 to 12 Alphabets characters.");
            lname.focus();
            lname.classList.add('error');
            return;
        }
        lname.classList.remove('error');
        if((!email.checkValidity() )|| (!email.value.trim().match(/^[a-z A-z]+[a-z0-9._%+-]{1,}@[a-z0-9.-]{2,}\.[a-z]{2,}$/)))
        {
            alert("Please enter correct email")
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
        user_pass.classList.remove('error');
        if(user_con_pass.value.trim() !== user_pass.value.trim())
        {
            alert("Password and confirm password not matched");
            user_con_pass.focus();
            user_pass.classList.add('error');
            user_con_pass.classList.add('error');
            return;
        }
        user_pass.classList.remove('error');
        user_con_pass.classList.remove('error');

        form.submit();
    });



    // Show Password 
    showPass.addEventListener('change', function () {
        if (this.checked) {
            user_pass.type = "text"
            user_con_pass.type = "text"
        }
        else {
            user_pass.type = "password"
            user_con_pass.type = "password"
        }
    })


});