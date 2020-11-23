const addButton=document.querySelector('#add');
const foodName=document.querySelector('#item-name');
const foodCalories=document.querySelector('#item-calories');
const totalSpan=document.querySelector('.total-calories');
const list=document.querySelector('#item-list');
let total=0;
addButton.addEventListener('click', (event)=>{
    let mealName=foodName.value;
    let mealCalories=parseInt(foodCalories.value);
    
    total+=mealCalories;
    totalSpan.innerHTML=total;
    let listItem=document.createElement('li');
    listItem.classList.add('collection-item');
    let text=`Food: ${mealName}. Calories: ${mealCalories}`;
    listItem.appendChild(document.createTextNode(text));
    list.appendChild(listItem);
    event.preventDefault();
    foodName.value='';
    foodCalories.value='';
});