document.getElementById("More-links").addEventListener("click", function() {
    // Get the container
    const container = document.getElementById("links-container");

    // Clone the first row
    const firstRow = container.querySelector(".link-row");
    const newRow = firstRow.cloneNode(true);

    // Clear the input value in the cloned row
    newRow.querySelector("input").value = "";

    // Append the new row
    container.appendChild(newRow);
});