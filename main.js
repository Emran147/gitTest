

const check = function(month){
    for(day=1;day<32;day++)
    {
        checkiftheDaypalindrome(day,month)   
    }
    
}

const checkiftheDaypalindrome = function(day,month){
   let concatstr = day.toString() + month.toString()
  console.log(`today is : ${concatstr} and  ${checkPalindrome(concatstr)} `)
}


function checkPalindrome(string) {

    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const palindromeDates = check(12)