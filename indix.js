// // // window.alert("mohamed")




// // // console.log("mo")

// // // var usarage=20;


// // // console.log(usarage+10);

// // // var nam1 = window.prompt("put your frist nabmer");
// // // var nam2 = window.prompt("put your last nabmer");

// // // var reslt =Number(nam1)+ Number(nam2)
// // // window.alert(reslt)
// // document.getElementById("mo")



















// // var nam1= window.prompt("bot your first number");
// // var nam2= window.prompt("bot your last number");
// // var x = Number(nam1) + Number(nam2);
// // window.alert(x);



// var roll= window.prompt("say who are you")
// if(roll=="admin")
// {
//     window.alert("you can edit, add , delet , ypdate")

// }
// else if (roll=="moderator")
// {
//     window.alert("you can edit, add , delet ")
// }
// else if (roll=="editor")
// {
//     window.alert("you can edit, ")
// }
// else 
// {
//     window.alert("kosomak")
// }

// var roll= window.prompt("say who are you")
// switch(roll)
// {
//     case("admin"):
//     window.alert("you can edit, add , delet , ypdate")
//     break;
//     case("moderator"):
//     window.alert("you can edit, add , delet ")
//     break;
//     case("editor"):
//     window.alert("you can edit, ")
//     break;
//     default: window.alert("kosomak")

// }


// function getAvg ( price , profit , tax )
// {

//     var result1 = price + profit;
//     var result2 = result1 * tax;
//     console.log (result2 )
//     return result2 
// }
//  var x = getAvg ( 10 , 20 , 50)



//  function lprice (price , profit , tax)
//  {
//     var result1 = price + profit;
//     var result2 = result1 * tax;
//     console.log (result2 )

//  }
//  lprice (x , 20 , 30 )




// function usarName () 
// {
//     var x = document.getElementById("userName").value;
//    window.alert("Hello"+x)
// }

// var user={
//     frestName:"mohamed", age:20 , gender: "male" , salary:2000000 , marid: true , job: "webdevelopment",
//     brother:{ frestName:"fathi", age:25 , gender: "male" , salary:3000000 , marid: true , job: "webdevelopment"},
//     hello:function()
//     {
//         console.log("welcom back");

//     }

// }

// console.log(user.hello())

// var frends= [ "mohamed" , "mazen" , "hasan" , " mohamed" , "fathi"]
// for (var i = 0 ; i < frends.length ; i++)
// {
//     console.log("hello " + frends[i] )
// }

var userNameAlert = document.getElementById("userNameAlert");
var productNameInput = document.getElementById("productName");
var productpriceInput = document.getElementById("productprice");
var productcategoryInput = document.getElementById("productCatgory");
var productDecInput = document.getElementById("productDec");
var priceAlert=document.getElementById("priceAlert");
var categoryAlert = document.getElementById("categoryAlert");
var decAlert = document.getElementById("decAlert");

var productsContainer;
if (localStorage.getItem("productlist") == null) {
    productsContainer = [];
}
else {
    productsContainer = JSON.parse(localStorage.getItem("productlist"));
    desplay();
}


function addProduct() {

    if (check() == true &&checkPrice()==true &&checkCategory()==true && checkDec()==true)  {
        var product = {
            name: productNameInput.value,
            price: productpriceInput.value,
            category: productcategoryInput.value,
            dec: productDecInput.value,
        }
        productsContainer.push(product);
        localStorage.setItem("productlist", JSON.stringify(productsContainer));
        desplay();
        clareform();
        document.getElementById("addbtn").innerHTML="add product";
    }
    else {
         alert("n3rvk ")
    }


}
function clareform() {
    productNameInput.value = "";
    productpriceInput.value = "";
    productcategoryInput.value = "";
    productDecInput.value = "";



}

function desplay() 
{
    var cartona = ``;

    for (var i = 0; i < productsContainer.length; i++) {
        cartona += `
        <tr> 
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].dec}</td>
        <td><button onclick="updateproduct(`+i+`)" class="btn btn-outline-warning">update</button></td>
        <td> <button onclick="deletProduct(`+i+`)" class="  btn btn-outline-danger">delete</button></td>
        </tr>
        `

    }
    document.getElementById(`tableBody`).innerHTML = cartona;



}

function check() {
        var rehex =/^[A-Z][a-z]{3,8}$/
        

    if (rehex.test(productNameInput.value)==true) {
        
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
        userNameAlert.classList.replace("d-block","d-none")
        return true
    }

    else {
        productNameInput.classList.add("is-invalid")
        productNameInput.classList.remove("is-valid");
        userNameAlert.classList.replace("d-none","d-block")
        return false
    }
}
productNameInput.addEventListener("keyup",check)

function checkPrice() {
        var rehex =/^[1-9][0-9]{1,6}$/
        

    if (rehex.test(productpriceInput.value)==true) {
        
        productpriceInput.classList.add("is-valid");
        productpriceInput.classList.remove("is-invalid");
        priceAlert.classList.replace("d-block","d-none")
        return true
    }

    else {
        productpriceInput.classList.add("is-invalid")
        productpriceInput.classList.remove("is-valid");
        priceAlert.classList.replace("d-none","d-block")
        return false
    }
}
productpriceInput.addEventListener("keyup",checkPrice)

function checkCategory() {
    var rehex =/^[A-Z][a-z .]{3,8}$/
    

if (rehex.test(productcategoryInput.value)==true) {
    
    productcategoryInput.classList.add("is-valid");
    productcategoryInput.classList.remove("is-invalid");
    categoryAlert.classList.replace("d-block","d-none")
    return true
}

else {
    productcategoryInput.classList.add("is-invalid")
    productcategoryInput.classList.remove("is-valid");
    categoryAlert.classList.replace("d-none","d-block")
    return false
}
}
function checkDec() {
    var rehex =/^[A-Z][a-z .]{1,500}$/
    

if (rehex.test(productDecInput.value)==true) {
    
    productDecInput.classList.add("is-valid");
    productDecInput.classList.remove("is-invalid");
    decAlert.classList.replace("d-block","d-none")
    return true
}

else {
    productDecInput.classList.add("is-invalid")
    productDecInput.classList.remove("is-valid");
    decAlert.classList.replace("d-none","d-block")
    return false
}
}
productDecInput.addEventListener("keyup",checkDec);
productcategoryInput.addEventListener("keyup",checkCategory);

function deletProduct(productIndx)
{
    productsContainer.splice(productIndx,1)
    localStorage.setItem("productlist", JSON.stringify(productsContainer));
    desplay()

}

function searchProduct(searchTerm)
{
    var cartona=``
    for (var i=0; i<productsContainer.length;i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {
            cartona += `
        <tr> 
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].dec}</td>
        <td><button class="btn btn-outline-warning">update</button></td>
        <td> <button onclick="deletProduct(`+i+`)" class="  btn btn-outline-danger">delete</button></td>
        </tr>
        `
        }

        else
        {
            console.log("knewv")
        }

    }
    
   
    document.getElementById(`tableBody`).innerHTML = cartona;
}

function updateproduct(i)
{
    productNameInput.value=productsContainer[i].name;
    productpriceInput.value=productsContainer[i].price;
    productcategoryInput.value=productsContainer[i].category;
    productDecInput.value=productsContainer[i].dec;
    deletProduct(i);
    document.getElementById("addbtn").innerHTML="update";

}

 







