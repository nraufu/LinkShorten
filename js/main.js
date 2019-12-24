//information to reach API
const apikey = 'b1f7a9900898448ab555cfe428bc04bf';
const url = 'https://api.rebrandly.com/v1/links';

//Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

//AJAX function
const shortenUrl = () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({
        destination: urlToShorten
    });
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('apikey', apikey);
        xhr.send(data);
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