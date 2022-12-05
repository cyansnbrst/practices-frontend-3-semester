document.addEventListener('DOMContentLoaded', () => {

    // ЗАДАНИЕ 2

    let clickPicture = document.querySelectorAll('img');
    let changePicture = document.querySelector('.big-image');
    clickPicture.forEach(element => {
        element.addEventListener('click', event => {
            let pictureLink = element.getAttribute('src');
            console.log(pictureLink);
            changePicture.style.backgroundImage = 'url(\'' + pictureLink + '\')';
        })
    })

    // ЗАДАНИЕ 1

// Берем нужный div и все ссылки в нем:
    var div = document.querySelector('.links-block'),
        links = div.getElementsByTagName('a');

// Вот таким нехитрым способом останавливаем переход по ссылкам:
    for (var i = 0, l = links.length; i < l; i++)
        links[i].onclick = function () {
            return false;
        };

// А теперь делаем, что нам надо. Например:
    div.onclick = function (event) {

// Берем кроссбраузерно событие и элемент, на котором оно произошло:
        if (!event) event = window.event;
        var target = event.target || event.srcElement;

// Проверяем, по ссылки ли кликнули:
        if (target.tagName.search(/a/i) === -1) return;

// Ну и собственно, вот ради чего все это:)
        if (confirm('Вы действительно хотите перейти по ссылке: ' + target.href))
            location = target.href;
    };

    // ЗАДАНИЕ 3

    let ul = document.querySelector('.shop__cart-inner');
    ul.onclick = function (event) {
        if (event.target.tagName !== "LI") return;

        if (event.ctrlKey || event.metaKey) {
            toggleSelect(event.target);
        } else {
            singleSelect(event.target);
        }

    }

    // предотвращает ненужное выделение элементов списка при клике
    ul.onmousedown = function () {
        return false;
    };

    function toggleSelect(li) {
        li.classList.toggle('selected');
    }

    function singleSelect(li) {
        let selected = ul.querySelectorAll('.selected');
        for (let elem of selected) {
            elem.classList.remove('selected');
        }
        li.classList.add('selected');
    }

    // ЗАДАНИЕ 4

    let slider = document.querySelector('.slider');
    let thumb = slider.querySelector('.thumb');
    let shiftX;
    function onThumbDown(event) {
        event.preventDefault();
        shiftX = event.clientX - thumb.getBoundingClientRect().left;

        thumb.setPointerCapture(event.pointerId);

        thumb.onpointermove = onThumbMove;

        thumb.onpointerup = event => {
            thumb.onpointermove = null;
            thumb.onpointerup = null;
        }
    }
    function onThumbMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
    }
    thumb.onpointerdown = onThumbDown;
    thumb.ondragstart = () => false;


})