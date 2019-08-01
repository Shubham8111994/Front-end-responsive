function append()
{   
    var li1=document.createElement("li");
    li1.className="item";
    li1.id = "item"
    var get = document.getElementById('inp').value;
    var cb=document.createElement("input");
    cb.type="checkbox";
    cb.id="inp2";
    cb.onclick="check()";
    
    var li=document.createElement("LABEL");
    li.className="label";
    li.id="l1";
    li.innerHTML=get;
    document.getElementById("inp").value = " ";
    var btn=document.createElement("BUTTON");
    btn.innerHTML="Remove";
    btn.id="r";
    btn.className="rm";    
    
    var btn2=document.createElement("BUTTON");
    btn2.innerHTML="Edit";
    btn2.id="bt";
    btn2.className="ed";
    var br= document.createElement("BR");
    document.getElementById("dd").appendChild(br);
    li1.appendChild(cb);
    li1.appendChild(li);
    li1.appendChild(btn);
    li1.appendChild(btn2);
    ul = document.getElementById("incomplete").appendChild(li1);
    btn.onclick = function remove() { 
                               li.parentNode.removeChild(li); 
                               btn.parentNode.removeChild(btn); 
                               br.parentNode.removeChild(br); 
                               btn2.parentNode.removeChild(btn2); 
                               cb.parentNode.removeChild(cb);
                               var item = document.getElementById('item');
                               item.parentNode.removeChild(item);
}
    btn2.onclick=function Edit() {
                           li.parentNode.removeChild(li);
                           var input= document.createElement("INPUT");
                           input.innerHTML="Input";
                           input.id="ip";
                           document.getElementById("dd").appendChild(input);
                           document.getElementById('ip').value = get;
                           btn2.parentNode.removeChild(btn2);
                           btn.parentNode.removeChild(btn);
                           cb.parentNode.removeChild(cb);
                           var item = document.getElementById('item');
                           item.parentNode.removeChild(item);
                           var btn3=document.createElement("BUTTON");
                           btn3.innerHTML= "Submit";
                           btn3.className= "sub";
                           btn3.id="bt3";
                           document.getElementById("dd").appendChild(btn3);
                           btn3.onclick = function submit() {
                                                           var getagain= document.getElementById('ip').value;
                                                           input.parentNode.removeChild(input);
                                                           var li2=document.createElement("LABEL");
                                                           li2.className="label2";
                                                           li2.innerHTML=getagain;
                                                           document.getElementById("dd").appendChild(li2);   
                                                           btn3.parentNode.removeChild(btn3);                                                                                                                                                                        
                                                           var br= document.createElement("BR");
                                                           document.getElementById("dd").appendChild(br);                                                        
                             }
     }

     }

