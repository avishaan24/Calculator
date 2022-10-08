let display="";
let actual="";
let history="";
let body=document.querySelector("body");
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(display=="" && e.target.innerHTML == '0'){
            actual="";
            display="";
            document.querySelector('input').value=display;
        }
        else if(e.target.innerHTML == '=' && actual!=""){
            let result=eval(actual);
            history+=(display + "\n" + result + "\n");
            display=result;
            if(result == "0")
            display="";
            document.querySelector('input').value=display; 
        }
        else if(e.target.innerHTML == '='){
            display="";
            document.querySelector('input').value=display; 
        }

    });
});