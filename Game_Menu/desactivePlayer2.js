function desactivePlayer2(button1, button2) {
    let inputPlayer2 = document.getElementById("input-player2");
    let selectPlayer2 = document.getElementById("color-player2");
    if (button1.textContent == "Singleplayer" && button1.disabled == true || button2.textContent == "SinglePlayer" && button2.disabled == true) {
        inputPlayer2.disabled = true;
        selectPlayer2.disabled = true;
    } else {
        inputPlayer2.disabled = false;
        selectPlayer2.disabled = false;
    }
}
export { desactivePlayer2 };
