module.exports = function reverse (n) {
    console.log(n);
    let array = n.toString().split('');
    console.log(array);

    if (array[0] == '-') {
        let result = array.reverse().join('');
        return parseFloat(result);
    }
   
    return array.reverse().join('');
}
