;(function (){//view
    'use strict'

    const card1Template = `<div class="plate">
\t\t<div class="cover-content-wrapper">
\t\t\t<div class="cover-content">
\t\t\t\t<img class="title-img" src="img/pictures/html.png" alt="HTML">
\t\t\t\t<div class="title">Определи свой уровень знания верстки сайтов</div>
\t\t\t\t<p>Ответь на серию вопросов, получи оценку знаний, список уроков чтобы подтянуть свой уровень и методичку с нашего курса “Профессия: Верстальщик сайтов.”</p>
\t\t\t\t<a href="#" class="button">Пройти тест</a>
\t\t\t</div>
\t\t</div>
\t</div>`
//console.log(text2html(card1Template))
    window.createView = function createView () {// в window вкладываем метод createModel, который функцией по созданию новой модели.

        const api = {}//колекция методов, которые доступны извне при использовании модуля другими модулями или в обычном констексте
//ниже доступные методы
        let rootElement = null

        api.setRoot = function setRoot (newRootElement) {
            rootElement = newRootElement
        }

        api.setPlate = function setPlate (number) {//принимает в качестве арг. №карточки, который нужно отобразить
            let temlate = null
            if (number === 1) {
                temlate = card1Template
            }
            if (number === null) {
                return false
            }
            const viewElement = text2html(temlate)  //будет ссылаться на самый первый элемент верстки - div.app
            rootElement.innerHTML = ''
            rootElement.append(viewElement)

            return true
        }
        return api
    }
    function text2html (text) {
        const divElement = document.createElement('div')
        divElement.innerHTML = text
        return divElement.firstElementChild
    }

})();