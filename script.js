function showTopic() {

    let topic = document.getElementById("topic").value;

    if(topic==""){
        document.getElementById("result").innerHTML =
        "⚠️ Please enter a topic.";
        return;
    }

    let output = `
    <h2>🎬 YouTube Title</h2>
    <p>Everything You Need to Know About ${topic}</p>

    <h2>📝 Script</h2>
    <p>
    Welcome! Aaj hum ${topic} ke baare me jaanenge.
    Is video me hum easy language me important points cover karenge.
    </p>

    <h2>📱 Instagram Caption</h2>
    <p>
    Learn ${topic} in simple language. Save this post and share with friends.
    </p>

    <h2>🏷️ Hashtags</h2>
    <p>
    #${topic.replace(/\s+/g,"")}
    #Education
    #AI
    #Nyunot
    #Learning
    </p>
    `;

    document.getElementById("result").innerHTML = output;
}

function clearResult(){
    document.getElementById("topic").value="";
    document.getElementById("result").innerHTML="";
}