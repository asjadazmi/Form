// const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
    textError.textContent="";
    else textError.textContent="Name is Incorrect";

});
const mail1=document.querySelector('#mail');
const mailError=document.querySelector('.mail-error');
mail1.addEventListener('input',function(){
    let mailRegex=RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
    if(mailRegex.test(mail1.value)){
      mailError.textContent="";
      
}
    else mailError.textContent="Email is Incorrect";

});
const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});

// function name(){
//     const text=document.querySelector('#text');
//     const textError=document.querySelector('.text-error');
//     text.addEventListener('input',function(){
//     let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
//     if(nameRegex.test(test.value))
//     textError.textContent="";
//     else textError.textContent="Name is Incorrect";
    
// });}

