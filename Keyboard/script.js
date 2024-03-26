function insertCharacter(character) {
  const inputField = document.getElementById('inputField');
  const currentText = inputField.value;
  const lastIndex = currentText.length - 1;

  // Check if the last character is a base character
  const isBaseCharacter = !(
    currentText[lastIndex] === 'َ' ||
    currentText[lastIndex] === 'ِ' ||
    currentText[lastIndex] === 'ُ'
  ); 

  // If the last character is a base character, insert the diacritic after it
  if (isBaseCharacter) {
    inputField.value += character;
  } else {
    // Otherwise, replace the last character with the combined character
    const combinedCharacter = currentText.substring(0, lastIndex) + character;
    inputField.value = combinedCharacter;
  }
}
function copyText() {
  const inputField = document.getElementById('inputField');
  inputField.select();
  document.execCommand('copy');
  alert('Text copied to clipboard!');
}
