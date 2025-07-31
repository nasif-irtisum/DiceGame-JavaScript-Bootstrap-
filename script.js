function changeDice1()
{
    let randomNumber = Math.floor(Math.random()*6)+1;
    let randomImg = 'dice'+randomNumber+'.png';
    document.querySelector("#img1").setAttribute("src", "./img/"+randomImg);
    return randomNumber;
}
function changeDice2()
{
    let randomNumber = Math.floor(Math.random()*6)+1;
    let randomImg = 'dice'+randomNumber+'.png';
    document.querySelector("#img2").setAttribute("src", "./img/"+randomImg);
    return randomNumber;
}
document.querySelector("#my_btn").addEventListener("click",()=>{
    let dice1 = changeDice1();
    let dice2 = changeDice2();

    let header = document.querySelector("h1");
    //header.classList.add("header2");
    if (dice1>dice2) header.textContent= "🚩 Player 1 Wins!";
    else if (dice1<dice2) header.textContent= "🚩 Player 2 Wins!"
    else header.textContent= "Draw!"
})

