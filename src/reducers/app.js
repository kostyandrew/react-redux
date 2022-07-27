function appReducer(state = {loaded: false}, action) {
    switch (action.type) {
        case "app/initialStart":
            return {...state, loaded: true};
        default:
            return state;
    }
}

export default appReducer;
