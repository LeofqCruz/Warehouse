const Item = require('./Item.js')

module.exports = class Materials extends Item {
    constructor(name, inStock) {
        super(name, inStock)
        this.type = 'Materials'
    }
}