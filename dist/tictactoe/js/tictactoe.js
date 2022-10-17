let    
    call    = document.querySelector('.tictactoe__box'),
    call1   = document.querySelector('.tictactoe__box1'),
    call2   = document.querySelector('.tictactoe__box2'),
    call3   = document.querySelector('.tictactoe__box3'),
    call4   = document.querySelector('.tictactoe__box4'),
    call5   = document.querySelector('.tictactoe__box5'),
    call6   = document.querySelector('.tictactoe__box6'),
    call7   = document.querySelector('.tictactoe__box7'),
    call8   = document.querySelector('.tictactoe__box8'),
    call9   = document.querySelector('.tictactoe__box9'),
    ticcontent = document.querySelector('.tictactoe__content'),
    ticresult = document.querySelector('.ticresult'),
    ticnewgame = document.querySelector('.ticnewgame'),
    ticsbros = document.querySelector('.ticsbros'),
    ticnum = 0,
    ticfinish = false,
    ticwinner,
    botrandomnumbers;
    ticform    = 0;

let 
    ticyouwons      = document.querySelector('.tictactoe__inforesult__youwons__number'),
    ticyoulouses    = document.querySelector('.tictactoe__inforesult__youlouses__number'),
    ticyoumoney     = document.querySelector('.tictactoe__inforesult__youmoney__number'),
    ticyoudraw      = document.querySelector('.tictactoe__inforesult__youdraw__number'),
    ticyouwonsnum   = 0,
    ticyoulousesnum = 0,
    ticyoumoneynum  = 0,
    ticyoudrawnum   = 0;



ticcontent.addEventListener('click', event => {
    if(event.target.className === "tictactoe__content")return;
    if(event.target.textContent != "")return;
    if(ticfinish === true) return

    
    
    ticform = ticform + 1;    


        event.target.textContent = 'X'
    

    
        ticwin()
    function ticbot() {
        ticform = ticform + 1;

        if(ticform >= 9) return
        

        if(call1.textContent === call2.textContent && call3.textContent == '' && call2.textContent != '') {
            call3.textContent = 'O'
            return
        }
        if(call2.textContent === call3.textContent && call1.textContent == '' && call3.textContent != '') {
            call1.textContent = 'O'
            return
        }
        if(call1.textContent === call3.textContent && call2.textContent == '' && call3.textContent != '') {
            call2.textContent = 'O'
            return
        }

        if(call4.textContent === call5.textContent && call6.textContent == ''  && call5.textContent != '') {
            call6.textContent = 'O'
            return
        }
        if(call5.textContent === call6.textContent && call4.textContent == '' && call6.textContent != '') {
            call4.textContent = 'O'
            return
        }
        if(call4.textContent === call6.textContent && call5.textContent == '' && call6.textContent != '') {
            call5.textContent = 'O'
            return
        }
        
        if(call7.textContent === call8.textContent && call9.textContent == '' && call8.textContent != '') {
            call9.textContent = 'O'
            return
        }
        if(call8.textContent === call9.textContent && call7.textContent == '' && call8.textContent != '') {
            call7.textContent = 'O'
            return
        }
        if(call7.textContent === call9.textContent && call8.textContent == '' && call9.textContent != '') {
            call8.textContent = 'O'
            return
        }
        
        if(call1.textContent === call4.textContent && call7.textContent == '' && call4.textContent != '') {
            call7.textContent = 'O'
            return
        }
        if(call4.textContent === call7.textContent && call1.textContent == '' && call7.textContent != '') {
            call1.textContent = 'O'
            return
        }
        if(call1.textContent === call7.textContent && call4.textContent == '' && call7.textContent != '') {
            call4.textContent = 'O'
            return
        }

        if(call2.textContent === call5.textContent && call8.textContent == '' && call5.textContent != '') {
            call8.textContent = 'O'
            return
        }
        if(call5.textContent === call8.textContent && call2.textContent == '' && call8.textContent != '') {
            call2.textContent = 'O'
            return
        }
        if(call2.textContent === call8.textContent && call5.textContent == '' && call8.textContent != '') {
            call5.textContent = 'O'
            return
        }
        
        if(call3.textContent === call6.textContent && call9.textContent == '' && call6.textContent != '') {
            call9.textContent = 'O'
            return
        }
        if(call6.textContent === call9.textContent && call3.textContent == '' && call9.textContent != '' ){
            call3.textContent = 'O'
            return
        }
        if(call3.textContent === call9.textContent && call6.textContent == '' && call9.textContent != '') {
            call6.textContent = 'O'
            return
        }

         
        if(call1.textContent === call5.textContent && call9.textContent == '' && call5.textContent != '') {
            call9.textContent = 'O'
            return
        }
        if(call5.textContent === call9.textContent && call1.textContent == '' && call9.textContent != '' ){
            call1.textContent = 'O'
            return
        }
        if(call1.textContent === call9.textContent && call5.textContent == '' && call9.textContent != '') {
            call5.textContent = 'O'
            return
        }
         
        if(call3.textContent === call5.textContent && call7.textContent == '' && call5.textContent != '') {
            call7.textContent = 'O'
            return
        }
        if(call5.textContent === call7.textContent && call3.textContent == '' && call7.textContent != '' ){
            call3.textContent = 'O'
            return
        }
        if(call3.textContent === call7.textContent && call5.textContent == '' && call7.textContent != '') {
            call5.textContent = 'O'
            return
        }

        botrandomnumber()

        function botrandomnumber() {
            botrandomnumbers =  Math.floor(Math.random() * 9) + 1; 

            if(event.target.dataset.id == botrandomnumbers) {
                botrandomnumbers += 1;
            }

            if(botrandomnumbers == 1) {
                call1.textContent = 'O'
            }
            if(botrandomnumbers == 2) {
                call2.textContent = 'O'
            }
            if(botrandomnumbers == 3) {
                call3.textContent = 'O'
            }
            if(botrandomnumbers == 4) {
                call4.textContent = 'O'
            }
            if(botrandomnumbers == 5) {
                call5.textContent = 'O'
            }
            if(botrandomnumbers == 6) {
                call6.textContent = 'O'
            }
            if(botrandomnumbers == 7) {
                call7.textContent = 'O'
            }
            if(botrandomnumbers == 8) {
                call8.textContent = 'O'
            }
            if(botrandomnumbers == 9) {
                call9.textContent = 'O'
            }
        }

    }

    ticwin()

    if(ticfinish === false) {
        ticbot()
    }
    ticwin()

function ticwin() {

        if(call1.textContent === call2.textContent && call3.textContent === call2.textContent  && call2.textContent != '') {
            ticfinish = true

            if(call2.textContent === 'X') {
                ticwinner = 'x'
            }
            else {
                ticwinner = 'O'
            }
            return
        }

        if( call4.textContent === call5.textContent && call6.textContent === call5.textContent && call5.textContent != '') {  
            ticfinish = true

            if(call5.textContent === 'X') {
                ticwinner = 'x'
            }else {
                ticwinner = 'O'
            }
            return
        }

        if(call7.textContent === call8.textContent && call9.textContent === call8.textContent && call8.textContent != '') {
            ticfinish = true

            if(call8.textContent === 'X') {
                ticwinner = 'x'
            }else {
                ticwinner = 'O'
            }
            return
        }

        if(call1.textContent === call4.textContent && call7.textContent === call4.textContent  && call4.textContent != '') {
            ticfinish = true

            if(call4.textContent === 'X') {
                ticwinner = 'x'
            }else {
                ticwinner = 'O'
            }
            return
        }

        if(call2.textContent === call5.textContent && call8.textContent === call5.textContent  && call5.textContent != '') {
            ticfinish = true

            if(call5.textContent === 'X') {
                ticwinner = 'x'
            }else {
                ticwinner = 'O'
            }
            return
        }

        if(call3.textContent === call6.textContent && call9.textContent === call6.textContent  && call6.textContent != '') {
            ticfinish = true

            if(call6.textContent === 'X') {
                ticwinner = 'x'
            }else {
                ticwinner = 'O'
            }
            return
        }
        if(call1.textContent === call5.textContent && call9.textContent === call5.textContent  && call5.textContent != '') {
            ticfinish = true

            if(call5.textContent === 'X') {
                ticwinner = 'x'
            }else {
                ticwinner = 'O'
            }
            return
        }
        if(call3.textContent === call5.textContent && call7.textContent === call5.textContent  && call5.textContent != '') {
            ticfinish = true

            if(call5.textContent === 'X') {
                ticwinner = 'x'
            }else {
                ticwinner = 'O'
            }
            return
        }
        if(ticform >= 9) {
            ticfinish = true;
        }
    }

    if(ticfinish === true) {
        if(ticwinner === 'x') {
            ticresult.textContent = 'ты выиграл'

            ticyouwonsnum += 1
            ticyouwons.textContent = ticyouwonsnum;

            moneynumber += 10
            money.textContent = moneynumber

            ticyoumoneynum += 10
            ticyoumoney.textContent = ticyoumoneynum
            
            soundmoney.play()
            
            return
        }
        if(ticwinner === 'O') {
            ticresult.textContent = 'ты проиграл'

            ticyoulousesnum += 1
            ticyoulouses.textContent = ticyoulousesnum

            moneynumber -= 5
            money.textContent = moneynumber

            ticyoumoneynum -= 5
            ticyoumoney.textContent = ticyoumoneynum
            return
        }
        else {
            ticresult.textContent = 'Ничя'
            ticyoudrawnum += 1
            ticyoudraw.textContent = ticyoudrawnum
            return
        }
    }
})



ticnewgame.addEventListener('click', e => {
    if(ticfinish === false) return
    call1.textContent = ''
    call2.textContent = ''
    call3.textContent = ''
    call4.textContent = ''
    call5.textContent = ''
    call6.textContent = ''
    call7.textContent = ''
    call8.textContent = ''
    call9.textContent = ''
    ticfinish == false;

    ticfinish   = false,
    ticwinner   = 0
    ticform     = 0;
    ticresult.textContent = ''
})

ticsbros.addEventListener('click', function() {
    ticyouwons.textContent = '0'      
    ticyoulouses.textContent = '0'
    ticyoumoney.textContent = '0'  
    ticyoudraw.textContent = '0' 
    ticyouwonsnum   = 0
    ticyoulousesnum = 0
    ticyoumoneynum  = 0
    ticyoudrawnum   = 0
})


