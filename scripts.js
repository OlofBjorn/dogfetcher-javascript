const url = `https://dinosaur-facts-api.shultzlab.com/dinosaurs`;

var container = document.getElementById('container');
var my_html = '';

var button = document.getElementById('MainButton')

button?.addEventListener('click', getDinoAlt);



function getDino(){
    fetch(url)
        .then((response) => {

            console.log(response)
            return response.json();
        })
        .then((json) => {
            console.log(json);
            const dinoSearch = document.getElementById("dinoSearch").value;
            const dinosaur = json.filter(item => {
            return item.Name === dinoSearch}
            )
            console.log(dinosaur)

            if(json.Description.length == 0){
                document.getElementById("dinoname").innerHTML = "ERROR!"
                document.getElementById("dinoinfo").innerHTML = "ERROR!"
            }
            else{
                const dinosaurArray = Array.from(dinosaur)
                document.getElementById("dinoname").innerHTML = dinosaurArray["Description"]
                document.getElementById("dinoinfo").innerHTML = "Dino Fact!";
            }
            

        });
    }

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
        
