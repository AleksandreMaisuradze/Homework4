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
let array1 = [1, 2, 3, 4, 5]
array1.splice(3, 0, 'a', 'b', 'c')
console.log(array1);

//4
console.log("///4///");
let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach( numbers =>{
    sum += numbers;
})
console.log(sum);

//5
console.log("///5///");
for(let i = 1; i < 101; i++){
    console.log(i);
}
 //6
 console.log("///6///");
