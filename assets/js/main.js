function $(id){return document.getElementById(id)};
window.onload=function(){
        var timer=null;
        var newarr=[];
        $("submit").onclick=function(){
                clearInterval(timer);
                var text=$("text").value;
                var newnode=document.createElement("div");
                        newnode.innerHTML=text;
                        newnode.style.top=Math.random()*($("tm").offsetWidth-20)+"px";
                        newnode.style.left="600px";
                        console.log("'"+randomColor()+"'")
                        newnode.style.color="#"+randomColor();
                $("tm").appendChild(newnode);
                timer=setInterval(move,20);
                }
        function move(){
                        var arr=$("tm").getElementsByTagName("div");
                        for(var i=0;i<arr.length;i++){
                                newarr.push(arr[i].offsetLeft);
                                arr[i].style.left=newarr[i]+"px";
                                newarr[i]--
                                if(newarr[i]<0){
                                        newarr[i]=600;
                                        }
                        }
                        //console.log(j);
                }
        function randomColor() {  
    var color = Math.ceil(Math.random( ) * 16777215).toString(16);
        while(color.length<6){
                color="0"+color;
                }
        return color;
        }
        }