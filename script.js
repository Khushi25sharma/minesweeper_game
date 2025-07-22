let startGame=document.getElementById("StartGame");
function creatingGrid(){
    let chosen_grid_size = document.getElementById("GridSizeInput");
    let input_value = chosen_grid_size.value;
    // console.log(input_value);
    let Game=document.getElementById("maingame");

        for(let i=0; i<input_value; i++)
        {
            NewRow=document.createElement("div");
            NewRow.setAttribute('id',  'row-' + (i));
            NewRow.classList.add('grid', 'grid-cols-auto','grid-flow-col-dense', 'gap-4',   'bg-pink-300' , 'hover:bg-amber-200', 'rounded-lg', 'm-8');
   
            for(let j=0; j<input_value; j++)
            {
                NewCol=document.createElement("div");
                NewCol.setAttribute('id', 'grid-'+(i)+(j));
                NewCol.classList.add('grid', 'grid-rows-10', 'grid-flow-row-dense', 'gap-4',   'bg-indigo-950' , 'hover:bg-pink-900', 'rounded-lg', 'm-4');
                NewRow.appendChild(NewCol);
            }

            Game.appendChild(NewRow);
        }

    // function mines_image{
    // let imageset= document.createElement("img");
    // imageset.src= "mines.jpg";
    // imageset.alt = 'Description of the image';
    // imageset.setAttribute('id', 'newDivId');
    // imageset.width = 200;
    // imageset.height = 150;
    // }


    function getRandomGridPosition(input_value , input_value ) {
        const randomRowNo = Math.floor(Math.random() * input_value);
        const randomColNo = Math.floor(Math.random() * input_value);
        return { row: randomRowNo, col: randomColNo };
    }
    
    
    function Postions_for_Mines(){
    
        let mines_size = document.getElementById("NoOfMinesInput");
        let input_mines_size = mines_size.value;
        
        for(let i=1; i<=input_mines_size; i++)
        {
            const position_i = getRandomGridPosition(input_value, input_value);
            console.log(position_i);
            // newarray.push(position_i);
            // console.log(newarray);
        }
    
    }
    Postions_for_Mines();
}


startGame.addEventListener ("click" , () => {
    creatingGrid();
 });
