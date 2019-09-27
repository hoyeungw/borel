class Stack {
  constructor () {
    this.dataStore = []
    this.top = 0
  }

  push (element) {
    this.dataStore[this.top++] = element
  }

  pop () {
    return this.dataStore[--this.top]
  }

  peek () {
    return this.dataStore[this.top - 1]
  }

  length () {
    return this.top
  }
}

export function test () {
  let infix = '3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3'
  infix = infix.replace(/\s+/g, '') // remove spaces, so infix[i]!=" "

  const stack = new Stack()
  const ops = '-+/*^'
  const precedence = { '^': 4, '*': 3, '/': 3, '+': 2, '-': 2 }
  const associativity = { '^': 'Right', '*': 'Left', '/': 'Left', '+': 'Left', '-': 'Left' }
  let token
  let postfix = ''
  let o1, o2

  for (let i = 0; i < infix.length; i++) {
    token = infix[i]
    if (token >= '0' && token <= '9') { // if token is operand (here limited to 0 <= x <= 9)
      postfix += token + ' '
    } else if (ops.indexOf(token) !== -1) { // if token is an operator
      o1 = token
      o2 = stack.peek()
      while (ops.indexOf(o2) !== -1 && ( // while operator token, o2, on top of the stack
        // and o1 is left-associative and its precedence is less than or equal to that of o2
        (associativity[o1] === 'Left' && (precedence[o1] <= precedence[o2])) ||
        // the algorithm on wikipedia says: or o1 precedence < o2 precedence, but I think it should be
        // or o1 is right-associative and its precedence is less than that of o2
        (associativity[o1] === 'Right' && (precedence[o1] < precedence[o2]))
      )) {
        postfix += o2 + ' ' // add o2 to output queue
        stack.pop() // pop o2 of the stack
        o2 = stack.peek() // next round
      }
      stack.push(o1) // push o1 onto the stack
    } else if (token === '(') { // if token is left parenthesis
      stack.push(token) // then push it onto the stack
    } else if (token === ')') { // if token is right parenthesis
      while (stack.peek() !== '(') { // until token at top is (
        postfix += stack.pop() + ' '
      }
      stack.pop() // pop (, but not onto the output queue
    }
  }
  console.log(infix)
  postfix += stack.dataStore.reverse().join(' ')
  console.log(postfix)
}
