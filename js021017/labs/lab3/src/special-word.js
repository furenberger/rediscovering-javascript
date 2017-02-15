//Your code goes here
class Special {
    isSpecial(word){
        return false;
    }
}

class Palindrome extends Special{
    isSpecial(word){
        // console.log("Palindrome: ", word);
        return word === word.split("").reverse().join("") || super.isSpecial(word);
    }
}


class Alphabetical extends Special{
    isSpecial(word){
        // console.log("Alphabetical: ", word);
        return word === word.split("").sort().join("")  || super.isSpecial(word);
    }
}


module.exports = {
    Palindrome,
    Alphabetical
};