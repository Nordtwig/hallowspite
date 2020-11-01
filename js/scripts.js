const actionField = document.querySelector(".action-field");
const submitButton = document.querySelector(".btn-submit");
const textCrawl = document.querySelector(".text-crawl");

submitButton.addEventListener("click", event => {
    event.preventDefault();
    CheckInput(actionField.value);
});

function CheckInput(input) {
    actionField.value = "";
    if (input.match(/^[A-Za-z ]+$/)) {
        const words = input.split(" ");
        if (words.length >= 2)
            DetermineAction(words[0].toLowerCase(), words[1].toLowerCase());
        else
            console.log("You need to type an Action and a Noun!");
    } else {
        console.log("You put something else in there, didn't you?");
    }
}

function DetermineAction(action, noun) {
    switch (action) {
        case "use":
            const target = DetermineItem(noun);
            break;
        default:
            console.log("I don't know what that means...");
            break;
    }
}

function DetermineItem(item) {
    switch (item) {
        case "key":
            injectHTML("You open the gate!");
            break;
    
        default:
            console.log("I don't have that item!");
            break;
    }
}

function injectHTML(string) {
    textCrawl.innerHTML += `
        <p>${string}</p>
    `;
}

