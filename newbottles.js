var mkbottle=function(n){
    var bottle=document.createElement('img');
    var line=document.createElement('div');
    bottle.src='images/Rho_ais.png'
    bottle.style.height = '100px';
    bottle.style.width = 'auto';

    return(bottle);
}
var mkLine=function(n){
    var line=document.createElement('div');
    while(n>0){
        line.appendChild(mkbottle());
        n--
    }
    document.body.appendChild(line);
}

var btnclk = document.querySelector('#newline');
var shields = parseInt(prompt("How Many Shields do you have?"));
btnclk.addEventListener('click',function(){
    shields--;
    if (shields>=0){
        mkLine(shields);
    }else{
        shields=0;
    }
})


