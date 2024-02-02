let product1 = { 
    name:"hoodie 1",
    price:"60TND" 
};
let product2={  
    name:"hoodie 2",
    price:"50TND"

} 
let product3={  
    name:"hoodie 3",
    price:"30TND"

}   
//product1
const productDisplayElement = document.querySelector('#productDisplay');  
const productContainer1 = document.createElement('div'); 
const image1 = document.createElement('img');  
image1.src="item1.jpg" ;    
productDisplayElement.appendChild(productContainer1);
productContainer1.appendChild(image1);   
const namePrice1 = document.createElement('p') ; 
namePrice1.innerHTML =`Name :${product1.name} <br> Price:${product1.price}`; 
productContainer1.appendChild(namePrice1); 
const addToCart1 =document.createElement('button'); 
addToCart1.textContent = "Add to cart"; 
productContainer1.appendChild(addToCart1);
//product2
const productContainer2 = document.createElement('div'); 
const image2 = document.createElement('img');  
image2.src="item2.jpg" ;   
productDisplayElement.appendChild(productContainer2);
productContainer2.appendChild(image2);  
const namePrice2 = document.createElement('p') ; 
namePrice2.innerHTML =`Name :${product2.name} <br> Price:${product2.price}`; 
productContainer2.appendChild(namePrice2); 
const addToCart2 =document.createElement('button'); 
addToCart2.textContent = "Add to cart";  
productContainer2.appendChild(addToCart2);
//product3 
const productContainer3 = document.createElement('div'); 
const image3 = document.createElement('img');  
image3.src="item3.jpg" ;  
productDisplayElement.appendChild(productContainer3);
productContainer3.appendChild(image3);    
const namePrice3 = document.createElement('p') ; 
namePrice3.innerHTML =`Name :${product3.name} <br> Price:${product3.price}`; 
productContainer3.appendChild(namePrice3); 
const addToCart3 =document.createElement('button'); 
addToCart3.textContent = "Add to cart"; 
productContainer3.appendChild(addToCart3); 
//make the shopping container    
const shoppingCart0 = document.querySelector('#shoppingCart'); 
shoppingCart0.innerHTML= `<ul class="shoppContainer" ></ul>` 
const shoppingContainer = document.querySelector('.shoppContainer');
shoppingContainer.style.width= "300px";  
shoppingContainer.style.height= "350px";   
shoppingContainer.style.borderRadius= "30px";  
shoppingContainer.style.marginRight= "900px";  
shoppingContainer.style.backgroundColor= " rgba(215, 208, 199, 0.719)";  
shoppingContainer.style.overflowY="scroll"; 

shoppingCart0.appendChild(shoppingContainer); 

 
 //add to cart function 
addToCart1.addEventListener('click', function(event){ 
    event.preventDefault(); 
    displayItems(product1);
});  
addToCart2.addEventListener('click', function(event){ 
    event.preventDefault(); 
    displayItems(product2);
});  
addToCart3.addEventListener('click', function(event){ 
    event.preventDefault(); 
    displayItems(product3);
}); 
 function displayItems(product){   
    const listItem= document.createElement('li'); 
    listItem.innerHTML =`Name :${product.name} <br> Price:${product.price}`;  
    shoppingContainer.appendChild(listItem);  

} 
//total button 
const calculateContainer=document.createElement("button");  
calculateContainer.innerHTML=`Total `;
calculateContainer.style.width="200px"; 
calculateContainer.style.height="40px";  
calculateContainer.style.marginTop="30px";  
calculateContainer.style.marginBottom="30px"; 

calculateContainer.style.border="none"; 
calculateContainer.style.borderRadius="30px"; 
calculateContainer.style.backgroundColor="white";  
shoppingContainer.appendChild(calculateContainer)
//calculate total button 
calculateContainer.addEventListener('click', function(event){ 
    event.preventDefault(); 
    calculateTotal()
}); 
function calculateTotal(){ 
    const items = shoppingContainer.getElementsByTagName('li');
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        const match = items[i].innerHTML.match(/Price:(\d+)TND/);
        if(match){ 
            total+=parseInt(match[1]);
        }
        }
    

    alert(`Total: ${total} TND`);
}


  

 

