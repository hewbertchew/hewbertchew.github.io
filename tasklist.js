var btnadd = document.querySelector('#Add');
var listprcs=function(x,y,z){
    var listitem=document.createElement('li');
    var thelist=document.querySelector('#unilist');
    listitem.textContent= `${x} - ${y}`
    listitem.classList.add('list-group-item')
    if(z =='High'){
        listitem.classList.add('active');
    }else if(z =='Low'){
        listitem.classList.add('disabled');
    }
    return(listitem);
    }

var fnreset=function(){
    document.querySelector('#task').value=null;
    document.querySelector('#deadline').value=null;
    document.querySelector('#Priority').value="High";
}

btnadd.addEventListener('click',function(){
    var taskvalue=document.querySelector("#task").value;
    var datevalue=document.querySelector("#deadline").value;
    var priorityval=document.querySelector("#Priority").value;
    
    var thelist = document.querySelector('#unilist');
    var newlistitem = listprcs(taskvalue,datevalue,priorityval);
    console.log(newlistitem.textContent)
    newlistitem.classList.add('list-group-item')
    newlistitem.classList.add('spread')
    thelist.appendChild(newlistitem);
    
    fnreset();
})