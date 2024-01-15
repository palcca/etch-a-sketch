let canvas = 1;

function makeGrid(size){
    canvas = document.querySelector("#canvas");
    for (x=1;x<=size;x++) {
        const gridLine = document.createElement("div");
        gridLine.setAttribute("class","gridLine");
        canvas.appendChild(gridLine);
        for (y=1; y<=size; y++){
            const gridColumn=document.createElement("div");
            const paddingSize = (960/size/2);
            gridColumn.style = "padding: " + paddingSize + "px";
            gridColumn.setAttribute("class","gridColumn");
            gridColumn.addEventListener("mouseover", () =>{
                gridColumn.style.backgroundColor = "black";
            });
            gridLine.appendChild(gridColumn);
        }        
    }
}
const btnSize = document.querySelector("#btnSize");

btnSize.addEventListener("click", () => {
    if (canvas!=1){
        while(canvas.firstChild){
            canvas.removeChild(canvas.firstChild);
        }
    }
    let gridSize=prompt("Canvas grid size:", "MAX 100");
    while (gridSize>100){
        alert("That's too big for me!")
        gridSize=prompt("Canvas grid size:", "MAX 100");
    }
    makeGrid(gridSize);
})

