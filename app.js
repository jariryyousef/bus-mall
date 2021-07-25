'use strict';

let first = document.getElementById('one');
let second = document.getElementById('two');
let final = document.getElementById('three');

// console.log(first,second,final);


let firstindex;
let secondindex;
let finalindex;
let btn=document.getElementById('show');

let maxtry = 25;
let countusertry = 0;

function Bus(name, src) {
    this.name = name;
    this.source = src;
    this.votes = 0;
    this.shown = 0;
    buss.all.push(this);
    // buss.push(this);
}

let buss = [];
buss.all = [];

new Bus('bag', 'assets/bag.jpg');
new Bus('banana', 'assets/banana.jpg');
new Bus('bathroom', 'assets/bathroom.jpg');
new Bus('boots', 'assets/boots.jpg');
new Bus('breakfast', 'assets/breakfast.jpg');
new Bus('bubblegum', 'assets/bubblegum.jpg');
new Bus('chair', 'assets/chair.jpg');
new Bus('cthulhu', 'assets/cthulhu.jpg');
new Bus('dog-duck', 'assets/dog-duck.jpg');
new Bus('dragon', 'assets/dragon.jpg');
new Bus('pen', 'assets/pen.jpg');
new Bus('pet-sweep', 'assets/pet-sweep.jpg');
new Bus('scissors', 'assets/scissors.jpg');
new Bus('shark', 'assets/shark.jpg');
new Bus('sweep', 'assets/sweep.png');
new Bus('tauntaun', 'assets/tauntaun.jpg');
new Bus('unicorn', 'assets/unicorn.jpg');
new Bus('water-can', 'assets/water-can.jpg');
new Bus('wine-glass', 'assets/wine-glass.jpg');

// console.log(buss.all);


// from sameer demo
function getRandomIndex() {

    return Math.floor(Math.random() * buss.all.length);
}

//   console.log(getRandomIndex());


function renderimg() {

    firstindex = getRandomIndex();
    secondindex = getRandomIndex();
    finalindex = getRandomIndex();


    if (firstindex === secondindex) {

        firstindex = getRandomIndex();
        console.log('test change first');
    }
     if (secondindex === firstindex) {

        secondindex = getRandomIndex();
        console.log('test change first1');
    }
     if (firstindex === finalindex) {
        // firstindex=getRandomIndex();
        finalindex = getRandomIndex();
        console.log('test change second');
    }

     if (secondindex === finalindex) {
        secondindex = getRandomIndex();
        console.log('test change final');
    }

     if (finalindex === secondindex) {
        finalindex = getRandomIndex();
        console.log('test change 4');
    }

    first.src = buss.all[firstindex].source;
    buss.all[firstindex].shown++;
    // console.log(first.src);
    second.src = buss.all[secondindex].source;
    buss.all[secondindex].shown++;
    // console.log(second.src);
    final.src = buss.all[finalindex].source;
    buss.all[finalindex].shown++;
    // console.log(final.src);
}

// console.log(buss.all[2].name);
renderimg()
// console.log(renderimg());


first.addEventListener('click', handleUserClick);
second.addEventListener('click', handleUserClick);
final.addEventListener('click', handleUserClick);


function handleUserClick(event) {

    console.log(event.target.id);
    countusertry++;

    // console.log(countusertry);


    if (countusertry < maxtry) {

        // console.log('test');

        if (event.target.id === 'one') {

            buss.all[firstindex].votes++;

            console.log(buss.all[firstindex]);

        }

        else if (event.target.id === 'two') {

            buss.all[secondindex].votes++;
            console.log(buss.all[secondindex]);




        }

        else if (event.target.id === 'three') {

            buss.all[finalindex].votes++;

            console.log(buss.all[finalindex]);




        }
        renderimg()

    }
    else {

        
        // function myfunction() {
      
        
        alert('click on View Results to see Results');

        // let button=getElementById('show');

        
            
        
        // let list = document.getElementById('result');


            // for (let i = 0; i < buss.all.length; i++) {
            //     let item = document.createElement('li');

            //     list.appendChild(item);

            //     item.textContent = `${buss.all[i].name} has ${buss.all[i].votes} votes and has ${buss.all[i].shown} shown`
            //  }        
        
        // }
        // console.log(myfunction());
      
        first.removeEventListener('click', handleUserClick);
        second.removeEventListener('click', handleUserClick);
        final.removeEventListener('click', handleUserClick);
        






    }
}

btn.addEventListener('click',addresuli)

function addresuli(event) {
    let list = document.getElementById('result');
    for (let i = 0; i < buss.all.length; i++) {
        let item = document.createElement('li');
    list.appendChild(item);
  
        item.textContent = `${buss.all[i].name} had ${buss.all[i].votes} votes and was seen ${buss.all[i].shown} times`
    
        btn.removeEventListener('click',addresuli);
}
}



