// export default function(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }

// export default store => next => action => {

// }
// export default store => next => action => {
// 	console.log('in middleware', action);
//     return next(action);
// }

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}