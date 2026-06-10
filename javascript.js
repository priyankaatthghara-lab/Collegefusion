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
   <a href="${card.destination}" class="btn">${card.view}</a>
    </div>
    `).join("");
    const carddetails=[{newtitle:"workshops", newdescription:"Workshops: where curiosity meets practice.",button:"View All",destination:"workshops"},{newtitle:"Cultural Events", newdescription:"Discover the colors of campus life.",button:"View All",destination:"culturalevents"},{newtitle:"Sports Event", newdescription:"Where champions rise and campus cheers.",button:"View All",destination:"sportsevent"},{newtitle:"Technical Events", newdescription:"Technical events that spark innovation and growth.",button:"View All",destination:"technicalevents"}]
    const eventcards=document.querySelector(".eventcards");
    eventcards.innerHTML=carddetails.map(carddetail=>`
        <div class="Eventpagecard">
        <h1>${carddetail.newtitle}</h1>
         <p>${carddetail.newdescription}</p>
           <button class="newbutton"
        data-category="${carddetail.destination}">
    ${carddetail.button}
</button>
          </div>

        `).join("");
const clubcarddetails=[{heading:"Web Development",description:"Crafting dynamic, responsive, and user‑friendly web experiences.",members:"members:150",Totalevent:"Total events:40",button:"Join",backgroundimage:"webdevelopment.png",destination:"#Contact"},{heading:"Cybersecurity",description:"Cybersecurity: where vigilance meets innovation.",members:"members:100",Totalevent:"Total events:30",button:"Join",backgroundimage:"cybersecurity.png",destination:"#Contact"},{heading:"IOS Development",description:"Crafting dynamic, responsive, and user‑friendly web experiences.",members:"members:100",Totalevent:"Total events:40",button:"Join",backgroundimage:"iosdevelopment.png",destination:"#Contact"},{heading:"Data Science",description:"Unlocking insights, turning data into decisions.",members:"members:150",Totalevent:"Total events:60",button:"Join",backgroundimage:"datascience.png",destination:"#Contact"},{heading:"Android Development",description:"Creating smart, seamless apps for every screen.",members:"members:190",Totalevent:"Total events:30",button:"Join",backgroundimage:"webdevelopment.png",destination:"#Contact"},{heading:"Artificial Intelligence",description:"Transforming machines into minds that learn and adapt.",members:"members:200",Totalevent:"Total events:70",button:"Join",backgroundimage:"webdevelopment.png",destination:"#Contact"},{heading:"Gentech",description:"Driving innovation through science, technology, and creativity.",members:"members:200",Totalevent:"Total events:30",button:"Join",backgroundimage:"webdevelopment.png",destination:"#Contact"},{heading:"Cloud Computing",description:"Scaling ideas seamlessly across the cloud.",members:"members:120",Totalevent:"Total events:44",button:"Join",backgroundimage:"webdevelopment.png",destination:"#Contact"},{heading:"Software Development",description:"Designing, building, and refining solutions through code.",members:"members:200",Totalevent:"Total events:40",button:"Join",backgroundimage:"webdevelopment.png",destination:"#Contact"},{heading:"Astronomy",description:"Exploring the cosmos, unlocking the mysteries of the universe.",members:"members:150",Totalevent:"Total events:40",button:"Join",backgroundimage:"webdevelopment.png",destination:"#Contact"},{heading:"Hyper Lab GTC Members",description:"HyperLab GTC: Innovating together, empowering future leaders.",members:"members:300",Totalevent:"Total events:40",button:"Join",backgroundimage:"webdevelopment.png",destination:"#Contact"},{heading:"Media Tech",description:"Blending creativity and technology to shape modern media.",members:"members:225",Totalevent:"Total events:80",button:"Join",backgroundimage:"webdevelopment.png",destination:"#Contact"},{heading:"Bio Syner Gen",description:"Advancing life sciences through synergy and innovation.",members:"members:275",Totalevent:"Total events:40",button:"Join",backgroundimage:"webdevelopment.png",destination:"#Contact"}]
const clubdetails=document.querySelector(".clubtechdetails");
clubdetails.innerHTML=clubcarddetails.map(clubcarddetail=>`
    <div class="clubdetailcard" style="background-image:url('${clubcarddetail.backgroundimage}');">
    <div class="textbox">
    <h1>${clubcarddetail.heading}</h1>
    <p>${clubcarddetail.description}</p>
    <h3>${clubcarddetail.members}</h3>
    <h3>${clubcarddetail.Totalevent}</h3>
    <a href="${clubcarddetail.destination}" class="btn">${clubcarddetail.button}</a>
    </div>
    </div>

    `).join("");
    
    const hackathonscard=[{newtitle:"Quanta 2026", themetag:"Web Dev, AI, IoT, Cybersecurity", Date:"Date:7 April 2026",Duration:"Duration: 48hr",maxteamsize:"maximum: 4 members",minteamsize:" minimum: 1 member",prizepool:"Prize pool: 100000",destination:"#Contact",registrationstart:"4 April",registrationend:"14 April",organiser:"Organised by:Galgotias University-Qunatcraft", button:"Register"},{newtitle:"SparX 2026", themetag:"Web Dev, AI, IoT, Cybersecurity", Date:"Date:7 April 2026",Duration:"Duration: 48hr",organiser:"Organised by:Galgotias University-Qunatcraft",maxteamsize:"maximum: 4 members",minteamsize:"minimum: 1 member",destination:"#Contact",prizepool:"Prize pool: 100000",registrationstart:"4 April",registrationend:"14 April", button:"Register"},{newtitle:"Nexido",organiser:"Organised by:Galgotias University-Qunatcraft", themetag:"Web Dev, AI, IoT, Cybersecurity", Date:"Date:7 April 2026",Duration:"Duration: 48hr",destination:"#Contact",maxteamsize:"maximum: 4 members",minteamsize:"minimum: 1 member",prizepool:"Prize pool: 100000",registrationstart:"4 April",registrationend:"14 April", button:"Register"},{newtitle:"Fino-Hack 2026 ",organiser:"Galgotias University-Qunatcraft", themetag:"WebDev,AI,IoT,Cybersecurity", Date:"Date:7 April 2026",Duration:"Duration: 48hr",maxteamsize:"maximum: 4 members",minteamsize:"minimum: 1 member",prizepool:"Prize pool: 100000",registrationstart:"4 April",destination:"#Contact",registrationend:"14 April",organiser:"Organised by:Galgotias University-Qunatcraft", button:"Register"}]
    let hackathondetail=document.querySelector(".hackathonscard");
    hackathondetail.innerHTML=hackathonscard.map(hackathon=>`
        <div class="hackathoncarddetail">
        <h1>${hackathon.newtitle}</h1>
        <p>${hackathon.themetag}</p>
        <p>${hackathon.Date}</P>
        <p>${hackathon.Duration}</p>
      <div class="teamdetail">
      <p>${hackathon.maxteamsize}</p>
      <p>${hackathon.minteamsize}</p>
       </div>
       
      <h2>${hackathon.prizepool}</h2>
      <h2>${hackathon.organiser}</h2>
       <div>
       <p>Registration Starts: ${hackathon.registrationstart}</p>
<p>Registration Ends: ${hackathon.registrationend}</p></div>
      <a href="${hackathon.destination}" class="btn">${hackathon.button}</a>
     
        </div>
        `).join("");

const companies=[{img:"HCl.png",name:"HCL",scheduledate:"Schedule Date:12 June", Seat:"Available seat:10",button:"Book",destination:"#Contact"},{img:"Accenture.png",name:"Accenture",scheduledate:"Schedule Date:28 June", Seat:"Available seat:30",button:"Book"},{img:"amazon.png",name:"Amazon",scheduledate:"Schedule Date:17 July", Seat:"Available seat:3",button:"Book",destination:"#Contact"},{img:"wipro.png",name:"Wipro",scheduledate:"Schedule Date:8 August", Seat:"Available seat:19",button:"Book"},{img:"infosys.png",name:"Infosys",scheduledate:"Schedule Date:27 June", Seat:"Available seat:18",button:"Book",destination:"#Contact"},{img:"google.png",name:"Google",scheduledate:"Schedule Date:2 September", Seat:"Available seat:1",button:"Book",destination:"#Contact"},{img:"nvidia.png",name:"Nvidia",scheduledate:"Schedule Date:15 August", Seat:"Available seat:4",button:"Book",destination:"#Contact"},{img:"tcs.png",name:"TCS",scheduledate:"Schedule Date:27 August", Seat:"Available seat:40",button:"Book",destination:"#Contact"},{img:"microsoft.png",name:"Micosoft",scheduledate:"Schedule Date:5 July", Seat:"Available seat:3",button:"Book",destination:"#Contact"}];
let companyvisit=document.querySelector(".companiesvisit");
companyvisit.innerHTML= companies.map(company=>`
    <div class="companyvisit">
    <div class="image">
    <img src=${company.img}>
    </div>
    <div class="textbox">
    <h1>${company.name}</h1>
    <p>${company.scheduledate}</p>
    <p>${company.Seat}</p>
    <a href="${company.destination}" class="btn">${company.button}</a>
    </div>

    </div>
    `).join("");
    const visitors=[{photo:"vikrantrana.jpg",name:"Vikrant Rana",designation:" Partners from S.S. Rana & Co. (law firm)",date:"May 22, 2026",purpose:"Legal frameworks & industry collaboration"},{photo:"Jaya-kishori.jpg",name:"Jaya Kishori",designation:"Renowned spiritual orator & motivational speaker",date:"May 30, 2026",purpose:"Inspiration, values, student motivation, life guidance"},{photo:"Vineetasingh.jpg",name:"Vineeta Singh",designation:"CEO of Sugar Cosmetics, Shark Tank India Judge",date:"July 20, 2026",purpose:"Entrepreneurship, startup journey, women in business, career inspiration"},{photo:"abhishek-malhan.jpg",name:"Abhishek Malhan",designation:"YouTuber, Gamer, Musician, Bigg Boss OTT 2 Finalist",date:"Aug 11, 2026",purpose:"Digital content creation, entertainment industry, youth motivation, creative entrepreneurship"},{photo:"KartikAryan.jpg",name:"Kartik Aryan",designation:"Bollywood Actor",date:"Aug 7, 2026",purpose:"Entertainment industry insights, youth motivation, career inspiration"},{photo:"darshalraval.webp",name:"Darshan Raval",designation:"Playback Singer, Composer, Songwriter",date:"May 17, 2026",purpose:"Musical Concert & Interactive Session"}]
    const visitorcard=document.querySelector(".visitorscard");
    visitorcard.innerHTML=visitors.map(visitor=>`
        <div class="visitorcard">
    <div class="image" id="visitorimage">
    <img src=${visitor.photo}>
    </div>
    <div class="textbox">
    <h1>${visitor.name}</h1>
    <p class="designation"><span class="label">Designation:</span><span class="value">${visitor.designation}</span></p>
    <p><b>Date: </b>${visitor.date}</p>
    <p><b>Focus area: </b>${visitor.purpose}</p>
    </div>

    </div>
        `).join("")
const eventDetail={
    workshops:[{title:"A.I. Workshop",venue:"B Block",date:"17 June,2026",time:"3'o clock"},{title:"Web Development Workshop",venue:"A Block",date:"27 June,2026",time:"3'o clock"},{title:"Cybersecurity Workshop",venue:"C Block",date:"30 June,2026",time:"3'o clock"}],
    culturalevents:[{title:"🎭 Performing Arts",venue:"B Block",date:"17 June,2026",time:"3'o clock"},{title:"Music Events",venue:"B Block",date:"17 June,2026",time:"3'o clock"},{title:"🗣️ Literary & Expression",venue:"B Block",date:"17 June,2026",time:"3'o clock"},{title:"👑 Fashion & Personality",venue:"B Block",date:"17 June,2026",time:"3'o clock"},{title:"🌏 Cultural Celebrations",venue:"B Block",date:"17 June,2026",time:"3'o clock"}],sportsevent:[{title:"⚽ Outdoor Sports",venue:"Auditorium",date:"17 June,2026",time:"3'o clock"},{title:"🏸 Indoor Sports ",venue:"playground",date:"27 June,2026",time:"3'o clock"},{title:"🎮 E-Sports",venue:"new playground",date:"17 June,2026",time:"3'o clock"}],technicalevents:[{title:"💻 Coding & Programming",venue:"A.I. Block",date:"17 June,2026",time:"3'o clock"},{title:"🤖 AI & Emerging Technologies",venue:"A Block",date:"27 June,2026",time:"3'o clock"},{title:"🌐 Development",venue:"C Block",date:"17 June,2026",time:"3'o clock"},{title:"🔒 Cybersecurity",venue:"AI Block",date:"27 June,2026",time:"3'o clock"}]
}

   function renderEvents(category){

    const data = eventDetail[category];
    
    const modal =
document.querySelector(".event-modal");

modal.classList.add("show");
   document.querySelector(".event-details-container").innerHTML=data.map(event=>`
     <div class="event-card">

            <h2>${event.title}</h2>

            <p>${event.venue}</p>

            <p>${event.date}</p>

            <p>${event.time}</p>

        </div>
    `).join("");
  

}
document.querySelector(".ri-close-line")
.addEventListener("click",()=>{

    document
    .querySelector(".event-modal")
    .classList.remove("show");

});

document.querySelectorAll(".newbutton").forEach(button=>{
    button.addEventListener("click",()=>{
        const category=button.dataset.category;
        
        renderEvents(category);
    })
})
let input=document.querySelector(".inputype");

const inputeventcard=document.querySelectorAll(".Eventpagecard");
input.addEventListener("input",()=>{
    const searchtext=input.value.toLowerCase();
   
    inputeventcard.forEach(cardd=>{
        const title=cardd.querySelector("h1").textContent.toLowerCase();
        if(title.includes(searchtext)&&searchtext!==""){
            cardd.classList.add("active-card");
             cardd.scrollIntoView({
            behavior:"smooth",
            block:"center"
        })
        }
        else{
            cardd.classList.remove("active-card");
        }
       
    })
})
function sendemail(){

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("emailaddress").value,
        enrollmentnumber: document.getElementById("enrollmentnumber").value,
        phonenumber: document.getElementById("phonenumber").value,
        choice: document.getElementById("choice").value
    };

    emailjs.send(
        "service_e500516",
        "template_5f1u5tc",
        parms
    )
    .then(() => {
        alert("Form submitted successfully!");
    })
    .catch((error) => {
        console.error(error);
        alert("Failed to send email.");
    });

}
let form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
});