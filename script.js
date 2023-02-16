
let codigo = [];
const maxIntento = 8;

let contador = 0;
let win = false;
let ASCII;

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios entre 0 y 9 usando la libreria Math.random();*/
function codigoSecreto() {
    for (let i = 0; i < 5; i++){
        codigo[i] = Math.floor((Math.random() * 10));
    }
    console.log(codigo);
}


function Comprobar(){

    
    let random = codigo.join("");
    console.log("random "+ random);
    let pathNumber = document.getElementById("numero");
    let number = pathNumber.value;

    let replaceNum = document.querySelectorAll("div.w20 > div");
    color ="";

    ASCII = false;
    ComprobarNumASCI(number);

    if(contador != maxIntento && win == false && ASCII == false && number.length == 5 && number != "")
    {
        CreateContainer();
        contador++;

        if(number == random)
        {
            win = true;
            console.log(win);
        }
        else
        {
            for(let i = 0;i<5;i++)
            {
                if(number[i]==random[i])
                {
                   color = "green";
                }
                else
                {
                    for(let j = 0;j<5;j++)
                    {
                        if(number[i]==random[j])
                        {
                            color="yellow";
                            j = 5;
                        }
                        else
                        {
                            color = "grey";
                            number[i] = "!";
                        
                        }
                    }
                }

                CreateSquare(color,number[i]);
            }
        }  
        Intentos(number, random, replaceNum, contador);  
    }
    if(win == true)
    {
        for(let i =0; i < number.length; i++)
        {
            CreateSquare("green",number[i]);
        }  
    }

    if(number.length > 5 || number.length < 5 || number == "" || ASCII == true){
        alert("Formato inadecuado");
    }
}
function CreateSquare(color,number){
    let square = document.createElement("div");
    let squareInt = document.createElement("div");

    squareInt.style.background = color;
    square.classList.add("w20");
    squareInt.classList.add("celResult", "flex");
    square.appendChild(squareInt);
    document.getElementsByClassName("rowResult", "w100", "flex", "wrap")[0].appendChild(square);


    
    squareInt.appendChild(document.createTextNode(number));
}
function CreateContainer(){
    let contenedor = document.createElement("div");

    contenedor.classList.add("rowResult", "w100", "flex", "wrap");
    document.getElementById("Result").appendChild(contenedor);
}

function Intentos(number, random, replaceNum, contador)
{
    var inf = document.getElementById("info");
    if(contador == undefined)
    {
        inf.textContent = "Bienvenido, pon un numero de 5 caracteres";
    }
    else if(win == true)
    {
        let section = document.getElementsByClassName("info");

        section[0].style.background = "green";

        inf.textContent = "Enhorabuena, has acertado el numero!";

        ButtonReload();
        for(let i = 0;i<5;i++)
        {
            if(number[i]==random[i])
            {
                replaceNum[i].textContent = number[i];
            }
        }
    }
    else if(contador == maxIntento)
    {
        inf.textContent = "Lo siento, has agotado el numero de intentos!";
        ButtonReload();
    }
    else
    {
        inf.textContent = "Intento numero: " + contador + "/8";
    }

}

function ComprobarNumASCI(number)
{
    for(let i = 0;i<number.length;i++)
    {
        if(number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57)
        {
            ASCII = true;
        }
    }
}

function ButtonReload()
{
    console.log("casi amigo");
    let button = document.createElement("button");
    //let inputButton = document.createElement("input");
    let sectionButt = document.getElementsByClassName("comprobar");


    button.classList.add("w90");
    button.setAttribute("id","check");
    button.setAttribute("onclick","location.reload()");
    button.textContent = "Reiniciar";

    /*inputButton.classList.add("w90");
    inputButton.setAttribute("type", "text");
    inputButton.setAttribute("id", "reiniciar");
    inputButton.setAttribute("name", "reiniciar");*/



    //inputButton.appendChild(button);
    sectionButt[0].appendChild(button);
    
}



