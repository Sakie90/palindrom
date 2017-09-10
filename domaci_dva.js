var isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' je palindrom.');
    }
    else {
        alert(string + ' nije palindrom.');
    }
}

document.getElementById('form_id').onsubmit = function() {
   isPalindrome(document.getElementById('your_input').value);
    return false;
}




