function Accumulator(startingValue) {
    this.value = parseInt(startingValue);
    this.read = function () {
        this.value += parseInt(prompt("Enter a new number"));
    };
}

function createAccumulator() {
    let val = prompt("Enter a new number");
    let accumulator = new Accumulator(val);
    accumulator.read();
    accumulator.read();
    alert(accumulator.value);
}
