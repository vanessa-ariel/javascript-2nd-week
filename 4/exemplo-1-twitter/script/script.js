
const inputTweet = document.getElementById("tweetComposerInput");
const button = document.querySelector(".tweet-composer__button");
const tweetsTimeline = document.querySelector(".tweets-timeline");

button.addEventListener("click", function(event){
        event.preventDefault();
        if(inputTweet.value === undefined ||
            inputTweet.value === null ||
            inputTweet.value === `` ||
            inputTweet.value === ` `){
                return false
            }

        const newTweetBox = document.createElement("div"); //CREATE AN EMPTY DIV
        // newTweetBox.innerHTML = inputTweet.value; //ADD TWEET TEXT TO DIV

        
        const div = document.createElement("div"); //CREATE AN EMPTY DIV
        div.className = "tweets-timeline__box"

        const date = new Date();
        const month = date.toLocaleString("pt-br", { month : "short" })
        const day = date.getDate();
        const counter = document.getElementById("tweetComposerCounter");
        const header = document.createElement("div"); //CREATE AN EMPTY DIV
            header.className = "tweets-timeline__header"
            header.innerHTML = `<span class="tweets-timeline__name">van.ariel</span>
            <span class="tweets-timeline__username">@vanss.ariel</span>
            <span class="tweets-timeline__date">20 de set</span>` //INSERT STRING INTO HEADER WHICH IS A DIV

        const newTweetP = document.createElement("p"); //CREATE AN EMPTY PARAGRAPH
        newTweetP.innerHTML = inputTweet.value; //INSERT STRING INTO PARAGRAPH 

        // const div = document.createElement("div"); //CREATE AN EMPTY DIV
        const footer = document.createElement("div"); //CREATE AN EMPTY DIV
        footer.className = "tweets-timeline__footer"
            footer.innerHTML = `<button class="tweets-timeline__delete-button button"> Excluir </button> `//INSERT STRING INTO footer WHICH IS A DIV

        div.appendChild(header) //INSERT HEADER ELEMENT INTO DIV
        div.appendChild(newTweetP) //INSERT PARAGRAPH ELEMENT INTO DIV
        div.appendChild(footer)

        //parentNode.insertBefore(newNode, referenceNode);
        tweetsTimeline.insertBefore(div, tweetsTimeline.childNodes[0]); 
        inputTweet.value = ""; //ASSIGN AN EMPTY VALUE TO INPUTTWEET


        const deleteButton = document.querySelector(".tweets-timeline__delete-button");
        deleteButton.addEventListener("click", function(e){
            e.preventDefault();
            div.remove();
                counter.innerHTML = 280;
            
        })
    })

    //keydown
    inputTweet.addEventListener("keyup",function(){
        const textBox = this;
        const maxLength = 280;
        const counter = document.getElementById("tweetComposerCounter");
        const availableCharacters = maxLength - textBox.value.length;

        //SUBTRACT THE TEXT TYPED FROM MAX LENGTH TO COUNT HOW MANY CHARACTERS ARE LEFT
        counter.innerHTML = availableCharacters 
        // console.log (`This is textbox.value.lenght - number of characters: ${textBox.value.length}`)
        // console.log(counter)
        // console.log(availableCharacters)

        if(availableCharacters <= 15){
            counter.style.color = "red";
        }else{
            counter.style.color = "white";
        }
        if(availableCharacters< 0){
            button.disabled = true;
            counter.style.color = "red";
        }else{
            counter.style.color = "white";
            button.disabled = false;
        }
        if(textBox.value.length > maxLength){
            textBox.value = textBox.value.substring(0, maxLength)
        }
    // textBox.value.style.color = "red"; // changes the input color
    })


    //FIX HOW TO RESET THE COUNTER WHEN CLICKING SUBMIT