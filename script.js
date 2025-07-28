let startGame=document.getElementById("StartGame");

function Taking_Grid_Input(){
    let chosen_grid_size = document.getElementById("GridSizeInput");
    let input_value = chosen_grid_size.value;
    return input_value;
}

function Taking_Mines_Input(){
    let mines_size = document.getElementById("NoOfMinesInput");
    let input_mines_size = mines_size.value;
    return input_mines_size;
}

function gridClick(block){
    console.log(block.id);
    Blocks= block.id;
    return Blocks;
}

function getRandomGridPosition() {
    const accessingUserChoice = Taking_Grid_Input();
    const randomRowNo = Math.floor(Math.random() * accessingUserChoice);
    const randomColNo = Math.floor(Math.random() * accessingUserChoice);
    return { row: randomRowNo, col: randomColNo };
}

function creatingGrid(){
    let user_input = Taking_Grid_Input();
    let Game=document.getElementById("maingame");
    for(let i=0; i<user_input; i++) {
        NewRow=document.createElement("div");
        NewRow.setAttribute('id',  'row-' + (i));
        NewRow.classList.add('grid', 'grid-cols-auto','grid-flow-col-dense', 'gap-4',   'bg-pink-300' ,  'rounded-lg', 'm-8');
   
        for(let j=0; j<user_input; j++) {
            NewCol=document.createElement("div");
            NewCol.setAttribute('id', ''+(i)+(j));
            NewCol.classList.add('grid', 'grid-rows-10', 'grid-flow-row-dense', 'gap-4',   'bg-indigo-950' ,  'rounded-lg', 'm-4');
            NewCol.onclick= gridClick(NewCol);
            NewRow.appendChild(NewCol); 
        }
        Game.appendChild(NewRow);
    }
}
  
function Postions_for_Mines(){
    let user_mines_input = Taking_Mines_Input();
    console.log(user_mines_input);
    for(let i=1; i<=user_mines_input; i++) {
        const position_i = getRandomGridPosition();
        console.log(position_i);
    }
}

startGame.addEventListener ("click" , () => {
creatingGrid()
Postions_for_Mines();
});




