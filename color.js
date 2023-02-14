var i=0;
function changeBackground(i){
var colors = ["red","blue","green","yellow","orange"];
if (i==colors.lenth){
    i=0;
}
color = colors[i];
document.body.style.backgroundColor=color;
console.log(i);
return i;
}
function Increment(){
i=changeBackground(i);
i++;
}