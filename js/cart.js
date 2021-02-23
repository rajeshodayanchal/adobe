// JavaScript Document
	$(document).ready(function(){
let myObj, i, j, x = "";
let names = Array();
let images = Array();
let actualPrice = Array();
let displayPrice = Array();
let discounts = Array();
let item1 = document.getElementById("item1");
	
myObj ={ "items": [
        {
                        "name": "Samsung Series 4",
                        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        "price": {
                            "actual": 13999,
                            "display": 22500
            },
                        "discount": 37
        },
      {
                        "name": "Samsung Super 6",
                        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        "price": {
                            "actual": 35999,
                            "display": 66900
            },
                        "discount": 46
        },
        {
                        "name": "Samsung The Frame",
                        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        "price": {
                            "actual": 84999,
                            "display": 133900
            },
                        "discount": 36
        },
        {
                        "name": "Thomson B9 Pro",
                        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        "price": {
                            "actual": 9999,
                            "display": 16999
            },
                        "discount": 41
        },
        {
                        "name": "LG Ultra HD",
                        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        "price": {
                            "actual": 39990,
                            "display": 79990
            },
                        "discount": 50
        },
        {
                        "name": "Vu Ready LED TV",
                        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        "price": {
                            "actual": 7999,
                            "display": 17e3
            },
                        "discount": 52
        },
        {
                        "name": "Koryo Android TV",
                        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        "price": {
                            "actual": 55999,
                            "display": 199990
            },
                        "discount": 71
        },
        {
                        "name": "Micromax LED Smart",
                        "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
                        "price": {
                            "actual": 9999,
                            "display": 27990
            },
                        "discount": 64
        }
    ]
}
for (i in myObj.items) {
  //x += "<h2>" + myObj.items[i].name + "</h2>";
	names[i] =   myObj.items[i].name;
	//item1.attr(data-name,names[i]);
	//console.log(names[i]);
	
	images[i]= myObj.items[i].image;
	actualPrice[i] = myObj.items[i].price.actual;
	displayPrice[i]=  myObj.items[i].price.display;
	discounts[i] = myObj.items[i].discount;
}
	let k = 1;	
	for(j in names){	
	$("#item"+k).attr("data-name", names[j] );
	$("#item"+k).text("Add to cart" );
	$("#itemName"+k).text( names[j]);
	$("#product"+k).attr("alt", names[j] );
	$("#item"+k).attr("data-price", actualPrice[j] );
	$("#actualPrice"+k).text(displayPrice[j]);
	$("#item"+k).attr("display-price", displayPrice[j] );
	$("#displayPrice"+k).text(actualPrice[j]);
	$("#item"+k).attr("discount", discounts[j] );
	$("#discount"+k).text( discounts[j]+"% Off" );
	$("#product"+k).attr("src", images[j] );
	k++;	
	}
	/**********************************/
		
	
	$(".add-to-cart").click(function (event){
	  
	event.preventDefault()
	
	let name=$(this).attr("data-name");
	let price=Number($(this).attr("data-price"));
	addItemToCart(name,price,1);
	displayCart();
	});
	
	$("#clear-cart").click(function (event){
	
	clearCart();
	displayCart();
	});
	
	function displayCart(){
	
	
	let cartArray=listCart();
	
	let output="";
	
	for(let i in cartArray){
	
	output +="<li><b>"+cartArray[i].name +"</b> "
					+" ("+cartArray[i].count 
					+" x "+ cartArray[i].price 
					+") = <b>"+ cartArray[i].total +"</b>"
					+"<button class='deleteItem' data-name='"+cartArray[i].name+"'>X</button>" + " "
					+"<button class='subtractItem' data-name='"+cartArray[i].name+"'>-</button>" + "  "
					+"<button class='addItem' data-name='"+cartArray[i].name+"'>+</button>"
					+"</li>";
	}
	$("#show-cart").html(output);
	$("#total-cart").html( totalCart() );
	$("#total-cart1").html( totalCart() );
	$("#count-cart").html( countCart() );
	}
	$("#show-cart").on("click",".deleteItem",function (event){
		
		let name=$(this).attr("data-name");
		removeItemFromCartAll(name);
		displayCart();
	});
	
	$("#show-cart").on("click",".subtractItem",function (event){
	
	let name=$(this).attr("data-name");
	removeItemFromCart(name);
	displayCart();
	});
	
	$("#show-cart").on("click",".addItem",function (event){
	
	let name=$(this).attr("data-name");
	
	addItemToCart(name,0,1);
	displayCart();
	
	});
	
	
let cart=[];
let Item=function(name ,price, count){

	this.name=name
	this.price=price
	this.count=count

};


function addItemToCart(name,price,count){

	for(i in cart){
			if(cart[i].name===name){

				cart[i].count+=count;
					saveCart();
					return;
			}
		}

		let item=new Item(name,price,count);

		cart.push(item);

	saveCart();
}

function removeItemFromCart(name){

for(let i in cart){

		if(cart[i].name === name ){
		
			cart[i].count--;
			if(cart[i].count==0){
			
			cart.splice(i,1);
			}
			break;
		}
	}
	saveCart();

}

function removeItemFromCartAll(name){
 for(let i in cart){
 
	if(cart[i].name===name){
	cart.splice(i,1);
	break;
	}
 }
saveCart();
}


function clearCart(){

cart=[];
saveCart();
}

function countCart(){

	let totalCount=0;
	for(let i in cart){
	
		totalCount +=cart[i].count;
		
	}
	return totalCount;
}

function totalCart(){
		
		let totalCost=0;
		for(let i in cart){
		
			totalCost +=cart[i].price * cart[i].count;
		}
		return totalCost.toFixed(2);;
	}

//console.log(countCart());
//console.log(totalCart());

//========================================ListCart=============================================

function listCart(){

let cartCopy =[];
for(let i in cart){

let item=cart[i];

let itemCopy={};
for(let p in item){
itemCopy[p]=item[p];

}
 itemCopy.total =(item.price * item.count).toFixed(2);;
cartCopy.push(itemCopy);
}
return cartCopy;
}

 
 //===========================================SAVE CART==================================
 
 function saveCart(){
 
 localStorage.setItem("shopingCart",JSON.stringify(cart));
 }

 //===========================================LOAD CART==========================
 
function loadCart(){

cart=JSON.parse(localStorage.getItem("shopingCart"));
}

 loadCart();
 displayCart();
});
