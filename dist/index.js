import concatenation from "./concatenation";
const input = document.querySelector('input');
const button = document.querySelector('button');
if (input && button) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
        input.value = '';
    });
}
function add(num1, num2) {
    return console.log(num1 + num2);
}
add(2, 3);
//# sourceMappingURL=index.js.map