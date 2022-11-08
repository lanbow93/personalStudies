const Soda = {
    data: [
        {name: "Orange Soda", color: "Orange", readyToSell: true},
        {name: "Rootbeer", color: "Brown", readyToSell: false }
    ],
    getAll: function() {
        return this.data;
    },
    getOne: function(index) {
        return this.data[index];
    }
}

module.exports = Soda;