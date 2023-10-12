function init(){
    quarters = document.getElementById("quarter#")
    qVar = 0;
    dimes = document.getElementById("dime#")
    dVar = 0;
    nickles = document.getElementById("nickle#")
    nVar = 0;
    pennies = document.getElementById("penny#")
    pVar = 0;
    qVal = document.getElementById("quarter$")
    dVal = document.getElementById("dime$")
    nVal = document.getElementById("nickle$")
    pVal = document.getElementById("penny$")
    total = document.getElementById("total")
    display();
}

function add(text){
    if (text == 'q')
    {
        qVar++;
    }
    if (text == 'd')
    {
        dVar++;
    }
    if (text == 'n')
    {
        nVar++;
    }
    if (text == 'p')
    {
        pVar++;
    }
    display();
}

function sub(text){
    if (text == 'q' && qVar > 0)
    {
        qVar--;
    }
    if (text == 'd' && dVar > 0)
    {
        dVar--;
    }
    if (text == 'n' && nVar > 0)
    {
        nVar--;
    }
    if (text == 'p' && pVar > 0)
    {
        pVar--;
    }
    display();
}

function display(){
    quarters.innerHTML = qVar;
    dimes.innerHTML = dVar;
    nickles.innerHTML = nVar;
    pennies.innerHTML = pVar;
    qVal.innerHTML = Math.round((qVar * 0.25) * 100)/100;
    dVal.innerHTML = Math.round((dVar * 0.1) * 100)/100;
    nVal.innerHTML = Math.round((nVar * 0.05) * 100)/100;
    pVal.innerHTML = Math.round((pVar * 0.01) * 100)/100;
    total.innerHTML = Math.round(((qVar * 0.25) + (dVar * 0.1) + (nVar * 0.05) + (pVar * 0.01)) * 100)/100;
    // Need to round so I don't get weird doubles when adding such as 1.9000000004
}