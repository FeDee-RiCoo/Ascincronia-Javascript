function fetchUser() {
    fetch('data/user.json') // recuperiamo il file user.json --> come url usa il percorso relativo che include il nome del file
    // ricostruiamo user.json --> http://server:porta/percorso relativo allo script http://localhost:5500/user.json
        .then(response => {
            console.log(`Risposta ricevuta: ${JSON.stringify(response, null, 2)}`);
            return response.json();
        },
        error => {
            console.warn("Error in response:", error);
        })
        .then(userList => {
            const filteredUser = userList.filter(user => user.age < 30);
            console.log(`Risposta ricevuta: ${JSON.stringify(filteredUser, null, 2)}`);
            console.log(JSON.stringify(filteredUser, null, 2));

            const resultSection = document.getElementById("result");
            resultSection.innerHTML = `<ul>
                ${filteredUser.map(user => `<li>${user.name} ${user.surname}, Età: ${user.age}, Username: ${user.username}</li>`).join('')}
            </ul>`
        })
        .catch(error => {
            console.warn("Error fetching user:", error);
        })
        .finally(() => {
            console.log("Fetch attempt finished.");
        });
}

fetchUser();