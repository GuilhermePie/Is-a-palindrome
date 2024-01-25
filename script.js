const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', checkInput);

function checkInput(){
    if(textInput.value){
        checkPalindrome();
        textInput.value = '';
    }else{
        alert('Please input a value');
    }
}

function checkPalindrome(){
    let regex = /[^a-zA-Z0-9]/;
    let arr = textInput.value.toUpperCase().split(regex).join('');
    let revArr = [...arr].reverse().join('');
    if(arr == revArr){
       result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome.`
    }else{
       result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome.`
    }

}