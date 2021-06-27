import 'ts-jest'
import {xFunc, yFunc} from './testingFile'

describe('Stupid functions tests', () => {
   test('If call "x" function with numbers 3 and 2 in arguments, then function returns "5" about number type   ', () => {
      const result: number = xFunc(3, 2)
      expect(typeof result).toBe("number");
      expect(result).toBe(5);
   });
   test('If call "y" function, then function returns " " string', () => {
      expect(yFunc()).toBe("test is working");
   });
})