// basic idea: Progrmming languages independent stratigies for solving problems without having to always redo again 
// really efficient Design patterns represent ideas on how to speed up development
// and common problems with minimal effort
// factory pattern: type of object orientated pattern 
// Exmaple pseudocode: for assembling the alligator object 
//Blueorint you can modify to solve your own issue..Bayesian had similar stuff
// think of an actual real world factory 

// the Developer object would look at the object name and type 
function Developer(Name){

    this.name = Name 
    this.type = "Developer"
}


// Tis object would also look at unicorns type but it has type as tester
// so name is common to both but we can different unicorns 
//based on developer and tester 
function Tester(name){

    this.name = name 
    this.type = "Tester"
}


// so now we create the unicorn factor to seperate out 
// different type of unicorns
//.create would be creating the different objects we need
// and it would create a name and type for what ever type of unicorn we want to create 


function UnicornFactory(){
    this.create = (Name, type) => {
        switch(type){
            case 1: return new Developer(Name)
            break; 
            case 2: return Tester(Name)
            break;

        }
    }
}

// now we test it out 
const UnicornFactoy = new UnicornFactory()
const newUnicorn= [] // testing with empty array to store our info 
// feed the function name and type of Unicorn 
newUnicorn.push(UnicornFactory.create("X",1))