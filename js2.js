var Names = "sss"

txt = document.querySelector(".textfield")
// this is not changing the value (attribute) of the txt varibale and .innerHTML doesnt chnage the value just the object itself
txt.innerHTML = "TEST" 
//use the .value to chnage the attribute of the file which is actually shown in the html
txt.value = "A new attribute value"
//if we want to get this information we need to create a variable for it and be able to get it out 
input = txt.value
alert(input)
alert(txt.value)

//if we want to store this value 
data = txt.value 
data
txt.value = "somethign else"
data