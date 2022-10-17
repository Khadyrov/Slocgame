let 
    navbarearnmoney = document.querySelector('.navbar__item__earnMoney'),
    navbarspendmoney = document.querySelector('.navbar__item__spendMoney'),
    navbarcasino = document.querySelector('.navbar__item__casino'),
    navbarbusiness = document.querySelector('.navbar__item__business'),
    money = document.querySelector('.money__number'),
    moneynumber = 0
    body = document.querySelector('.body'),
    tic = document.querySelector('.tic'),
    navbarpurchases = document.querySelector('.navbar__item__purchases');

let 
    earnmoney = document.querySelector('.earnMoney'),
    casino = document.querySelector('.casino'),
    business = document.querySelector('.mybusiness'),
    tictactoe = document.querySelector('.tictactoe'),
    spendmoney = document.querySelector('.spendmoney');

function remove() {
    spendmoney.classList.remove('block');
    earnmoney.classList.remove('block');
    casino.classList.remove('block')
    business.classList.remove('block')
    tictactoe.classList.remove('block')
}

function removeactive() {
    navbarearnmoney.classList.remove('active');
    navbarspendmoney.classList.remove('active');
    navbarcasino.classList.remove('active');
    navbarbusiness.classList.remove('active');
    tic.classList.remove('active');
}

function removespendactive() {
    hspendhoms.classList.remove('active')
    hspenditem.classList.remove('active')
    hspendcars.classList.remove('active'),
    hspendbusiness.classList.remove('active')
    hspendelect.classList.remove('active')
}

function removespendheader() {
    spend__homs.classList.remove('block')
    spend__items.classList.remove('block')
    spend__cars.classList.remove('block')
    spend__business.classList.remove('block')
    spend__elect.classList.remove('block')
}

body.addEventListener('click', event => {
    if(!event.target.classList.contains('navbar_items') && !event.target.classList.contains('earn__btn')) return
    remove();
    removeactive();

    event.target.classList.add('active')

    if(event.target.classList.contains('navbar__item__earnMoney')) {
        earnmoney.classList.add('block')
    }
    if(event.target.classList.contains('navbar__item__spendMoney')) {
        spendmoney.classList.add('block')
    }
    if(event.target.classList.contains('navbar__item__casino')) {
        casino.classList.add('block')
    }
    if(event.target.classList.contains('navbar__item__business')) {
        business.classList.add('block')
    }
    if(event.target.classList.contains('tic')) {
        tictactoe.classList.add('block');
        navbarearnmoney.classList.add('active');
    }
}) 
