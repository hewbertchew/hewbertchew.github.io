var Lyric = function(x){
    if(x>1){
        return(`${x} bottles of beer on the wall. ${x} bottles of beer.\n
         Take one down and pass it around, ${x-1} bottles of beer on the wall`)
    }else if(x>0){
        return(`${x} bottles of beer on the wall. ${x} bottles of beer.\n
        Take one down and pass it around, no more bottles of beer on the wall`)
    }else{
        return(`No more bottles of beer on the wall, no more bottles of beer.\n
        Go to the store and buy some more, ${x=99} bottles of beer on the wall.`)
    }

}


var Bott = 99;
while(Bott >=0){
    console.log(Lyric(Bott));
    Bott--; 
}

var printbottle = function(){
    var elem = document.createElement('img');
    elem.src = 'images/Beer.png';
    return(elem)
}

