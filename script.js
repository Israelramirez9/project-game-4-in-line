import { addEventButtonStart } from "./Game_Menu/buttonStart.js";
import { addInputRadioBehaviorToButtonEvent } from "./Game_Menu/inputRadioBehavior.js";
import { usersDataColorName } from "./Game_Menu/usersdata.js";
import { desactivePlayer2 } from "./Game_Menu/desactivePlayer2.js";
import { extractData } from "./Game/extractData.js";
import { printGame } from "./Game_Menu/printTable.js";
import { gameDevelopment } from "./Game/gameStart.js";

addEventButtonStart(() => {
    printGame(extractData());     
    gameDevelopment(extractData());

    

});
addInputRadioBehaviorToButtonEvent("button.option-size-game", desactivePlayer2);
addInputRadioBehaviorToButtonEvent("button.option-game-mode", desactivePlayer2);
usersDataColorName();
