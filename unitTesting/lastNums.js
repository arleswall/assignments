function lastNums(num1, num2) {
var lastDig1 = (Array.from(num1.toString()).pop());
var lastDig2 = (Array.from(num2.toString()).pop());
    return (lastDig1 === lastDig2);
}

module.exports = lastNums