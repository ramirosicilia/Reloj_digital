/*const $tiempo = document.querySelector('.tiempo'),
$fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${anio}-${mes}-${dia} ${showSemana}`
}
setInterval(() => {
    digitalClock()
    
}, 1000); */ 







const tiempo=document.querySelector('.tiempo')
const fecha=document.querySelector('.fecha') 

function relojDigital(){ 

    let f=new Date() 
    let dias=f.getDate()
    let meses=f.getMonth()+1
    let año=f.getFullYear()
    let diaSemana=f.getDay() 

    dias=('0'+ dias).slice(-2)
     meses=('0'+ meses).slice(-2) 

     let timeString=f.toLocaleTimeString()
     tiempo.innerHTML=timeString 

     let semana=["SUN","MON","TUE","WED","THU","FRI","SAT"]
     let semanaShow=semana[diaSemana] 
     fecha.innerHTML=`${año}-${meses}-${dias} ${semanaShow}`


} 


setInterval(() => {
    relojDigital()
    
}, 1000); 

