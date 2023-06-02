console.log("JS file connected");

//variables

const flavours = document.querySelectorAll("#flavours object");
console.log(flavours);

function logId() {
    console.log(this.id);
}


//Event Listeners
flavours.forEach(flavour => flavour.addEventListener("click", logId));