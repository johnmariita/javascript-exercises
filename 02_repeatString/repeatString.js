const repeatString = function(str, count) {
    let newString = "";
    for (let i = 0; i < count; i++) {
        newString += str;
    }
    return (count < 0) ? "ERROR" : newString;
};

// Do not edit below this line
module.exports = repeatString;
