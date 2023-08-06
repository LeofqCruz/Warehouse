const Item = require('./Item.js')

module.exports = class ManualTool extends Item {
    constructor(name, inStock) {
        super(name, inStock)
        this.type = 'Manual Tool'
    }
}