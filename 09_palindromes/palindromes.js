const palindromes = function (str) {
    str = str.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (str[0] !== str[str.length - 1]) return false;
    if (str.length === 1 || str.length === 0) return true;
    return palindromes(str.substring(1, str.length - 1));
};
// Do not edit below this line
module.exports = palindromes;
