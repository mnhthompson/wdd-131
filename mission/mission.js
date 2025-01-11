


function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
const themeSelector = document.querySelector("select").value;
console.log("Theme" + themeSelector);

if (themeSelector === "Dark"){
    document.body.classList.add("dark");
    document.querySelector("img").setAttribute("src", "./dark_logo.png");
}
else {
    document.body.classList.remove("dark");
    document.querySelector("img").setAttribute("src", "./logo.webp");
}
}

document.querySelector("select").addEventListener("change", setTheme);
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
//themeSelector.addEventListener('change', changeTheme);







//8.changeTheme function should do the following:

//1.Check to see what option is currently 
//selected on our theme selector.


//2. If it is "dark" then add the dark class to body and change
//the logo image src to the white logo.

//3.If it is not "dark" then remove the dark class
//from the body element and change the logo image src
//for the logo to the blue logo.