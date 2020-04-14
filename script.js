function parseBankAccount(bankAccount) {
    var lines = bankAccount.split('\n');
    var numbers = getNumbers(lines)
    var result = parseInt(numbers.map(number => getNumberFromString(number)).join(''))
    //console.log(result)
    return result
}

function getNumberFromString(s) {
    switch (s) {
        case '     |  |':
            return '1'
        case ' _  _||_ ':
            return '2'
        case ' _  _| _|':
            return '3'
        case '   |_|  |':
            return '4'
        case ' _ |_  _|':
            return '5'
        case ' _ |_ |_|':
            return '6'
        case ' _   |  |':
            return '7'
        case ' _ |_||_|':
            return '8'
        case ' _ |_| _|':
            return '9'
        case ' _ | ||_|':
            return '0'
    }
}

function getNumbers(lines) {
    numbers = []
    for (i = 0; i < 20; i++) {
        numbers[i] = ''
        lines.forEach(line => {
            numbers[i] = numbers[i] + line.substr(i * 3, 3);
        })
    }
    return numbers

}
console.log(parseBankAccount('    _  _     _  _  _  _  _ \n' +
    '  | _| _||_||_ |_   ||_||_|\n' +
    '  ||_  _|  | _||_|  ||_| _|\n', ))