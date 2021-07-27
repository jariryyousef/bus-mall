'use strict';

let first = document.getElementById('one');
let second = document.getElementById('two');
let final = document.getElementById('three');
let firstindex;
let secondindex;
let finalindex;
let btn = document.getElementById('show');
let maxtry = 25;
let countusertry = 0;
let numberofof=[];
let namesArr = [];
let votesArr = [];
let shownArr=[];   


function Bus(name, src) {
    this.name = name;
    this.source = src;
    this.votes = 0;
    this.shown = 0;
    buss.all.push(this);
    namesArr.push(this.name);
    // numberofof.push(this);
    // Bus.votesnewarr.push(this);


}
// Bus.votesnewarr=[];

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

// from sameer demo
function getRandomIndex() {

    return Math.floor(Math.random() * buss.all.length);
}


    // secondindex = getRandomIndex();
    
  
function renderimg() {

    firstindex = getRandomIndex();
    secondindex = getRandomIndex();
    finalindex = getRandomIndex();

    

  
// Better code modification and add includes

    while (firstindex===secondindex ||firstindex===finalindex ||finalindex===secondindex || numberofof.includes(firstindex)||numberofof.includes(secondindex) || numberofof.includes(finalindex)) {


        firstindex = getRandomIndex();
        secondindex = getRandomIndex();
        finalindex = getRandomIndex();

           
    }
    numberofof=[firstindex,secondindex,finalindex];
    console.log(numberofof);



    // if (firstindex === secondindex) {

    //     firstindex = getRandomIndex();
    //     console.log('test change first');
    // }
    // if (secondindex === firstindex) {

    //     secondindex = getRandomIndex();
    //     console.log('test change first1');
    // }
    // if (firstindex === finalindex) {
    //     finalindex = getRandomIndex();
    //     console.log('test change second');
    // }

    // if (secondindex === finalindex) {
    //     secondindex = getRandomIndex();
    //     console.log('test change final');
    // }

    // if (finalindex === secondindex) {
    //     finalindex = getRandomIndex();
    //     console.log('test change 4');
    // }


    first.src = buss.all[firstindex].source;
    buss.all[firstindex].shown++;

    second.src = buss.all[secondindex].source;
    buss.all[secondindex].shown++;

    final.src = buss.all[finalindex].source;
    buss.all[finalindex].shown++;

}
renderimg()

first.addEventListener('click', handleUserClick);
second.addEventListener('click', handleUserClick);
final.addEventListener('click', handleUserClick);


function handleUserClick(event) {

    // console.log(event.target.id);
    countusertry++;

    if (countusertry <= maxtry) {

        if (event.target.id === 'one') {

            buss.all[firstindex].votes++;

            // console.log(buss.all[firstindex]);

        }

        else if (event.target.id === 'two') {

            buss.all[secondindex].votes++;
            // console.log(buss.all[secondindex]);
        }

        else if (event.target.id === 'three') {

            buss.all[finalindex].votes++;

            // console.log(buss.all[finalindex]);
        }
        storage();
        renderimg();

    }
    else {
        alert('click on View Results to see Results');

        first.removeEventListener('click', handleUserClick);
        second.removeEventListener('click', handleUserClick);
        final.removeEventListener('click', handleUserClick);
    


btn.addEventListener('click', addresuli)

function addresuli(event) {
    let list = document.getElementById('result');
    for (let i = 0; i < buss.all.length; i++) {
        let item = document.createElement('li');
        list.appendChild(item);

        item.textContent = `${buss.all[i].name} had ${buss.all[i].votes} votes and was seen ${buss.all[i].shown} times`

        btn.removeEventListener('click', addresuli);

    }
}
for (let i = 0; i < buss.all.length; i++) {
    votesArr.push(buss.all[i].votes);
    shownArr.push(buss.all[i].shown);
    
  }
  // storage()
showChart();
}
}



function storage() {
  let stringarr= JSON.stringify(buss.all);
  localStorage.setItem('yousef',stringarr);
  // console.log(localStorage.getItem('stringarr'));
}
function getstorage() {
  let data=localStorage.getItem('yousef');
  let parsedArr=JSON.parse(data);

  if (parsedArr !==null) {
    let newarr=JSON.parse(data)
    buss.all=newarr;
  }

}


// using sameer demo
function showChart() {

    const data = {
      labels: namesArr,
      datasets: [{
        label: 'Votes',
        data: votesArr,
        backgroundColor: [
          'aqua',
        ],

        borderColor: [
          'black',
        ],
        borderWidth: 1
      },
      {
        label: 'Shown',
        data: shownArr,
        backgroundColor: [
            'yellow',
        ],
        borderColor: [
          'red',
         
        ],
        borderWidth: 1
      }
    
    ]
    };
  
    const config = {
      type:'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };
  
  
    var myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  
  }
  getstorage()
