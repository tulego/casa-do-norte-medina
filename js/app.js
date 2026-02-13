// animação clique botões
document.querySelectorAll("button").forEach(btn=>{
btn.addEventListener("click",()=>{
btn.style.transform="scale(.95)";
setTimeout(()=>btn.style.transform="scale(1)",150);
});
});

