module.exports = class Database {
    #storage = {
        eletricTools: [],
        manualTools: [],
        materials: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key] || []
    }

    findEletricToolByName(eletricToolName) {
        return this.#storage.eletricTools.find(e => e.name === eletricToolName)
    }

    saveEletricTool(eletricTool) {
        const eletricToolExists = this.findEletricToolByName(eletricTool.name)
        if (!eletricToolExists) {
            this.#storage.eletricTools.push(eletricTool)
        }
    }

    addEletricToolToStock(eletricToolName, quantity) {
        const eletricTool = this.findEletricToolByName(eletricToolName)
        eletricTool?.addToStock(quantity)
    }

    removeEletricToolFromStock(eletricToolName, quantity) {
        const eletricTool = this.findEletricToolByName(eletricToolName)
        eletricTool?.removeFromStock(quantity)
    }

    findManualToolByName(manualToolName) {
        return this.#storage.manualTools.find(m => m.name === manualToolName)
    }

    saveManualTool(manualTool) {
        const manualToolExists = this.findManualToolByName(manualTool.name)
        if (!manualToolExists) {
            this.#storage.manualTools.push(manualTool)
        }
    }

    addManualToolToStock(manualToolName, quantity) {
        const manualTool = this.findManualToolByName(manualToolName)
        manualTool?.addToStock(quantity)
    }

    removeManualToolFromStock(manualToolName, quantity) {
        const manualTool = this.findManualToolByName(manualToolName)
        manualTool?.removeFromStock(quantity)
    }

    findMaterialByName(materialName) {
        return this.#storage.materials.find(mat => mat.name === materialName)
    }

    saveMaterial(material) {
        const materialExists = this.findMaterialByName(material.name)
        if(!materialExists) {
            this.#storage.materials.push(material)
        }
    }

    addMaterialToStock(materialName, quantity) {
        const material = this.findMaterialByName(materialName)
        material?.addToStock(quantity)
    }

    removeMaterialFromStock(materialName, quantity) {
        const material = this.findMaterialByName(materialName)
        material?.removeFromStock(quantity)
    }

    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExists) {
            this.#storage.users.push(user)
        }
    }

    saveOrder(order) {
        this.#storage.orders.push(order)
    }
    
    showStorage() {
        console.table(this.#storage.eletricTools)
        console.table(this.#storage.manualTools)
        console.table(this.#storage.materials)
        console.table(this.#storage.orders.map(order => order.data))
    }
}