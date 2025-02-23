// Number/Operator Button Click
function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  // Clear Display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Delete Last Character
  function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }
  
  // Calculate Result
  function calculateResult() {
    try {
      let result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  