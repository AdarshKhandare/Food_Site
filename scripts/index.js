let url = "https://masai-food-api.herokuapp.com/api/meals/india"



async function showFood(event)
{
    try {
        
        let res = await fetch(url)
        let data = await res.json();
        console.log(data[0].meals);
        appendFood(data[0].meals)
        
    }
    catch (error) {
        console.log("Food Not Available!")
    }
}
showFood()



function appendFood(data)
{
    console.log(data)

    document.querySelector("#menu").innerHTML = "";
    data.map(function(ele,index,array){

        let divM = document.createElement("div")

        let img = document.createElement("img")
        img.src = ele.strMealThumb
        img.setAttribute("id","img")
   

        let name = document.createElement("p")
        name.innerText = ele.strMeal
        

         let price = document.createElement("p")
        price.innerText = ele.price
        


        let button = document.createElement("button")
        button.innerText = "Add to Card"
        button.setAttribute("id","addtocart")
        button.addEventListener("click", function(){

            addtocart(ele)
            showCartsTotalItems(data)

            
        })
        divM.append(img,name,price,button)

        document.querySelector("#menu").append(divM)
    })
 
}

function addtocart(ele)
{
    let cartarr = JSON.parse(localStorage.getItem("cart")) || []
    console.log(ele)
    cartarr.push(ele)
    console.log(cartarr)
    localStorage.setItem("cart",JSON.stringify(cartarr))
}

function showCartsTotalItems(meals){
    var count = meals.length;
    console.log(count);
    if(count==0){
        
        document.querySelector("#count").innerText = "Empty!";
    }
    else{
        document.querySelector("#count").innerText = count;
    }
}
