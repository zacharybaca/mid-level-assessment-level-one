// Grab button element
let changeButton = document.getElementById('changeButton');

function changeTextContent(elementId, newText) {
  // Grab Element by Id
  let selectedElement = document.getElementById(elementId);

  // Set innerHTML to Equal new text
  selectedElement.textContent = newText;
}

// Add Event Listener to button
changeButton.addEventListener('click', (e) => {
    changeTextContent('heading', "I Changed The Heading!!")
});
// Test the function with different element IDs and new text content
changeTextContent("heading", "Welcome to my website!");
changeTextContent("paragraph", "This is a sample paragraph.");
