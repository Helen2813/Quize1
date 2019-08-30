const model = window.createModel()
const view = window.createView()
const controller = window.createController()
// console.log({model, view, controller})
view.setRoot(document.querySelector('#app'))

controller.setView(view)
controller.setModel(model)/*тем самым инициируем связь между всеми рремя модулями*/