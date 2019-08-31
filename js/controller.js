;(function (){//Controller
    'use strict'
    window.createController = function createController () {// в window вкладываем метод createModel, который функцией по созданию новой модели.

        const api = {}//колекция методов, которые доступны извне при использовании модуля другими модулями или в обычном констексте
//ниже доступные методы
        let view = null
        let model = null

        api.setView = function setView (newView) {
            view = newView

            initCheck()
        }

        api.setModel = function setModel (newModel) {
            model = newModel

            initCheck()
        }

        return api

        function initCheck() {//будет выполняться только в том случае, если есть обе зависимости
            if (view === null || model === null) {
                return //ничего не будет делать
            }
            view.setPlate(model.getCurrentPlate())
            view.buttonClickHandler = function (btnContent) {
                if (btnContent === 'Пройти тест') {
                    view.setPlate(model.nextPlate(), model.getCurrentData())
                }
                else if (btnContent === 'Далее' || btnContent === 'Получить результаты') {
                    model.setCurrentData(view.getData())
                    view.setPlate(model.nextPlate(), model.getCurrentData())

                }
                else if (btnContent === 'Назад') {
                    view.setPlate(model.backPlate(), model.getCurrentData())
                }

            }
            // view.radioBlockClickHandler = function (rbContent) {
            //     //console.log(this)
            // }

        }
    }

})();