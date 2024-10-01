fetch('https://api.quotable.io/tags?sortBy = name')
.then(response => response.json())
.then(response => {
    const list = document.getElementById('list');
    let lis = '';
    response.forEach(res => {
        lis += `
        <div class = "container">
         ${res.name}
        </div>
        `;
    });
    list.innerHTML = lis
});

