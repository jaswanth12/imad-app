var button =document.getElementyId('counter');
var counter=0;
button.onclick= function()
{
    counter=counter+1;
    var span =document.getElementyId('count');
    span.innerHTML=counter.toString();
    }