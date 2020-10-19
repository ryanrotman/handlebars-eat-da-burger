$(function() {
    // Create new burger
    $("#newBurgerBtn").on("click", function(event) {
        event.preventDefault();
        const newBurger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log(`Created new burger: ${burger_name}`);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    // Update burger make/devoured status
    $(".devour-burger").on("click", function(event) {
        const id = $(this).data("id");
        const devoured = $(this).data("devoured");
        const newDevouredState = {
            devoured: devoured
        };
        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function() {
            console.log(`Changed burger status to ${devoured}!`);
            // Reload the page to get the updated list
            location.reload();
        });
    });

    // Delete a burger from the list
    $(".delete-burger").on("click", function(event) {
        const id = $(this).data("id");
        // Send the DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log(`Deleted burger: ID #${id}`)
            // Reload the page to get the updated list
            location.reload();
        });
    });
});