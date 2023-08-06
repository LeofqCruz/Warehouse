const Database = require('./Database.js')
const EletricTool = require('./entities/EletricTool.js')
const ManualTools = require('./entities/ManualTool.js')
const Materials = require('./entities/Materials.js')
const User = require('./entities/User.js')
const Order = require('./entities/Order.js')

module.exports = class App {
    static #database = new Database()
    
    createUser(fullname, email) {
        const user = new User(fullname, email)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    createEletricTool(name, inStock) {
        const eletricTool = new EletricTool(name, inStock)
        App.#database.saveEletricTool(eletricTool)
    }

    addEletricTool(eletricToolName, quantity) {
        App.#database.addEletricToolToStock(eletricToolName, quantity)
    }

    getEletricTools() {
        return App.#database.find('eletricTools')
    }

    createManualTool(name, inStock) {
        const manualTool = new ManualTools(name, inStock)
        App.#database.saveManualTool(manualTool)
    }

    addManualTool(manualToolName, quantity) {
        App.#database.addManualToolToStock(manualToolName, quantity)
    }

    getManualTools() {
        return App.#database.find('manualTools')
    }

    createMaterial(name, inStock) {
        const materials = new Materials(name, inStock)
        App.#database.saveMaterial(materials)
    }

    addMaterial(materialName, quantity) {
        App.#database.addMaterialToStock(materialName, quantity)
    }

    getMaterials() {
        return App.#database.find('materials')
    }

    createOrder(items, user) {
        const order = new Order(items,user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({product, quantity}) => {
            if (product instanceof EletricTool) {
                App.#database.removeEletricToolFromStock(product.name, quantity)
            } else if(product instanceof ManualTools) {
                App.#database.removeManualToolFromStock(product.name, quantity)
            } else if(product instanceof Materials) {
                App.#database.removeMaterialFromStock(product.name, quantity)
            }
        })
    }

    getOrders() {
        return this.#database.find('orders')
    }

    showDatabase() {
        App.#database.showStorage()
    }
}