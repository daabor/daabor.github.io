(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        setTimeout(updateClock, 0);
        setInterval(updateClock, 1000);
        
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            
            if (h > 12) {
                h = h - 12;
                
            }
            if (h < 10) {
                h = "0" + h;
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ":" + m + ":" + s;
            
        };
        
    });
})();
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    
    e.innerHTML = Number(0).toFixed(2) + " &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        
        let linn = document.getElementById("linn");
        let present = document.getElementById("v1");
        let morning = document.getElementById("morning");
        let afternoon = document.getElementById("afternoon");
        let contactless = document.getElementById("v2");
        
        let name = document.getElementById("fname").value;
        let surname = document.getElementById("lname").value;
        
        let re = /[0-9]/;
        
        let price = 0;
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
      
        }else if (!(morning.checked == afternoon.checked) == false) {
            
            alert("Please select the delivery window!");
            
                 
        }else if(re.test(name)) {
            
            alert("Name should not contain numbers.");
                 
        }else if (re.test(surname)) {
               alert("Surname should not contain numbers.");   
                 
        }else{
            
            if (linn.value === "tln"){
                price += 0;
                
            }
            else if (linn.value === "prn"){
                price += 3;
                
            }
            else{
                price += 2.5;
                
            }
            
            
            if (present.checked) {
                price += 5;
                }
            if (contactless.checked) {
                    price ++;
                }
              
            e.innerHTML = price.toFixed(2) + " &euro;";
            
        }
        
        
        console.log("Tarne hind on arvutatud");
    

    }

/* Task 6 forms*/ 
    


// map

let mapAPIKey = "Ak9TZvAmoCIppw0ec_6yEiPLPsiO4LMoESz5GaCRH-bnU_7sLyKI4GvDYyf5mudW";

let map, infobox1, infobox2;

function GetMap() {
    
    "use strict";

    let universityPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );
    let newPoint = new Microsoft.Maps.Location(
        58.52568, 
        26.67613
    );
    
    let centerPoint = new Microsoft.Maps.Location(
        58.453131, 
        26.697591
    );
    
    infobox1 = new Microsoft.Maps.Infobox(universityPoint,{
            title: "Tartu Ülikool",
            description: 'Leading university in the Baltics',
            visible: false
        });
    
    
    infobox2 = new Microsoft.Maps.Infobox(newPoint,{
            title: "Ice Age Center",
            description: 'Ice Age Center near Tartu',
            visible: false
        });
    
    

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        zoom: 10,
        center:  centerPoint,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: false
    });
    
    infobox1.setMap(map);
    infobox2.setMap(map);
    
    let pin1 = new Microsoft.Maps.Pushpin(universityPoint, {
            title: 'Tartu Ülikool'
            
        });
    
    let pin2 = new Microsoft.Maps.Pushpin(newPoint,{
        title: 'Ice Age center',
        description: 'Ice Age Center near Tartu'
    });
    
    
    
    
    

    map.entities.push(pin1);
    map.entities.push(pin2);
    Microsoft.Maps.Events.addHandler(pin1, 'click', pin1Clicked);
    Microsoft.Maps.Events.addHandler(pin2, 'click', pin2Clicked);
}

function pin1Clicked(e) {
        
        infobox1.setOptions({
            visible: true
        });   
        
    }

function pin2Clicked(e) {
        
        infobox2.setOptions({
            visible: true
        });   
        
    }


