let logbut=document.querySelector(".btn");
let inputs=document.querySelectorAll(".input-item");
logbut.addEventListener("click",()=>{
    if(inputs[0].value=='liqiqi'&&inputs[1].value=='20030505'){
        location.href='qiqi.html'
    }
    else{
        alert("自己的生日名字都记不住？")
    }
})