let 
    mybusinessdontinfotextbtn = document.querySelector('.mybusiness__dontinfo__text__btn'),
    yesnobusiness = 0,
    mybusiness__dontinfo = document.querySelector('.mybusiness__dontinfo'),
    idbus

let    
    mybusiness__box1 = document.querySelector('.mybusiness__box1'),
    mybusiness__box2 = document.querySelector('.mybusiness__box2'),
    mybusiness__box3 = document.querySelector('.mybusiness__box3')




let date = {
    'business1': {
        'classnumber': mybusiness__box1,
        'moneynumber': 350,
        'secondmoney': 3,
    },
    'business2': {   
        'classnumber': mybusiness__box2,
        'moneynumber': 500,
        'secondmoney': 5,
    },
    'business3': {
        'classnumber': mybusiness__box3,
        'moneynumber': 1500,
        'secondmoney': 25,
    }
}


    if(yesnobusiness === 0) {
        mybusiness__dontinfo.classList.add('block')
    }
    else{
        mybusiness__dontinfo.classList.remove('block')
    }

mybusinessdontinfotextbtn.addEventListener('click', event => {


    remove()
    removeactive()

    removespendactive()
    removespendheader()

    spendmoney.classList.add('block')
    navbarspendmoney.classList.add('active')
    spend__business.classList.add('block')
    hspendbusiness.classList.add('active')

})

buyitem.addEventListener('click', event => {
    if(!event.target.classList.contains('buy__btn')) return


    idbus = event.target.dataset.id;
    if(date[idbus]['classnumber'].classList.contains('block')) return
    if(date[idbus]['moneynumber'] > moneynumber) {
        alert('У вас недостаточно денег')
        return
    }

    yesnobusiness += 1 

    moneynumber = moneynumber - date[idbus]['secondmoney']; 
    money.textContent = moneynumber

    if(yesnobusiness === 0) {
        mybusiness__dontinfo.classList.add('block')
    }
    else{
        mybusiness__dontinfo.classList.remove('block')
    }




    date[idbus]['classnumber'].classList.add('block')

    setInterval(func, 1000)

    function func() {
        moneynumber = moneynumber + date[idbus]['secondmoney']
        money.textContent = moneynumber
    }

})

