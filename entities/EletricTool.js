const Item = require('./Item.js')

module.exports = class EletricTools extends Item {
    constructor (name, inStock = 0) {
        super(name, inStock)
        this.type = 'Eletric Tool'
    }
}