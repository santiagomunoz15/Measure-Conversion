
var startingInput;

var startingInputValue;

var startingUnit;

var startingUnitValue;

var resultUnit;

var resultUnitValue;


function inputValue () {

    startingInput = document.getElementById("input-value");
    
    startingInputValue = parseInt(startingInput.value);

}

function startingSelect () {

    startingUnit = document.getElementById("starting-unit");

    startingUnitValue = startingUnit.value;
}



function unitsSelect () {

    resultUnit = document.getElementById("result-unit");

    resultUnitValue = resultUnit.value;

}


var resultValue = document.getElementById("result-value");


var result;


function measureC () {

    console.log(startingUnitValue);
    console.log(resultUnitValue);


    if(startingUnitValue == `meters`) {

        switch (startingUnitValue == `meters`) {
            
            case (resultUnitValue == `meters`):
    
                result = document.getElementById("result-value").innerHTML = `${startingInputValue}`;
                
            break;
            case (resultUnitValue == `km`):
    
                result = document.getElementById("result-value").innerHTML = `${(startingInputValue * 0.001)}`;
    
            break;
            case (resultUnitValue == `foots`):
    
                result = document.getElementById("result-value").innerHTML = `${(startingInputValue * 3.281)}`;
    
            break;
            case (resultUnitValue == `yards`):
    
                result = document.getElementById("result-value").innerHTML = `${Math.floor(startingInputValue * 1.094)}`;
    
            break;
        }
    }

    else if (startingUnitValue == `km`) {


        switch (startingUnitValue == `km`) {
    
            case (resultUnitValue == `meters`):
    
                result = document.getElementById("result-value").innerHTML = `${(startingInputValue * 1000)}`;
                
            break;
            case (resultUnitValue == `km`):
                    
                result = document.getElementById("result-value").innerHTML = `${startingInputValue}`;
                    
            break;
            case (resultUnitValue == `foots`):
    
                result = document.getElementById("result-value").innerHTML = `${(startingInputValue * 3281)}`;
    
            break;
            case (resultUnitValue == `yards`):
    
                result = document.getElementById("result-value").innerHTML = `${Math.floor(startingInputValue * 1094)}`;
    
            break;
    
        }

    }

    else if (startingUnitValue == `foots`) {

        switch (startingUnitValue == `foots`) {
    
            case (resultUnitValue == `meters`):          
            
                result = document.getElementById("result-value").innerHTML = `${(startingInputValue / 3.281)}`;
                
            break;
            case (resultUnitValue == `km`):
    
                result = document.getElementById("result-value").innerHTML = `${(startingInputValue / 3281)}`;
    
            break;
            case (resultUnitValue == `foots`):
    
                result = document.getElementById("result-value").innerHTML = `${startingInputValue}`;
    
            break;
            case (resultUnitValue == `yards`):
    
                result = document.getElementById("result-value").innerHTML = `${Math.floor(startingInputValue / 3)}`;
    
            break;
    
        }

    }

    else if (startingUnitValue == `yards`) {

        switch (startingUnitValue == `yards`) {
    
            case (resultUnitValue == `meters`):           
            
                result = document.getElementById("result-value").innerHTML = `${(startingInputValue / 1.094)}`
                
            break;
            case (resultUnitValue == `km`):
    
                result = document.getElementById("result-value").innerHTML = `${(startingInputValue / 1094)}`;
    
            break;
            case (resultUnitValue == `foots`):
    
                result = document.getElementById("result-value").innerHTML = `${(startingInputValue * 3)}`;
    
            break;
            case (resultUnitValue == `yards`):
    
                result = document.getElementById("result-value").innerHTML = `${startingInputValue}`;
    
            break;
    
        }

    }

    else {
        console.log("Empty Starting Unit Value")
    }

    console.log(result);

}