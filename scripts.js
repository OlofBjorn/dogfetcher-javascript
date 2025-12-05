const dog = 'breeds';
const url = `https://dog.ceo/api/${dog}/image`;
const ugg = `https://dog.ceo/api/breeds/image/random`;


fetch(ugg)
    .then((response) => {

        console.log(response)
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });