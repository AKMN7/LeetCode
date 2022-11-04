function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let ans = '';

    while (i >= 0 || j >= 0) {
        let dig1 = i < 0 ? 0 : parent(num1.charAt(i));
        let dig2 = j < 0 ? 0 : parent(num2.charAt(j));

        let sum = dig1 + dig2 + carry;
        let dig3 = sum % 10;
        carry = Math.floor(sum / 10);
        ans = dig3 + ans;

        i--;
        j--;
    }

    if (carry == 1) ans = carry + ans;

    return ans;
}