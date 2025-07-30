let startGame=document.getElementById("StartGame");
let arr;
let accessingMinesPosition;
let Points = 0;
let clickedTiles = 0;
let remainedTiles;

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
function countingRemainingTiles(){
    let accessingTotalTiles = Taking_Grid_Input();
    remainedTiles = accessingTotalTiles*accessingTotalTiles;
    let accessingremainingTilesCount= document.getElementById("Remaining-Tiles");
    accessingremainingTilesCount.innerHTML=remainedTiles
    return remainedTiles;
}
function showingscore(Value){
    let scoreContainer = document.getElementById("CurrScore");
    scoreContainer.innerHTML=Value;
}
function trackingClickedTiles(val){
    let trackingContainer = document.getElementById("Tiles-Clicked");
    trackingContainer.innerHTML=val;
}
function showingRemainingTilesCount(valuess){
    let remainingContainer=document.getElementById("Remaining-Tiles");
    remainingContainer.innerHTML=valuess;
}
function gridClick(block){
    let paragh = block;
    Blocks= block.id;
    let n = accessingMinesPosition.length;
    let counter = 0;
    console.log(accessingMinesPosition);
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(Blocks==accessingMinesPosition[j]){
                counter = counter+1;
            }
        }
        if(counter==0){
            console.log("it is not a mine");
            Points = Points+10;
            showingscore(Points);
            clickedTiles= clickedTiles+1;
            trackingClickedTiles(clickedTiles);
            remainedTiles=remainedTiles-1;
            showingRemainingTilesCount(remainedTiles);
            return Points;
        }
        else{
            let message = "it is a mine" + String.fromCodePoint(0x1F4A3);
            console.log(message);
            paragh.innerText=String.fromCodePoint(0x1F4A3);
            alert("you clicked on a mine");
            return alert;
        }

    }
    
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
            NewCol.setAttribute('id',(i)+"_"+(j));
            NewCol.classList.add('grid', 'grid-rows-10', 'grid-flow-row-dense', 'gap-4',   'bg-indigo-950' ,  'rounded-lg', 'm-4');
            NewCol.setAttribute('onclick', 'gridClick(this)');
            NewRow.appendChild(NewCol); 
        }
        Game.appendChild(NewRow);
    }
}
function getRandomGridPosition() {
    const accessingUserChoice = Taking_Grid_Input();
    const randomRowNo = Math.floor(Math.random() * accessingUserChoice);
    const randomColNo = Math.floor(Math.random() * accessingUserChoice);
    let generatedRandomValue = randomRowNo+"_"+randomColNo;
    return generatedRandomValue ;
}
  function Postions_for_Mines(){
    let user_mines_input = Taking_Mines_Input();
    let position;
    let arr = [];
    for(let i=1; i<=user_mines_input; i++) {
        position = getRandomGridPosition();
        arr.push(position);
    }
    return arr;
}

startGame.addEventListener ("click" , () => {
creatingGrid()
accessingMinesPosition = Postions_for_Mines();
countingRemainingTiles();
});




