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
            view.setPlate(1)

        }
    }

})();