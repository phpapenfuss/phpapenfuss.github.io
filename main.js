function updateTextIfBlank(obj, textContent){
  if (!obj.textContent) {
    obj.textContent = textContent
  }
}

function updateName() {
  let personName = document.querySelector("input").value;
  let outputDiv = document.getElementById("output");
  if (!personName) {
    outputDiv.textContent = "";
  } else {
    updateTextIfBlank(outputDiv,`Hello there ${personName}!`);
  }
}

function promptForHelp() {
  let helpDiv = document.getElementById("Help");
  if (!helpDiv.textContent) {
    helpDiv.textContent = `Enter a name in the box`;
  } else {
    helpDiv.textContent = "";
  }
}

function makeFancy() {
  let button = document.getElementById("fancyButton");
  let intro = document.getElementById("Website");
  if (button.textContent === "Make Fancy") {
    intro.textContent = `Pearl's fancy website`;
    button.textContent = "Remove Fancy";
  } else {
    intro.textContent = `Pearl's website`;
    button.textContent = "Make Fancy";
  }
}
