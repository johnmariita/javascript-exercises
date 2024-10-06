const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; i++) {
        while (array.includes(args[i])) {
            array.forEach((item, index) => {
                if (item === args[i]) {
                    array.splice(index, 1);
                }
            });
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
