function getValueFromField(value) {
    const getField = document.getElementById(value);
    const getValue = parseFloat(getField.value);
    return getValue;
}

function getSpendAmount() {
    let field1 = getValueFromField('spent-1');
    let field2 = getValueFromField('spent-2');
    let field3 = getValueFromField('spent-3');
    let field4 = getValueFromField('spent-4');
    // show the value remain or spent
    if (isNaN(field1)) {
        field1 = 0;
    }
    if (isNaN(field2)) {
        field2 = 0;
    }
    if (isNaN(field3)) {
        field3 = 0;
    }
    if (isNaN(field4)) {
        field4 = 0;
    }
    let sum = field1 + field2 + field3 + field3;


    return sum
}
document.getElementById('calculate').addEventListener('click', function () {


    const show = document.getElementById('t-expenses')
    const inField = getValueFromField('in-field');
    const show2 = document.getElementById('balance')

    if (inField < getSpendAmount()) {
        return  alert('Cut Your Coat According to Your Cloth 💰💰🌚')

    }
    if (isNaN(inField)) {
        alert('Please Provide a valid Number into Income')
            show2.innerText = 00;
            show.innerText = 00;
        return;

    }

    show2.innerText = inField - getSpendAmount();
    show.innerText = getSpendAmount();

    // remaining Balance


})


// save code
document.getElementById('btn-save').addEventListener('click', function () {
    const getField = getValueFromField('save-field');
    const inField = getValueFromField('in-field');
    const show2 = document.getElementById('balance')


    const save = document.getElementById('save-am')
    const per = ((getField / 100) * inField).toFixed(2);


    save.innerText = per;



    const remSave = document.getElementById('rem-am')

    const dara =  inField - getSpendAmount();
    const Rper = (Math.round(dara - ((getField / 100) * inField))).toFixed(2);


    if (0 > Rper) {
      alert('Vat pasna Cha khas Hunda loia Ghorte jas.. \n save kora lagbona nohoile cholte parbina')
    }


    remSave.innerText = Rper;

})