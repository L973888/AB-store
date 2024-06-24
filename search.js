
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    search(query);
});

function search(query) {
    
    const data = [
   
    ];

    const results = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = ''; 

    if (results.length > 0) {
        const ul = document.createElement('ul');
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result;
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    } else {
        resultsContainer.textContent = 'No results found';
    }
}
