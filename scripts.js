const url = `https://dinosaur-facts-api.shultzlab.com/dinosaurs`;

var container = document.getElementById('container');
var my_html = '';

var button = document.getElementById('MainButton')

function getDino(){
    fetch(url)
        .then((response) => {

            console.log(response)
            return response.json();
        })
        .then((json) => {
            console.log(json);
            const dinosaur = json.filter(item => {
            return item.Name === "Agathaumas"}
            )
            console.log(dinosaur)
            
            my_html = dinosaur
            document.getElementById("container").innerHTML = "Dino Fact!";
            
        });
    }
        button.addEventListener('click', getDino);
