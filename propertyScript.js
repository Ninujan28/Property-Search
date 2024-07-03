$(document).ready(function() {
    $("button").on("click", function() {
      try {
        $(this).attr('disabled', true);
        
        var propertyIdToAdd = $(this).closest("p").attr("id");
        var myFavouriteProperty = JSON.parse(localStorage.getItem("favProperty")) || [];
  
        // Check if the property ID is already in the favourite list
        if (!myFavouriteProperty.includes(propertyIdToAdd)) {
          // Add the property ID to the list of favourites
          myFavouriteProperty.push(propertyIdToAdd);
          // Update the local storage with the updated favourite list
          localStorage.setItem("favProperty", JSON.stringify(myFavouriteProperty));
        } else {
          console.log("Property is already in favourites.");
        }
      } catch (e) {
        if (e === "QUOTA_EXCEEDED_ERR") {
          console.log("Error: Local Storage limit exceeds.");
        } else {
          console.log("Error: Saving to local storage.");
        }
      }
    });
  });
  