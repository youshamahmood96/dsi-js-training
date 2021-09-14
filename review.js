// Sohel Rana
 
// No folder Structure, originating in confusion about functionalities of different component
// unnecessary ContextApi.js component
// No Global State
// Provider in app.js
// at UserList.js 
// // @ 29,30, redundant code
// // @ 48-54, why?
// // @ 56, why input type email on username?
// // @ 58, why value = {username}
// // @ 72, space in name is not advisable
// // @ 84-87, {...setId} , {...setUsername} etc
// at User.js
// // @ 24,
// {stateUser.map(({id, username, password, todo}, index) => (
//     <div className="user" key={index}>
//       <div className="details">
//         <p className="username"> Username: {username} </p>
//         <p> To-do : {todo} </p>
//         <button
//           className="btn update-btn"
//           onClick={() => {
//             updateHandle(id, username, password, todo);
//           }}
//         >
//           Update
//         </button>
//         <button
//           className="btn delete-btn"
//           onClick={() =>
//             deleteHandle(id, username, password, todo)
//           }
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   ))}

// Akib uz zaman
// @ TodoList
// // why addTodo imported here and sent as props instead of directly imported into the component?
// @TodoForm
// // we should use proper destructuring
// @AppReducer
// // we use global actions, store them into variables
// confusing names

// {
//   todos.length !== 0 ? todos.map(({id,name,email,todo}) => (
//       <div key={id} className="flex flex-col border-1 rounded-lg overflow-hidden m-1">
//           <div className="flex flex-col p-1 px-2 bg-gray-200">
//               <div className="flex flex-row justify-between">
//                   <div className="text-lg">Name: {name}</div>
//                   <div className="flex flex-row space-x-2">         
//                       <FaRegEdit 
//                       className="cursor-pointer"
//                       onClick={() => setEdit({
//                           id,
//                           name,
//                           email,
//                           todo,
//                       })}
//                       />
//                       <RiDeleteBinLine 
//                       className="cursor-pointer" 
//                       onClick={() => deleteTodo(id)}
//                       />
//                   </div>
//               </div>
//               <div className="text-sm">Email: {email}</div>
//           </div>
//           <div className="bg-blue-200 overflow-hidden p-1 px-2">
//               <div>To-do: {todo}</div>
//           </div>
//       </div>
//   )) : <div className="p-1 px-2">No To-dos found</div>
// }

// Mahbub Alam Navid

// first review
// remove trashes from folder structure (not done)
// keep the app.js clean (multiple things need to be fixed) (partially done)
// proper destructuring needed (not done)
// use the createContext line to update the initial state. (not done)
// folder structure can be better (done)
// @AddUser.js (done)
// // @6, confusing
// // use single state throughout the whole component
// // @30 you can use callback instead of this
// // @33 type={"email"} not needed, just type="email"

// second review
// confusing naming (@AddUser:16)
// use separate handleChange function
// no validation on fields
// @globalContext
// // why two useReducer hook

// Md. Basim Uddin Ahmed
// Do not push .idea 
// proper destructuring needed all over
// we dont need className={"title"}
// can we rewrite the useClickedOutside hook without manipulating the real dom?
// @TodoCard
// // @22 just pass todo, also you should pass only relevant info to a reducer function
// @TodoReducer
// // @1 we should keep this in a separate file
// // @10 return [...state,action.todo]
// // @13 state[(action.todo.id - 1)] = action.todo return state
// // @19 return state.filter(todo=>todo.id === action.todo.id)
// @TodoCreate
// // @19 why didnt we do this in state? also, use destructuring
// // @88 explain

// Emon

// upgrade npm version
// trashes still here
// app.js still not clean
// write the reducer function separately
// @components>Home.js
// // use reducer functions for these tasks
// // do not use splice
// // @12 why change,setChange?
// // everything in one single file

// @components>Cards.jsx
// // why update,setupdate

// Shadman

// @todoReducer.js
// //

// Rashidul

// delete trashes
// keep the app.js clean
// proper destructuring needed(e.g @TodoForm.jsx>32)
// .js or .jsx?
// remove console logs
// why the saved flag?
// @ app.js
// // @23, [todolist,setTodolist], also, do not use "list" because list means something different in swe

// Sneha

// requirement check

// should show any sort of effect on hover over a button
// use case: after I delete all todos, and then add one, all of them are restored again
// no update button, at first I thought that the update functionality was not done
// after I click on a name, then update, and then come back to the home page, the color changes
// I can put anything inside email, no validation
// I can literally put an empty object, required not included

// code review (overall)

// clean up the folder structure
// no need to use getters and setters, as we do not use oop structure in react functional programming
// use proper destructuring e.g : @dashboa=rd.jsx>33
// clean up console logs
// keep your app.js clean
// filenames not in sync with function names
// js or jsx?

// code review (file based)

// @app.js
// // @13 instead of <Route path="/not_found" component={NotFound} />
        //   <Redirect from="/" exact to="/dashboard" />
        //   <Redirect to="/not_found" />
// we can use <Route path="*" component={NotFound} />
// @dashboard.jsx
// // @12 no need to use a new variable
// @form.jsx
// // @38, we need to guide the user to the home page

// Jahid Hasan

// Requirement check

// No validation on fields, I can put anything anywhere
// When I click on edit, nothing in the ux indicates that I am actually editing stuff
// After I edit, the fields are still filled with the previous values

// code review (overall)

// clean up the folder structure
// Class based component used, try to rewrite it using functional components and hooks.
// everything in app.js, full modularization of the project needed
// get rid of the console logs

// code review (file based)

// @App.js
// // @8 what does this title do?
// // @9 what does act do?
// // how does addTodo work?
// // what is i in deleteTodo? confusing naming
// // do not delete todos using array index, use a unique id, also filter>splice as splice changes the original array and filter creates a new array
// // @42,43 why is this.setState called twice?
// // infuse the nameChangeHandler,emailChangeHandler,todoChangeHandler into one single method

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

// bad ux, use margin and padding properly
// use className,htmlFor instead of using class,for
// cleaner folder structure necessary
// clean up app.js
// js or jsx?
// proper destructuring needed (e.g @app.js>30,34,38)

// code review(file based)

// @App.js
// //@6,8 confusing namings
// //@8 no need to use an array over this object
// //@12 use "description" instead of using "des"
// //@27 extract this onsubmit event into a function
// //@42 *create
// @TodoBoard.jsx
// //extract all inline methods to functions
// //do not use splice, it mutates the original array, instead use filter

