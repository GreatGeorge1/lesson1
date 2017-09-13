'use strict';
var t,t1;
var flag=false;
var memory=["32","128","256"];
var color=["Jet Black","Black","Silver","Gold","Rose Gold","Red"];
do
{    
    if(flag==false)
    {
        flag=true;
        t==null ? t=prompt("Укажите объем памяти телефона", "") : t;
        for(var i=0;i<memory.length;i++)
        {
            if(t==memory[i])
            {
                if(t1==null)
                {
                    t1=prompt("Укажите цвет телефона", "");
                    if(t1==null){t==null; break;}
                }
                for(var j=0;j<color.length;j++)
                {
                    if(t1==color[j])
                    {
                        var price=669;
                        if(t==memory[1])price+=100;
                        if(t==memory[2])price+=200;
                        if(t1=="Red" || t1=="Rose Gold" || t1=="Gold")price+=100;
                        document.write('<img src="img/'+color[j]+'.png"/>',
                            '<h1>'+'iPhone 7 Plus '+memory[i]+'GB '+color[j]+'</h1>',
                            '<h2>Price '+price+'$</h2>');
                        flag=false;
                        t1=t=null;
                        break;
                    }
                    flag=null;
                }                  
            }
        }
        t="~";
    }
    else if(flag==true)
    {
        var temp='';
        for(var i=0;i<memory.length;i++)
        {
            if(memory[i]==memory[memory.length-1])
            {temp+=memory[i]+".";}
            else {temp+=memory[i]+", ";}
        }
        t=prompt("Доступная память: "+temp, "");
        flag=false;
    }
    else if(flag==null)
    {
        var temp='';
        for(var i=0;i<color.length;i++)
        {
            if(color[i]==color[color.length-1])
            {temp+=color[i]+".";}
            else {temp+=color[i]+", ";}
        }
        t1=prompt("Доступные цвета: "+temp, "");
        flag=false;
    }else{t==null;}   
}while(t);
