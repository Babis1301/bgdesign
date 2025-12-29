 export const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '=', '*'];

 
  
    
export function generateRandomText(length) {
  let randomText = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters[randomIndex];
  }
  return randomText;
}


// Generate random text and display it

// Append the letters as the user scrolls
