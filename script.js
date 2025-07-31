let input_value;
let input_mines_size;
let Points = 0;
let clickedTiles = 0;
let remainedTiles;
let arr = [];
let tilesArr = [];
let holderForRow;
let holderForCol;
let tilesMark;
let NoToBeShown=0;
let startGame=document.getElementById("StartGame");
startGame.addEventListener ("click" , () => {
    Taking_Grid_Input();
    Taking_Mines_Input(); 
    countingRemainingTiles();
});
function Taking_Grid_Input(){
    let chosen_grid_size = document.getElementById("GridSizeInput");
    input_value = chosen_grid_size.value;
    creatingGrid();
    return input_value;
}
function Taking_Mines_Input(){
    let mines_size = document.getElementById("NoOfMinesInput");
    input_mines_size = mines_size.value;
    Postions_for_Mines();
    return input_mines_size;
}
function countingRemainingTiles(){
    remainedTiles = input_value*input_value;
    let accessingremainingTilesCount= document.getElementById("Remaining-Tiles");
    accessingremainingTilesCount.innerHTML=remainedTiles;
    return remainedTiles;
}
function creatingGrid(){
    let Game=document.getElementById("maingame");
    for(let i=0; i<input_value; i++) {
        NewRow=document.createElement("div");
        NewRow.setAttribute('id',  'row-' + (i));
        NewRow.classList.add('grid', 'grid-cols-auto','grid-flow-col-dense', 'gap-4',   'bg-pink-300' ,  'rounded-lg', 'm-8');
   
        for(let j=0; j<input_value; j++) {
            NewCol=document.createElement("div");
            NewCol.setAttribute('id',(i)+"_"+(j));
            NewCol.classList.add('grid', 'grid-rows-10', 'grid-flow-row-dense', 'gap-4',   'bg-indigo-950' ,  'rounded-lg', 'm-4');
            NewCol.setAttribute('onclick', 'gridClick(this)');
            NewRow.appendChild(NewCol); 
        }
        Game.appendChild(NewRow);
    }
}
function Postions_for_Mines(){
    let position;
    for(let i=1; i<=input_mines_size; i++) {
        position = getRandomGridPosition();
        arr.push(position);
    }
    console.log(arr);
    return arr;
}
function getRandomGridPosition() {
    const randomRowNo = Math.floor(Math.random() * input_value);
    const randomColNo = Math.floor(Math.random() * input_value);
    neighbouringMinesCount(randomRowNo,randomColNo)
    let generatedRandomValue = randomRowNo+"_"+randomColNo;
    return generatedRandomValue ;
}
function neighbouringMinesCount(r, c){
    for(let i=r-1; i<=r+1; i++){
        holderForRow=i;
        for(let j=c-1; j<=c+1; j++){
            holderForCol=j;
            tilesMark = i+"_"+j;
            tilesArr.push(tilesMark);
        }
    }
    console.log(tilesArr);
}
function gridClick(block){
    let paragh = block;
    Blocks= block.id;
    let n = arr.length;
    let m = tilesArr.length;
    let counter = 0;
    console.log(arr);
    for(let i=0; i<m; i++){
        if(Blocks==tilesArr[i]){
            NoToBeShown=NoToBeShown+1;
        }
    }
    if(NoToBeShown!=0){
        paragh.innerText=NoToBeShown;
        NoToBeShown=0;
        console.log(NoToBeShown);
    }
    for(let j=0; j<n; j++){
        if(Blocks==arr[j]){
          counter = counter+1;
        }
    }
    if(counter==0){
        if(counter==0 && remainedTiles!=n+1){
            paragh.classList.add('bg-green-600');
            console.log("it is not a mine");
            Points = Points+10;
            clickedTiles= clickedTiles+1;
            remainedTiles=remainedTiles-1;
            showingscore(Points);
            trackingClickedTiles(clickedTiles);
            showingRemainingTilesCount(remainedTiles);
        }
        else{
            paragh.classList.add('bg-green-600');
            console.log("you won");
            Points = Points+10;
            alert("You Won!\nTotal score = "+ Points);
            endingGame();
        }
    }
    else{
        paragh.classList.add('bg-red-700');
        console.log("it is a mine");
        paragh.innerText=String.fromCodePoint(0x1F4A3);
        alert("Game Over!\nYou clicked on a mine.\nTotal score = "+ Points);
        endingGame();
    }
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
function endingGame(){
    let resetingGridInputValue = document.getElementById("GridSizeInput");
    resetingGridInputValue.value=0;
    let resetingMinesInputValue = document.getElementById("NoOfMinesInput");
    resetingMinesInputValue.value=0;
    Points = 0;
    clickedTiles = 0;
    remainedTiles=0;
    showingscore(Points);
    trackingClickedTiles(clickedTiles);
    showingRemainingTilesCount(remainedTiles);
    let removingGrid=document.getElementById("maingame");
    removingGrid.remove();
}

  





