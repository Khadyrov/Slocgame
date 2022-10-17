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
