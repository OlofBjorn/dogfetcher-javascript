const dog = 'triceratops';
const url = `https://dog.ceo/breeds/${dog}/image`;
const ugg = `https://dog.ceo/api/breeds/image/${dog}/n02107142_13677.jpg`;
const ogg = `https://dinosaur-facts-api.shultzlab.com/dinosaurs`;
const egg = `https://dinoapi.brunosouzadev.com/api/dinosaurs/agathaumas`;
const agg = `https://vikiru.github.io/restasaurus/api/`



fetch(ogg)
    .then((response) => {

        console.log(response)
        return response.json();
    })
    .then((json) => {
        console.log(json);
        const dinosaur = json.filter(item => {
           return item.Name === "Agathaumas"}
        )
        console.log(dinosaur);
    });