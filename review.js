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
// remove trashes from folder structure
// keep the app.js clean (multiple things need to be fixed)
// proper destructuring needed
// use the createContext line to update the initial state.
// folder structure can be better
// @AddUser.js
// // @6, confusing
// // use single state throughout the whole component
// // @30 you can use callback instead of this
// // @33 type={"email"} not needed, just type="email"

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