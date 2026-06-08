let menuicon=document.querySelector(".ri-menu-line");
let navlinks=document.querySelector(".navlinks");
menuicon.addEventListener("click",()=>{
    navlinks.classList.toggle("active");
   if(navlinks.classList.contains("active")){
    menuicon.classList.replace("ri-menu-line","ri-close-line");

   }
   else{
    menuicon.classList.replace("ri-close-line","ri-menu-line");
   }

})
const cards=[{title:"Events",totalno:10,description:"Where innovation meets collaboration — join the experience.",destination:"#Events",view:"View Events" },{title:"Clubs",totalno:5,description:"Explore talents, share ideas, celebrate together.",view:"View Clubs", destination:"#Clubs"},{title:"Hackathons",totalno:10,description:"Where innovation meets collaboration — join the experience.",view:"View Hackathons",destination:"#Hackathons"},{title:"Companies",totalno:15,description:"Explore careers, build networks, and grow together.",view:"View Companies",destination:"#Companies"},{title:"visitors",totalno:14,description:"Discover the pulse of our campus — events at a glance.",view:"View Visitors",destination:"#Visitors"}];
const container=document.querySelector(".homepagecontent");
container.innerHTML=cards.map(card=>`
    <div class="homepagecard">
    <h1>${card.title}</h1>
    <h4>${card.totalno}</h4>
    <p>${card.description}</p>
   <a href="${card.destination}" class="btn">
            ${card.view}
        </a>
    </div>
    `).join("");
    const carddetails=[{newtitle:"workshops", newdescription:"Workshops: where curiosity meets practice.",button:"View All"},{newtitle:"Cultural Events", newdescription:"Discover the colors of campus life.",button:"View All"},{newtitle:"Sports Event", newdescription:"Where champions rise and campus cheers.",button:"View All"},{newtitle:"Technical Events", newdescription:"Technical events that spark innovation and growth.",button:"View All"}]
    const eventcards=document.querySelector(".eventcards");
    eventcards.innerHTML=carddetails.map(carddetail=>`
        <div class="Eventpagecard">
        <h1>${carddetail.newtitle}</h1>
         <p>${carddetail.newdescription}</p>
          <button class="button">${carddetail.button}</button>
          </div>

        `).join("");
const clubcarddetails=[{heading:"Web Development",description:"Crafting dynamic, responsive, and user‑friendly web experiences.",members:150,Totalevent:40,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Cybersecurity",description:"Cybersecurity: where vigilance meets innovation.",members:100,Totalevent:20,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Web Development",description:"Crafting dynamic, responsive, and user‑friendly web experiences.",members:150,Totalevent:40,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Data Science",description:"Unlocking insights, turning data into decisions.",members:100,Totalevent:60,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Android Development",description:"Creating smart, seamless apps for every screen.",members:190,Totalevent:30,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Artificial Intelligence",description:"Transforming machines into minds that learn and adapt.",members:200,Totalevent:75,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Gentech",description:"Driving innovation through science, technology, and creativity.",members:150,Totalevent:30,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Cloud Computing",description:"Scaling ideas seamlessly across the cloud.",members:100,Totalevent:44,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Software Development",description:"Designing, building, and refining solutions through code.",members:200,Totalevent:40,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Astronomy",description:"Exploring the cosmos, unlocking the mysteries of the universe.",members:150,Totalevent:40,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Hyper Lab GTC Members",description:"HyperLab GTC: Innovating together, empowering future leaders.",members:150,Totalevent:40,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Media Tech",description:"Blending creativity and technology to shape modern media.",members:300,Totalevent:80,button:"Join",backgroundimage:"webdevelopment.png"},{heading:"Bio Syner Gen",description:"Advancing life sciences through synergy and innovation.",members:150,Totalevent:40,button:"Join",backgroundimage:"webdevelopment.png"}]
const clubdetails=document.querySelector(".clubtechdetails");
clubdetails.innerHTML=


