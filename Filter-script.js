var radios = document.querySelectorAll(".categories input");
    for(var i = 0; i < radios.length; i++) {
        radios[i].addEventListener("change", filter);
    }
          var radios = document.getElementsByName("operation");
          for(var i = 0; i < radios.length; i++) {
            radios[i].addEventListener("change", filter);
          }
          filter();
          function filter() {
            var i, j;
          
            // Choose an operation
            var operation = document.getElementById("op-inter").checked ? "union" : "intersection";
          
            // Get the selected categories
            var radios = document.querySelectorAll(".categories input");
            var categories = [];
            var c;
            for(i = 0; i < radios.length; i++) {
              if(radios[i].checked) {
                c = radios[i].value;
                categories.push(c);
              }
            }
          
            // Apply the filter
            var items = document.querySelectorAll(".filterDiv");
            var item, show;
            for(i = 0; i < items.length; i++) {
              item = items[i];
              if(categories.length == 0) {
                show = true;
              } else if(operation == "inter") {
                // Union: Only one of the categories needs to exist
                show = false;
                for(j = 0; j < categories.length; j++) {
                  if(item.classList.contains(categories[j])) {
                    show = true;
                    break;
                  }
                }
              } else {
                // Intersection: All of the categories must apply
                show = true;
                for(j = 0; j < categories.length; j++) {
                  if(!item.classList.contains(categories[j])) {
                    show = false;
                    break;
                  }
                }
              }
          
              if(show) {
                item.classList.add("show");
              } else {
                item.classList.remove("show");
              }
            }
          }
            var radios = document.querySelectorAll(".categories input");
            for (var i = 0; i < radios.length; i++) {
                radios[i].addEventListener("mousedown", function() {
                    if (this.checked) {
                        this.checked = false;
                        showAllItems(); // assuming you have a showAllItems function
                    }
                });
            }
// Add an event listener to the reset button
document.querySelector('.reset-button').addEventListener('click', function() {
  // Remove the 'show' class from all filterable elements
  var items = document.querySelectorAll('.filterDiv');
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove('show');
  }
  
  // Add the 'show' class to all filterable elements
  for (var i = 0; i < items.length; i++) {
    items[i].classList.add('show');
  }
});
// Add an event listener to the reset button
document.querySelector('.reset-button').addEventListener('click', function() {
  // Remove the 'show' class from all filterable elements
  var items = document.querySelectorAll('.filterDiv');
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove('show');
  }
  
  // Add the 'show' class to all filterable elements
  for (var i = 0; i < items.length; i++) {
    items[i].classList.add('show');
  }
  
  // Reset the filter by removing the 'checked' attribute from all radio buttons
  var radios = document.querySelectorAll('.categories input');
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
});




const elements = document.querySelectorAll('.filterDiv');

elements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    elements.forEach((otherElement) => {
      if (otherElement !== element) {
        otherElement.style.opacity = '0.6';
      }
    });
  });

  element.addEventListener('mouseout', () => {
    elements.forEach((otherElement) => {
      otherElement.style.opacity = '1';
    });
  });
});