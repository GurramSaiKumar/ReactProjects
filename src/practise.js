

sample = ['Apple', 2, 4]

sample.forEach(element => {
    console.log(element)
});
console.log("In JS");
const list = document.getElementById('itemsList');
sample.forEach(element =>{
    const li = document.createElement('li');
    li.textContent = element
    list.append(li);
});

