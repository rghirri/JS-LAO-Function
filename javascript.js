/** Recipe Alert */
document.getElementById("Alert_Button").onclick = function(){
  let RecipeTitle = document.getElementById('Recipe_Title').value;
  letsCook(RecipeTitle)
  } 

function letsCook(x){
  alert(`I'm hungry ! Let's cook ${x}`);
} 
/** End Recipe Alert */
//****************************************************** */