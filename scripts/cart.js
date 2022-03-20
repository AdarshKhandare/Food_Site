let cartitems = JSON.parse(localStorage.getItem('cart'))
console.log(cartitems)

function showcart(cartitems) {

    document.querySelector("#cart").innerHTML = "";
    cartitems.map(function(ele,index){

        let divM = document.createElement("div")

        let img = document.createElement("img")
        img.src = ele.strMealThumb
        img.setAttribute("id","img")
   

        let name = document.createElement("p")
        name.innerText = ele.strMeal
        

         let price = document.createElement("p")
        price.innerText = ele.price

        let button = document.createElement("button")
        button.innerText = "Remove"
        button.addEventListener("click", function(){

            removeItemFromCart(index)
            
        })

        divM.append(img,name,price,button)

        document.querySelector("#cart").append(divM)


    })
}



// Remove Item From Cart start here

function removeItemFromCart(index){
    cartitems.splice(index, 1);

    console.log(cartitems);
    showcart(cartitems);

    // showCartsTotalItems(cartDataDB);

    localStorage.setItem("cartitems", JSON.stringify(cartitems));

    showTotal(cartitems)
}

//Remove Item From Cart end here




// total update
function showTotal(cartitems){

    let total = cartitems.reduce(function(acc,ele){

        return acc + ele.price
    },0)

    document.querySelector("#total-price").innerText = total;

    showcart(cartitems)
}
showTotal(cartitems)