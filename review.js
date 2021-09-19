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

// opu

// code review (requirements)
// zero responsiveness
// no indication of adding a todo

// code review (overall)
// clean up folder structure
// clean up app.js

// code review (file based)
// @Todo.jsx
// //  @34,36 confusing naming and camelcase needed
// // @41-43 proper destructuring needed
// you should make one component, which can both be used to edit and update todo
// why database.js?

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

// requirements check 
// no validation on fields
// no stimulus for button hover
// no stimulus for update

// code review (overall)
// remove trashes
// clean up app.js
// clean up console logs

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
// remove trashes
// use functional components
// one single component should suuply the functionalities of edit and update
// get rid of console logs
// code review (file based)
// @Main.jsx
// //@22 no need to copyTodo
// //@33 why 'd'
// //@34 same, no need for newTodos
// //@44 what is the 'id' ?
// //@48 do not use splice use filter instead
// //
