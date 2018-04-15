var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};

function lookUp (name) {
    console.log(`${name}'s phone number is ${phonebookDict['name']}.`);
}

function newEntry(name, phone) {
    phonebookDict[name] = phone;
    console.log(`New phone number added: ${phonebookDict[name]}.`);
}

function removeEntry(name) {
    delete phonebookDict[name];
    console.log(phonebookDict);
}

function updateEntry(name, phone) {
    if (phonebookDict[name]) { 
        phonebookDict[name] = phone;
        console.log(`Phone number updated: ${phonebookDict[name]}.`);
    }
    else {
        console.log("That name does not exist. Please use the newEntry function to add to the phonebook.");
    }
}

for (personName in phonebookDict) {
    
// 2nd Exercise set. Create a letter histogram that tallies # of each letter
var word = "banana";
var histogram = {};

for (var i = 0, len = word.length; i < len; i++) {
    var letter = word[i];
    histogram[letter] = (histogram[letter] || 0) + 1;
}

console.log(histogram);

// Same idea, but tallies words in a given phrase
function histogram(paragraph) {
    words = paragraph.split(" ");
    word_list = {}
    for (var i = 0; i < words.length; i++) {
        var word = words[i]
        word_list[word] = (word_list[word] || 0) + 1;
    }
    console.log(word_list);
    }

// Take the word-histogram above and only return the top 2 words used.
var items = Object.keys(word_list).map(function(key) {
    return [key, word_list[key]];
});
items.sort(function(first, second) {
    return second[1] - first[1];
});
console.log(items.slice(0, 2));