let a = Math.round(Math.random()*100)
alert(`Random raqam: ${a}`)
let c = confirm(`raqamni 2ga kopaytirib va 2ga bo'lish?`)



if(c === true){
    alert('Random orqali chiqqan raqam:  ${a} \n Sizning raqamingiz 2ga kopaydi:  ${a*2} \n Sizning raqamingiz 2ga bolindi:  ${a/2}');
    
    
}else{
    alert('siz otmena bostiz');
    
}



