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

function showScreenTurnPlayer(objectData, contTurno) {
    const { player2, player1 } = objectData;
    const colorPlayer2 = player2?.color || 'orange';
    const namePlayer2 = player2?.name || 'player2';
    console.log(player2);
    if (contTurno % 2 != 0) {
        const elementPlayer2 = document.getElementById("screen-turn-player");
        elementPlayer2.innerHTML=`${namePlayer2} es tu turno.`;
        elementPlayer2.style.color=colorPlayer2;
    } else {
       const elementPlayer1=document.getElementById("screen-turn-player");
       elementPlayer1.innerHTML=`${player1.name} es tu turno.`;
       elementPlayer1.style.color=player1.color;
    }
}
export { showScreenTurnPlayer };