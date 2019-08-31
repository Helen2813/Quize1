;(function (){//model
    'use strict'
    window.createModel = function createModel () {// в window вкладываем метод createModel, который функцией по созданию новой модели.
        const model = {
            currentPlate: 1,
            datum: [null, null, [], null]
        }
        const api = {}//колекция методов, которые доступны извне при использовании модуля другими модулями или в обычном констексте
//ниже доступные методы
        api.getCurrentPlate = function getCurrentPlate () {
            return model.currentPlate
        }

        api.setCurrentData = function setCurrentData (data) {
            model.datum[model.currentPlate - 1] = data
        }

        api.getCurrentData = function getCurrentData () {
            return model.datum[model.currentPlate - 1]
        }

        api.nextPlate = function nextPlate () {
            model.currentPlate = Math.min(model.currentPlate + 1, 6)
            return model.currentPlate
        }

        api.backPlate = function backPlate () {
            model.currentPlate = Math.max(model.currentPlate - 1, 1)//уменьшать на 1, но не меньше 1
            return model.currentPlate
        }
        return api
    }

})();