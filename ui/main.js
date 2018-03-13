var button =document.getElementyId('counter');
var counter1=0;
button.onclick= function()
{
    counter1=counter1+1;
    var span =document.getElementyId('count');
    span.innerHTML=counter.toString();
    }