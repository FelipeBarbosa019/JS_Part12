/* Function that calculates a factorial */
function factorial (x){
    let y=1
    for (let i = 1; i <= x; i++) {
        y = y * i
    }
    return y
}

/* Function that calculates the Euler number considering 1000 interactions*/
let resultEuler = euler (1000)
console.log(resultEuler)

function euler (x){
    let y = 1
    for (let i = 1; i <= x; i++) {
        y = y + (1/(factorial(i)))
    }
    return y
}

/* Function that finds prime numbers between 0 and 100,000 */
let resultPrime = [];
console.log(`The prime numbers between 0 and 100,000 are:`)
console.log(resultPrime)

for(i=2; i<100; i++){
    if (prime(i) == true){
        resultPrime.push(i)
    }
}

function prime(num){
    for (j = 2; j < num; j++) {
        if (num % j == 0){
            return false;  
        } 
    }
    return true;
}


/* Function that calculates the value of the PI number, 
using the Nilakantha series, with a precision of 100 places after the decimal point. */
let resultPi = pi();
console.log(resultPi)

function pi() {
    let x=3
    let y;
    let j=2;
    for(i=2; i<100000; i = i + 2){
        y = ( 4 / ( i*(i+1)*(i+2) ) )
        x = x + y*Math.pow(-1, j)
        j++
        console.log(x.toFixed(100))
    }
    return x
}

// Certo: 
// 3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679

// Meu resultado: 
// 3.1415926535 8978911919 5074817980 6396365165 7104492187 5000000000 0000000000 0000000000 0000000000 0000000000

// Obs: Não consegui chegar em um resultado mais preciso usando a série solicitada


// Jogo de cartas:
let play = document.querySelector ("#play")
let cont=1;
let cards = [
    '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠',
    '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
    '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
    '2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣'
    ]

    handNumber = []
    handSuit = []

play.addEventListener ("click", shuffle)


function shuffle(){
    let  randomNumber = parseInt(getRandomArbitrary (0, cards.length))
    let drawCards = cards.splice(randomNumber, 1)
    showCards(drawCards);
    console.log(drawCards)
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function showCards(x){
    if(cont<=5){
        let show = document.querySelector ("#card" + cont)
        console.log(show)

        // SPADES:
        if(x=="A♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/ace_of_spades.png")
            cont++;
            shuffle;
            handNumber.push(1)
            handSuit.push("♠")
        }
        else if(x=="2♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/2_of_spades.png")
            cont++;
            handNumber.push(2)
            handSuit.push("♠")
            shuffle;
        }
        else if(x=="3♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/3_of_spades.png")
            cont++;
            handNumber.push(3)
            handSuit.push("♠")
            shuffle;
        }
        else if(x=="4♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/4_of_spades.png")
            cont++;
            handNumber.push(4)
            handSuit.push("♠")
            shuffle;
        }
        else if(x=="5♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/5_of_spades.png")
            cont++;
            handNumber.push(5)
            handSuit.push("♠")
            shuffle;
        }
        else if(x=="6♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/6_of_spades.png")
            cont++;
            handNumber.push(6)
            handSuit.push("♠")
            shuffle;
        }
        else if(x=="7♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/7_of_spades.png")
            cont++;
            shuffle;
            handNumber.push(7)
            handSuit.push("♠")
        }
        else if(x=="8♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/8_of_spades.png")
            cont++;
            handNumber.push("8")
            handSuit.push("♠")
            shuffle;
        }
        else if(x=="9♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/9_of_spades.png")
            cont++;
            handNumber.push(8)
            handSuit.push("♠")
            shuffle;
        }
        else if(x=="10♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/10_of_spades.png")
            cont++;
            handNumber.push(10)
            handSuit.push("♠")
            shuffle;
        }
        else if(x=="J♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/jack_of_spades2.png")
            cont++;
            handNumber.push(11)
            handSuit.push("♠")
            shuffle;
        }
        else if(x=="Q♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/queen_of_spades2.png")
            cont++;
            handNumber.push(12)
            handSuit.push("♠")
            shuffle;
        }
        else if(x=="K♠"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/king_of_spades2.png")
            cont++;
            handNumber.push(13)
            handSuit.push("♠")
            shuffle;
        }

        // CLUBS
        if(x=="A♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/ace_of_clubs.png")
            cont++;
            handNumber.push(1)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="2♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/2_of_clubs.png")
            cont++;
            handNumber.push(2)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="3♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/3_of_clubs.png")
            cont++;
            handNumber.push(3)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="4♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/4_of_clubs.png")
            cont++;
            handNumber.push(4)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="5♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/5_of_clubs.png")
            cont++;
            handNumber.push(5)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="6♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/6_of_clubs.png")
            cont++;
            handNumber.push(6)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="7♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/7_of_clubs.png")
            cont++;
            handNumber.push(7)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="8♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/8_of_clubs.png")
            cont++;
            handNumber.push(8)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="9♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/9_of_clubs.png")
            cont++;
            handNumber.push(9)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="10♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/10_of_clubs.png")
            cont++;
            handNumber.push(10)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="J♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/jack_of_clubs2.png")
            cont++;
            handNumber.push(11)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="Q♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/queen_of_clubs2.png")
            cont++;
            handNumber.push(12)
            handSuit.push("♣")
            shuffle;
        }
        else if(x=="K♣"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/king_of_clubs2.png")
            cont++;
            handNumber.push(13)
            handSuit.push("♣")
            shuffle;
        }

        // HEARTS
        if(x=="A♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/ace_of_hearts.png")
            cont++;
            handNumber.push(1)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="2♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/2_of_hearts.png")
            cont++;
            handNumber.push(2)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="3♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/3_of_hearts.png")
            cont++;
            handNumber.push(3)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="4♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/4_of_hearts.png")
            cont++;
            handNumber.push(4)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="5♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/5_of_hearts.png")
            cont++;
            handNumber.push(5)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="6♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/6_of_hearts.png")
            cont++;
            handNumber.push(6)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="7♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/7_of_hearts.png")
            cont++;
            handNumber.push(7)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="8♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/8_of_hearts.png")
            cont++;
            handNumber.push(8)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="9♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/9_of_hearts.png")
            cont++;
            handNumber.push(9)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="10♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/10_of_hearts.png")
            cont++;
            handNumber.push(10)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="J♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/jack_of_hearts2.png")
            cont++;
            handNumber.push(11)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="Q♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/queen_of_hearts2.png")
            cont++;
            handNumber.push(12)
            handSuit.push("♥")
            shuffle;
        }
        else if(x=="K♥"){
            show.style.display = 'block'
            show.setAttribute ('src',"./assets/king_of_hearts2.png")
            cont++;
            handNumber.push(13)
            handSuit.push("♥")
            shuffle;
        }

            // DIAMONS
            if(x=="A♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/ace_of_diamonds.png")
                cont++;
                handNumber.push(1)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="2♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/2_of_diamonds.png")
                cont++;
                handNumber.push(2)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="3♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/3_of_diamonds.png")
                cont++;
                handNumber.push(3)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="4♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/4_of_diamonds.png")
                cont++;
                handNumber.push(4)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="5♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/5_of_diamonds.png")
                cont++;
                handNumber.push(5)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="6♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/6_of_diamonds.png")
                cont++;
                handNumber.push(6)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="7♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/7_of_diamonds.png")
                cont++;
                handNumber.push(7)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="8♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/8_of_diamonds.png")
                cont++;
                handNumber.push(8)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="9♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/9_of_diamonds.png")
                cont++;
                handNumber.push(9)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="10♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/10_of_diamonds.png")
                cont++;
                handNumber.push(10)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="J♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/jack_of_diamonds2.png")
                cont++;
                handNumber.push(11)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="Q♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/queen_of_diamonds2.png")
                cont++;
                handNumber.push(12)
                handSuit.push("♦")
                shuffle;
            }
            else if(x=="K♦"){
                show.style.display = 'block'
                show.setAttribute ('src',"./assets/king_of_diamonds2.png")
                cont++;
                handNumber.push(13)
                handSuit.push("♦")
                shuffle;
            }
    }
    else {
        let textReturn = document.querySelector("h1")
        order();
        textReturn.textContent= "Você fez um X"
        console.log(handNumber)
        console.log(handSuit)
    }

        //Result

        // Straight Flush: são cinco cartas em sequência e do mesmo naipe;
        // if(handNumber[1] == (handNumber[0] + 1) && handNumber[2] == (handNumber[1] + 1) && handNumber[3] == (handNumber[2] + 1) && handNumber[4] == (handNumber[3] + 1)){
        //     textReturn.textContent= "Congratulations!! You made a straight flush"
        // }

        // Quadra: quatro cartas do mesmo valor;
        // else if(handNumber)

        // Full House: três cartas do mesmo valor e um par de cartas de mesmo valor;

        // Sequência: as cinco cartas têm a mesma sequência numérica;
        if(handNumber[1] == (handNumber[0] + 1) && handNumber[2] == (handNumber[1] + 1) && handNumber[3] == (handNumber[2] + 1) && handNumber[4] == (handNumber[3] + 1)){
            textReturn.textContent= "Congratulations!! You made a straight flush"
        }

        // Trinca: três cartas de mesmo valor;

        // Dois pares: dois pares de cartas, sendo um par de um valor e outro par de outro valor;

        // Par: duas cartas de mesmo valor;
        
        // Nada: não fez nada.
}

function order (){
    handNumber.sort(function (a, b) {
      return a - b
    });
}
