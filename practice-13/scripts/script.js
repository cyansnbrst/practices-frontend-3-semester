document.addEventListener('DOMContentLoaded', () => {
    let clickPicture = document.querySelectorAll('img');
    let changePicture = document.querySelector('.big-image');
    clickPicture.forEach(element => {
        element.addEventListener('click', event => {
            let pictureLink = element.getAttribute('src');
            console.log(pictureLink);
            changePicture.style.backgroundImage = 'url(\'' + pictureLink + '\')';
        })
    })
})