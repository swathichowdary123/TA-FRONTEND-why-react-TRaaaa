function addMovie() {
    var movieInput = document.getElementById("movieInput");
    var movieName = movieInput.value.trim();

    if (movieName !== "") {
        var movieList = document.getElementById("movieList");

        // Create a new list item
        var li = document.createElement("li");
        li.innerHTML = `
            ${movieName}
            <button onclick="toggleStatus(this)">To Watch</button>
        `;

        // Append the new list item to the movie list
        movieList.appendChild(li);

        // Clear the input field
        movieInput.value = "";
    }
}

// Function to toggle the status of a movie (To Watch / Watched)
function toggleStatus(button) {
    var li = button.parentNode;
    var status = button.textContent.trim();

    // Toggle the status
    if (status === "To Watch") {
        li.classList.remove("watched");
        button.textContent = "Watched";
    } else {
        li.classList.add("watched");
        button.textContent = "To Watch";
    }
}