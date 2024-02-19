// chatbot.js

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatLog = document.getElementById('chat-log');

    // Display user message in the chat log
    chatLog.innerHTML += `<div>User: ${userInput}</div>`;

    // Call the chatBot function and display its response
    const botResponse = chatBot(userInput);
    chatLog.innerHTML += `<div>ChatBot: ${botResponse}</div>`;

    // Clear the user input field
    document.getElementById('user-input').value = '';
}

function chatBot(userInput) {
    // Convert user input to lowercase for case-insensitivity
    userInput = userInput.toLowerCase();

    // Predefined responses
    const responses = {
        "river":"A river is a natural flowing watercourse, usually a freshwater stream, flowing on the Earth's land surface or inside caves towards another waterbody at a lower elevation, such as an ocean, sea, bay, lake, wetland, or another river. In some cases, a river flows into the ground or becomes dry at the end of its course without reaching another body of water. Small rivers can be referred to by names such as creek, brook, and rivulet. There are no official definitions for the generic term river as applied to geographic features,[1] although in some countries or communities, a stream is defined by its size. Many names for small rivers are specific to geographic location; examples are",
        "nature":"Nature is all the animals, plants, and other things in the world that are not made by people, and all the events and processes that are not caused by people. The most amazing thing about nature is its infinite variety. ... grasses that grow wild in nature.",
        "arun":"I LOVE YOU ARUN",
        "tree":"Trees are an essential resource for everyone. They provide habitat for various species, clean the air and produce oxygen. Besides, they give us shade in the summer, and their leaves can be used for numerous purposes, such as making perfumes, medicines, etc. Moreover, they help cool our atmosphere.",
        "animal":"An animal is a living creature such as a dog, lion, or rabbit, rather than a bird, fish, insect, or human being. He was attacked by wild animals. He had a real knowledge of animals, birds and flowers. Synonyms: creature, beast, brute More Synonyms of animal.",
        "environment":"Environment plays an important role in healthy living and the existence of life on planet earth. Earth is a home for different living species and we all are dependent on the environment for food, air, water, and other needs. Therefore, it is important for every individual to save and protect our environment.",
        "sonali":"hi ARUN",
        "what is environment":"The environment refers to the surroundings in which life exists on earth. Components like animals, humans, sunlight, water, trees, and air make up the environment. They are the earth's living and non-living components. Living organisms include trees, humans, and animals.",
        "about environment":"Environment means what surrounds us. It may be living or non-living things. It includes physical, chemical and other natural forces.",
        "Natural environment":"Environment includes the living and non-living things that an organism interacts with, or has an effect on it. Living elements that an organism interacts with are known as biotic elements: animals, plants, etc",
        "Environment":"Environment means what surrounds us. It may be living or non-living things. It includes physica",
        "hi":"hiiiii",
        "hii":"hiiiii",
        "hiii":"hiiiii",
        "hiiii":"hiiiii sir",
        "what is en":"The environment refers to the surroundings in which life exists on earth. Components like animals, humans, sunlight, water, trees, and air make up the environment. They are the earth's living and non-living components. Living organisms include trees, humans, and animals.",
        "hello": "Hi there! How can I help you?",
        "i am fine":"have a good day",
        "how are you": "i am fine an you, but thanks for asking!",
        "bye": "Goodbye! Have a great day.",
        "default": "I'm sorry, I don't understand that. Can you please try again?"
    };

    // Check if the user input matches any predefined responses
    for (const key in responses) {
        if (userInput.includes(key)) {
            return responses[key];
        }
    }

    // Default response if no match is found
    return responses["default"];
}