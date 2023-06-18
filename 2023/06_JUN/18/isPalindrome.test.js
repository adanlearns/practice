const isPalindrome = require('./isPalindrome')
const testInfo = 'Checks if string is a palindrome.'

test(testInfo, () => {
  expect(isPalindrome("madam")).toBe(true)
  expect(isPalindrome("nurses run")).toBe(true)
  expect(isPalindrome("adan")).toBe(false)
})