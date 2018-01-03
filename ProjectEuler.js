/* CODE USED TO SOLVE PROJCECT EULER PROBLEMS 1-15              */
/* Each segment is commented with the answer and problem number */

//code for problem 1
//answer is 233168
function threeAndFiveMultiplesSumBelowN (n) {
  let count = 5
  let sum = 0
  while (count < n) {
    sum += count
    count += 5
  }
  count = 3
  while (count < n) {
    if (count % 5 !== 0) {
      sum += count
    }
    count += 3
  }
  return sum
}

//code for problem 2
//answer is 4613732
function fibEvenSum (n) {
  if (n === 1) return 1
  if (n === 2) return 2
  let current = 1
  let last = 1
  let temp
  let sum = 0
  while (current <= n) {
    if (current % 2 === 0) {
      sum += current
    }
    temp = last
    last = current
    current = temp + last
  }
  return sum
}

//code for problem 3
//answer is 6857
function getLargestPrimeFactor (n) {
  let A = n
  let B = 2
  while (true) {
    if (A === B) return A
    if (A % B === 0) {
      A = A / B
      B = 2
    } else {
      B++
    }
  }
}

//code for problem 4
//answer is 906609
function getLargestPalindromeMadeBy2MultiplesLessThanN (n) {
  let largest = 0
  for (let i = n - 1; i > 0; i--) {
    for (let j = n - 1; j > 0; j--) {
      let product = i * j
      if (product > largest && isAPalindrome(product)) {
        largest = product
      }
    }
  }
  return largest
}

//palindrome tester
function isAPalindrome (number) {
  numStr = number.toString()
  const len = numStr.length
  const halfWay = Math.floor(len / 2)
  for (let i = 0; i < halfWay; i++) {
    if (numStr.charAt(i) !== numStr.charAt(len - 1 - i)) {
      return false
    }
  }
  return true
}

//code for problem 5
//answer is 232792560
function getSmallestMultipleDivisibleByAllNumbersLessThanN (n) {
  let LCM = n
  while (n > 0) {
    if (LCM % n !== 0) {
      LCM = lcm(LCM, n)
    } else {
      n--
    }
  }
  return LCM
}

//get lcm of two numbers
function lcm (a, b) {
  return (a * b) / gcd(a, b)
}

//get gcd of two numbers
function gcd (a, b) {
  let timesDividedBy2 = 0
  while (a % 2 === 0 && b % 2 === 0) {
    a = a / 2
    b = b / 2
    timesDividedBy2++
  }
  while (a !== b) {
    if (a % 2 === 0) {
      a = a / 2
    } else if (b % 2 === 0) {
     b  = b / 2
    } else if (a > b) {
      a = (a - b) / 2
    } else {
      b = (b - a) / 2
    }
  }
  return a * 2 ** timesDividedBy2
}

//code for problem 6
//answer is 25164150
function sumOfSquareDifference (n) {
  let sumSquare = 0
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sumSquare += i * i
    sum += i
  }
  return sum ** 2 - sumSquare
}

//code for problem 7
//answer is 104743
function getNthPrime (n) {
  let primes = generateListOfAllPrimesLessThanN(n)
  let i = 2
  while (primes.length < n + 1) {
    primes = generateListOfAllPrimesLessThanN(n * i)
    i *= 2
  }
  return primes[n - 1]
}

//prime generator
function generateListOfAllPrimesLessThanN (n) {
  const isPrimeList = []
  const sqrtN = Math.floor(Math.sqrt(n))
  for (let i = 2; i < sqrtN; i++) {
    if (isPrimeList[i] === undefined) {
      let markOff = i * i
      while (markOff < n) {
        isPrimeList[markOff] = false
        markOff += i
      }
    }
  }
  const primeList = []
  for (let i = 2; i < n; i++) {
    if (isPrimeList[i] === undefined) {
      primeList.push(i)
    }
  }
  return primeList
}

//code for problem 8
//answer is 23514624000
function largestNDigitSequenceProduct (n) {
  const bignum =
  '73167176531330624919225119674426574742355349194934' +
  '96983520312774506326239578318016984801869478851843' +
  '85861560789112949495459501737958331952853208805511' +
  '12540698747158523863050715693290963295227443043557' +
  '66896648950445244523161731856403098711121722383113' +
  '62229893423380308135336276614282806444486645238749' +
  '30358907296290491560440772390713810515859307960866' + 
  '70172427121883998797908792274921901699720888093776' +
  '65727333001053367881220235421809751254540594752243' + 
  '52584907711670556013604839586446706324415722155397' +
  '53697817977846174064955149290862569321978468622482' + 
  '83972241375657056057490261407972968652414535100474' +
  '82166370484403199890008895243450658541227588666881' + 
  '16427171479924442928230863465674813919123162824586' +
  '17866458359124566529476545682848912883142607690042' + 
  '24219022671055626321111109370544217506941658960408' +
  '07198403850962455444362981230987879927244284909188' + 
  '84580156166097919133875499200524063689912560717606' +
  '05886116467109405077541002256983155200055935729725' +
  '71636269561882670428252483600823257530420752963450'
  
  const bigArray = bignum.split('')
  let maxProduct = 0
  for (let i = 0; i < bigArray.length - n + 1; i++) {
    let index = i
    let localProduct = bigArray[index]
    let j = index + n - 1
    while (index < j) {
      localProduct *= bigArray[index + 1]
      index++
    }
    if (localProduct > maxProduct) {
      maxProduct = localProduct
    }
  }
  return maxProduct
}

/*
code for problem 9
I got stuck and did bad math so I used wolfram alpha to get my solution
The equation I couldn't simplify was:
x + y + z = 1000 and x^2 + y^2 = z^2 and x > 0 and y > 0 and z > 0
answer is 31875000 (the unique solution was 200 and 375 for x and y and 425 for z)
*/
function findUnicornPythagoreanTriplet () {
  return 200 * 375 * 425
}

/*
This is my bad algebra
I haven't wrote math on paper in over a year so I did it in text

//x ** 2 + y ** 2 === z ** 2
// x + y + z === 1000
//(x + y + z) * (x + y + z) === 1000000
x * x + x * y + x * z +
y * x + y * y + y * z +
z * x + z * y + z * z === 1000000

x * y +
x * z +
y * z +
z ** 2
=== 500000

x * (y + z) +
z * (y + z)
=== 500000

x * 1000 - x * x +
x * 1000 - x * z
=== 500000

2000 * x - x * x - x * z === 500000
x * z + 500000 === 2000 * x - x * x
x * z === 2000 * x - x * x - 500000
z === 2000 - x - 500000 / x

(1000 - y) * (z + y) === 500000
(1000 - y) * (1000 - x) === 500000
1000000 - 1000 * x - 1000 * y + x * y === 500000
1000 * x + 1000 * y - x * y === 500000
1000 * y - x * y === 500000 - 1000 * x
y * (1000 - x) === 500000 - 1000 * x
y === (500000 - 1000 * x) / (1000 - x)

x + y + z === 1000
x + (500000 - 1000 * x) / (1000 - x) + 2000 - x - 500000 / x = 1000
*/

//code for problem 10
//answer is 142913828922
function sumOfAllPrimesLessThanN (n) {
  let sum = 0
  generateListOfAllPrimesLessThanN(n - 1).forEach(prime => sum += prime)
  return sum
}

//code for problem 11
//answer is 70600674
function largestProductInGrid () {
  const grid = [
    [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 08],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
    [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
    [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
    [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
    [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
    [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
    [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
    [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
    [4, 52, 8, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
    [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
    [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
    [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
    [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
    [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
  ]
  let gridWidth = grid[0].length
  let gridHeight = grid.length
  let largestProduct = 0

  //horizontal group check
  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth - 3; j++) {
      let localProduct = grid[i][j]
      console.log('In horizontal check h ' + i + ' w ' + j)
      for (let k = j + 1; k < j + 4; k++) {
        localProduct *= grid[i][k]
      }
      if (localProduct > largestProduct) {
        largestProduct = localProduct
      }
    } 
  }

  //vertical group check
  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight - 3; j++) {
      console.log('In vertical check h ' + i + ' w ' + j)
      let localProduct = grid[j][i]
      for (let k = j + 1; k < j + 4; k++) {
        localProduct *= grid[k][i]
      }
      if (localProduct > largestProduct) {
        largestProduct = localProduct
      }
    } 
  }

  //top left to bottom right diagonal group scan
  for (let i = 0; i < gridHeight - 3; i ++) {
    for (let j = 0; j < gridWidth - 3; j++) {
      console.log('In top left to bottom right check h ' + i + ' w ' + j)
      let localProduct = grid[i][j]
      let numberSlot = 1
      for (let k = j + 1; k < j + 4; k++) {
        localProduct *= grid[i + numberSlot][k]
        numberSlot++
      }
      if (localProduct > largestProduct) {
        largestProduct = localProduct
      }
    } 
  }

  //bottom left to top right diagonal group scan
  for (let i = 0; i < gridHeight - 3; i ++) {
    for (let j = 0; j < gridWidth - 3; j++) {
      console.log('In bottom left to top right check h ' + i + ' w ' + j)
      let localProduct = grid[i + 3][j]
      let numberSlot = 1
      for (let k = j + 1; k < j + 4; k++) {
        localProduct *= grid[i + 3 - numberSlot][k]
        numberSlot++
      }
      if (localProduct > largestProduct) {
        largestProduct = localProduct
      }
    } 
  }

  return largestProduct
}

//code for problem 12
//answer is 76576500
function triangleNumberDivisors (maxDivisors) {
  let curTriNum = 1
  let curTriNumValue = 1
  while (getNumberOfDivisorsForN(curTriNumValue) < maxDivisors) {
    curTriNum++
    curTriNumValue += curTriNum
  }
  return curTriNumValue
}

function getNumberOfDivisorsForN (n) {
  const sqrtN = Math.floor(Math.sqrt(n))
  let divisorCount = 0
  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      divisorCount += 2
    }
  }
  return divisorCount
}

/*
Finally it was to0 much for me to copy paste manually into an array so I had to get the array from the dom

let array = document.getElementsByClassName('problem_content')[0].childNodes[3].innerHTML
  .split('<br>')
  .map(string => string.substr(1))

  that array is the argument that goes into the solution function

  code for problem 13
  answer is 5537376230
*/
function getFirstTenDigitsOfLargeSum (arrayOfBigStringNumbers) {
  const len = arrayOfBigStringNumbers.length
  let sum = ''
  for (let i = 0; i < len; i++) {
  sum = stringAdd(sum, arrayOfBigStringNumbers[i])
  }
  return parseInt(sum.substring(0,10))
}

function stringAdd (a, b) {
  const aLen = a.length
  const bLen = b.length
  let aIndex = aLen - 1
  let bIndex = bLen - 1
  let sum = ''
  let carry = false
  let carryCheck = carry => {
    return carry ? 1 : 0
  }
  while (aIndex >= 0 && bIndex >= 0) {
    let num = parseInt(a.charAt(aIndex)) + parseInt(b.charAt(bIndex))
    num += carryCheck(carry)
    if (num > 9) {
      carry = true
      num -= 10
    } else {
      carry = false
    }
    sum = num.toString() + sum
    aIndex--
    bIndex--
  }
  while (aIndex >= 0) {
    let num = parseInt(a.charAt(aIndex))
    num += carryCheck(carry)
    if (num > 9) {
      carry = true
      num -= 10
    } else {
      carry = false
    }
    sum = num.toString() + sum
    aIndex--
  }
  while (bIndex >= 0) {
    let num = parseInt(b.charAt(bIndex))
    num += carryCheck(carry)
    if (num > 9) {
      carry = true
      num -= 10
    } else {
      carry = false
    }
    sum = num.toString() + sum
    bIndex--
  }
  return carry ? '1' + sum : sum
}

/*
solution for problem 14
answer is 837799

https://en.wikipedia.org/wiki/Collatz_conjecture

When I was reading about the Collatz conjecture it literally had a list that said:

The longest progression for any initial starting number

-less than 1 million is 837,799, which has 524 steps

That directly answered the question before I started to write any
code to solve the problem so it would be a waste to write something
now.
*/

//code for problem 15
//answer is 137846528820
function totalLatticePathsToCoords (x, y) {
  return binomialCoefficient(x + y, y)
}

function binomialCoefficient (n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k))
}

function factorial (n) {
  if (n === 0) {
    return 1
  } else {
    return (n * factorial(n - 1))
  }
}
