let $cardChosen = [];
const $cards = document.querySelectorAll('.card-back');
let $cardsContent = [
"https://i.pinimg.com/originals/8c/74/37/8c7437379cdcd940a4229f28102bdc80.jpg",
"https://i.pinimg.com/originals/8c/74/37/8c7437379cdcd940a4229f28102bdc80.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaErfScJAGPLs517jilnu9sjXcoX1GG7CFBx8dZ4hKNrO00x2T48Sm65YEpOjY2HfPOdE&usqp=CAU", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaErfScJAGPLs517jilnu9sjXcoX1GG7CFBx8dZ4hKNrO00x2T48Sm65YEpOjY2HfPOdE&usqp=CAU",
"https://www.teahub.io/photos/full/105-1052004_iron-man-wallpaper-art.jpg",
"https://www.teahub.io/photos/full/105-1052004_iron-man-wallpaper-art.jpg", 
"https://tooys.mx/pub/media/catalog/product/cache/96210167b6a992dbdbaba9ff58d054c8/m/a/magneto_marvel_02_1.jpg",
"https://tooys.mx/pub/media/catalog/product/cache/96210167b6a992dbdbaba9ff58d054c8/m/a/magneto_marvel_02_1.jpg",
"https://i.pinimg.com/originals/3e/16/bf/3e16bff253abb380070095370ef15ae5.jpg",
"https://i.pinimg.com/originals/3e/16/bf/3e16bff253abb380070095370ef15ae5.jpg",
"https://images.hdqwalls.com/download/wolverine-comic-book-art-4k-mk-1125x2436.jpg",
"https://images.hdqwalls.com/download/wolverine-comic-book-art-4k-mk-1125x2436.jpg"
]

function blockPlayerInput(){
    $cards.forEach(function($card){
        $card.onclick = null;
    })
}

function unblockPlayerInput(){
    $cards.forEach(function($card){
        $card.onclick = analyzeRound;
    })
}

function analyzeRound(e){
    console.log(e.target)
    e.target.nextElementSibling.classList.remove('hidden');
    $cardChosen.push(e.target.nextElementSibling);
    console.log($cardChosen);
    if($cardChosen.length === 2){
        blockPlayerInput();
        setTimeout(function(){
            if($cardChosen[0].src === $cardChosen[1].src){
                $cardChosen[0].classList.add('hidden');
                $cardChosen[1].classList.add('hidden');
                $cardChosen[0].previousElementSibling.classList.add('hidden');
                $cardChosen[1].previousElementSibling.classList.add('hidden');
            }else{
                $cardChosen[0].classList.add('hidden');
                $cardChosen[1].classList.add('hidden');
            } 
            $cardChosen = [];
        }, 500);
        setTimeout(function(){
            unblockPlayerInput();
        }, 500); 
    }
}

$cards.forEach(function($card){
    $card.onclick = analyzeRound
})

for(let i= $cardsContent.length-1; i >= 0 ; i--){
    const randomPick = Math.floor(Math.random() * (i+1));
    document.querySelector(`#img-${i+1}`).src = $cardsContent[randomPick];
    $cardsContent.splice(randomPick, 1);
}
