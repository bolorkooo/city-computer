// console.log('testingg..');
ready();


//ready function
function ready(){
        var removeCartItemButtons = document.getElementsByClassName('btn-danger');
        // console.log(removeCartItemButtons);
        for( var i= 0; i<removeCartItemButtons.length; i++){
                var button = removeCartItemButtons[i];
                button.addEventListener('click', removeCartItem);       
        }

        var quantityInputs = document.getElementsByClassName('cart-quantity-input');
        for(var i=0; i<quantityInputs.length; i++){
                var input = quantityInputs[i];
                input.addEventListener('change', quantityChanged);
        }

        var addToCartButtons = document.getElementsByClassName('shop-item-button');
        for(var i = 0; i<addToCartButtons.length; i++){
                var button = addToCartButtons[i];
                button.addEventListener('click', addToCartClicked)
        }
        document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}
// addToCartClicked

function addToCartClicked(event){
        var button = event.target;
        var shopItem = button.parentElement.parentElement;
        var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
        var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
        var imageSRC = shopItem.getElementsByClassName('shop-item-image')[0].src;
        addItemToCart(title, price, imageSRC);
        updateCartTotal();
}     

function addItemToCart(title, price, imageSRC){
    var cartRow= document.createElement('div');
    // cartRow.classList.add('cart-row');
    var carItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames= document.getElementsByClassName('cart-item-title');
    for(var i=0; i<cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
                alert('ene baraag songoo bzdee');
                return;
        }
    } 
    var cartRowContents= `<div class="cart-row">
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSRC}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>
</div>`
cartRow.innerHTML = cartRowContents;
carItems.append(cartRow);
cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

// quantityChanged

function quantityChanged(event){
        var input = event.target;
        // if(input.value <= 0 ){
        //         input.value = 1;
        // }
        if(isNaN(input.value) || input.value <= 0){
                input.value = 1;
        }
        updateCartTotal();
}
///purchase
function purchaseClicked(){
        alert('Bayrlalaa');
        var cartItems=document.getElementsByClassName('cart-items')[0];
        while(cartItems.hasChildNodes){
                cartItems.removeChild(cartItems.firstChild);
                updateCartTotal();
        }
}


// remove heseg
function removeCartItem(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
}
// update function 

function updateCartTotal(){
        var cartItemcontainer = document.getElementsByClassName('cart-items')[0];
        var cartRows = cartItemcontainer.getElementsByClassName('cart-row');
        var total = 0;
        for(var i = 0; i<cartRows.length; i++){
            var cartRow = cartRows[i]; // sagsand heden baraa bn ternii toogoor row baih yostoi
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]; // une
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
            // input baraanii too
            // var price = parseFloat(priceElement.innerHTML.replace('$', ''));
            var price = parseFloat(priceElement.innerText.replace('$', ''));
            var quantity=quantityElement.value;
            total = total + (price*quantity); // tuhain baraanii toog davhar oruulsan niit une
           //console.log(price);
        }
        // for-iin haaltii gadaa bichnee 
        total = Math.round(total*100)/100;
        document.getElementsByClassName('cart-total-price')[0].innerText= '$' +total;
        // niit uniig frontluu shideh 
}
// search hseg
const myFunction = () =>{
        const srch = document.getElementById('srch').value.toUpperCase();
        const shopitems = document.getElementById('fuck');
        const shopItem = document.querySelectorAll('.shop-item');
        const pname = shopitems.getElementsByTagName('span');
    
        for (var i = 0; i < pname.length; i++) {
                   let match = shopItem[i].getElementsByTagName("span")[0];
                   if(match){
                        let txtValue = match.textContent || match.innerHTML;
                         if (txtValue.toUpperCase().indexOf(srch) > -1) {
                             shopItem[i].style.display = "";
                        } else {
                            shopItem[i].style.display = "none";
                    }
                }
                
            }
        }




// const search =() =>{
//         const searchbox = document.getElementById('search-item').value.toUpperCase();
//         const storeitems = document.getElementById('shop-item');
//         const shopItem = document.querySelectorAll('shop-items');
//         const pname = shopItem.getElementsByTagName('span');

//         for(var i=0; i < pname.length; i++){
//                 let match = storeItems[i].getElementsByTagName('span')[0];
//                 if(match){
//                    let textValue = match.textContent || match.innerHTML;
//                    if(textValue.toUpperCase().indexOf(searchbox) > -1){
//                         shopItem[i].style.display = "";
//                    }else{
//                         shopItem[i].style.display = "none";
//                    }
//                 }

//         }
// }

// function search(){
//         var searchbox, filter, product, pname, a, i, txtValue;
//         searchbox= document.getElementById('search-item');
//         filter = searchbox.value.toUppercase();
//         product = document.getElementById('shop-itemsss');
//         pname=shop-itemsss.getElementsByClassName('shop-item-title');
//         for(i=0; i<pname.length; i++){
//                 a=pname[i].getElementById('span')[0];
//                 txtValue=a.textContent||a.innerText;
//                 if(txtValue.toUppercase().indexOf(filter) > -1){
//                         pname[i].style.display="";
//                 }else{
//                         pname[i].style.display="none";
//                 }
//         }

// }