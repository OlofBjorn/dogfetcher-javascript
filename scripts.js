const url = `https://dinosaur-facts-api.shultzlab.com/dinosaurs`;


function getDinoAlt(){
    fetch(url+"/random  ")
        .then((response) => {

            console.log(response)
            return response.json();
        })
        .then((json) => {
            console.log(json);
            document.getElementById("dinoname").innerHTML = json.Name
            document.getElementById("dinoinfo").innerHTML = json.Description;

            console.log(json.Name)
            
            


            if(json.Name === "Laosaurus"){
                document.getElementById("dinowarning").innerHTML = "Laosaurus!"
            }
            else{
                document.getElementById("dinowarning").innerHTML = ""
            }
            if(json.Name === "Linhevenato"){
                console.log(json.Name);
                getDinoAlt()
                return;
            }
        });
    }
        
