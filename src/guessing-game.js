class GuessingGame {
    constructor() {
        let min = 0;
        let max = 0;
        let average = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.average = Math.ceil((this.min + this.max) / 2)
        return this.average
    }

    lower() {
        if (this.average < this.max) {
            return this.max = this.average;
        }
    }

    greater() {
        if (this.average < this.max) {
            return this.min = this.average;
        }
    }
}

module.exports = GuessingGame;