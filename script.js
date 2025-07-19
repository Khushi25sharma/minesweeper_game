let startGame=document.getElementById("StartGame");

function creatingGrid(){
    let chosen_grid_size = document.getElementById("GridSizeInput");
    let input_value = chosen_grid_size.value;
    console.log(input_value);
    let Game=document.getElementById("maingame");

    for(let i=0; i<input_value; i++)
    {
        NewRow=document.createElement("div");
        NewRow.Id= "row-"+(i+1);
        NewRow.classList.add('grid', 'grid-cols-auto','grid-flow-col-dense', 'gap-4',   'bg-pink-300' , 'hover:bg-amber-200', 'rounded-lg', 'm-8');
   
        for(let j=0; j<input_value; j++)
        {
            NewCol=document.createElement("div");
            NewCol.Id= "grid-"+(i+1)+"_"+(j+1);
            NewCol.classList.add('grid', 'grid-rows-10', 'grid-flow-row-dense', 'gap-4',   'bg-indigo-950' , 'hover:bg-pink-900', 'rounded-lg', 'm-4');
            NewRow.appendChild(NewCol);
        }
        Game.appendChild(NewRow);
    }
}

startGame.addEventListener ("click" , () => {
   creatingGrid();
});