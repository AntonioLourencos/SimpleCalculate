function InsertNumber(elementId){

    //Variable Field insert Number
    var inputvalueto = document.getElementById("field");

    //InsertNumber
    if(inputvalueto.value == 0 || inputvalueto == 'Syntax error'){

        inputvalueto.value = elementId.textContent;
        
    }else{
        inputvalueto.value += elementId.textContent;
    }

}

function InsertOperator(elementId){

    //Variable Field insert operator

    var inputvalueto = document.getElementById("field");

    //If the field is empty or with an error it does not work but if it is not adding a value (elementId)
    if(inputvalueto.value == 0 || inputvalueto.value  == "Syntax error"){

        inputvalueto.value = 0;

    }else{
        inputvalueto.value += elementId.textContent;
    }
}

function InsertDot(elementId){

      //Variable Field insert operator

      var inputvalueto = document.getElementById("field");

     //If the field is empty or with an error it does not work but if it is not adding a value (elementId)

     if(inputvalueto.value == 0 || inputvalueto.value  == "Syntax error"){

        inputvalueto.value = 0;

    }else{
        inputvalueto.value += elementId.textContent;
    }

}

function clearField(){

    //Variable Field clear
    var clear = document.getElementById("field");
    
    //Field value is 0
    clear.value = 0;

}

function Calculate(){

    try {
        var fieldValuesTxt = document.getElementById("field");
   
        if (fieldValuesTxt.value != '') {
            var calculateResult = eval(fieldValuesTxt.value);
            fieldValuesTxt.value = calculateResult;
          }
    } catch (error){
            fieldValuesTxt.value = "Syntax error";
    }
}
