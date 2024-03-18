let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".messages");


// CODE ALONG, PART 1 CONTINUED
// 3. Declare a variable to store the input element

submitButton.addEventListener("click", function() {
let input = document.querySelector(".comment").value;
console.log(input)
messages.innerHTML = input;
});