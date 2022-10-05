function changer() {
    let colorcode = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + colorcode;
    document.getElementById("colortxt").innerHTML = "#" + colorcode;
}