
var _paly = document.getElementById('play')

_paly.addEventListener('click',playGame)
_clear = document.getElementById('clr')
_clear.addEventListener('click',screenClear)


function playGame()
{
    var done = false;
    var state = 1;
    var point;
    while(!done)
    {
        switch(state) {
                    case 1:
                      var roll = rollDice();
                      var sum = roll[0] + roll[1];
                         obj = document.getElementById('out')
                         elemen_ = document.createElement('h4')
                         elemen_.appendChild(document.createTextNode(roll[0] + ", " + roll[1] ))
                         obj.appendChild(elemen_)
                      if(sum == 7|| sum == 11){
                        state = 2;
                      } else {
                        point = sum;
                        state = 3;
                      }
                      break;
                    case 2:
                      obj = document.getElementById('out')
                      elemen_ = document.createElement('h4')
                      elemen_.appendChild(document.createTextNode(roll[0] + ", " + roll[1] +': You win!'))
                      obj.appendChild(elemen_)
                      done = true;
                      break;
                    case 3:
                       var roll = rollDice();
                      var sum = roll[0] + roll[1];
                    obj = document.getElementById('out')
                    elemen_ = document.createElement('h4')
                    elemen_.appendChild(document.createTextNode(roll[0] + ", " + roll[1]+" :cnt" ))
                    obj.appendChild(elemen_)
                      if (sum == point) {
                        state = 2;
                      } else if (sum == 7) {
                        state = 4;
                      } else {
                        state = 3;
                      }
                      break;
                    case 4:
                      obj = document.getElementById('out')
                      elemen_ = document.createElement('h4')
                      elemen_.appendChild(document.createTextNode(roll[0] + ", " + roll[1] +': You are a loser. '))
                      obj.appendChild(elemen_)
                      done = true;
                      break;
                    
                    default:
    }
}


}
function rollDice(){
    var die1 = Math.floor(Math.random() * 6) +1;
    var die2 = Math.floor(Math.random() * 6) +1;
    return[die1, die2];
  }
  
function screenClear()
{
    obj = document.getElementById('out')
    obj.innerHTML = ""
}