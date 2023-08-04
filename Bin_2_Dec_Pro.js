
var Entrada_Decimal = document.getElementById("Decimal");
var Entrada_Binario = document.getElementById("Binario");
var Mensaje_Error = document.getElementById("mensaje_error");

//Conversion Dec-bin
Entrada_Decimal.addEventListener("input", () => {
    let Valor_Decimal = parseInt(Entrada_Decimal.value);

    Binario.value = Valor_Decimal.toString(2);
})

//Conversion Bin-Dec
Entrada_Binario.addEventListener("input", () => {
    let Valor_Binario = Entrada_Binario.value;

    //Verificar si el numero es Binario
    if (Validation_Binaria(Valor_Binario)){
        Entrada_Decimal.value = parseInt(Valor_Binario, 2);
        Mensaje_Error.style.display = "none";
    }  

    else{
        Mensaje_Error.textContent = "Por favor Ingresa un numero valido";
        Mensaje_Error.style.display = "block";
    }

    //Validar si contiene solo 0 1
    function Validation_Binaria(num){
        for (let i= 0; i< num.length; i++){
            if (num[i] != "0" && num[i] != "1"){
                return false;
                Mensaje_Error.textContent = "Por favor Ingresa un numero valido";
                Mensaje_Error.style.display = "block";
            }
        }
        return true;
    }
})