let url = "https://masai-food-api.herokuapp.com/api/meals/india"



async function showFood()
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
    for (let i = 0; i < data.length; i++) 
    {

        console.log(data)


        let divM = document.createElement("div")

        let img = document.createElement("img")
        img.src = data[i].strMealThumb
        img.setAttribute("id","img")
   

        let name = document.createElement("p")
        name.innerText = data[i].strMeal
        

         let price = document.createElement("p")
        price.innerText = data[i].price
        


        let button = document.createElement("button")
        button.innerText = "Add to Card"
        button.setAttribute("id","addtocart")
        button.addEventListener("click", function(){

            addtocart(data[i])
            window.location.href = "cart.html"
        })


        divM.append(img,name,price,button)

        document.querySelector("#menu").append(divM)

    }



}
let cartarr = [];
function addtocart(data)
{
    console.log(data)
    cartarr.push(data)
    console.log(cartarr)
    localStorage.setItem("cart",JSON.stringify(cartarr))
}
