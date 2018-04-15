// Madlib. Enter a name and a subject, and generate a sentence
function madlib (name, subject) {
    var stringPrint = name + "'s favorite class is " + subject + ".";
    return stringPrint;
};
madlib ("Kerry", "math");

// Tip Amount. Enter your bill amount and quality of service to get the tip
function tipAmount (bill, service) {
    if (service == 'good') {
        var tip = bill * .20;
        return tip.toFixed(2);
    }
    else if (service == 'fair') {
        tip = bill * .15;
        return tip.toFixed(2);
    }
    else if (service == 'bad') {
        tip = bill * .10;
        return tip.toFixed(2);
    }
    else {
        return('Invalid entries');
    }
}
tipAmount(20.23, 'fair');

// Total Amount. Enter your bill amount and quality of service to get your total
function totalAmount (bill, service) {
    var total = Number(tipAmount(bill, service)) + bill;
    return total;
}
totalAmount(20.23, 'fair');

var count = function (start, end) {
    if (start < end) {
        console.log(start);
        return count(start + 1, end);
    }
    else {
        return start;
    }
      
    };
// Print a square made out of stars    
var row = 1;    
var squareStar = function (size) {
    if (row <= size) {
        console.log(Array(size + 1).join("*"));
        row = row + 1;
        return squareStar(size);
    }
    else {
    return;   
    }
};
// Print an empty square outlined by stars    
function printBox(width, height) {
    console.log(Array(width + 1).join("*"));
for (var count=0; count < (height - 2); count++) {
  console.log("*" + " ".repeat(width - 2) + "*");
}
    console.log(Array(width + 1).join("*"));

}
// Print a phrase outlined by stars, like a banner   
function printBanner(text) {
    var width = text.length;
    console.log(Array(width + 3).join("*"));
    console.log("*" + text + "*");
    console.log(Array(width + 3).join("*"));
}
// Given a phrase, translate into 'leetSpeak'
function leetSpeak(entry) {
    var upper = entry.toUpperCase();
    var input = upper.split("");
    var leet = [];
    for (var count = 0; count < input.length; count++) {
        if (input[count] == "A") {
            leet.push("4");
        } else if (input[count] == "E") {
            leet.push("3");
        } else if (input[count] == "G") {
            leet.push("6");
        } else if (input[count] == "I") {
            leet.push("1");
        } else if (input[count] == "O") {
            leet.push("0");
        } else if (input[count] == "S") {
            leet.push("5");
        } else if (input[count] == "T") {
            leet.push("7");
        } else {
            leet.push(input[count]);
        }
    }
    var answer = leet.join('');
    console.log(answer);
}
// Given a word or phrase, elongate the vowels in printed statement
function elongate(entry) {
    var long = [];
    for (var x = 0; x < entry.length; x++) {
        if (x + 1 == entry.length) {
            long.push(entry[x]);
        }
        else if (entry[x] + entry[x + 1] == "aa" || entry[x] + entry[x + 1] == "ee" || entry[x] + entry[x + 1] == "oo") {
            long.push(entry[x] + entry[x+1] + entry[x]  + entry[x]);
        }
        else {
            long.push(entry[x]);
        }
    }
    var answer = long.join('');
    console.log(answer);
}

// Given an array of numbers, only return the postive ones!
var numbers = [-5, 2, -7, 3, 4, -10, 8];
numbers.filter(function (item) {
    return item >= 0;
});

// Caesar Cipher
function caesarCipher(msg) {
    //create an array of characters from the English alphabet to be used to determine cipher values
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    //create a store to keep our response
    let answer = '';
    for (let x = 0; x < msg.length; x++) {
        const chr = msg[x];
        //When a space is present we wish to ignore it and not invoke cipher logic
        if (chr == ' ') {
            answer += ' ';
        } else {
            let count = alphabet.indexOf(chr.toUpperCase());
            let count2 = count + 13;
            //Alphabet only has so many characters. Wrap around so that we arent grabbing undefined values
            if (count2 >= alphabet.length) {
                count2 -= 26;
            }
            answer += alphabet[count2];
        }
    }
  return answer;
}

// Caesar Decipher
function decipher(msg) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let answer = '';
  for (let x = 0; x < msg.length; x++) {
    const chr = msg[x];
    if (chr == ' ') {
        answer += ' ';
    } else {
            let count = alphabet.indexOf(chr.toUpperCase());
            let count2 = count - 13;
            if (count2 <= 0) {
                count2 += 26;
                }
            answer += alphabet[count2];
        }
    }
  return answer;
}
