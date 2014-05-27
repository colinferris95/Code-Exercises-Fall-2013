/*
    TODO Use the flowchart you designed as a model and implement in JavaScript

    Tips:
    	- write a function that will be called by the button's onclick handler
    	- give your function a meaningful, appropriate name
    	- use local variables for any intermediate values of your algorithm
    	- give your variables meaningful, appropriate names
    	- use nested or chained if-statements
    	- use consistent indentation and spacing
    	- avoid lines that are especially long by breaking complex statements
    		into several smaller ones and using variables
    	- write preconditions and postconditions for your function
*/

function action(){

  var userInput = document.getElementById('actionInput').value;
  
  var action = userInput.toLowerCase();
  
  
    if (action === "run" ){
        document.getElementById('output').innerHTML = "you ran to a new area.";
    
    } else if (action === "walk"){
        document.getElementById('output').innerHTML = "you walked to a new area.";
    
    } else if (action === "jump"){
        document.getElementById('output').innerHTML = "you jump high into the sky.";
    
    } else if (action === "sleep"){
        document.getElementById('output').innerHTML = "you sleep for eight hours.";
    } else if (action === "throw"){
        document.getElementById('output').innerHTML = "you throw the object in your hands. It lands a couple yards away.";
    } else if (action === "pickup" ){
        document.getElementById('output').innerHTML = "you pickup a small stone on the ground.";
    }
    
    
    else{
    
      document.getElementById('output').innerHTML = "you cannot do that";
    
    } 
    
    


}

function help(){
    
    
    document.getElementById('output2').innerHTML = " List of defined actions: run, walk, jump, sleep, pickup, throw "

}