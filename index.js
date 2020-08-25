function wakeDog(dogName, dogBreed) {
    const str = `Wake ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

function leashDog(dogName, dogBreed) {
    const str = `Leash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

function walkToPark(dogName, dogBreed) {
    const str = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

function throwFrisbee(dogName, dogBreed) {
    const str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

function walkHome(dogName, dogBreed) {
    const str = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}

function unleashDog(dogName, dogBreed) {
    const str = `Unleash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
}


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

// function exerciseDog(dogName, dogBreed) {

//     const newArr =  [];
//     for (let i = 0; i < routine.length; i++) {
//         const currentRoutine = routine[i];
//         const result = currentRoutine(dogName, dogBreed);
//         newArr.push(result);
//     }
//     return newArr;
// }
// exerciseDog();


//iterating with .map

// function exerciseDog(dogName, dogBreed) {
//     return routine.map(function (element) {
//         return element(dogName, dogBreed);
//     });
// }
// exerciseDog();



//lambda function
function exerciseDog(dogName, dogBreed) {
    return routine.map(element => element(dogName, dogBreed));
}
exerciseDog();