const printValue = (value: string | number): void => {

    if (typeof value === 'string') {
        return console.log(value.toUpperCase());
    } else {
        return console.log(value.toFixed(2));
    }

}

printValue('samurai');
printValue(123.456);
