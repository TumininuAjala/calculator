let result=document.getElementById('output');

let calculate=(number)=>{
     result.value+=number;
}

let Result=()=>{
    try{
         result.value=eval(result.value)
    }catch{
         alert('Enter a valid input')
    }
}

function clr(){
     result.value=(" ")
}

function del(){
     result.value=result.value.slice(0,-1)
}