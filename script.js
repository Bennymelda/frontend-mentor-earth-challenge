let array =[{
    name:'MARS',
    story:'Don"t forget to pack your hicking boots. you"ll need them to tackle olympus moons, the tallest planetary moutains in our solarsystem. it"s two and half times the size of the Everest',
    set:'AVG.DISTANCE',
    num:'225 MIL.KM',
    sets:'EST.TRAVEL TIME',
    nums:'9 MONTHS'
},{
name:'MOON',
story:'See our planet as you have never seen it before.A perfect relaxing trip away to help regain prespective and come back refreshe. While you`re there, take in some history',
set:'AVG.DISTANCE',
 num:'384 MIL.KM',
 sets:'EST.TRAVEL TIME',
 nums:'3 DAYS'
},{

    name:'EUROPEA',
    story:'The smallest of the four Galilean moons orbiting jupiter, Europea is a winter lover"s dream. With an icy surface, its"s lover"s dream. with an icy surface, it"s perfect for a bit  of ice skating just dont forget your space suit!',
  set:'AVG.DISTANCE',
 num:'628 MIL.KM',
 sets:'EST.TRAVEL TIME',
 nums:'3 YEARS'

},{
    name:'TITAN',
    story:'The only moon know to have a dense atmosphere other than Earth, Titan is a home away from house (just a few hundred degree colder!). As a bonus, you get view of the saturn`s rimgs.',
    set:'AVG.DISTANCE',
 num:'1.6 BIL.KM',
 sets:'EST.TRAVEL TIME',
 nums:'7 YEARS'
}]


function great(index){
let item=array[index]
document.querySelector('.show').innerHTML=`
<div class='an'>
    <span class='cl'>${item.name}</span>
    <span class='stor'>${item.story}</span>
</div>
<br>
<hr>
<div class='nis'>
    <div class='bl'>
        <span>${item.set}</span>
        <span class='num'>${item.num}</span>
    </div>
    <div class='bl'>
     <span>${item.sets}</span>
        <span class='num'>${item.nums}</span>
    </div>
</div>`


document.getElementById('but').addEventListener('click', ()=>{
    great(1)
})
document.getElementById('bit').addEventListener('click', ()=>{
    great(0)
})
document.getElementById('bot').addEventListener('click', ()=>{
    great(2)
})
document.getElementById('buts').addEventListener('click', ()=>{
    great(3)
})


const tabs= document.querySelectorAll('.tab');
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        tabs.forEach(t =>
            t.classList.remove('active'))
            tab.classList.add('active')
    })
})

}



great(0)



