function solution(str) {
    const brackets = {'{' : '}', '(' : ')', '[' : ']'}
    let stack = []
    for (const c of str) {
        if (brackets[c]) stack.push(brackets[c]);
        else if (c == '}' || c == ')' || c == ']') {
            if (stack.pop() != c) {
                return false
            }
        }
    }
    return !stack.length;
}


const correct1 = "{((a+b)*3) + a + c*[2-x]}*x"
const correct2 = "()[{a}+c]"
const incorrect1 = "(a+{b) *c}"
const incorrect2 = "([a+b]*c}"
console.log(solution(correct1))
console.log(solution(correct2))
console.log(solution(incorrect1))
console.log(solution(incorrect2))