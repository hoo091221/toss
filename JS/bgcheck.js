function bg_check() {
    if (document.getElementById('bgimg').checked == true) {
        document.getElementById('bgimg-div').style.visibility = 'visible';
    } else {
        document.getElementById('bgimg-div').style.visibility = 'hidden';
    }
}

function bgadress() {
    document.getElementById('previewimg').src = document.getElementById('adress').value;
}