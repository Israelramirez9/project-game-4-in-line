import { showScreenTurnPlayer } from "../Game/screenPlayerTurn.js";

let matriz = []
let actualPositionColumn = 0;
let actualPositionRow = 0;
let ContTurno = 0;
function gameDevelopment(objectData) {
    let { column, row, player1, player2 } = objectData;
    let symbolPlayer1 = player1.color;
    /*esta operacion devuelve undefined si no existe la propiedad .name, si devuelve undefined symbolPlayer 2 toma el valor del string'player2'*/
    let symbolPlayer2 = player2?.color || 'orange';    
    let symbolPlayer = symbolPlayer1;
    showScreenTurnPlayer(objectData,ContTurno);
    for (let i = 0; i <= row; i++) {
        matriz.push([]);
        for (let j = 0; j < column; j++) {
            if (i == 0 && j == 0) {
                matriz[i].push(symbolPlayer);
            } else {
                matriz[i].push('');
            }
        }
    }
    function runMatrizandPainted() {
        for (let i = 0; i <= row; i++) {
            for (let j = 0; j < column; j++) {
                let actualElement = document.getElementById(`row-${i}-column-${j}`);
                if (matriz[i][j] == '' && i == 0) {
                    actualElement.style.backgroundColor = "black";
                } else if (matriz[i][j] == '') {
                    actualElement.style.backgroundColor = "white";
                } else if (matriz[i][j] == symbolPlayer1) {
                    actualElement.style.backgroundColor = symbolPlayer1;
                } else {
                    actualElement.style.backgroundColor = symbolPlayer2;
                }
            }
        }
    }
    function moveToRight() {
        matriz[0][actualPositionColumn] = '';
        actualPositionColumn++;
        actualPositionColumn = actualPositionColumn % column;
        matriz[0][actualPositionColumn] = symbolPlayer;
        runMatrizandPainted();
    }
    function moveToLeft() {
        matriz[0][actualPositionColumn] = '';
        if (actualPositionColumn == 0) {
            actualPositionColumn = column - 1;
        } else {

            actualPositionColumn--;
        }
        actualPositionColumn = actualPositionColumn % column;
        matriz[0][actualPositionColumn] = symbolPlayer;
        runMatrizandPainted();
    }
    function moveDown() {
        const positionId = setInterval(() => {
            if (actualPositionRow < row && matriz[actualPositionRow + 1][actualPositionColumn] == '') {
                matriz[actualPositionRow][actualPositionColumn] = '';
                actualPositionRow++;
                matriz[actualPositionRow][actualPositionColumn] = symbolPlayer;
                console.clear();
                console.table(matriz);
                runMatrizandPainted();
            } else {                
                clearInterval(positionId);
                actualPositionColumn = 0;
                actualPositionRow = 0;
                if (ContTurno % 2 == 0) {
                    symbolPlayer = symbolPlayer1;
                } else {
                    symbolPlayer = symbolPlayer2;
                }
                matriz[actualPositionRow][actualPositionColumn] = symbolPlayer;
                runMatrizandPainted();
                checkWinner();
                console.clear();
                console.table(matriz);
            }

        }, 100);
    }
    window.addEventListener('keydown', (event) => {
        if (ContTurno % 2 == 0) {
            symbolPlayer = symbolPlayer1;
        } else {
            symbolPlayer = symbolPlayer2;
        }
        if (event.code == 'ArrowRight') {

            moveToRight();
        }
        if (event.code == 'ArrowLeft') {
            moveToLeft();
        }
        if (event.code == 'Enter' || event.code == 'ArrowDown' || event.code == 'Space') {

            ContTurno++;
            moveDown();
            showScreenTurnPlayer(objectData,ContTurno);
        }
        //verificar si existe 4 en raya en la vertical




        console.clear();
        console.table(matriz);

    })
    console.table(matriz);

    function checkVertical() {
        for (let i = 1; i <= row; i++) {
            for (let j = 0; j < column; j++) {
                if (matriz[i][j] != '' && i <= row - 3) {
                    console.log("aqui");
                    if (matriz[i][j] == matriz[i + 1][j] &&
                        matriz[i][j] == matriz[i + 2][j] &&
                        matriz[i][j] == matriz[i + 3][j]) {
                        alert("has ganado");
                    }
                }
            }
        }
    }
    function checkHorizontal() {
        for (let j = 0; j < column; j++) {
            for (let i = 1; i <= row; i++) {
                if (matriz[i][j] != '' && j < column - 3) {
                    if (matriz[i][j] == matriz[i][j + 1] &&
                        matriz[i][j] == matriz[i][j + 2] &&
                        matriz[i][j] == matriz[i][j + 3]) {
                        alert("has ganado");
                    }
                }
            }
        }
    }
    function checkDiagonalMain() {
        for (let j = 0; j < column; j++) {
            for (let i = 1; i <= row; i++) {
                if (matriz[i][j] != '' && j < column - 3 && i <= row - 3) {
                    if (matriz[i][j] == matriz[i + 1][j + 1] &&
                        matriz[i][j] == matriz[i + 2][j + 2] &&
                        matriz[i][j] == matriz[i + 3][j + 3]) {
                        alert("has ganado");
                    }
                }
            }
        }
    }

    function checkDiagonalSecondary() {
        for (let j = 0; j < column; j++) {
            for (let i = 1; i <= row; i++) {
                if (matriz[i][j] != '' && j > 2 && i <= row - 3) {
                    if (matriz[i][j] == matriz[i + 1][j - 1] &&
                        matriz[i][j] == matriz[i + 2][j - 2] &&
                        matriz[i][j] == matriz[i + 3][j - 3]) {
                        alert("has ganado");
                    }
                }
            }
        }
    }
    function checkWinner() {
        checkVertical();
        checkHorizontal();
        checkDiagonalMain();
        checkDiagonalSecondary();
    }

}
export { gameDevelopment };