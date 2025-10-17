// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Toggle details section
  const toggleBtn = document.getElementById('toggleDetails');
  const detailsDiv = document.getElementById('details');
  toggleBtn.addEventListener('click', function() {
    if(detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
      // Show details
      detailsDiv.style.display = 'block';
      populateDetails();
    } else {
      // Hide details
      detailsDiv.style.display = 'none';
    }
  });
  // Populate details with explanations
  function populateDetails() {
    detailsDiv.innerHTML = '<h3>Detailed Explanation</h3>' +
      '<p>Newton\'s Laws form the foundation of classical mechanics, describing how objects move and interact. The first law emphasizes inertia, the second relates force, mass, and acceleration, and the third describes action-reaction pairs.</p>';
  }
});
// Validation checks for JavaScript
// js: document.getElementById('law1') !== null
// js: document.getElementById('law2') !== null
// js: document.getElementById('law3') !== null
// js: document.getElementById('toggleDetails') !== null