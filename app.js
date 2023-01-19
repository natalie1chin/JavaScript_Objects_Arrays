console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2,22,12,17,18,39,129];
function arraySum (arr){
    var sum =0;
    for (i=0;i<arr.length;i++){

        sum=sum+arr[i];
    }
    return sum;
};
console.log(arraySum(numbers));



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};

book.title = "The Hobbit";
book.pages=300;
book.readCount=1;
book.info= function (){
        return this.title + " by JR Tolkein, " + this.pages + " pages, read" + this.readCount + " times";
    }

console.log(book.info());


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

const words = sentence.split(' ');

let result = [];

for (i=0;i<words.length;i++){
    let letters = words[i].split("");
    let lettersReversed = letters.reverse();
    let lettersJoined = lettersReversed.join("");
    result.push(lettersJoined); 
}

const finalSentence=result.join(" ");
console.log(finalSentence);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let rows=csvData.split("\n");
let headers=rows[0].split(",");
const resultArray=[];
for(i=1;i<rows.length;i++){
    const valuesArray=rows[i].split(",");
    const dataObject={
        [headers[0]]: valuesArray[0],
        [headers[1]]: valuesArray[1],
    };
    resultArray.push(dataObject);

}

console.log(resultArray);


