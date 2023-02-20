var _table = document.getElementsByClassName("tbl");
var game_table = ['0','1','2','3','4','5','6','7','8']
let marker = 'O'
var game_status = 0

var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var b4 = document.getElementById("b4")
var b5 = document.getElementById("b5")
var b6 = document.getElementById("b6")
var b7 = document.getElementById("b7")
var b8 = document.getElementById("b8")
var b9 = document.getElementById("b9")
var resetbtn = document.getElementById("rst")

b1.addEventListener('click',b_1);
b2.addEventListener('click',b_2);
b3.addEventListener('click',b_3);
b4.addEventListener('click',b_4);
b5.addEventListener('click',b_5);
b6.addEventListener('click',b_6);
b7.addEventListener('click',b_7);
b8.addEventListener('click',b_8);
b9.addEventListener('click',b_9);
resetbtn.addEventListener('click',resetGame)


function b_1(e)
{

    flg = 0
    if(game_status==0){
    bn = document.getElementById('b1')
    if(bn.textContent==""){

    // -------------
    if(marker === 'X')
    {
        marker = 'O'
    }
    else
    {
        marker = 'X'
    }

    console.log('....')
    bn.innerHTML = marker
    game_table[0] = marker
    
    if(check_position(marker))
    {
        // alert(marker+' win....')
        game_status = 1
        document.getElementById('won_state').textContent = marker+": win the game"
        document.getElementById('btn').style.display = "block"
        flg = 1
    }
  
    }
    else{

        alert('alredy marked')
    }
    }
    else
    {
        alert('press reset for play again')
    }
    if(!flg){
        if(draw_check())
        {
            // alert("game is tie")
            // resetGame()

        document.getElementById('won_state').textContent = ": game is tie"
        document.getElementById('btn').style.display = "block"
            
        }
    }
}

function b_2(e)
{

    
    flg = 0
    if(game_status===0){
    bn = document.getElementById('b2')
    if(bn.textContent==""){

    // ------
    if(marker === 'X')
        {
            marker = 'O'
        }
    else
        {
            marker = 'X'
        }

    console.log('....')
    bn.innerHTML = marker
    game_table[1] = marker
    if(check_position(marker))
    {
        // alert(marker+'win....')
        game_status = 1

        document.getElementById('won_state').textContent = marker+": win the game"
        document.getElementById('btn').style.display = "block"
        flg = 1

    }
 
    }
    else{

        alert('alredy marked')
    }
    }
    else
    {
        alert('press reset for play again')
    }
    if(!flg){
    if(draw_check())
    {
        // alert("game is tie")
        // resetGame()

        document.getElementById('won_state').textContent = ": game is tie"
        document.getElementById('btn').style.display = "block"
        
    }}
}

function b_3(e)
{
    flg = 0
    if(game_status===0){
    bn = document.getElementById('b3')
    if(bn.textContent==""){
    // ------
    if(marker === 'X')
        {
            marker = 'O'
        }
    else
        {
            marker = 'X'
        }


    console.log('....')
    bn.innerHTML = marker
    game_table[2] = marker
    if(check_position(marker))
    {
        // alert(marker+' win....')
        game_status = 1
        document.getElementById('won_state').textContent = marker+": win the game"
        document.getElementById('btn').style.display = "block"
        flg = 0
    }
 
    }
    else{

        alert('alredy marked')
    }
    }
    else
    {
        alert('press reset for play again')
    }
    if(!flg){
    if(draw_check())
    {
        // alert("game is tie")
        // resetGame()

        document.getElementById('won_state').textContent = ": game is tie"
        document.getElementById('btn').style.display = "block"
        
    }
}
    
}

function b_4(e)
{
    
    flg = 0
    if(game_status===0){
    bn = document.getElementById('b4')
    if(bn.textContent==""){

    // ------
    if(marker === 'X')
        {
            marker = 'O'
        }
    else
        {
            marker = 'X'
        }

    console.log('....')
    bn.innerHTML = marker
    game_table[3] = marker
    if(check_position(marker))
    {
        // alert(marker+'win....')
        game_status = 1
        document.getElementById('won_state').textContent = marker+": win the game"
        document.getElementById('btn').style.display = "block"
        flg = 1
    }

    }
    else{

        alert('alredy marked')
    }
    }
    else
    {
        alert('press reset for play again')
    }
    if(!flg)
    {if(draw_check())
    {
        // alert("game is tie")
        // resetGame()

        document.getElementById('won_state').textContent = ": game is tie"
        document.getElementById('btn').style.display = "block"
        
    }}
}

function b_5(e)
{
    
    flg = 0
    if(game_status===0){
    bn = document.getElementById('b5')
    if(bn.textContent==""){

        // ------
    if(marker === 'X')
    {
        marker = 'O'
    }
else
    {
        marker = 'X'
    }

    console.log('....')
    bn.innerHTML = marker
    game_table[4] = marker
    if(check_position(marker))
    {
        // alert(marker+'win....')
        game_status = 1
        document.getElementById('won_state').textContent = marker+": win the game"
        document.getElementById('btn').style.display = "block"
        flg = 1
    }
  
    }
    else{

        alert('alredy marked')
    }
    }   
    else
    {
        alert('press reset for play again')
    }
    if(!flg){
    if(draw_check())
    {
        // alert("game is tie")
        // resetGame()

        document.getElementById('won_state').textContent = ": game is tie"
        document.getElementById('btn').style.display = "block"
        
    }}
}

function b_6(e)
{
    
    flg = 0
    if(game_status===0){
    bn = document.getElementById('b6')
    if(bn.textContent==""){
    // ------
    if(marker === 'X')
    {
        marker = 'O'
    }
    else
    {
        marker = 'X'
    }

    console.log('....')
    bn.innerHTML = marker
    game_table[5] = marker
    if(check_position(marker))
    {
        // alert(marker+'win....')
        game_status = 1
        document.getElementById('won_state').textContent = marker+": win the game"
        document.getElementById('btn').style.display = "block"
        flg = 1
    }

    }
    else{

        alert('alredy marked')
    }
    }
    else
    {
        alert('press reset for play again')
    }
    if(!flg){
    if(draw_check())
    {
        // alert("game is tie")
        // resetGame()

        document.getElementById('won_state').textContent = ": game is tie"
        document.getElementById('btn').style.display = "block"
        
    }}
}

function b_7(e)
{

    
    flg = 0
    if(game_status===0){
    bn = document.getElementById('b7')
    if(bn.textContent==""){

        // ------
    if(marker === 'X')
    {
        marker = 'O'
    }
    else
    {
        marker = 'X'
    }

    console.log('....')
    bn.innerHTML = marker
    game_table[6] = marker
    if(check_position(marker))
    {
        // alert(marker+'win....')
        game_status = 1
        document.getElementById('won_state').textContent = marker+": win the game"
        document.getElementById('btn').style.display = "block"
        flg = 1
    }


    }
    else{

        alert('alredy marked')
    }
    }
    else
    {
        alert('press reset for play again')
    }
    if(!flg){
    if(draw_check())
    {
        // alert("game is tie")
        // resetGame()

        document.getElementById('won_state').textContent = ": game is tie"
        document.getElementById('btn').style.display = "block"
        
    }}
}

function b_8(e)
{
    
    flg = 0
    if(game_status===0){
    bn = document.getElementById('b8')
    if(bn.textContent==""){

        // ------
    if(marker === 'X')
    {
        marker = 'O'
    }
    else
    {
        marker = 'X'
    }

    console.log('....')
    bn.innerHTML = marker
    game_table[7] = marker
    if(check_position(marker))
    {
        // alert(marker+'win....')
        game_status = 1
        document.getElementById('won_state').textContent = marker+": win the game"
        document.getElementById('btn').style.display = "block"
        flg = 1
    }

 
    }
    else{

        alert('alredy marked')
    }
    }
    else
    {
        alert('press reset for play again')
    }
    if(!flg){
    if(draw_check())
    {
        // alert("game is tie")
        // resetGame()

        document.getElementById('won_state').textContent = ": game is tie"
        document.getElementById('btn').style.display = "block"
        
    }}
}

function b_9(e)
{
    
    flg = 0
    if(game_status===0){
    bn = document.getElementById('b9')
    if(bn.textContent==""){

        // ------
    if(marker === 'X')
    {
        marker = 'O'
    }
else
    {
        marker = 'X'
    }

    console.log('....')
    bn.innerHTML = marker
    game_table[8] = marker
    if(check_position(marker))
    {
        // alert(marker+'win....')
        game_status = 1
        document.getElementById('won_state').textContent = marker+": win the game"
        document.getElementById('btn').style.display = "block"
        flg = 1
    }
  
    }
    else{

        alert('alredy marked')
    }
    }
    else
    {
        alert('press reset for play again')
    }
    if(!flg){
    if(draw_check())
    {
        // alert("game is tie")
        document.getElementById('won_state').textContent = ": game is tie"
        document.getElementById('btn').style.display = "block"
        // resetGame()
        
    }}

}



function check_position(m)
{
    console.log('in checking')
    // row checks
    if(game_table[0]==m && game_table[1]==m && game_table[2]==m)
    {
        return 1
    }
    else if(game_table[3]==m && game_table[4]==m && game_table[5]==m)
    {
        return 1
    }
    else if(game_table[6]==m && game_table[7]==m && game_table[8]==m)
    {
        return 1
    }
    // diagonal checks
    else if(game_table[0]==m && game_table[4]==m && game_table[8]==m)
    {
        return 1
    }
    else if(game_table[2]==m && game_table[4]==m && game_table[6]==m)
    {
        return 1
    }
    // columns check
    else if(game_table[0]==m && game_table[3]==m && game_table[6]==m)
    {
        return 1
    }

    else if(game_table[1]==m && game_table[4]==m && game_table[7]==m)
    {
        return 1
    }

    else if(game_table[2]==m && game_table[5]==m && game_table[8]==m)
    {
        return 1
    }
    else
    {
        return 0
    }

}

function resetGame()
{
    game_status = 0
    b1.innerHTML = ""
    b2.innerHTML = ""
    b3.innerHTML = ""
    b4.innerHTML = ""
    b5.innerHTML = ""
    b6.innerHTML = ""
    b7.innerHTML = ""
    b8.innerHTML = ""
    b9.innerHTML = ""
    document.getElementById('won_state').textContent = ""
    document.getElementById('btn').style.display = "none"
    game_table = ['0','1','2','3','4','5','6','7','8']
    marker = 'X'

}

function draw_check()
{
    let tmp =1;
    for(let i =0; i<9; i++)
    {
        if(i == game_table[i])
        {
            tmp = 0
        }
        console.log(game_table[i])
    }
    // if(marker ==='X')
    // {
    //     marker = 'O'
    // }
    // else
    // {
    //     marker = 
    // }
    return tmp;
}