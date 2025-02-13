const celdas = Array.from(document.getElementsByClassName("gatos"))

function movihuman(){
    celdas.forEach((celda)=>    {
        celda.addEventListener("click",()=> {
            if(celda.innerHTML=="") {
                celda.innerHTML="X"    
                setTimeout(()=> {
                 movimachin()    
                 },500)

            }
        })
    })
}

movihuman()

function movimachin(){
    const espacio= celdas.filter((celda)=>{
       return celda.innerHTML===""
    })
    
    if(espacio.length>0){
        const movi=Math.floor(Math.random()*espacio.length)
        espacio[movi].innerHTML="O"
    }
}

function restablecer()  {
const gatorestablecer= document.getElementsByClassName("resetear").reset()
}