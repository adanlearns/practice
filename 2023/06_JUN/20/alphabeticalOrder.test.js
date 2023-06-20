const alphabeticalOrder = require('./alphabeticalOrder')
const testInfo = 'Return string letters in alphabetical order'

test(testInfo, () => {
  expect(alphabeticalOrder('webmaster').toBe('abeemrstw'))
  expect(alphabeticalOrder('salas').toBe('aalss'))
  expect(alphabeticalOrder('camion').toBe('acimno'))
  expect(alphabeticalOrder('casa').toBe('aacs'))
})