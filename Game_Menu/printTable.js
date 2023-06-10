/**
 * JSDoc para tipar los parametros de la funcion
 * usado como se usaria con Typescript
 * @param {{
 *  row: number,
 *  column: number,
 *  player1: {
 *      name: string,
 *      color: string,
 *  },
 *  player2?: {
 *      name: string,
 *      color: string,
 *  } | undefined,
 * }} objectData 
 */
function printGame(objectData) {
    const { column, row, player1 } = objectData;

    const objectTable = document.getElementById("table-game");
    objectTable.style.display = "table";
    const objectScreenTurn=document.getElementById("screen-turn");
    objectScreenTurn.style.display="block";  
    const objectScreenTurnPlayer1=document.getElementById("screen-turn-player");    
    objectScreenTurnPlayer1.innerHTML=`${player1.name} tu Turno`; 
    objectScreenTurnPlayer1.style.color=player1.color;
    printRows("table-game", row);
    for (let i = 0; i <= row; i++) {
        for (let j = 0; j < column; j++) {
            printElementColumn(i, j,player1);
        }
    }
}
function printRows(tableID, row) {
    const table = document.querySelector(`#${tableID} tbody`); //selecciona el elemento con la etiqueta tbody
    for (let i = 0; i <= row; i++) {
        table.innerHTML += `<tr id="row-${i}" class="row"></tr> `
    }
}
function printElementColumn(rowID, columnID,player1) {
    const rowElement = document.getElementById(`row-${rowID}`);
    if (rowID == 0 && columnID == 0) {
        rowElement.innerHTML += `<td id="row-0-column-${columnID}" style="background: ${player1.color}"></td>`;
    } else if (rowID == 0) {
        rowElement.innerHTML += `<td id="row-0-column-${columnID}" style="background: black"></td>`;
    } else {
        rowElement.innerHTML += `<td id="row-${rowID}-column-${columnID}"></td>`;
    }
}
export { printGame };