// Function to open the side menu
function handleOpenMenu() {
  const sideMenu = document.getElementById("sidemenu");
  sideMenu.style.width = "50%";
  document.getElementById("page-body").classList.add("blur-sm");
  document.getElementById("openmenu").classList.remove("flex");
  document.getElementById("openmenu").classList.add("hidden");
}

// Function to close the side menu
function handleCloseMenu() {
  const sideMenu = document.getElementById("sidemenu");
  sideMenu.style.width = "0";
  document.getElementById("page-body").classList.remove("blur-sm");
  document.getElementById("openmenu").classList.remove("hidden");
  document.getElementById("openmenu").classList.add("flex");
}

// Adding click event listeners to the open and close buttons
document.getElementById("openmenu").addEventListener("click", handleOpenMenu);
document.getElementById("closemenu").addEventListener("click", handleCloseMenu);
