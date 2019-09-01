;(function (){//model
    'use strict'
    window.createModel = function createModel () {// в window вкладываем метод createModel, который функцией по созданию новой модели.
        const model = {
            currentPlate: 1,
            datum: [null, null, [], null, null, null],
            result: 0
        }

        const api = {}//колекция методов, которые доступны извне при использовании модуля другими модулями или в обычном констексте
//ниже доступные методы
        api.getCurrentPlate = function getCurrentPlate () {
            return model.currentPlate
        }

        api.setCurrentData = function setCurrentData (data) {
            model.datum[model.currentPlate - 1] = data
            console.log(model.datum)
        }

        api.getCurrentData = function getCurrentData () {
            return model.datum[model.currentPlate - 1]
            console.log(data)
            console.log(model.datum)
        }

        api.nextPlate = function nextPlate () {
            model.currentPlate = Math.min(model.currentPlate + 1, 6)
            return model.currentPlate

        }

        api.backPlate = function backPlate () {
            model.currentPlate = Math.max(model.currentPlate - 1, 1)//уменьшать на 1, но не меньше 1
            return model.currentPlate
        }

        api.check = function check() {
            if (model.datum[1] === 'Hyper Text Markup Language'){
                model.result++
            }
            if (model.datum[2][0] === 'Hyper Text Markup Language' && model.datum[2][1] === 'Hyper Text Markup Language'){
                model.result++
            }
            if (model.datum[3] === 'Сайты для всех браузеров и платформ') {
                model.result++
            }
            //return model.result
            console.log(model.result)
            api.nextPlate()
            if (model.result >= 2) {
                alert('Вы прекрасный верстальщик!')
            } else {
                alert('Вы прекрасный верстальщик! Но нужно немного подучиться...')
            }
        }

        return api
    }

     
})();