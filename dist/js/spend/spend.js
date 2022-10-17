let 
    spendheader = document.querySelector('.spend__header'),
    hspendhoms = document.querySelector('.hspend__homs'),
    hspenditem = document.querySelector('.hspend__item'),
    hspendcars = document.querySelector('.hspend__cars'),
    hspendelect = document.querySelector('.hspend__elect'),
    hspendbusiness = document.querySelector('.hspend__business');


let
    spend__homs = document.querySelector('.spend__homs'),
    spend__cars = document.querySelector('.spend__cars'),
    spend__business = document.querySelector('.spend__business'),
    spend__elect = document.querySelector('.spend__elect'),
    spend__items = document.querySelector('.spend__items');


spendheader.addEventListener('click', event => {
    if(event.target.classList == 'spend__header') return 

    removespendheader();

    removespendactive();

    event.target.classList.add('active')
    
    if(event.target.classList.contains('hspend__homs')) {
        spend__homs.classList.add('block')
    }
    if(event.target.classList.contains('hspend__item')) {
        spend__items.classList.add('block')
    }
    if(event.target.classList.contains('hspend__cars')) {
        spend__cars.classList.add('block')
    }
    if(event.target.classList.contains('hspend__business')) {
        spend__business.classList.add('block')
    }
    if(event.target.classList.contains('hspend__elect')) {
        spend__elect.classList.add('block')
    }
})


let data =  {
    'home1': {
        'spendmoneynumber': 1200,
        'itemnumber': '.a1',
        'addnumber': 0
    },
    'home2': {
        'spendmoneynumber': 1000,
        'itemnumber': '.a2',
        'addnumber': 0
    },
    'home3': {
        'spendmoneynumber': 600,
        'itemnumber': '.a3',
        'addnumber': 0
    },
    'home4': {
        'spendmoneynumber': 1300,
        'itemnumber': '.a4',
        'addnumber': 0
    },
    'home5': {
        'spendmoneynumber': 1500,
        'itemnumber': '.a5',
        'addnumber': 0
    },
    'home6': {
        'spendmoneynumber': 500,
        'itemnumber': '.a6',
        'addnumber': 0
    },
    'item1': {
        'spendmoneynumber': 2,
        'itemnumber': '.b1',
        'addnumber': 0
    },
    'item2': {
        'spendmoneynumber': 3,
        'itemnumber': '.b2',
        'addnumber': 0
    },
    'item3': {
        'spendmoneynumber': 3,
        'itemnumber': '.b3',
        'addnumber': 0
    },
    'item4': {
        'spendmoneynumber': 7,
        'itemnumber': '.b4',
        'addnumber': 0
    },
    'item5': {
        'spendmoneynumber': 1000,
        'itemnumber': '.b5',
        'addnumber': 0
    },
    'car1': {
        'spendmoneynumber': 4000,
        'itemnumber': '.c1',
        'addnumber': 0
    },
    'car2': {
        'spendmoneynumber': 1200,
        'itemnumber': '.c2',
        'addnumber': 0
    },
    'car3': {
        'spendmoneynumber': 2500,
        'itemnumber': '.c3',
        'addnumber': 0
    },
    'car4': {
        'spendmoneynumber': 1000,
        'itemnumber': '.c4',
        'addnumber': 0
    },
    'elect1': {
        'spendmoneynumber': 25,
        'itemnumber': '.d1',
        'addnumber': 0
    },
    'elect2': {
        'spendmoneynumber': 22,
        'itemnumber': '.d2',
        'addnumber': 0
    },
    'elect3': {
        'spendmoneynumber': 20,
        'itemnumber': '.d3',
        'addnumber': 0
    },
    'elect4': {
        'spendmoneynumber': 22,
        'itemnumber': '.d4',    
        'addnumber': 0
    },
    'elect5': {
        'spendmoneynumber': 20,
        'itemnumber': '.d5',  
        'addnumber': 0
    }
}

// buy items
let 
    buyitem = document.querySelector('.spend__money'),
    iditem,
    itemnumber,
    itemcellmoney,
    itemclassnumber,
    itemresultclassnumber;




buyitem.addEventListener('click', event => {



    if(event.target.classList.contains('item__add__money')) {
    
    iditem = event.target.dataset.id

    if(data[iditem]['spendmoneynumber'] > moneynumber) {
        alert('у вас недостаточно денег')
        return
    }

    data[iditem]['addnumber'] =  data[iditem]['addnumber'] + 1;

    itemnumber = data[iditem]['addnumber'];
    
    itemcellmoney = data[iditem]['spendmoneynumber'];

    itemresultclassnumber = document.querySelector(data[iditem]['itemnumber']);

    itemresultclassnumber.textContent = itemnumber

    moneynumber = moneynumber - data[iditem]['spendmoneynumber']

    money.textContent = moneynumber

    addsoundmoney.play()

    }

    if(event.target.classList.contains('remove__money')) {
        iditem = event.target.dataset.id

        if(data[iditem]['addnumber'] < 1) return


        data[iditem]['addnumber'] =  data[iditem]['addnumber'] - 1;

        itemnumber = data[iditem]['addnumber'];
        
        itemcellmoney = data[iditem]['spendmoneynumber'];

        itemresultclassnumber = document.querySelector(data[iditem]['itemnumber']);

        itemresultclassnumber.textContent = itemnumber

        moneynumber = moneynumber + data[iditem]['spendmoneynumber']

        money.textContent = moneynumber
        
        soundmoney.play()
    }

    return
})
