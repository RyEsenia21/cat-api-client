const button = document.querySelector('.btn');
const image = document.querySelector('.image img');
const url = 'https://api.thecatapi.com/v1/images/search?format=json';

async function fetchHandler () {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0 && data[0].url) {
            image.src = data[0].url;
        } else {
        console.log("ошиПка да");
        }

    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', () =>
{
    fetchHandler ();
})