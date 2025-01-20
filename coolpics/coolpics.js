
function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
function viewerTemplate(pic, alt) {
    return `<div class="viewer" id="image-viewer">
        <button class="close-viewer" id="close-btn">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
  }


  const gallery = document.querySelector(".gallery");
  gallery.addEventListener('click', viewHandler);


  function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target

    const clickedElement = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    const src = clickedElement.getAttribute('src');

    const srcParts = src.split('-');

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

    const BigPic = srcParts[0] + "-full.jpeg";

    const altText = "Full-size image";

	// insert the viewerTemplate into the top of the body element

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(BigPic, altText));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.getElementById('close-btn');
    closeButton.addEventListener('click', closeViewer);

}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function closeViewer() {
    const viewer = document.getElementById('image-viewer');
    if (viewer) {
        viewer.remove();
    }}


//grape soda is delioushious so tasty