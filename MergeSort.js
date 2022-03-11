//given an array of different objects the algorithm tries to sort them out based on some standard -- JS merge sort similar ot bayesina merge sort 
// basic merge sort algorithm follow the traditional set up but in JS syntax 

// create some function that accenpts an array of items
function mergeSortTD(arr1){

    // if statement that looks at the array length 
    if(Array.length <=1 ){
        //what to do if T
        return arr1
    }
    //middle point of the array if its not length 1
     const middle = math.floor(arr1.length/2);
     //left side after some sliceing of the array -- think on one bog box and your making smaller boxes
     const left = arr1.slice(0,middle);
     //right side of the cutting
     const right = arr1.slice(middle)
        // what you want the function to spit out 
     return mergeSortTD(mergeSortTD(left), mergeSortTD(right))
    


}

// mergeort divides the two unequal halfs sub array untill one of them is just 1 element -- ie your big pile is now two big unequal piles then you sub divide those into smaller stuff but that now requires another function 

function mergeSortTD(left,right){

    const arr1 = []
    
    //while statement to keep sorting until you get to desired length
    while(left.length && right.length ){
        if (left[0] < right[0] ){ //base case
                //what to do if TRUE  -- need to use the arr1.push function to give output effetcively 
        } else{ 
            //what to do if FALSE ...arr1.push used 
        }

        }
        return ()
        // something like this arr1.concat(//concatinate the left and right slices )
    }
    


    // you can test the function by doing something like 
    function test(){
        // test array with random numbers
        //fucntion inserted here 
        //sue console.log() function to dsiplay the answer in the console and you can confirm that the function runs well 

    }
