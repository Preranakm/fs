const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const predefinedQA = {
  "How are you?": "I'm good, thank you!",
  "What is your name?": "My name is ChatBot.",
  "How was your day?": "Hope you had a great day!",
};

function sendMessage() {

  const userMessage = userInput.value.trim();

  if(userMessage === "") return;

  displayMessage(userMessage,"user");

  const answer = predefinedQA[userMessage];

  if(answer){
      displayMessage(answer,"bot");
  }else{
      displayMessage("I'm sorry, I don't understand.","bot");
  }

  userInput.value="";
}

function displayMessage(message,sender){

  const messageDiv = document.createElement("div");

  messageDiv.classList.add("message");

  if(sender === "user"){
      messageDiv.classList.add("user");
  }else{
      messageDiv.classList.add("bot");
  }

  messageDiv.textContent = message;

  chatBox.appendChild(messageDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
}