const App = require('./App.js')

const app = new App()

app.createUser('Leo Cruz', 'leo@gmail.com')
const user = app.getUsers()

app.createEletricTool('Furadeira Bivolt', 3)
app.createEletricTool('Esmerilhadeira 220V', 3)
app.createEletricTool('Parafusadeira', 2)
const eletricTool = app.getEletricTools()

app.createManualTool('Esquadro', 2)
app.createManualTool('Prumo', 4)
app.createManualTool('Martelo', 1)
const manualTool = app.getManualTools()

app.createMaterial('Broca 08', 13)
app.createMaterial('Bucha 10', 750)
const material = app.getMaterials()

app.showDatabase()

