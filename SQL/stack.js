class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
            this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top < 0) return undefined
        const poppedtop = this.data[this.top]
        delete this.data[this.top]
        this.top--
            return poppedtop
    }
    peek() {
        return this.top >= this.data[this.top]
    }
}

const stack = new Stack()

stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

stack.pop()
console.log(stack.pop())
console.log(stack.peek())