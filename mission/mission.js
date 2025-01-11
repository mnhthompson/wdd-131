


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

document.querySelector("select").addEventListener("change", changeTheme);
