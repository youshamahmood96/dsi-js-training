// Sohel Rana
 
//requirement

// i shouldnt be able to access /checkout normally
// if i click below cart it doesnt disappear
// why purchase button leads to an error?
// not found page doesnt have a link to home

// @checkout.js & @ Cart.js, we are calculating total price here, extract this into a reusable function

// Akib uz zaman

// @store.js we shouldnt use let keyword while defining store and persistor
// keep redux things in a separate folder\
// i can type /checkout and access the checkout path

// @cart.js 12,13, use a single useSelector to fetch the whole state, then destructure it
// @15 no need for another function here

// @checkout.js @12 same, no need for another function

// @productCard.js @14 same, no need for two useSelectors




// Mahbub Alam Navid

// you can keep navbar as a common component
// show total price
// no clear cart button


// @Product.js
// refactored a bit

//@cart.js @39 extract this into a function
//@navbar @13, extract this into a function

// Emon

// requirement check

// As per discussion, lot of things need to be fixed

// code review (overall)

// remove trashes
// routing not done properly
// I can go to checkout without selecting any product
// why navbar and banner common components

// code review (file based)
// @Checkout.jsx
// // @10 why length?
// // @11 we dont use for loop
// // @11 extract this in a reusable function
// // @37 unnecessary destrcuture: it can be done like this-->
// // {selectedItems.map(item => (
//     <CheckoutItems
//     key={item.id}
//     {...item}
//    />
//  ))}

// @CheckoutItems.jsx
// // @24 DollarIcon instead of Dollar

// @ShoppingContext.jsx
// //@6 why itemlist in my global state?
// // Do not name "List"

// @prodcuts/changeSelected... , what is this?
// @ItemCards.jsx
// // @14 why?
// // @38 why useEffect?

// @ProductsSearch.jsx
// // unnecessary destructure

// @SideBarContainer.jsx
// // @12 why useEffect?

//  @SidebarItemCards.jsx
// // @12 why?




// Shadman

// @todoReducer.js
// //

// Rashidul

// delete trashes
// @Home.js
// // @22, what is a?
// @TodosReducer.jsx
// // use a switch-case instead of if-else

// Sneha

// requirement check



// code review (overall)

// clean up the folder structure
// why is FakeUsersDatabase a jsx file?
// clean up console logs, warning showing due to unnecessary imports in app.jsx 
// initial state of the users not set while creating context, rather it was set while routing, which doesnt make sense
// remove unnecessary comments
// code review (file based)

// @DashBoard.jsx
// //@13 you can omit new_users
// //@33 destructure here
// @TodoForm.jsx
// //@22 destructure here
// //@54 unnecessary useEffect

// Jahid Hasan

// Requirement check

// show indication of editing

// code review (overall)

// clear up console

// code review (file based)

// @Show.js
// // use html tags instead of strings

// shifat

// code review (overall)
// dont push .idea

// code review (file based)

// @context/todoReducer.js
// //@9 no need to copy the array

// @TodoList.jsx
// //@8 do we really need this?
// //@27 destructure here




// uchaiye

// code review(overall)

// use className instead of class
// unnecessary app.css
// what is the id of your todos?


// code review(file based)

//@TodoBoard.jsx

// // @5 what does editDelete mean and wht does it do?
// // @18 what is newTodos2? why was it necessary?
// // @20 shouldnt you do this before any operation?
// // @38-40, proper destructuring needed

//@TodoHome.jsx

// // @9, why a function?
// // @16 poor naming
// // @43 proper destrcuturing needed


// @App.js
// //@6,8 confusing namings
// //@8 no need to use an array over this object
// //@12 use "description" instead of using "des"
// //@27 extract this onsubmit event into a function
// //@42 *create
// @TodoBoard.jsx
// //extract all inline methods to functions
// //do not use splice, it mutates the original array, instead use filter

// opu

// code review (overall)

// clean up folder structure
// break up the entire css into parts
// name your components with uppercase letters
// clear console (one warning and one error is showing)
// code review (file based)
// @Todo.jsx
// // @18 camelcase
// // @20 confusing naming
// // @61 put this in an if-else
// // 

// emon
// code review (requirements)

// code review (overall)
// get rid of the console logs
// use a single component for edit and update
// what does AddUpdate.jsx do?
// what does Cards.jsx do?
// why is Cards inside a folder and others are not?

// @Cards.jsx
// // @21 we use (type,payload) keys in action, do not use a third key
// // @9 confusing names.
// // @31 use a proper structure for dispatch allthroughout
// @Todo.jsx
// // className app unnecessary

// Konka



// code review (file based)
// @ App.js
// // use functional components instead of class components
// //@9, why title?
// // what do fsubmit, fremove do?
// // @17 what is this line doing?
// //@53 use filter instead of splice 
// //@78 no need
// //@89 use meaningful name

// Nahid Reza

// code review (overall)

// No validation of fields on update
// Use "requried" in input
// clear console 
// move css to separate folders

// code review (file based)

// @TodoContext.jsx
// // everything in TodoContext.jsx why?
// // @13,@14 confusing names
// // why is todocount needed?
// // @16 what does it do
// // @24 what is this?
// // @52 where is the else?

// @Form.jsx
// // @4 editMode is not being used
// // @19.. why use separate functions where you arte already passing that to a function?
// // @81 destructure

// @Todo.jsx

// // what does setEditMode do and why is there a necessity for a boolean named todoForm?

// @TodoCard.jsx

// // @9 unnecessary functions

// Todos,Todo so many confusing components

// basim uddin

// you can return the .toFixed with parseInt
// @fetchDataFromApi @6 return Promise.reject(response);
// @12 what do i want to show?
// @utils/loadData.js arent we using redux persist?
// clean up console
// where does /checkout go?
// @ProductCheckoutCard.js @11

// shadman

// about using custom hooks

// i want to input number in cart
// we dont use for loops anymore @useCartHelper
// @CartItemShow.js @18 we can extract this to another component
// we shouldnt be able to access /checkout with our empty shopping cart
// @checkout.js, we should rewrite this also @OrderSummary.js 
// @checkout.js @311 why +?
// @Home.js we should rewrite the routing
// @navbar.js @21 why is this copied?
// @OrderSummary.js @23 unnecesssary
// // @26 why useEffect here?
// // @32 unnecessary copy
// // @35  products[cartItem.id-1].rating['count'] -= cartItem.quantity;
// // subTotal price and total price can be reusable

// @ProductList.js
// // @17 as we are using this in multiple cases, we couldve exported this
// // @21 this could be extracted into a custom hook
// // @29 did we need a setProductList?
// // @30 what does this do? 
// // so many useEffects

// @ProductOvervies.js
// // why useEffect?



