"use strict";


document.addEventListener('DOMContentLoaded', () => {

    // 1 задание Shop cart

    const shopCart = document.querySelector('.shop__cart');
    const shopCartDelete = shopCart.querySelector('.shop__cart-delete');
    const shopCartChange = shopCart.querySelector('.shop__cart-change');
    const shopCartSortUp = shopCart.querySelector('.shop__cart-sort-up');
    const shopCartSortDown = shopCart.querySelector('.shop__cart-sort-down');
    const shopCartInner = shopCart.querySelector('.shop__cart-inner');
    const shopProducts = [
        'Workbook1',
        'Student book',
        'Workbook2',
        'Spanish dictionary',
        'German dictionary',
        'Memory cards',
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    shopCartChange.addEventListener('click', () => {
        shopProducts[getRandomInt(shopProducts.length)] = shopProducts[getRandomInt(shopProducts.length)];
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt];
            cnt += 1;
        });
    });

    shopCartDelete.addEventListener('click', () => {
        if (shopProducts.length !== 0) {
            shopProducts.splice(0, 1);
            shopCart.querySelector('.shop__cart-item').remove();
        }
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt];
            cnt += 1;
        });
    });

    // ------------------------------------------------------

    const arr = [10, 15, 1, 5, 8, 11, 13, 20, 45, 32, 25, 7];

    function filterArray(arr, a, b) {
        let newArr = [];

        arr.forEach(item => {
            if (item >= a && item <= b) {
                newArr.push(item);
            }
        });

        return newArr;
    }

    console.log(filterArray(arr, 4, 20));
    console.log(filterArray(arr, 13, 40));
    console.log(filterArray(arr, 46, 50));

    // ------------------------------------------------------

    shopCartSortUp.addEventListener('click', () => {
        shopProducts.sort();
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt];
            cnt += 1;
        });
    });

    shopCartSortDown.addEventListener('click', () => {
        shopProducts.sort();
        shopProducts.reverse();
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt = 0;
        elements.forEach(el => {
            el.textContent = shopProducts[cnt];
            cnt++;
        });
    });

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
        notifCounter.textContent = counter;
    }

    let timerId = setInterval(createNotif, 3000);

    notifBtn.addEventListener('click', () => {
        clearInterval(timerId);
        setTimeout(function () {
            timerId = setInterval(createNotif, 3000);
        }, 10000);
    });
});
