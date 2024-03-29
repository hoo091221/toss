function submitbtn() {
    var font;
    var selectList = document.getElementById("select")
    if (selectList.options[selectList.selectedIndex].value == "본고딕체") {
        font = "'Noto Sans KR', 'sans serif'";
    } else if (selectList.options[selectList.selectedIndex].value == "조선궁서체") {
        font = 'ChosunGs';
    } else if (selectList.options[selectList.selectedIndex].value == "KCC-한빛체") {
        font = 'KCC-Hanbit';
    } else if (selectList.options[selectList.selectedIndex].value == "여기어때 잘난체") {
        font = 'yg-jalnan';
    }
    // this는 'form'을 의미
    var title = this.title.value
    var content = this.content.value
    var background = this.adress.value

    var url = `./read.html?fc=${escape(title)}&t=${escape(title)}&c=${escape(content)}&bg=${escape(background)}&ft=${escape(font)}`;
    return url;
}

function preview() {
    return window.open(submitbtn(), "미리보기 ", "_blank", "location=no");;
}