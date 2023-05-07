async function getUsers() {
    alert("getting result")
    var endpoint = '/app/rps_random_result';
    try {
        let res = await fetch(endpoint);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    let html = `<div>${users}</div>`;
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();