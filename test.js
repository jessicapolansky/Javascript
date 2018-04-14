function madlib (name, subject) {
    var stringPrint = name + "'s favorite class is " + subject + ".";
    return stringPrint;
};
madlib ("Kerry", "math");

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

function printBox(width, height) {
    console.log(Array(width + 1).join("*"));
for (var count=0; count < (height - 2); count++) {
  console.log("*" + " ".repeat(width - 2) + "*");
}
    console.log(Array(width + 1).join("*"));

}

function printBanner(text) {
    var width = text.length;
    console.log(Array(width + 3).join("*"));
    console.log("*" + text + "*");
    console.log(Array(width + 3).join("*"));
}

function leetSpeak(entry) {
    var upper = entry.toUpperCase();
    var input = upper.split("");
    var leet = []
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