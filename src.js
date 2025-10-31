let lastly=[{
    name:'LAUNCH VECHICLE',
    short:'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth"s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it"s quite an awe-inspiring sight on the launch pad!',
    image:'image/image-launch-vehicle-portrait.jpg'
},{
  name:'SPACEPORT',
  short:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch",
  image:'image/image-spaceport-portrait.jpg'  
},{
    name:'SPACE CAPSULE',
    short:" A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image:'image/image-space-capsule-portrait.jpg'
}]
console.log(lastly)
function stay(index) {
  let named = lastly[index];

  document.querySelector('.view').innerHTML = `
    <div class="vie">
      <div class='five'>
        <div class="jos">
          <button id='first' class='tas ${index === 0 ? "active" : ""}'>1</button>
          <button id='second' class='tas ${index === 1 ? "active" : ""}'>2</button>
          <button id='third' class='tas ${index === 2 ? "active" : ""}'>3</button>
        </div>

        <div class="six">
          <span class="the">THE TECHNOLOGY....</span>
          <span class="tec">${named.name}</span>
          <span class="pls">${named.short}</span>
        </div>
      </div>

      <div class="seven">
        <img src="${named.image}" class='tru'>
      </div>
    </div>
  `;

  // reattach the click listeners
  document.getElementById('first').addEventListener('click', () => stay(0));
  document.getElementById('second').addEventListener('click', () => stay(1));
  document.getElementById('third').addEventListener('click', () => stay(2));
}

// initialize
stay(0);



