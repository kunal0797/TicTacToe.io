let turn = 0;
let arr = new Array(3);
arr[0] = new Array(3);
arr[1] = new Array(3);
arr[2] = new Array(3);
let row;
let col;
let curr_player = "X";
let win = false;

const statusDisplay = document.querySelector('.game-status');

function winningMessage(current)
{
    let msg = `${current} Player Won`;
    statusDisplay.innerHTML ="<i>"+msg+"</i>";
}

function drawMessage()
{
    statusDisplay.innerHTML = "<i>Match Draw</i>";
}


//turn
function player(id)
{
    // console.log(id);
    if(win == false)
    {
        row = parseInt(id.substr(0,1));
        col = parseInt(id.substr(1,1));
        if(turn%2==0)
        {
            // console.log('Row -> '+row+' Col -> '+col);
            if(arr[row][col] == null)
            {
                document.getElementById(id).innerHTML='X';
                turn++;
                arr[row][col] = 'X';
                winning(turn);
                // console.log(arr[row][col]);
            }
            // console.log(turn);
        }    
        else
        {
            if(arr[row][col] == null)
            {
                document.getElementById(id).innerHTML='O';
                turn++;
                arr[row][col] = 'O';
                winning(turn);  
                // console.log(arr[row][col]);
            }
            // console.log(turn);
            
        }
    }
    
        
   
}


function winning(bazi)
{
    if(bazi <= 9)
    {
        for(let i=0;i<3;i++)
        {
            if((arr[i][0] != null) && (arr[i][0] == arr[i][1]) && (arr[i][1] == arr[i][2]))
            {
                win = true;
                curr_player = arr[i][0];
                console.log(curr_player);
                winningMessage(curr_player);
            }
            if((arr[0][i] != null) && (arr[0][i]) == arr[1][i] && (arr[1][i] == arr[2][i]))
            {
                win = true;
                curr_player = arr[0][i];
                winningMessage(curr_player);
                
            }
        }
        
        if((arr[0][0] != null) && (arr[0][0] == arr[1][1]) && (arr[1][1] == arr[2][2]))
        {
            win = true;
            curr_player = arr[0][0];
            winningMessage(curr_player);
        }

        if((arr[0][2] != null) && (arr[0][2]) == arr[1][1] && (arr[1][1] == arr[2][0]))
        {
            win = true;
            curr_player = arr[0][2];
            winningMessage(curr_player);
            
        }
        if(bazi == 9 && win==false)
        {
            drawMessage();
        }

    }
    
    
}


//ClearALL
function Restart()
{
    win = false;
    turn =0;
    statusDisplay.innerHTML = " ";
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            arr[i][j]=null;
        }
    }
    document.getElementById('00').innerHTML = ' ';
    document.getElementById('01').innerHTML = ' ';
    document.getElementById('02').innerHTML = ' ';
    document.getElementById('10').innerHTML = ' ';
    document.getElementById('11').innerHTML = ' ';
    document.getElementById('12').innerHTML = ' ';
    document.getElementById('20').innerHTML = ' ';
    document.getElementById('21').innerHTML = ' ';
    document.getElementById('22').innerHTML = ' ';
}