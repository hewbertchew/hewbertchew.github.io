var next = document.querySelector('#next');
next.addEventListener(
    'click', 
    function(){
        console.log('next clicked')
});
var prev = document.querySelector('#prev')
prev.addEventListener(
    'click',
    function(){
    console.log('prev button clicked')
    count= ( (count -1)%30);
    return(count)
    });