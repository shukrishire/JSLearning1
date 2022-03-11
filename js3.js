//sampple function1
/*

function Addition(num1,num2){
    //whatever is written here is part of function
    //Names = prompt("what is your name ?")
    //alert("Hello " + Names )
    var total   = num1 + num2
    //alert can be annoting so we use return instead 
    // alert(num1 +num2);  

    return total;
}
//js would now run this function
var newTotal =  Addition(10,15);
var newTotal2 =  Addition(57,1057);
console.log(newTotal, newTotal2)
/// alert(newTotal); 

if (today == "wed"){ here her
    Addition(); //this has Addition() in here instead we just have this and and we dont need to repeat ourselfs  here here
}else{
    Addition();
}
}
*/


function getName(){
    var nameElement = document.querySelector('.name');
    var name = nameElement.value;

    var newName = name.replace('Smith', 'Taulien');
 
    return newName;
}

function getFirstName(){
    //so doint repeat urself use what you have already 

    var name = getName();
    var firstName = name.split(" ");

    console.log(firstName);
   // alert(name)
     return firstName[0];

}
getFirstName();
//var currentName = getName();
//console.log(currentName); //we have the answer for chnaging the last name on console 

var firstName = getFirstName();
