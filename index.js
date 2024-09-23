const API_URL = 'https://dummyjson.com/users'
const lista = document.createElement("ul");
const app = document.querySelector("#app");


function testInput(input){
    if (input == "") app.innerHTML = "";
    else{
        fetch(`${API_URL}/search?q=${input}`)
        .then(res => res.json())
        .then((data) => {
            lista.innerHTML = "";
            data.users.forEach(user => {
                const line = document.createElement("li"); 
                line.append(document.createTextNode(`
                    ${user.firstName} 
                    ${user.lastName} ---------------
                    ${user.email} 
                    `));
                lista.appendChild(line);
            });
            app.innerHTML = (lista.outerHTML)
        });
    }
}
