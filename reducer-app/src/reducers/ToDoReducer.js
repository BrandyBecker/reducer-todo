export const initialState = {
    toDos: [
    {toDo:'Pet Cat', Completed: false, id: 1},
    {toDo:'Feed Cat', Completed: false, id: 2},
    {toDo:'Bathe Cat', Completed: true, id: 3}]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newToDo={
                toDo: action.payload,
                Completed: false,
                id: Date.now()
            };
            return {
                ...state,
                toDos: [...state.toDos, newToDo]
            };
            case "TOGGLE_COMPLETED":
      return {
        ...state,
        toDos: state.toDos.map(todo => {
          if(todo.id === action.payload.id) {
            return {...todo, Completed: !todo.Completed}
          } else {
            return todo;
          }
        }
      )
    };
    case "CLEARED":
    return {
      ...state,
      toDos: state.toDos.filter(todo => {
        return todo.Completed === false;
      })
    }
    default:
            return state
    }
}