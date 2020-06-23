let startingTime = performance.now();
let newDive      = document.createElement('div');

for (let i = 1; i <= 200; i++)
{
	const newElement = document.createElement('p');
	
	newElement.textContent = `This is paragraph number ${i}`;
	newDiv.appendChild(newElement);
}

document.body.appendChile(newDiv);
let endingTime = performance.now();











































