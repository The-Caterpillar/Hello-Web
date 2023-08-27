// Adding a 100 paras 

for(let i=0; i<100; ++i)
{
    let newElement = document.createElement('p');
    newElement.textContent = "This is a para "+ i;
    document.body.appendChild(newElement);
}