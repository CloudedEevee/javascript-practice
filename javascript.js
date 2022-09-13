
let season = 'summer';
let response;

// Add your code here

if (season= 'summer') {
    response = "It's summer time! Don't forget your sunscreen."
}
    else if (season = 'winter') {
        response = "Winter is here, so remember your coat and scarf!"
    }
    else {response = "We're not sure what season it is... perhaps the weather outside your window will help?"}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
    