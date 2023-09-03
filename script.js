const date = new Date();
function daysCounter(liczba,end){
    let counter = 0;
    for(i=liczba;i<=end;i++){
        switch(true) {
            case (i==1):
                counter = counter + 31;
            break
            case (i==2):
                if(yearValue%4==0){
                    counter = counter + 29;
                }else{
                    counter = counter + 28;
                }
            break
            case (i==3):
                counter = counter + 31;
            break
            case (i==4):
                counter = counter + 30;
            break
            case (i==5):
                counter = counter + 31;
            break
            case (i==6):
                counter = counter + 30;
            break
            case (i==7):
                counter = counter + 31;
            break
            case (i==8):
                counter = counter + 31;
            break
            case (i==9):
                counter = counter + 30;
            break
            case (i==10):
                counter = counter + 31;
            break
            case (i==11):
                counter = counter + 30;
            break
            case (i==12):
                counter = counter + 31;
            break
            default:
            console.log('wrong input');
            break
        }
    }
    return counter;
}

function getData(){
    var dayValue = Number(document.getElementById('day').value);
    var monthValue = Number(document.getElementById('month').value);
    var yearValue = Number(document.getElementById('year').value);
    var dateInMonths = (date.getFullYear() - yearValue+1)*365;
    var przestepne = [];
    
    if(dayValue != '' && monthValue != '' && yearValue != ''){
        document.getElementById('dayOutput').innerHTML = dayValue+' ';
        document.getElementById('monthOutput').innerHTML = dateInMonths%12+' ';
        document.getElementById('yearOutput').innerHTML = date.getFullYear() - yearValue+' ';
        for(i=yearValue; i<date.getFullYear(); i++){
            if(i%4==0){
                przestepne.push(i);
            }else{
                continue;
            }
        }
    }
    else{
        console.log('puste');
    }
    przestepne.sort();
    console.log(przestepne);
    let currentMonth = Number(date.getMonth()+1);
    let srodekLat = (date.getFullYear()-yearValue-1)*365+przestepne.length;
    let poczatekLat = daysCounter(monthValue,12)-dayValue;
    let counter = 0;
    for(i=1; i<=currentMonth; i++){
        switch(true) {
            case (i==1):
                counter = counter + 31;
            break
            case (i==2):
                if(date.getFullYear()%4==0){
                    counter = counter + 29;
                }else{
                    counter = counter + 28;
                }
            break
            case (i==3):
                counter = counter + 31;
            break
            case (i==4):
                counter = counter + 30;
            break
            case (i==5):
                counter = counter + 31;
            break
            case (i==6):
                counter = counter + 30;
            break
            case (i==7):
                counter = counter + 31;
            break
            case (i==8):
                counter = counter + 31;
            break
            case (i==9):
                counter = counter + 30;
            break
            case (i==10):
                counter = counter + 31;
            break
            case (i==11):
                counter = counter + 30;
            break
            case (i==12):
                counter = counter + 31;
            break
            default:
            console.log('wrong input');
            break
        }
    }
    console.log(poczatekLat);
    console.log(srodekLat);
    console.log(counter);
    console.log(poczatekLat+srodekLat+counter);
}

