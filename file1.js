document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello world!')
    let amountInput = document.querySelector('#amount');
    let resultArea = document.querySelector("#result");
    let by;
    let total;
    let e;
    let f;
    let fromcur;
    let tocur;
    let button = document.querySelector('#convertbut')
   
    function Convert(){
        let amount = parseFloat(amountInput.value);
        e = document.querySelector('.fromcur');
        fromcur = e.options[e.selectedIndex].value;

        f = document.querySelector('.tocur');
        tocur = f.options[f.selectedIndex].value.toUpperCase();

        if (fromcur == 'BPS' && tocur == 'USD') {
            by = 1.33
            total = amount*by
            return total
        } else if (fromcur == 'BPS' && tocur == 'KSH') {
            by = 171.69
            total = amount*by
            return total
        } else if (fromcur == 'USD' && tocur == 'KSH') {
            by = 129.25
            total = amount*by
            return total
        } else if (fromcur == 'USD' && tocur == 'BPS') {
            by = 0.75
            total = amount*by
            return total
        } else if (fromcur == 'KSH' && tocur == 'BPS') {
            by=0.0058
            total = amount*by
            return total
        } else if (fromcur == 'KSH' && tocur == 'USD') {
            by = 0.0077
            total = amount*by
            return total
        } else {
            total = amount
            return total
        }
    };

    function result(){
        let conversionResult = Convert();
        console.log(conversionResult)
        let formattedResult = conversionResult.toLocaleString()
        let finalResult = (`${formattedResult} ${tocur}`)
        resultArea.innerHTML = finalResult;

    }
    button.addEventListener("click",result)
    

});


