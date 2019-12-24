// Manipulates responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  // Displays either message depending on results
  if(res){
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  } else {
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  }
}

const renderRawResponse = (res) => {
    if (res.errors) {
        responseField.innerHTML = `<p>Sorry, couldn't format your URL.</p><p>Try again.</p>`
    } else {
        //add line breaks for JSON
        let structuredRes = JSON.stringify(res);
        structuredRes = `<pre>${structuredRes}</pre>`
        responseField.innerHTML = `${structuredRes}`;
    }
}

