const date = new Date();
function getData(){
    var dayValue = document.getElementById('day').value;
    var monthValue = document.getElementById('month').value;
    var yearValue = document.getElementById('year').value;
    var dateInMonths = (date.getFullYear() - yearValue)*12+date.getMonth()+1 - monthValue ;
    for(let i=0; i<(date.getFullYear() - yearValue)-1; i++){
        console.log('a')
        
    }
    if(dayValue != '' && monthValue != '' && yearValue != ''){
        document.getElementById('dayOutput').innerHTML = dayValue+' ';
        document.getElementById('monthOutput').innerHTML = dateInMonths%12+' ';
        document.getElementById('yearOutput').innerHTML = date.getFullYear() - yearValue+' ';
        console.log(dateInMonths)
    }
    else{
        console.log('puste')
    }

}

console.log(date)
console.log(date.getMonth())
console.log(date.getFullYear())
