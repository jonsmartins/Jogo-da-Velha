let tb=[" ", " ", " ", " ", " ", " ", " ", " ", " "];
let i=0,j;

function jogada(ident){
    tb[0] = document.getElementById("t11").innerHTML; //= tb[0];
    tb[1] = document.getElementById("t12").innerHTML; //= tb[1];
    tb[2] = document.getElementById("t13").innerHTML; //= tb[2];
    tb[3] = document.getElementById("t21").innerHTML; //= tb[3];
    tb[4] = document.getElementById("t22").innerHTML; //= tb[4];
    tb[5] = document.getElementById("t23").innerHTML; //= tb[5];
    tb[6] = document.getElementById("t31").innerHTML; //= tb[6];
    tb[7] = document.getElementById("t32").innerHTML; //= tb[7];
    tb[8] = document.getElementById("t33").innerHTML; //= tb[8];
    
    j=document.getElementById(ident).innerHTML;
    if((j=="X")||(j=="O")){
        alert("CELULA JA PREENCHIDA");
    }
    else{
        if((i%2==0)){
            document.getElementById(ident).innerHTML = "X";
            i++;
        }
        else{
            document.getElementById(ident).innerHTML = "O";
            i++;
        }
    }
    
}

function ganhou(){
    let t11 = document.getElementById('t11').innerHTML;
    let t12 = document.getElementById('t12').innerHTML;
    let t13 = document.getElementById('t13').innerHTML;
    let t21 = document.getElementById('t21').innerHTML;
    let t22 = document.getElementById('t22').innerHTML;
    let t23 = document.getElementById('t23').innerHTML;
    let t31 = document.getElementById('t31').innerHTML;
    let t32 = document.getElementById('t32').innerHTML;
    let t33 = document.getElementById('t33').innerHTML;
    //primeira coluna horizontal
    if ((t11!='')&&(t12!='')&&(t13!='')&&(t11==t12)&&(t12==t13)){
        document.getElementById("t11").style.color='blue';
        document.getElementById("t12").style.color='blue';
        document.getElementById("t13").style.color='blue';
        i=0;
        setTimeout(function(){
            alert("TEMOS UM GANHADOR!!") 
        }, 300);
    }
    //primeira diagonal
    if ((t11!='')&&(t22!='')&&(t33!='')&&(t11==t22)&&(t22==t33)){
        document.getElementById("t11").style.color='blue';
        document.getElementById("t22").style.color='blue';
        document.getElementById("t33").style.color='blue';
        i=0;
        setTimeout(function(){
            alert("TEMOS UM GANHADOR!!") 
        }, 300);    
    }
    //primeira coluna vertical
    if ((t11!='')&&(t21!='')&&(t31!='')&&(t11==t21)&&(t21==t31)){
        document.getElementById("t11").style.color='blue';
        document.getElementById("t21").style.color='blue';
        document.getElementById("t31").style.color='blue';
        i=0;
        setTimeout(function(){
            alert("TEMOS UM GANHADOR!!") 
        }, 300);    
    }
    //segunda horizontal
    if ((t21!='')&&(t22!='')&&(t23!='')&&(t21==t22)&&(t22==t23)){
        document.getElementById("t21").style.color='blue';
        document.getElementById("t22").style.color='blue';
        document.getElementById("t23").style.color='blue';
        i=0;
        setTimeout(function(){
            alert("TEMOS UM GANHADOR!!") 
        }, 300);    
    }
    //terceira horizontal
    if ((t31!='')&&(t32!='')&&(t33!='')&&(t31==t32)&&(t32==t33)){
        document.getElementById("t31").style.color='blue';
        document.getElementById("t32").style.color='blue';
        document.getElementById("t33").style.color='blue';
        i=0;
        setTimeout(function(){
            alert("TEMOS UM GANHADOR!!") 
        }, 300);    
    }
    //segunta vertical
    if ((t12!='')&&(t22!='')&&(t32!='')&&(t12==t22)&&(t22==t32)){
        document.getElementById("t12").style.color='blue';
        document.getElementById("t22").style.color='blue';
        document.getElementById("t32").style.color='blue';
        i=0;
        setTimeout(function(){
            alert("TEMOS UM GANHADOR!!") 
        }, 300);
    }
    //terceira vertical
    if ((t13!='')&&(t23!='')&&(t33!='')&&(t13==t23)&&(t23==t33)){
        document.getElementById("t13").style.color='blue';
        document.getElementById("t23").style.color='blue';
        document.getElementById("t33").style.color='blue';
        setTimeout(function(){
            alert("TEMOS UM GANHADOR!!") 
        }, 300);
    }
    //segunda diagonal
    if ((t31!='')&&(t22!='')&&(t13!='')&&(t31==t22)&&(t22==t13)){
        document.getElementById("t31").style.color='blue';
        document.getElementById("t22").style.color='blue';
        document.getElementById("t13").style.color='blue';
        setTimeout(function(){
            alert("TEMOS UM GANHADOR!!") 
        }, 300);
    }
         
    
}

function novoJogo(){
    reset();
    document.getElementById("wp1").innerHTML='0';
    document.getElementById("wp2").innerHTML='0';
}

function reset(){
    //limpando as jogadas
    document.getElementById('t11').innerHTML='';
    document.getElementById('t12').innerHTML='';
    document.getElementById('t13').innerHTML='';
    document.getElementById('t21').innerHTML='';
    document.getElementById('t22').innerHTML='';
    document.getElementById('t23').innerHTML='';
    document.getElementById('t31').innerHTML='';
    document.getElementById('t32').innerHTML='';
    document.getElementById('t33').innerHTML='';
    //limpando cores
    document.getElementById('t11').style.color='white';
    document.getElementById('t12').style.color='white';
    document.getElementById('t13').style.color='white';
    document.getElementById('t21').style.color='white';
    document.getElementById('t22').style.color='white';
    document.getElementById('t23').style.color='white';
    document.getElementById('t31').style.color='white';
    document.getElementById('t32').style.color='white';
    document.getElementById('t33').style.color='white';
    i=0;
}