'use strict' ;

document.querySelector('#login').addEventListener(
    'click', function(){
        console.log(document.querySelector('#Email').value);
        console.log(document.querySelector('#Password').value);
        const email = (document.querySelector('#Email').value);
        const pass = (document.querySelector('#Password').value);
        if(email.length<15 )
        {
            document.querySelector('.em-cor').textContent = '**Enter valid Email id';
        }
        else
        {
            var str = "nitw.ac.in";
            if(!email.includes(str))
            {
                document.querySelector('.em-cor').textContent = '**Enter Student Email id';
            }
            // else return true;
        }
        if(pass.length<=4)
        {
            document.querySelector('.ps-cor').textContent = '**Enter valid Password';
        }
    });