/*Steps
* [1,2,3] ^ [2,3,4,5,5] = [1,4,5]
*Take Unique elemments set.
*Make a new set array from elmts frm both sets.
*sort items
*compare adjacent elements, true means duplicate, skip them, when false push that
element into result array.
*/

/* FUNCTION FOR FINDING SET DIFFERENCES */
/*------------------------------------------------*/
let setDifference = (steps,set1,set2) =>{

    setA = new Set(set1)
    setB = new Set(set2)
    //setA = [...setA]
    //setB = [...setB]
    //let newSet = setA.concat(setB).sort();

    let newSet = [...setA].concat([...setB]).sort();
   
    let resultArray = [];

    let i = 0;
    while(i<newSet.length){
        if(newSet[i] === newSet[i+1])
            i = i+2;
        else{
            resultArray.push(newSet[i]);
            i = i+1;
        }
    }

    console.log (`step ${steps} : {${set1}} ^ {${set2}} = {${resultArray}}`);
    steps = steps + 1;
    return resultArray;
}


/*FUNCTION FOR PASSING ARGUMENTS TO setDifference FUNCTION
FROM ARRAY CONTAINING N NUMBER OF SETS*/
/*___________________________________________________- */
let result = (arrayOfSet) => {
    let steps = 1
    let newArray = []
  
    for( let i =0; i< arrayOfSet.length; i++){
       newArray = setDifference(steps,newArray,arrayOfSet[i])
       steps = steps + 1;
     
    }
   
    console.log(arrayOfSet, " = " ,newArray);
}


/*-----------------TEST----------------------------*/
result([[1,2,3],[1,4,5,2],[1,3]]);

//setDifference([1,4,7,8],[3,6,7,9]);

//setDifference([1,4,5,1],[2,3,4,5]);

//setDifference([1,2,3], setDifference([1,3,6,7],[3,4,5]) )




