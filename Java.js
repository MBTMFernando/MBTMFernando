// Create and append elements dynamically

document.addEventListener("DOMContentLoaded", function () {
    // Create body
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.body.style.fontFamily = "Arial, sans-serif";

    // Title
    let title = document.createElement("h1");
    title.textContent = "ANIME WORLD";
    title.style.color = "blue";
    document.body.appendChild(title);

    // Description
    let description = document.createElement("p");
    description.textContent = "Anime World will provide you with inspiration and thought-provoking animated videos to enjoy and gain knowledge.";
    description.style.color = "brown";
    document.body.appendChild(description);

    // Subtitle
    let subtitle = document.createElement("h2");
    subtitle.textContent = "The officer is really a genius.";
    document.body.appendChild(subtitle);

    // Video Element
    let video = document.createElement("video");
    video.setAttribute("controls", "true");
    video.setAttribute("autoplay", "true");
    video.setAttribute("loop", "true");
    video.setAttribute("width", "640");
    video.setAttribute("height", "360");

    let source = document.createElement("source");
    source.setAttribute("src", "Videomp4.01.mp4");
    source.setAttribute("type", "video/mp4");

    video.appendChild(source);
    document.body.appendChild(video);

    // Like, Dislike, Subscribe Buttons
    let btnContainer = document.createElement("div");

    // Like Button
    let likeButton = document.createElement("button");
    likeButton.textContent = "👍 Like";
    likeButton.style.backgroundColor = "blue";
    likeButton.style.border = "none";
    likeButton.style.padding = "10px";
    likeButton.style.marginRight = "10px";
    likeButton.style.cursor = "pointer";
    
    let likeCount = document.createElement("span");
    likeCount.textContent = "0";
    
    // Dislike Button
    let dislikeButton = document.createElement("button");
    dislikeButton.textContent = "👎 Dislike";
    dislikeButton.style.backgroundColor = "royalblue";
    dislikeButton.style.border = "none";
    dislikeButton.style.padding = "10px";
    dislikeButton.style.marginRight = "10px";
    dislikeButton.style.cursor = "pointer";
    
    let dislikeCount = document.createElement("span");
    dislikeCount.textContent = "0";
    
    // Subscribe Button
    let subscribeButton = document.createElement("button");
    subscribeButton.textContent = "Subscribe";
    subscribeButton.style.backgroundColor = "red";
    subscribeButton.style.border = "none";
    subscribeButton.style.padding = "10px";
    subscribeButton.style.marginRight = "10px";
    subscribeButton.style.cursor = "pointer";

    let subscribeCount = document.createElement("span");
    subscribeCount.textContent = "0";

    btnContainer.appendChild(likeButton);
    btnContainer.appendChild(likeCount);
    btnContainer.appendChild(document.createTextNode(" Likes "));

    btnContainer.appendChild(dislikeButton);
    btnContainer.appendChild(dislikeCount);
    btnContainer.appendChild(document.createTextNode(" Dislikes "));

    btnContainer.appendChild(subscribeButton);
    btnContainer.appendChild(subscribeCount);
    btnContainer.appendChild(document.createTextNode(" Subscribers "));

    document.body.appendChild(btnContainer);

    // Feedback textarea
    let feedback = document.createElement("textarea");
    feedback.placeholder = "Please be kind enough to leave your feedback here";
    feedback.style.width = "100%";
    feedback.style.height = "100px";
    feedback.style.marginTop = "10px";

    document.body.appendChild(feedback);

    // Submit Button
    let feedbackButton = document.createElement("button");
    feedbackButton.textContent = "Click me";
    feedbackButton.style.backgroundColor = "rgb(80, 248, 37)";
    feedbackButton.style.border = "none";
    feedbackButton.style.padding = "10px";
    feedbackButton.style.cursor = "pointer";
    feedbackButton.style.fontSize = "16px";
    feedbackButton.style.marginTop = "10px";

    document.body.appendChild(feedbackButton);

    // Event Listeners for Buttons
    let likeCounter = 0;
    let dislikeCounter = 0;
    let subscribeCounter = 0;
    let isSubscribed = false;

    likeButton.addEventListener("click", function () {
        likeCounter++;
        likeCount.textContent = likeCounter;
    });

    dislikeButton.addEventListener("click", function () {
        dislikeCounter++;
        dislikeCount.textContent = dislikeCounter;
    });

    subscribeButton.addEventListener("click", function () {
        if (!isSubscribed) {
            subscribeCounter++;
            subscribeButton.textContent = "Subscribed ✔";
            subscribeButton.style.backgroundColor = "gray";
        } else {
            subscribeCounter--;
            subscribeButton.textContent = "Subscribe";
            subscribeButton.style.backgroundColor = "red";
        }
        isSubscribed = !isSubscribed;
        subscribeCount.textContent = subscribeCounter;
    });

    feedbackButton.addEventListener("click", function () {
        alert("Thank you for your feedback!");
    });
});