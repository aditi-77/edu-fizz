// Function to pass name
function passName(collegeName) {
    document.getElementById("counselCollegeName").innerText = collegeName;
    document.getElementById("applyCollegeName").innerText = collegeName;
}

// Fetch college details from the JSON file
fetch('colleges.json')
  .then(response => response.json())
  .then(colleges => {
    const collegeCardsContainer = document.getElementById('college-cards');
    
    // Limit the number of colleges to 8
    const collegesToDisplay = colleges.slice(0, 8); // Get only the first 8 colleges
    
    collegesToDisplay.forEach(college => {
      // Create the HTML structure for each college card
      const cardHTML = `
        <div class="col-md-3 mb-4">
          <div class="card college-card position-relative">
            <img src="${college.image}" class="card-img-top" alt="${college.name}">
            <div class="card-body">
              <h5 class="card-title">${college.name}</h5>
              <p class="card-text">${college.location}</p>
              <a href="college.html" class="card-link" target="_blank">Visit Website</a>
              <div class="d-flex justify-content-between">
                <!-- Apply Button (Bottom-Left) -->
                <button class="btn btn-outline-primary position-absolute bottom-0 start-0 m-3" data-bs-toggle="modal" data-bs-target="#applyModal" onclick="passName('${college.name}')">Apply</button>
                <!-- Talk to Counselor Button (Bottom-Right) -->
                <button class="btn btn-outline-primary position-absolute bottom-0 end-0 m-3" data-bs-toggle="modal" data-bs-target="#counselorModal" onclick="passName('${college.name}')">Talk to Counselor</button>
              </div>
            </div>
          </div>
        </div>
      `;
      
      // Append the card HTML to the container
      collegeCardsContainer.innerHTML += cardHTML;

    });
  })
  .catch(error => {
    console.error("Error fetching college data:", error);
  });


  