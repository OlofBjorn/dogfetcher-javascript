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

        });
    }
        
