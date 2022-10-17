let 
    casinomoneynumber1,
    casinomoneynumber2,
    casinomoneynumber3,
    casinoentenrednumber1,
    casinoentenrednumber2,
    casinoentenrednumber3,
    casinobtn1 = document.querySelector('.casino__button__connect1'),
    casinobtn2 = document.querySelector('.casino__button__connect2'),
    casinobtn3 = document.querySelector('.casino__button__connect3')

let 
    casinorandom,
    casinowinnumber;


casinobtn1.addEventListener('click', function(){

    casinomoneynumber1 = document.querySelector('.casino__conect__input1').value;

    casinoentenrednumber1 = document.querySelector('.casinorandomnumber1').value;

    if(casinomoneynumber1 > moneynumber) {
        alert('У вас не хватает денег')
        return
    }
    if( 0 >= casinomoneynumber1) return
    if( casinoentenrednumber1 > 100) return
    if( casinoentenrednumber1 <= 0) return

    casinorandom =  Math.floor(Math.random() *100) + 1;

    casinowinnumber = casinomoneynumber1 * 10;

    if(casinorandom == casinoentenrednumber1) {
        casinowim.play()
        alert('Поздравляем!!! Вы выиграли' + casinowinnumber + ' $');

        moneynumber = moneynumber + casinowinnumber;
        money.textContent = moneynumber;
    }
    else {
        casinolouse.play()
        alert('Вы проиграли ' + casinomoneynumber1 + ' $. Рандомное число было ' + casinorandom);

        moneynumber = moneynumber - casinomoneynumber1;
        money.textContent = moneynumber;
    }

    casinomoneynumber1.textContent = '';

    casinoentenrednumber1.textContent = '';
})

casinobtn2.addEventListener('click', function(){

    casinomoneynumber2 = document.querySelector('.casino__conect__input2').value;

    casinoentenrednumber2 = document.querySelector('.casinorandomnumber2').value;

    if(casinomoneynumber2 > moneynumber) {
        alert('У вас не хватает денег')
        return
    }
    if( 0 >= casinomoneynumber2) return
    if( casinoentenrednumber2 > 50) return
    if( casinoentenrednumber2 <= 0) return

    casinorandom =  Math.floor(Math.random() *50) + 1;

    casinowinnumber = casinomoneynumber2 * 5;

    if(casinorandom == casinoentenrednumber2) {
        casinowim.play()
        alert('Поздравляем!!! Вы выиграли' + casinowinnumber + ' $');

        moneynumber = moneynumber + casinowinnumber;
        money.textContent = moneynumber;
    }
    else {
        casinolouse.play()
        alert('Вы проиграли ' + casinomoneynumber2 + ' $. Рандомное число было ' + casinorandom);

        moneynumber = moneynumber - casinomoneynumber2;
        money.textContent = moneynumber;
    }

    casinomoneynumber2.value = '';

    casinoentenrednumber2.value = '';
})

casinobtn3.addEventListener('click', function(){

    casinomoneynumber3 = document.querySelector('.casino__conect__input3').value;

    casinoentenrednumber3 = document.querySelector('.casinorandomnumber3').value;

    if(casinomoneynumber3 > moneynumber) {
        alert('У вас не хватает денег')
        return
    }
    if( 0 >= casinomoneynumber3) return
    if( casinoentenrednumber3 > 15) return
    if( casinoentenrednumber3 <= 0) return

    casinorandom =  Math.floor(Math.random() *15) + 1;

    casinowinnumber = casinomoneynumber3 * 1.5;

    if(casinorandom == casinoentenrednumber3) {
        casinowim.play()
        alert('Поздравляем!!! Вы выиграли' + casinowinnumber + ' $');

        moneynumber = moneynumber + casinowinnumber;
        money.textContent = moneynumber;
    }
    else {
        casinolouse.play()
        alert('Вы проиграли ' + casinomoneynumber3 + ' $. Рандомное число было ' + casinorandom);

        moneynumber = moneynumber - casinomoneynumber3;
        money.textContent = moneynumber;
    }

    casinomoneynumber3.value = '';

    casinoentenrednumber3.value = '';
})