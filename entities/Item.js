module.exports = class Item {
    constructor(name, inStock = 0) {
        this.name = name
        this.inStock = inStock
    }

    addOnStock(quantity) {
        return this.inStock += quantity
    }

    removeFromStock(quantity) {
        return this.inStock -= quantity
    }
}