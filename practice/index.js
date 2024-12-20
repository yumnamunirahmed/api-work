let apiData = fetch("https://www.freetestapi.com/api/v1/movies");
apiData
    .then((response) => response.json())  
    .then((data) => {
        console.log(data);
        let card = data.map((details) => {
            return `
                <div class="card">
                    <img src="${details.poster}" class="img"/>
                    <h1>${details.title}</h1> 
                    <p><b>Rating:</b> ${details.rating}</p>
                    <p><b>Release year:</b> ${details.year}</p>  
                </div>
            `;
        });
        
        let box = document.getElementById("box");
        box.innerHTML = card.join("");  // Join to merge array into string
    })
    .catch((error) => {
        console.log("Oops! There is an error.", error);
    });
