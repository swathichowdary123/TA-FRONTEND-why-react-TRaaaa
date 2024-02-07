function createElement(tag, attributes, ...children) {
    const element = document.createElement(tag);

    // Add attributes
    if (attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    // Add children
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });

    return element;
}

// Define movie data
const movies = [
    { title: "The Shawshank Redemption", director: "Frank Darabont", watched: true },
    { title: "The Godfather", director: "Francis Ford Coppola", watched: false },
    { title: "The Dark Knight", director: "Christopher Nolan", watched: true },
    { title: "Pulp Fiction", director: "Quentin Tarantino", watched: false }
];

// Function to render movie list
function renderMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieItem = createElement('li', { class: 'movie' },
            createElement('span', { class: 'movie-title' }, movie.title),
            createElement('span', { class: 'movie-director' }, `Directed by: ${movie.director}`),
            createElement('button', { class: 'watched-btn' }, movie.watched ? 'Watched' : 'To Watch'),
        );

        movieList.appendChild(movieItem);
    });
}

// Function to toggle movie watched status
function toggleWatchedStatus(event) {
    if (event.target.tagName === 'BUTTON') {
        const movieItem = event.target.closest('.movie');
        const index = Array.from(movieItem.parentElement.children).indexOf(movieItem);

        movies[index].watched = !movies[index].watched;
        renderMovies(movies);
    }
}

// Event listener for button click
document.getElementById('movie-list').addEventListener('click', toggleWatchedStatus);

// Initial render
renderMovies(movies);