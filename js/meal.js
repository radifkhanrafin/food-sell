const loadMeal = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data.meals))
}
const displayData = (meals) => {
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerText = '';
    
    meals.forEach(meal => {
        console.log(meal)
        const card = document.createElement('div')
        card.classList.add("col")
        card.innerHTML = `
      <div class="card h-60">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text h-100 overflow-hidden">${meal.strArea}</p>
      <button onclick="detailsMeal(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetail">
      Details
     </button>
     </div>
     </div>
     
        `
        cardContainer.appendChild(card)
    });

}

const searchBtn = () => {
    const searchText = document.getElementById('search-fild').value;

    loadMeal(searchText)
    // searchText.innerHTML= ''
}
const detailsMeal=(idMeal)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

    fetch(url)
    .then(res => res.json())
    .then(data=> mealModalDetails(data.meals[0]))
    // console.log(url)
}
const mealModalDetails=(mealsDetails)=>{
    document.getElementById('mealDetailLabel').innerText=mealsDetails.strMeal;
    const detailsBody=document.getElementById('mealDetailBody');
    detailsBody.innerHTML=`
    <p> ${mealsDetails.strInstructions} </p>
    `
}
loadMeal('')