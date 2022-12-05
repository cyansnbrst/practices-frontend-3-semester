"use strict";

document.addEventListener('DOMContentLoaded', () => {

    // LINKS COLOR

    const links = document.querySelectorAll('.link');
    const colorList = ['red', 'greenyellow', 'deeppink', 'purple', 'deepskyblue', 'orange', 'gold'];

    links.forEach(link => {
        link.querySelector('a').style.color = colorList[Math.floor(Math.random() * colorList.length)];
    });

    // LIST MAKER

    const listBlock = document.querySelector('.create-list');

    const list = document.createElement('ul');
    listBlock.append(list);

    while (true) {
        let item = prompt("What do you want to buy?", "Workbook");
        if (!item)
            break;
        let listItem = document.createElement('li');
        listItem.textContent = item;
        list.append(listItem);
    }

    // NOTIFICATION

    const notification = document.querySelector('.notif');
    const notifList = ['SALE 20% ON MEMORY CARDS', 'New arrivals!', '1 + 1 SALE', 'BONUS CARD FOR OUR STUDENTS'];

    function showNotification(text) {
        let notif = document.createElement('div');
        notif.className = 'notification';
        notif.textContent = text;
        notif.style = `
        padding: 10px 20px;
        display: inline-block;
        border: 1px solid black;
        `;

        notification.append(notif);

        setTimeout(() => {
            notif.remove()
        }, 1500);
    }

    setInterval(() => {
        showNotification(notifList[Math.floor(Math.random() * notifList.length)])
    }, 2500);


    // PICTURE

    const area = document.querySelector(".area");
    const picture = area.querySelector('img');

    picture.style.top = Math.round(area.clientHeight / 2 - picture.offsetHeight / 2) + "px";
    picture.style.left = Math.round(area.clientWidth / 2 - picture.offsetWidth / 2) + "px";

    const clickX = document.querySelector('.clickX').querySelector('span');
    const clickY = document.querySelector('.clickY').querySelector('span');

    area.onclick = function (click) {
        clickX.textContent = click.clientX;
        clickY.textContent = click.clientY;
    }


    // NOTIFICATIONS

    const notif = document.querySelector('.notifs');
    const notifBtn = notif.querySelector('.notif__btn');
    const notifInner = notif.querySelector('.notif__inner');
    const notifCounter = notif.querySelector('.notif__counter');
    const notifArr = [
        'Not1',
        'Not2',
        'Not3',
        'Not4',
        'Not5',
        'Not6',
    ];

    let numberNotif = 0;
    let counter = 0;

    function createNotif() {
        let element = document.createElement('div');
        element.classList.add('notif__item');

        if (numberNotif < notifArr.length) {
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        } else {
            numberNotif = 0;
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        }

        notifInner.append(element);

        let closeTab = document.createElement('i');
        closeTab.className = 'fa-xmark';

        closeTab.style = `
        font-size: 20pt;
        position: absolute;
        right: 10px;
        top: 20px;
        cursor: pointer;
        `;

        closeTab.textContent = 'X';
        element.append(closeTab);

        notifCounter.textContent = counter;

        // console.log(notifInner);
    }

    let timerId = setInterval(createNotif, 3000);

    notifBtn.addEventListener('click', () => {
        clearInterval(timerId);
        setTimeout(function () {
            timerId = setInterval(createNotif, 3000);
        }, 10000);
    });

    notifInner.onclick = function (event) {
        if (!event.target.classList.contains('fa-xmark'))
            return;

        let notif = event.target.closest('.notif__item');
        notif.remove();

        counter--;
        notifCounter.textContent = counter;
    };

});
