let multiplesOfSevenArray = [];

    for(let i=0; i < 100; i++){
        if([i] % 7 === 0){
            multiplesOfSevenArray.push([i])
        }
    }

let multiplesOfEightArray = []

    for(let i=100; i<200; i++){
        if([i] % 8 === 0) {
            multiplesOfEightArray.push([i])
        }
    }

let multiplesOfNineArray = []

    for(let i=200; i<300; i++){
        if([i] % 9 === 0) {
            multiplesOfNineArray.push([i])
        }
    }
    
    const zeroToThreeHundred = [...multiplesOfSevenArray, ...multiplesOfEightArray, ...multiplesOfNineArray];

    document.getElementById("seven").innerHTML = multiplesOfSevenArray;
    document.getElementById("eight").innerHTML = multiplesOfEightArray;
    document.getElementById("nine").innerHTML = multiplesOfNineArray;
    document.getElementById("combined").innerHTML = zeroToThreeHundred;

