export default function store() {
  return next => action => next(action);
}
