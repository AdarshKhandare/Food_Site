let cartitems = JSON.parse(localStorage.getItem('cart')) || []
console.log(cartitems)

function showcart(cartitems) {

    cartitems.forEach(function(ele){

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

            removetocart(ele)
            
        })

        divM.append(img,name,price,button)

        document.querySelector("#cart").append(divM)


    })
}
showcart(cartitems)
let removearr = []
function removetocart(ele){
    console.log(ele)
    removearr.push(ele)

}