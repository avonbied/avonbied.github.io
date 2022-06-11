let el = "br";

document.querySelector("main").appendChild(document.createElement(el));


function* nextNum(bound) {
    let num = 0;
    while (num < bound) {
        yield num;
        num += 1;
    }
}

function* readFile(file) {
    
}

console.log(...nextNum(12));




function name(carname) // carname is stored
{
    for (let name of carsParked) // name stores a string from the array
    {
        // Test every name in the loop
        if (carname === name) {
            return true;
        }
    }
    // 
    return false;
}