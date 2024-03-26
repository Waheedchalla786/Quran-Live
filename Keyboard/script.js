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

let cursorPosition = 0;

function insertCharacter(character) {
  const inputField = document.getElementById('inputField');
  const textBeforeCursor = inputField.value.substring(0, cursorPosition);
  const textAfterCursor = inputField.value.substring(cursorPosition);
  inputField.value = textBeforeCursor + character + textAfterCursor;
  cursorPosition++;
  inputField.focus();
}

function insertDiacritic(diacritic) {
  const inputField = document.getElementById('inputField');
  const currentText = inputField.value;
  const lastIndex = cursorPosition - 1;
  if (lastIndex >= 0) {
    inputField.value = currentText.substring(0, lastIndex) + diacritic + currentText.substring(lastIndex);
    cursorPosition++;
    inputField.focus();
  }
}

function removeLastLetter() {
  const inputField = document.getElementById('inputField');
  const currentText = inputField.value;
  if (cursorPosition > 0) {
    inputField.value = currentText.substring(0, cursorPosition - 1) + currentText.substring(cursorPosition);
    cursorPosition--;
    inputField.focus();
  }
}

function removeAllLetters() {
  const inputField = document.getElementById('inputField');
  inputField.value = '';
  cursorPosition = 0;
  inputField.focus();
}

function moveCursorLeft() {
  if (cursorPosition > 0) {
    cursorPosition--;
    const inputField = document.getElementById('inputField');
    inputField.setSelectionRange(cursorPosition, cursorPosition);
    inputField.focus();
  }
}

function moveCursorRight() {
  const inputField = document.getElementById('inputField');
  if (cursorPosition < inputField.value.length) {
    cursorPosition++;
    inputField.setSelectionRange(cursorPosition, cursorPosition);
    inputField.focus();
  }
}

function insertSpace() {
  const inputField = document.getElementById('inputField');
  const currentText = inputField.value;
  inputField.value = currentText.substring(0, cursorPosition) + ' ' + currentText.substring(cursorPosition);
  cursorPosition++;
  inputField.focus();
}
