function bg() {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    document.body.style.backgroundImage = 'url("./img/background' + randomNumber + '.jpg' + '")';
}

bg();