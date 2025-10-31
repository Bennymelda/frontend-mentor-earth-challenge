
let nested=[{
    name:'FLIGHT ENGINEER',
    sub :'ANOUSHEH ANSARI',
    des:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    image:'image/image-anousheh-ansari.png'
},{
    name:'CREW COMMANDER',
    sub :'HURLEY DOUGLAS ',
    des:'Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image:'image/image-douglas-hurley.png'
},{
   name:'CREW PILOT',
   sub:'VICTOR GLOVER',
   des:'Victor Glover Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
image:'image/image-victor-glover.png'
},{
    name:'MISSON SPECIALIST',
    sub:'NARK SHUTTLEWORTH',
    des:'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image:'image/image-mark-shuttleworth.png'
}]




function greats(index) {
  let build = nested[index];

  document.querySelector('.display').innerHTML = `
    <div class='lop'>
      <div class='js'> 
        <span class='ss'>${build.name}</span>
        <span class='a'>${build.sub}</span>
        <span class='word'>${build.des}</span>
      </div>

      <div class='box'>
        <button id='b' class='tabs ${index === 1 ? "active" : ""}'></button>
        <button id='i' class='tabs ${index === 0 ? "active" : ""}'></button>
        <button id='t' class='tabs ${index === 2 ? "active" : ""}'></button>
        <button id='s' class='tabs ${index === 3 ? "active" : ""}'></button>
      </div>
    </div>

    <div>
      <img src="${build.image}" class='ima'>
    </div>
  `;

  // add click handlers after rebuilding
  const buttons = document.querySelectorAll('.tabs');
  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      greats(i);
    });
  });
}

 greats(0);





