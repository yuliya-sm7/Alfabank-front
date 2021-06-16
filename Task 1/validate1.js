// второй вариант решения
function solution(str) {
  let stack = [];
  let opening = "([{";
  let closing = ")]}";

  for (const c of str) {
    if (opening.includes(c)) {
      stack.push(c);
    } else if (closing.includes(c)) {
      if (stack.length == 0) {
        return false;
      } else if (closing.indexOf(c) != opening.indexOf(stack.pop())) {
        return false;
      }
    }
  }
  return !stack.length;
}

const correct1 = "{((a+b)*3) + a + c*[2-x]}*x";
const correct2 = "()[{a}+c]";
const incorrect1 = "(a+{b) *c}";
const incorrect2 = "([a+b]*c}";
console.log(solution(correct1));
console.log(solution(correct2));
console.log(solution(incorrect1));
console.log(solution(incorrect2));
