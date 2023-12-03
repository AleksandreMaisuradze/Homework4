// 1
console.log("///1///");
let array = [5, 25, 89, 120, 36];
array.push("javascript", "python");
array.unshift("html", "css");
console.log(array.length);
array.shift("html")
array.pop()
console.log(array);

//2
console.log("///2///");
let fruits = ["ფორთოხალი", "ბანანი", "მსხალი"];
console.log(fruits.length);
fruits.push("ვაშლი", "ანანასი");
fruits.unshift("საზამთრო");
console.log(fruits.length);
fruits.splice(2, 0, "მანგო");
fruits.shift("საზამთრო");
fruits.pop();
console.log(fruits.length);

//3
console.log("///3///");
let array1 = [1, 2, 3, 4, 5];
array1.splice(3, 0, 'a', 'b', 'c');
console.log(array1);

//4
console.log("///4///");
let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(numbers => {
    sum += numbers;
})
console.log(sum);

//5
console.log("///5///");
for (let i = 100; i > 0; i--) {
    console.log(i);
}

//6
console.log("///6///");
let array4 = [2, 15, 10, 24];
let deleteNumber = array4.splice(2, 1);
console.log(array4);

//7
console.log("///7///");
let array2 = [12, 25, 3, 6, 8, 14, 7, 23];
let divide = array2.map(number => number / 3);
console.log(divide);

//8
console.log("///8///");
let languages = ['html', 'css', 'javascript', 'python', 'php'];
languages.filter(programing => {
    if (programing.length > 3) {
        console.log(programing);
    }
})

//9
console.log("///9///");
let words = ['madrid', 'rome', 'milan', 'berlin'];
let wordFilter = words.filter(word => word.includes('n') || word.includes('m'));
console.log(wordFilter);

//10
console.log("///10///");
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let arrConcat = arr1.concat(arr2, arr3);
console.log(arrConcat);

//11
console.log("///11///");
let arr4 = [-1, -2, -3, 4];
let positive = arr4.some(number => number > 0);
console.log(positive);

//12
console.log("///12///");
let array3 = [23, 45, 32, 5, 87, 7, 3, 98];
let fromHigh = array3.sort((a, b) => {
    return b - a;
})
console.log(fromHigh);
let highestNumber = Math.max(23, 45, 32, 5, 87, 7, 3, 98);
console.log(highestNumber);

//13
console.log("///13///");
function getinfo() {
    let nameuser = 'anna';
    console.log(nameuser); //anna 


    function userinfo() {
        let info = `user name is ${nameuser}`;
        console.log(info); // user name is anna 
    }
    userinfo();
    console.log(info); // სავარაუდოდ არაფერს რადგან info ფუნქციის შიგნით იმუშავებს მარტო
}


console.log(nameuser); // სავარაუდოდ ესეც მხოლოდ ფუნქციის შიგნით დაილოგება
getinfo();
