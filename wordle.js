//PREVIOUS CODE USING API
// let dictionary;
// let correctWord;
// let realHint;
// let randomindex;
// let currentState;


// async function loadDictionary() {
//     const startButton = document.getElementById("greener");
//     startButton.disabled = true;
//     startButton.textContent = "Loading...";

    
//     const res = await fetch("https://api.masoudkf.com/v1/wordle", {
    
//         headers: {
//             "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
//         },
//     });

//     if (res.ok) {
//         const data = await res.json();
//         dictionary = data.dictionary;
//         randomWord();
//         startButton.disabled = false;
//         startButton.textContent = "Start Over";
//     } else {
//         console.error("An error occurred:", res.statusText);
//         return [];
//     }

// }


// // Call the function when needed
// loadDictionary();

// function randomWord(){
//     randomindex = Number.parseInt(Math.random()*dictionary.length);
    
//     correctWord = dictionary[randomindex].word.toUpperCase();
//     realHint = dictionary[randomindex].hint;
    
   
// }

// function currentStateset(){
//     const chosenHint = realHint;
//     const chosenWord = correctWord; 
//     currentState = {
//     word:chosenWord,
//     hint:chosenHint,
//     grid: Array(4)
//         .fill()
//         .map(()=>Array(4).fill('')),
//         currentRow:0,
//         currentCol:0,
// };
// }
// function updateState(){
    
//     for (let i =0; i<currentState.grid.length;i++){
//         for (let j = 0; j < currentState.grid[i].length;j++)
//         {
//             const cell = document.getElementById(`cell${i}${j}`);
//             cell.textContent = currentState.grid[i][j];
            
//         }


// }
// }
// function showWord(word){
//     const row = currentState.currentRow;

//     for (let i = 0; i< 4; i++){
//         const cell = (document.getElementById(`cell${row}${i}`));
//         const letter = (cell.textContent);

//         if(letter.toUpperCase() === currentState.word[i].toUpperCase()){
//             cell.classList.add('right');
//         }else if (currentState.word.includes(letter.toUpperCase())){
//             cell.classList.add('wrong');
//         }else{
//             cell.classList.add('empty');
//         }

//     }
//     const win = currentState.word.toUpperCase() === word.toUpperCase();

//     const end = currentState.currentRow === 3;

//     if (win) {
//         const prevCell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol - 1}`);
//         prevCell.style.border = "1px solid grey"
//         displayMessageWin(`Congrats You Guessed &nbsp;${currentState.word.bold()}.`);
        
//         return;
//       } else if (end) {
//         const prevCell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol - 1}`);
//         prevCell.style.border = "1px solid grey";
       
//         displayMessagelose(`Nice try. The word was &nbsp; ${currentState.word.bold()}.`);
//       }
      
// }
// function displayMessageWin(message) {
//     const messageContainer = document.getElementById("message-cont");
//     const gridContainer = document.getElementById("cell");
//     const messageElement = document.createElement("div");

//     const buttonStartOverWin = document.getElementById('start-buttonres')
//     buttonStartOverWin.addEventListener("click",function(){
        
//         for (let i = 0; i < containers.length; i++) {

     
//             containers[i].style.display = 'none';
            
//         }
        
//         restarter();
        
//     });
//     // Remove all previous child elements
//     const containers = messageContainer.children;
//     for (let i = 0; i < containers.length; i++) {

  
//         containers[i].style.display = 'none';
        
//     }
//     for (let i =0; i<currentState.grid.length;i++){
//         for (let j = 0; j < currentState.grid[i].length;j++)
//         {
//             const cell = document.getElementById(`cell${i}${j}`);
//             cell.style.display = "none";
            
//         }


// }
//     const gameBoard = document.getElementById("winner-use");
//     gameBoard.style.display = "none";
//     const winScreen = document.getElementById("win");
//     winScreen.style.display = "flex";
//     messageElement.innerHTML=message;
//     messageElement.style.marginTop='140px';
//     messageElement.style.paddingTop='20px';
//     messageElement.style.paddingBottom='20px';
//     messageElement.style.width='100%';
//     messageElement.style.backgroundColor='grey';

//     messageContainer.appendChild(messageElement);
    
// }
// function displayMessagelose(message) {
//     const messageContainer = document.getElementById("message-cont");
//     const messageElement = document.createElement("div");
//     const loseCont = document.getElementById("lose");
//     loseCont.style.display = "flex";
//     const containers = messageContainer.children;
//     for (let i = 0; i < containers.length; i++) {
//         containers[i].style.display = 'none';
    
//     }
//     loseCont.style.display = "flex";
//     loseCont.innerHTML=message;
// }
  
// function letterCheck(key){
//     return key.length === 1 && key.match(/[a-z]/i);
// }

// function addLetter(letter){
//     if (currentState.currentCol === 4){
//         // currentState.currentRow++;
//         // currentState.currentCol =0;
//         return;
//     }
//     else{
//         // Revert border of previous cell if it exists
//         if (currentState.currentCol > 0) {
//             const prevCell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol - 1}`);
//             prevCell.style.border = "1px solid grey";
//         }

//         currentState.grid[currentState.currentRow][currentState.currentCol] = letter;
//         const cell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol}`);
//         cell.style.border = "2px solid rgb(119, 80, 6)";
//         currentState.currentCol++;

//         // Revert border of last cell in column if on last row
//         if (currentState.currentCol === 1 &&(currentState.currentRow === 1||currentState.currentRow === 2||currentState.currentRow === 3||currentState.currentRow === 4)) {
//             const lastCell = document.getElementById(`cell${currentState.currentRow-1}${3}`);
//             lastCell.style.border = "1px solid grey";
   
//         }
//     }
// }
// function deleteLetter(){
//     if (currentState.currentCol === 0){
//         return;
//     }
//     else{
//         // currentState.grid[currentState.currentRow][currentState.currentCol-1] = '';
//         // currentState.currentCol--;
//         if (currentState.currentCol > 0) {
//             const prevCell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol - 1}`);
//             prevCell.style.border = "2px solid rgb(119, 80, 6)";
//         }

//         currentState.grid[currentState.currentRow][currentState.currentCol-1] = '';
//         if(currentState.currentCol <4){
//         const cell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol}`);
//         cell.style.border = "1px solid grey";
//         }
//         currentState.grid[currentState.currentRow][currentState.currentCol-1] = '';
//         currentState.currentCol--;
//     }
// }
// function wordChecker(word){
  
//     return  dictionary.includes(word);
// }
// function usertpying(){
//     const prevCell = document.getElementById(`cell${0}${0}`);
//     prevCell.style.border = "2px solid rgb(119, 80, 6)";
//     document.body.onkeydown=(e)=>{
//         const key = e.key;
//         if (key === 'Enter')
//         {
//             if (currentState.currentCol === 4){
//                 const word = currentWord();
//                 showWord(word);
//                 currentState.currentRow++;
//                 currentState.currentCol = 0;
                
//             }
//                 else{
//                     window.alert("You Must Complete Your Guess.");
//                 }

//             }
        
//         if (key === 'Backspace')
//         {
//             deleteLetter();

//         }

//         if(letterCheck(key)){
            
//             addLetter(key);
//         }

//         updateState();

//     };
// }

// function currentWord(){

//     return currentState.grid[currentState.currentRow].reduce((prev,curr) => prev+curr);
// }


// function drawCell(container,row,col,letter=''){
//     const cell = document.createElement('div');
//     cell.className='cell';
//     cell.id = `cell${row}${col}`;
//     cell.textContent = letter;
//     container.appendChild(cell);
//     return cell;
// }


// function drawGrid(container)
// {
//     const grid = document.createElement('div');
//     grid.className = 'grid';
//     for (let i =0; i<4;i++){
//         for (let j = 0; j <4;j++){
//             drawCell(grid,i,j);
//         }
//     }
//     container.appendChild(grid);
// }


// async function loader(){
//     await loadDictionary();
//     main();

// }

// function inGame(){
//     randomWord();
//     currentStateset();
//     usertpying();
// }

// function restarter() {
//     // Clear the game board
//     for (let i = 0; i < currentState.grid.length; i++) {
//         for (let j = 0; j < currentState.grid[i].length; j++) {
//             const cell = document.getElementById(`cell${i}${j}`);
//             cell.style.display = "grid";
//             cell.textContent = "";
//             cell.classList.remove("right");
//             cell.classList.remove("wrong");
//             cell.classList.remove("empty");
//             cell.style.border="1px solid grey";
//         }
//     }
//     const messageContainer = document.getElementById("message-cont");
//     const containers = messageContainer.children;
//     for (let i = 0; i < containers.length; i++) {
//         containers[i].style.display = 'none';
      
//     }

//     inGame();
// }
// async function main() {
//     const buttonStartOver = document.getElementById('start-button')
//     buttonStartOver.addEventListener("click",function(){
//         buttonStartOver.disabled=true;
//         restarter();
//         buttonStartOver.disabled=false;
//         buttonStartOver.blur();
//         buttonStartOver.addEventListener("keydown", function(event) {
//             if (event.key === "Enter") {
//               event.preventDefault();
//               buttonStartOver.blur(); // Remove focus from the button
//             }
//           });
//     });
//     const game = document.getElementById('game');
//     const buttonHint = document.getElementById("question-symbol");
//     const messageContainer = document.getElementById("message-cont");
//     const hintElement = document.createElement("div");
//     hintElement.id = "hint";
//     hintElement.style.display = "none";
//     messageContainer.appendChild(hintElement);
//     hintElement.style.display = "none";
//     buttonHint.addEventListener("click", function() {
//       const hintMessage = `Hint: ${currentState.hint}`;
    
//       if (hintElement.style.display === "none") {
//         hintElement.textContent = hintMessage;
//         hintElement.style.display = "flex";
//       } else {
   
//         hintElement.style.display = "none";
//       }
//     });
    
//     const inverter = document.getElementById("moon-symbol");
//     const body = document.querySelector("body");
//     const winner= document.getElementById("win");
   
//     inverter.addEventListener("click",function(){
//         if (body.classList.contains("dark-mode")) {
//         body.classList.remove("dark-mode");
      
//      }  else {
//         body.classList.add("dark-mode");
    
//     }
        
//     });

//     const playInfo = document.getElementById("instructions");
//     const boardContainers = document.getElementsByClassName("grid");
//     const info = document.getElementById("instruc-symbol");
//     const startButton = document.getElementById('start-button');
//     const keyword = document.getElementById('current-key');
//     const winShift= document.getElementById("win");
//     playInfo.style.display='none';
//     info.addEventListener("click", function(event) {
//         if(event.type ==="click"){
//         if (playInfo.style.display === "none") {
//             playInfo.style.display = "block";

//         for (let i = 0; i < boardContainers.length; i++) {
//             boardContainers[i].style.marginRight = '200px';
//         }
//         startButton.style.marginRight='200px';
//         winShift.style.margin=' 50px -200px';
//         keyword.style.marginLeft='-100px';
        
//          } else {
//                 playInfo.style.display = "none";
//                 startButton.style.marginRight='0px';
//                 winShift.style.margin=' 50px 0px';
//                 keyword.style.marginLeft='10px';
                

                
//         for (let i = 0; i < boardContainers.length; i++) {
//             boardContainers[i].style.marginRight = '0px';
//         }


//     }

// }
//     });
//     document.addEventListener('keydown', function(event) {
//         const currentKeyElement = document.getElementById('current-key');
//         currentKeyElement.style.display = "flex";
//         if (event.key === "Enter"){
//             currentKeyElement.innerHTML =  "&#8617;";
//         }
//         else if (event.key ==="Backspace"){
//             currentKeyElement.innerHTML =  "&#8592";
//         }
//         else 
//         {currentKeyElement.textContent = event.key.toUpperCase();}
//         setTimeout(function () {
//             currentKeyElement.style.display = "none";
//          }, 1000);

//       });
      

//     drawGrid(game);
//     inGame();
    
//     console.log(currentState.word);

// }
// loader();



// CODE WITHOUT API AND A BANK






let dictionary;
let correctWord;
let realHint;
let randomindex;
let currentState;

const wordBank = [
    { word: "BOOK", hint: "Something you read for enjoyment or information." },
    { word: "COAT", hint: "An outer garment worn to keep warm or protect from rain." },
    { word: "DOOR", hint: "An entrance or exit typically made of wood or metal." },
    { word: "FISH", hint: "An aquatic creature that people often catch for food." },
    { word: "GOLD", hint: "A precious metal that is often used in jewelry and currency." },
    // Add more words and hints as needed
  ];
  

  
  function randomWord() {
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    correctWord = wordBank[randomIndex].word.toUpperCase();
    realHint = wordBank[randomIndex].hint;
  }

// async function loadDictionary() {
//     const startButton = document.getElementById("greener");
//     startButton.disabled = true;
//     startButton.textContent = "Loading...";

    
//     const res = await fetch("https://api.masoudkf.com/v1/wordle", {
    
//         headers: {
//             "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
//         },
//     });

//     if (res.ok) {
//         const data = await res.json();
//         dictionary = data.dictionary;
//         randomWord();
//         startButton.disabled = false;
//         startButton.textContent = "Start Over";
//     } else {
//         console.error("An error occurred:", res.statusText);
//         return [];
//     }

// }


// Call the function when needed

// function randomWord(){
//     randomindex = Number.parseInt(Math.random()*dictionary.length);
    
//     correctWord = dictionary[randomindex].word.toUpperCase();
//     realHint = dictionary[randomindex].hint;
    
   
// }

function currentStateset(){
    const chosenHint = realHint;
    const chosenWord = correctWord; 
    currentState = {
    word:chosenWord,
    hint:chosenHint,
    grid: Array(4)
        .fill()
        .map(()=>Array(4).fill('')),
        currentRow:0,
        currentCol:0,
};
}
function updateState(){
    
    for (let i =0; i<currentState.grid.length;i++){
        for (let j = 0; j < currentState.grid[i].length;j++)
        {
            const cell = document.getElementById(`cell${i}${j}`);
            cell.textContent = currentState.grid[i][j];
            
        }


}
}
function showWord(word){
    const row = currentState.currentRow;

    for (let i = 0; i< 4; i++){
        const cell = (document.getElementById(`cell${row}${i}`));
        const letter = (cell.textContent);

        if(letter.toUpperCase() === currentState.word[i].toUpperCase()){
            cell.classList.add('right');
        }else if (currentState.word.includes(letter.toUpperCase())){
            cell.classList.add('wrong');
        }else{
            cell.classList.add('empty');
        }

    }
    const win = currentState.word.toUpperCase() === word.toUpperCase();

    const end = currentState.currentRow === 3;

    if (win) {
        const prevCell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol - 1}`);
        prevCell.style.border = "1px solid grey"
        displayMessageWin(`Congrats You Guessed &nbsp;${currentState.word.bold()}.`);
        
        return;
      } else if (end) {
        const prevCell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol - 1}`);
        prevCell.style.border = "1px solid grey";
       
        displayMessagelose(`Nice try. The word was &nbsp; ${currentState.word.bold()}.`);
      }
      
}
function displayMessageWin(message) {
    const messageContainer = document.getElementById("message-cont");
    const gridContainer = document.getElementById("cell");
    const messageElement = document.createElement("div");

    const buttonStartOverWin = document.getElementById('start-buttonres')
    buttonStartOverWin.addEventListener("click",function(){
        
        for (let i = 0; i < containers.length; i++) {

     
            containers[i].style.display = 'none';
            
        }
        
        restarter();
        
    });
    // Remove all previous child elements
    const containers = messageContainer.children;
    for (let i = 0; i < containers.length; i++) {

  
        containers[i].style.display = 'none';
        
    }
    for (let i =0; i<currentState.grid.length;i++){
        for (let j = 0; j < currentState.grid[i].length;j++)
        {
            const cell = document.getElementById(`cell${i}${j}`);
            cell.style.display = "none";
            
        }


}
    const gameBoard = document.getElementById("winner-use");
    gameBoard.style.display = "none";
    const winScreen = document.getElementById("win");
    winScreen.style.display = "flex";
    messageElement.innerHTML=message;
    messageElement.style.marginTop='140px';
    messageElement.style.paddingTop='20px';
    messageElement.style.paddingBottom='20px';
    messageElement.style.width='100%';
    messageElement.style.backgroundColor='grey';

    messageContainer.appendChild(messageElement);
    
}
function displayMessagelose(message) {
    const messageContainer = document.getElementById("message-cont");
    const messageElement = document.createElement("div");
    const loseCont = document.getElementById("lose");
    loseCont.style.display = "flex";
    const containers = messageContainer.children;
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.display = 'none';
    
    }
    loseCont.style.display = "flex";
    loseCont.innerHTML=message;
}
  
function letterCheck(key){
    return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter){
    if (currentState.currentCol === 4){
        // currentState.currentRow++;
        // currentState.currentCol =0;
        return;
    }
    else{
        // Revert border of previous cell if it exists
        if (currentState.currentCol > 0) {
            const prevCell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol - 1}`);
            prevCell.style.border = "1px solid grey";
        }

        currentState.grid[currentState.currentRow][currentState.currentCol] = letter;
        const cell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol}`);
        cell.style.border = "2px solid rgb(119, 80, 6)";
        currentState.currentCol++;

        // Revert border of last cell in column if on last row
        if (currentState.currentCol === 1 &&(currentState.currentRow === 1||currentState.currentRow === 2||currentState.currentRow === 3||currentState.currentRow === 4)) {
            const lastCell = document.getElementById(`cell${currentState.currentRow-1}${3}`);
            lastCell.style.border = "1px solid grey";
   
        }
    }
}
function deleteLetter(){
    if (currentState.currentCol === 0){
        return;
    }
    else{
        // currentState.grid[currentState.currentRow][currentState.currentCol-1] = '';
        // currentState.currentCol--;
        if (currentState.currentCol > 0) {
            const prevCell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol - 1}`);
            prevCell.style.border = "2px solid rgb(119, 80, 6)";
        }

        currentState.grid[currentState.currentRow][currentState.currentCol-1] = '';
        if(currentState.currentCol <4){
        const cell = document.getElementById(`cell${currentState.currentRow}${currentState.currentCol}`);
        cell.style.border = "1px solid grey";
        }
        currentState.grid[currentState.currentRow][currentState.currentCol-1] = '';
        currentState.currentCol--;
    }
}
function wordChecker(word){
  
    return  dictionary.includes(word);
}
function usertpying(){
    const prevCell = document.getElementById(`cell${0}${0}`);
    prevCell.style.border = "2px solid rgb(119, 80, 6)";
    document.body.onkeydown=(e)=>{
        const key = e.key;
        if (key === 'Enter')
        {
            if (currentState.currentCol === 4){
                const word = currentWord();
                showWord(word);
                currentState.currentRow++;
                currentState.currentCol = 0;
                
            }
                else{
                    window.alert("You Must Complete Your Guess.");
                }

            }
        
        if (key === 'Backspace')
        {
            deleteLetter();

        }

        if(letterCheck(key)){
            
            addLetter(key);
        }

        updateState();

    };
}

function currentWord(){

    return currentState.grid[currentState.currentRow].reduce((prev,curr) => prev+curr);
}


function drawCell(container,row,col,letter=''){
    const cell = document.createElement('div');
    cell.className='cell';
    cell.id = `cell${row}${col}`;
    cell.textContent = letter;
    container.appendChild(cell);
    return cell;
}


function drawGrid(container)
{
    const grid = document.createElement('div');
    grid.className = 'grid';
    for (let i =0; i<4;i++){
        for (let j = 0; j <4;j++){
            drawCell(grid,i,j);
        }
    }
    container.appendChild(grid);
}


async function loader(){
 
    main();

}

function inGame(){
    randomWord();
    currentStateset();
    usertpying();
}

function restarter() {
    // Clear the game board
    for (let i = 0; i < currentState.grid.length; i++) {
        for (let j = 0; j < currentState.grid[i].length; j++) {
            const cell = document.getElementById(`cell${i}${j}`);
            cell.style.display = "grid";
            cell.textContent = "";
            cell.classList.remove("right");
            cell.classList.remove("wrong");
            cell.classList.remove("empty");
            cell.style.border="1px solid grey";
        }
    }
    const messageContainer = document.getElementById("message-cont");
    const containers = messageContainer.children;
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.display = 'none';
      
    }

    inGame();
}
async function main() {
    const buttonStartOver = document.getElementById('start-button')
    buttonStartOver.addEventListener("click",function(){
        buttonStartOver.disabled=true;
        restarter();
        buttonStartOver.disabled=false;
        buttonStartOver.blur();
        buttonStartOver.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
              event.preventDefault();
              buttonStartOver.blur(); // Remove focus from the button
            }
          });
    });
    const game = document.getElementById('game');
    const buttonHint = document.getElementById("question-symbol");
    const messageContainer = document.getElementById("message-cont");
    const hintElement = document.createElement("div");
    hintElement.id = "hint";
    hintElement.style.display = "none";
    messageContainer.appendChild(hintElement);
    hintElement.style.display = "none";
    buttonHint.addEventListener("click", function() {
      const hintMessage = `Hint: ${currentState.hint}`;
    
      if (hintElement.style.display === "none") {
        hintElement.textContent = hintMessage;
        hintElement.style.display = "flex";
      } else {
   
        hintElement.style.display = "none";
      }
    });
    
    const inverter = document.getElementById("moon-symbol");
    const body = document.querySelector("body");
    const winner= document.getElementById("win");
   
    inverter.addEventListener("click",function(){
        if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
      
     }  else {
        body.classList.add("dark-mode");
    
    }
        
    });

    const playInfo = document.getElementById("instructions");
    const boardContainers = document.getElementsByClassName("grid");
    const info = document.getElementById("instruc-symbol");
    const startButton = document.getElementById('start-button');
    const keyword = document.getElementById('current-key');
    const winShift= document.getElementById("win");
    playInfo.style.display='none';
    info.addEventListener("click", function(event) {
        if(event.type ==="click"){
        if (playInfo.style.display === "none") {
            playInfo.style.display = "block";

        for (let i = 0; i < boardContainers.length; i++) {
            boardContainers[i].style.marginRight = '200px';
        }
        startButton.style.marginRight='200px';
        winShift.style.margin=' 50px -200px';
        keyword.style.marginLeft='-100px';
        
         } else {
                playInfo.style.display = "none";
                startButton.style.marginRight='0px';
                winShift.style.margin=' 50px 0px';
                keyword.style.marginLeft='10px';
                

                
        for (let i = 0; i < boardContainers.length; i++) {
            boardContainers[i].style.marginRight = '0px';
        }


    }

}
    });
    document.addEventListener('keydown', function(event) {
        const currentKeyElement = document.getElementById('current-key');
        currentKeyElement.style.display = "flex";
        if (event.key === "Enter"){
            currentKeyElement.innerHTML =  "&#8617;";
        }
        else if (event.key ==="Backspace"){
            currentKeyElement.innerHTML =  "&#8592";
        }
        else 
        {currentKeyElement.textContent = event.key.toUpperCase();}
        setTimeout(function () {
            currentKeyElement.style.display = "none";
         }, 1000);

      });
      

    drawGrid(game);
    inGame();
    
    console.log(currentState.word);

}
loader();






































