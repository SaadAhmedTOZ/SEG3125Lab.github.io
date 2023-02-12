
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

function slideOutCart(evt, tabName) {
	$('#slideoutcart').toggleClass('on');
}

function slideOutClient(evt, tabName) {
	$('#slideoutclient').toggleClass('on');
}



	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);


	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.append(document.createElement("br")); 
    s2.innerHTML = "";


	
	var s3 = document.createElement("div");
	s3.id = "Vegetables";
	s3.name = "Vegetables";
	s2.appendChild(s3);
	
	var s4 = document.createElement("div");
	s4.name = "Wheat"; 
	s2.appendChild(s4);

	var s5 = document.createElement("div");
	s5.name = "Dairy"; 
	s2.appendChild(s5);

	var s6 = document.createElement("div");
	s6.name = "Snacks";
	s2.appendChild(s6);

	var s7 = document.createElement("div");
	s7.name = "Meats";
	s2.appendChild(s7);



	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value);
	var imgArray = ProductsIMG(products, s1.value);
	var typeArray = ProductsType(products, s1.value);

	var fveg = false;
	var fwheat = false;
	var fdairy= false;
	var fsnack = false;
	var fmeat = false;


	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var productImg = imgArray[i];
		var productType = typeArray[i];

		if (productType=="Vegetables"){

			if (!fveg){
				s3.appendChild(document.createElement("br")); 
				s3.appendChild(document.createTextNode("Vegetable : "));
				s3.appendChild(document.createElement("br"));  
				fveg = true;

			}
			s3.appendChild(document.createElement("br"));  
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s3.appendChild(checkbox);

			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName));
			s3.appendChild(label);

			s3.appendChild(document.createElement("br")); 

			var img = document.createElement("img");
			img.htmlFor = productName;
			img.src = productImg;
			img.width="200";
			img.height="200";
			s3.appendChild(img);
			s3.appendChild(document.createElement("br")); 


		}

		if (productType=="Wheat"){

			if (!fwheat){
				s4.appendChild(document.createElement("br")); 
				s4.appendChild(document.createTextNode("Wheat : "));
				s4.appendChild(document.createElement("br"));  
				fwheat = true;

			}
			s4.appendChild(document.createElement("br"));  
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s4.appendChild(checkbox);

			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName));
			s4.appendChild(label);

			s4.appendChild(document.createElement("br")); 

			var img = document.createElement("img");
			img.htmlFor = productName;
			img.src = productImg;
			img.width="200";
			img.height="200";
			s4.appendChild(img);
			s4.appendChild(document.createElement("br")); 

		}

		if (productType=="Dairy"){

			if (!fdairy){
				s5.appendChild(document.createElement("br")); 
				s5.appendChild(document.createTextNode("Dairy : "));
				s5.appendChild(document.createElement("br"));  
				fdairy = true;

			}
			s5.appendChild(document.createElement("br"));  
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s5.appendChild(checkbox);

			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName));
			s5.appendChild(label);

			s5.appendChild(document.createElement("br")); 

			var img = document.createElement("img");
			img.htmlFor = productName;
			img.src = productImg;
			img.width="200";
			img.height="200";
			s5.appendChild(img);
			s5.appendChild(document.createElement("br")); 

		}


		if (productType=="Snacks"){

			if (!fsnack){
				s6.appendChild(document.createElement("br")); 
				s6.appendChild(document.createTextNode("Snacks : "));
				s6.appendChild(document.createElement("br"));  
				fsnack = true;

			}
			s6.appendChild(document.createElement("br"));  
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s6.appendChild(checkbox);

			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName));
			s6.appendChild(label);

			s6.appendChild(document.createElement("br")); 

			var img = document.createElement("img");
			img.htmlFor = productName;
			img.src = productImg;
			img.width="200";
			img.height="200";
			s6.appendChild(img);
			s6.appendChild(document.createElement("br")); 
		}

		if (productType=="Meats"){

			if (!fmeat){
				s7.appendChild(document.createElement("br")); 
				s7.appendChild(document.createTextNode("Meats : "));
				s7.appendChild(document.createElement("br"));  
				fmeat = true;

			}
			s7.appendChild(document.createElement("br"));  
			var checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.name = "product";
			checkbox.value = productName;
			s7.appendChild(checkbox);

			// create a label for the checkbox, and also add in HTML DOM
			var label = document.createElement('label')
			label.htmlFor = productName;
			label.appendChild(document.createTextNode(productName));
			s7.appendChild(label);

			s7.appendChild(document.createElement("br")); 

			var img = document.createElement("img");
			img.htmlFor = productName;
			img.src = productImg;
			img.width="200";
			img.height="200";
			s7.appendChild(img);
			s7.appendChild(document.createElement("br")); 
		}

/*

		// create the checkbox and add in HTML DOM
		s2.appendChild(document.createElement("br"));  
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);

		s2.appendChild(document.createElement("br")); 

		var img = document.createElement("img");
		img.htmlFor = productName;
		img.src = productImg;
		img.width="200";
		img.height="200";
		s2.appendChild(img);
	*/



	}

}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	var userName = document.getElementById('name-answer').value;
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	
	para.innerHTML = "Hello " + userName +", here are the item(s) in your ABC Grocery cart:";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}

