/**
 * JSDoc para tipar la data que devuelve
 * usado como se usaria con Typescript
 * @returns {{
*  row: number,
*  column: number,
*  player1: {
*      name: string,
*      color: string,
*  },
*  player2: {
*      name: string,
*      color: string,
*  } | undefined,
* }} 
*/
function extractData() {
    const objectData = {}
    document.querySelectorAll("button.option-size-game").forEach(element => {
        if (element.disabled == true) {
            const [row, column] = element.textContent.match(/[\d]+/g); //array con el tamaño de columnas[0] y filas[1]  
            objectData["column"] = column;
            objectData["row"] = row;
        }
    });
    document.querySelectorAll("button.option-game-mode").forEach(element => {
        if (element.disabled == true) {
            objectData["player1"] = {
                name: document.getElementById("input-player1").value,
                color: document.getElementById("color-player1").value                
            };            
            if (element.textContent == "Multiplayer") {
                objectData["player2"] = {
                    name: document.getElementById("input-player2").value,
                    color: document.getElementById("color-player2").value
                };                
            }
        }
    })    
    console.log(objectData);
    return objectData;
}
export { extractData };
