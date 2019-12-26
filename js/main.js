//information to reach API
const apikey = 'b1f7a9900898448ab555cfe428bc04bf';
const url = 'https://api.rebrandly.com/v1/links';

//Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

//AJAX function
const shortenUrl = async () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json',
				'apikey': apikey
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
}

const displayShortUrl = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);