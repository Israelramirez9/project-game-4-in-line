
function addEventButtonStart(callbackStart) {
    let arrayData;
    let buttonStart = document.getElementById("button-start");
    buttonStart.addEventListener("click", () => {

        let tableHidden = document.getElementById("table-menu");
        tableHidden.style.display = "none";
        callbackStart()

        
    })
    return arrayData;
}

export { addEventButtonStart };