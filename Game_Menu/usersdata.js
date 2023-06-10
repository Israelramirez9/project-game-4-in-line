function usersDataColorName() {
    let inputPlayer1 = document.getElementById("input-player1");
    let inputPlayer2 = document.getElementById("input-player2");
    inputPlayer1.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            let namePlayer1 = inputPlayer1.value;
            console.log(namePlayer1);
            inputPlayer1.disabled = true;
        }
    });
    inputPlayer2.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
            let namePlayer2 = inputPlayer2.value;
            console.log(namePlayer2);
            inputPlayer2.disabled = true;
        }
    });
    let selectColorPlayer1 = document.getElementById("color-player1");
        selectColorPlayer1.addEventListener('change', () => {
            let colorPlayer1 = selectColorPlayer1.value;           
            selectColorPlayer1.disabled=true;
        });
    let selectColorPlayer2 = document.getElementById("color-player2");
        selectColorPlayer2.addEventListener("change", () => {
            let colorPlayer2=selectColorPlayer2.value;            
            selectColorPlayer2.disabled=true;
        });
        

}

export { usersDataColorName };