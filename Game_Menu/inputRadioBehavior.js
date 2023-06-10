

function addInputRadioBehaviorToButtonEvent(buttonsSelector,desactivePlayer2) {
    let cont = 0;
    let firstButtonSelected = false;
    let secondButtonSelected = false;

    document.querySelectorAll(buttonsSelector)
        .forEach((element) => {
            element.addEventListener("click", (event) => {
                if (cont == 0) {
                   
                    firstButtonSelected = element;
                    firstButtonSelected.disabled = true;
                    
                   
                    if (typeof secondButtonSelected == "object") {
                        secondButtonSelected.disabled = false;
                    }
                    cont++;
                } else {
                    secondButtonSelected = element;
                    secondButtonSelected.disabled = true;
                    firstButtonSelected.disabled = false;
                    cont = 0;
                }
                desactivePlayer2(firstButtonSelected,secondButtonSelected);
            })
        })

}

export { addInputRadioBehaviorToButtonEvent };