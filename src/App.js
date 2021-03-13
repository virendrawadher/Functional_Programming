import "./styles.css";

//Display name currying
const displayName = (name) => (msg) => {
  console.log(name + msg);
};

//Composition
const userName = (username) => {
  return username;
};
const userID = (userid, usern) => {
  return userid + usern;
};

const displayText = () => {
  console.log(userID("123", userName("Viren")), "Entered the room");
};
const name = displayName("Virendra ");

//Find sum of odd number
const arr = [1, 43, 23, 5, 2];

function sum(arr, s) {
  arr.map((a) => {
    if (a % 2 !== 0) {
      s += a;
    }
  });
  console.log(s);
}

//Find sum of number of odd index
const OddSum = [1, 2, 3, 4];

function OddIndexSumNumber(arr, oISum) {
  arr.map((a, i) => {
    if (i % 2 !== 0) {
      oISum += a;
    }
  });
  console.log(oISum);
}

//Biggest number
const biggestNumArr = [9, 22, 94, 21, 56];

function FindBiggestNumber(arr) {
  let biggest = arr[0];
  arr.map((a, i) => {
    if (arr[i + 1] > biggest) {
      biggest = arr[i + 1];
    }
  });
  console.log(biggest);
}

//Divible by 10
const div10 = [12, 130, 30, 132, 34, 50];

function DivibleBy10(arr, d10) {
  arr.map((a) => {
    if (a % 10 === 0) {
      d10.push(a);
    }
  });
  console.log(d10);
}

//Odd + 1 and Even - 1
const OddEven = [1, 2, 3, 4];
function OddPlusOneEvenMinusOdd(arr, oe) {
  arr.map((a) => {
    if (a % 2 === 0) {
      oe.push(a - 1);
    } else {
      oe.push(a + 1);
    }
  });
  console.log(oe);
}

//Sum even and odd in obj seperately
const sumOddEven = [1, 2, 3, 4];

function SumOfOddEven(arr, esum, osum) {
  let even = {};
  let odd = {};
  arr.map((a) => {
    if (a % 2 === 0) {
      esum += a;
    } else {
      osum += a;
    }
  });
  even["even"] = esum;
  odd["odd"] = osum;
  console.log(even);
  console.log(odd);
}

//String with key as length and value as count
const item = [
  "A",
  "By",
  "Cat",
  "Dog",
  "Ball",
  "Wall",
  "Mango",
  "Orange",
  "papaya"
];

function KeysandValues(arr, obj) {
  let length = arr[0].length;
  let count = 0;
  arr.map((a, i) => {
    if (a.length === length) {
      count += 1;
      obj[a.length] = count;
    } else if (a.length !== length) {
      length = a.length;
      count = 0;
      if (a.length === length) {
        count += 1;
        obj[a.length] = count;
      }
    }
  });
  console.log(obj);
}

// array of string which have vowels
const vowels = ["a", "e", "i", "o", "u"];
const itemName = ["Milk", "Bread", "wqst", "rdft"];

function VowelsInStr(name, vowels, Strvowels) {
  name.map((str) => {
    let count = 0;
    for (let letter of str.toLowerCase()) {
      if (vowels.includes(letter)) {
        count += 1;
        if (count === 1) {
          Strvowels.push(str);
        }
      }
    }
  });
  console.log(Strvowels);
}

//Object with key as item and value is length of string

const items = ["Wheat", "Rice", "Daal", "Rava"];

function ObjWithLengthOfString(itemN, objStr) {
  itemN.map((i) => {
    objStr[i] = i.length;
  });
  console.log(objStr);
}

export default function App() {
  return (
    <div className="App">
      {name("Says Hello!!!!!")}
      {displayText()}
      {sum(arr, 0)}
      {OddIndexSumNumber(OddSum, (oISum = 0))}
      {FindBiggestNumber(biggestNumArr)}
      {DivibleBy10(div10, (d10 = []))}
      {OddPlusOneEvenMinusOdd(OddEven, (oe = []))}
      {SumOfOddEven(sumOddEven, (esum = 0), (osum = 0))}
      {KeysandValues(item, (obj = {}))}
      {VowelsInStr(itemName, vowels, (Strvowels = []))}
      {ObjWithLengthOfString(items, (objStr = {}))}
    </div>
  );
}
