;(function (){//view
    'use strict'

    window.createView = function createView () {// в window вкладываем метод createModel, который функцией по созданию новой модели.

        const api = {//колекция методов, которые доступны извне при использовании модуля другими модулями или в обычном констексте
//ниже доступные методы
            buttonClickHandler () {} ,//переопределяется в двльнейшем
            radioBlockClickHandler () {}
        }
        let rootElement = null
        let data = null

        api.setRoot = function setRoot (newRootElement) {
            rootElement = newRootElement
        }

        api.getData = function getData () {
            return data
        }

        api.setPlate = function setPlate (number, initData = null) {//принимает в качестве арг. №карточки, который нужно отобразить
            let temlate = null
            data = initData//
            if (number === 1) {
                temlate = cardTemplate_1
            }
            else if (number === 2) {
                temlate = cardTemplate_2
            }
            else if (number === 3) {
                temlate = cardTemplate_3
            }
            else if (number === 4) {
                temlate = cardTemplate_4
            }
            else if (number === 5) {
                temlate = cardTemplate_5
            }
            else if (number === 6) {
                temlate = cardTemplate_6
            }
            if (number === null) {
                return false
            }
            const viewElement = text2html(temlate)  //будет ссылаться на самый первый элемент верстки - div.app
            const buttons = viewElement.querySelectorAll('.button')
            const radioBlocks = viewElement.querySelectorAll('.radio-block')
            rootElement.innerHTML = ''
            rootElement.append(viewElement)

            if (number === 2 ) {
                for (let j = 0; j < radioBlocks.length; j++) {
                    radioBlocks[j].classList.remove('radio-block--active')
                }
                if (initData !== null) {//если отсутствуют начальные данные


                        for (let j = 0; j < radioBlocks.length; j++) {
                            const radioBlock = radioBlocks[j]
                            const textElement = radioBlock.querySelector('.radio-block__text')

                            if (textElement.textContent === initData) {
                                radioBlock.classList.add('radio-block--active')
                                radioBlock.click()
                                break
                            }
                        }

                }
            }

            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i]

                button.addEventListener('click', function (event){
                    event.stopPropagation()
                    api.buttonClickHandler(this.textContent)
                })
            }

            for (let i = 0; i < radioBlocks.length; i++) {
                const radioBlock = radioBlocks[i]

                radioBlock.addEventListener('click', function (event){

                    event.stopImmediatePropagation()
                    const textElement = radioBlock.querySelector('.radio-block__text')
                    data = textElement.textContent
                    api.radioBlockClickHandler(data)

                    for (let j = 0; j < radioBlocks.length; j++) {
                        radioBlocks[j].classList.remove('radio-block--active')
                    }
                    radioBlock.classList.add('radio-block--active')
                })
            }

            return true
        }
        return api
    }
    function text2html (text) {
        const divElement = document.createElement('div')
        divElement.innerHTML = text
        return divElement.firstElementChild
    }

//card 1
    const cardTemplate_1 = `<div class="plate">
\t\t<div class="cover-content-wrapper">
\t\t\t<div class="cover-content">
\t\t\t\t<img class="title-img" src="img/pictures/html.png" alt="HTML">
\t\t\t\t<div class="title">Определи свой уровень знания верстки сайтов</div>
\t\t\t\t<p>Ответь на серию вопросов, получи оценку знаний, список уроков чтобы подтянуть свой уровень и методичку с нашего курса “Профессия: Верстальщик сайтов.”</p>
\t\t\t\t<a href="#" class="button">Пройти тест</a>
\t\t\t</div>
\t\t</div>
\t</div>`
//card 2
    const cardTemplate_2 = `<div class="plate">

\t\t<!-- plate-header -->
\t\t<div class="plate-header">
\t\t\t<div class="plate-header__icon">
\t\t\t\t<img src="img/icons/list.png" alt="Icon">
\t\t\t</div>
\t\t\t<div class="plate-header__title">Ваш уровень знания верстки сайтов</div>
\t\t</div>
\t\t<!-- // plate-header -->

\t\t<!-- Content ... -->
\t\t<div class="plate-content">
\t\t\t<h2 class="title-main">Что означает сокращение HTML?</h2>
\t\t\t<div class="radio-group">
\t\t\t\t<!-- radio-block -->
\t\t\t\t<label class="radio-block">
\t\t\t\t\t<input type="radio" name="radio-group" class="radio-block__real">
\t\t\t\t\t<div class="radio-block__fake"></div>
\t\t\t\t\t<div class="radio-block__text">Hero Tutorial Multi Level</div>
\t\t\t\t</label>
\t\t\t\t<!-- // radio-block -->
\t\t\t\t<!-- radio-block -->
\t\t\t\t<label class="radio-block radio-block--active">
\t\t\t\t\t<input type="radio" name="radio-group" class="radio-block__real">
\t\t\t\t\t<div class="radio-block__fake"></div>
\t\t\t\t\t<div class="radio-block__text">Hyper Text Markup Language</div>
\t\t\t\t</label>
\t\t\t\t<!-- // radio-block -->
\t\t\t\t<!-- radio-block -->
\t\t\t\t<label class="radio-block">
\t\t\t\t\t<input type="radio" name="radio-group" class="radio-block__real">
\t\t\t\t\t<div class="radio-block__fake"></div>
\t\t\t\t\t<div class="radio-block__text">High Task Mirage Language</div>
\t\t\t\t</label>
\t\t\t\t<!-- // radio-block -->
\t\t\t\t<!-- radio-block -->
\t\t\t\t<label class="radio-block">
\t\t\t\t\t<input type="radio" name="radio-group" class="radio-block__real">
\t\t\t\t\t<div class="radio-block__fake"></div>
\t\t\t\t\t<div class="radio-block__text">HTML не имеет расшифровки. Это военная разработка.</div>
\t\t\t\t</label>
\t\t\t\t<!-- // radio-block -->
\t\t\t</div>
\t\t</div>

\t\t<!-- plate-footer -->
\t\t<div class="plate-footer">
\t\t\t<div class="plate-footer__progress">

\t\t\t\t<div class="progress">
\t\t\t\t\t<div class="progress__label">
\t\t\t\t\t\tГотово: <strong>56%</strong>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="progress__line-wrapper">
\t\t\t\t\t\t<div class="progress__line-bar" style="width: 56%;"></div>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t</div>
\t\t\t<div class="plate-footer__buttons">
\t\t\t\t<a href="#" class="button button--back">Назад</a>
\t\t\t\t<a href="#" class="button">Далее</a>
\t\t\t</div>
\t\t</div>
\t\t<!-- // plate-footer -->

\t</div>`
    //card 3
    const cardTemplate_3 = `<div class="plate">

\t\t<!-- plate-header -->
\t\t<div class="plate-header">
\t\t\t<div class="plate-header__icon">
\t\t\t\t<img src="img/icons/list.png" alt="Icon">
\t\t\t</div>
\t\t\t<div class="plate-header__title">Ваш уровень знания верстки сайтов</div>
\t\t</div>
\t\t<!-- // plate-header -->

\t\t<!-- Content ... -->
\t\t<div class="plate-content">
\t\t\t<h2 class="title-main">Что означает сокращение HTML?</h2>
\t\t\t<div class="checkbox-group">
\t\t\t\t<!-- checkbox-block -->
\t\t\t\t<label class="checkbox-block">
\t\t\t\t\t<input type="checkbox" name="radio-group" class="checkbox-block__real">
\t\t\t\t\t<div class="checkbox-block__fake"></div>
\t\t\t\t\t<div class="checkbox-block__text">Hero Tutorial Multi Level</div>
\t\t\t\t</label>
\t\t\t\t<!-- // checkbox-block -->
\t\t\t\t<!-- checkbox-block -->
\t\t\t\t<label class="checkbox-block checkbox-block--active">
\t\t\t\t\t<input type="checkbox" name="radio-group" class="checkbox-block__real">
\t\t\t\t\t<div class="checkbox-block__fake"></div>
\t\t\t\t\t<div class="checkbox-block__text">Hyper Text Markup Language</div>
\t\t\t\t</label>
\t\t\t\t<!-- // checkbox-block -->
\t\t\t\t<!-- checkbox-block -->
\t\t\t\t<label class="checkbox-block">
\t\t\t\t\t<input type="checkbox" name="radio-group" class="checkbox-block__real">
\t\t\t\t\t<div class="checkbox-block__fake"></div>
\t\t\t\t\t<div class="checkbox-block__text">High Task Mirage Language</div>
\t\t\t\t</label>
\t\t\t\t<!-- // checkbox-block -->
\t\t\t\t<!-- checkbox-block -->
\t\t\t\t<label class="checkbox-block">
\t\t\t\t\t<input type="checkbox" name="radio-group" class="checkbox-block__real">
\t\t\t\t\t<div class="checkbox-block__fake"></div>
\t\t\t\t\t<div class="checkbox-block__text">HTML не имеет расшифровки. Это военная разработка.</div>
\t\t\t\t</label>
\t\t\t\t<!-- // checkbox-block -->
\t\t\t</div>
\t\t</div>

\t\t<!-- plate-footer -->
\t\t<div class="plate-footer">
\t\t\t<div class="plate-footer__progress">

\t\t\t\t<div class="progress">
\t\t\t\t\t<div class="progress__label">
\t\t\t\t\t\tГотово: <strong>56%</strong>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="progress__line-wrapper">
\t\t\t\t\t\t<div class="progress__line-bar" style="width: 56%;"></div>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t</div>
\t\t\t<div class="plate-footer__buttons">
\t\t\t\t<a href="#" class="button button--back">Назад</a>
\t\t\t\t<a href="#" class="button">Далее</a>
\t\t\t</div>
\t\t</div>
\t\t<!-- // plate-footer -->

\t</div>`

    //card 4
    const cardTemplate_4 = `<div class="plate">
\t\t<div class="plate-header">
\t\t\t<div class="plate-header__icon">
\t\t\t\t<img src="img/icons/list.png" alt="Icon">
\t\t\t</div>
\t\t\t<div class="plate-header__title">Ваш уровень знания верстки сайтов</div>
\t\t</div>
\t\t<div class="plate-content">
\t\t\t<h2 class="title-main">На HTML можно создавать:</h2>
\t\t\t<div class="cards-group">
\t\t\t\t<label class="card-block">
\t\t\t\t\t<div class="card-block__radio">
\t\t\t\t\t\t<input name="image-group" type="radio" class="card-block__radio-real">
\t\t\t\t\t\t<div class="card-block__radio-fake"></div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="card-block__radio"></div>
\t\t\t\t\t<div class="card-block__img">
\t\t\t\t\t\t<img src="img/pictures/mobile.jpg" alt="Img">
\t\t\t\t\t</div>
\t\t\t\t\t<div class="card-block__text">
\t\t\t\t\t\tМобильные приложения
\t\t\t\t\t</div>
\t\t\t\t</label>
\t\t\t\t<label class="card-block">
\t\t\t\t\t<div class="card-block__radio">
\t\t\t\t\t\t<input name="image-group" type="radio" class="card-block__radio-real">
\t\t\t\t\t\t<div class="card-block__radio-fake"></div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="card-block__img">
\t\t\t\t\t\t<img src="img/pictures/browser.jpg" alt="Img">
\t\t\t\t\t</div>
\t\t\t\t\t<div class="card-block__text">
\t\t\t\t\t\tСайты для всех браузеров и платформ
\t\t\t\t\t</div>
\t\t\t\t</label>
\t\t\t\t<label class="card-block">
\t\t\t\t\t<div class="card-block__radio">
\t\t\t\t\t\t<input name="image-group" type="radio" class="card-block__radio-real">
\t\t\t\t\t\t<div class="card-block__radio-fake"></div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="card-block__radio"></div>
\t\t\t\t\t<div class="card-block__img">
\t\t\t\t\t\t<img src="img/pictures/windows.jpg" alt="Img">
\t\t\t\t\t</div>
\t\t\t\t\t<div class="card-block__text">
\t\t\t\t\t\tПрограммы для Windows
\t\t\t\t\t</div>
\t\t\t\t</label>
\t\t\t\t<label class="card-block">
\t\t\t\t\t<div class="card-block__radio">
\t\t\t\t\t\t<input name="image-group" type="radio" class="card-block__radio-real">
\t\t\t\t\t\t<div class="card-block__radio-fake"></div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="card-block__radio"></div>
\t\t\t\t\t<div class="card-block__img">
\t\t\t\t\t\t<img src="img/pictures/linux.jpg" alt="Img">
\t\t\t\t\t</div>
\t\t\t\t\t<div class="card-block__text">
\t\t\t\t\t\tПрограммы для Linux
\t\t\t\t\t</div>
\t\t\t\t</label>
\t\t\t</div>
\t\t</div>
\t\t<div class="plate-footer">
\t\t\t<div class="plate-footer__progress">
\t\t\t\t<div class="progress">
\t\t\t\t\t<div class="progress__label">
\t\t\t\t\t\tГотово: <strong>56%</strong>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="progress__line-wrapper">
\t\t\t\t\t\t<div class="progress__line-bar" style="width: 56%;"></div>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<div class="plate-footer__buttons">
\t\t\t\t<a href="#" class="button button--back">Назад</a>
\t\t\t\t<a href="#" class="button">Далее</a>
\t\t\t</div>
\t\t</div>
\t</div>`

    const cardTemplate_5 = `<div class="plate">
\t\t<div class="cover-content-wrapper">
\t\t\t<div class="cover-content">

\t\t\t\t<img class="title-img" width="70" src="img/icons/clapping.svg" alt="Отлично! Последний шаг!">
\t\t\t\t<div class="title">Отлично! Последний шаг!</div>

\t\t\t\t<div class="form-group">
\t\t\t\t\t<label class="label" for="email">Введите Email:</label>
\t\t\t\t\t<input class="input-email" type="email" id="email" placeholder="Ваш Email">
\t\t\t\t</div>

\t\t\t\t<input class="button button--huge" type="submit" value="Получить результаты">

\t\t\t\t<label class="checkbox">
\t\t\t\t\t<input type="checkbox" class="checkbox__real">
\t\t\t\t\t<div class="checkbox__fake"></div>
\t\t\t\t\t<div class="checkbox__text">С политикой конфеденциальности ознакомлен</div>
\t\t\t\t</label>

\t\t\t</div>
\t\t</div>
\t</div>`

    const cardTemplate_6 = `<div class="plate">
\t\t<div class="cover-content-wrapper">
\t\t\t<div class="cover-content">

\t\t\t\t<img class="title-img" width="70" src="img/icons/clapping.svg" alt="Спасибо!">
\t\t\t\t<div class="title">Спасибо!</div>
\t\t\t\t<p>Результаты вашего теста и методичка, уже отправлены вам на Email.</p>
\t\t\t\t<div class="title-2">Ваши бонусы:</div>
\t\t\t\t<div class="bonus-cards-wrapper">
\t\t\t\t\t<div class="bonus-card">
\t\t\t\t\t\t<img class="bonus-card__img" src="img/icons/leaflet.svg" alt="">
\t\t\t\t\t\t<div class="bonus-card__title">Методичка с курса по верстке</div>
\t\t\t\t\t</div>
\t\t\t\t\t<div class="bonus-card">
\t\t\t\t\t\t<img class="bonus-card__img" src="img/icons/video-tutorial.png" alt="">
\t\t\t\t\t\t<div class="bonus-card__title">Видео урок с курса по верстке</div>
\t\t\t\t\t</div>
\t\t\t\t</div>

\t\t\t</div>
\t\t</div>
\t</div>`
})();