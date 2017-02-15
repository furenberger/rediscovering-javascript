const longestName = (...namesArray) => {
    if(namesArray.length > 0){
        return namesArray
            .reduce((name1, name2) => name1.length > name2.length ? name1 : name2)
    }
};

const namesThatStartWith = (filter,...namesArray) => {
    return namesArray.filter(name => name.startsWith(filter));
};

const greet = (greeting,name) => `${greeting} ${name}, how're you?`;

const greetWith = function(greeting) {
    return name => greet(greeting,name);
};

module.exports = {
    longestName,
    namesThatStartWith,
    greet,
    greetWith
};