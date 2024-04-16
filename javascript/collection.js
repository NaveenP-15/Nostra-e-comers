var productContainer = document.getElementById("products")
var search = document.getElementById('search')
var productList = productContainer.querySelectorAll(".product-box")
// console.log(productList)

search.addEventListener("keyup",function(){
    var enteredValue =event.target.value.toLocaleUpperCase()

    for(count=0;count<productList.length;count=count+1){
        var productName = productList[count].querySelector('p').textContent

        if(productName.toLocaleUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display='none'
            
        }else{
            productList[count].style.display='block'
        }
    }
})