const reverseString = function(str) {
    strArray = str.split("");
    strArray.reverse();
    str = strArray.join('');
    return str;
};
// Do not edit below this line
module.exports = reverseString;
