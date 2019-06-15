import { createStore } from 'redux';

//Action Generators
const incrementCount = (incrementBy = 1) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
}

const decrementCount = (decrementBy = 1) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}

const setCount = (count) => {
    return {
        type: 'SET',
        count: count
    }
}

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

// Reducers
// 1. Pure function - Output depends only on input
// 2. Never change state or action directly
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }

        case 'SET':
            return {
                count: action.count
            }

        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

store.subscribe(() => {
    console.log(store.getState())
})


// Increment the count
store.dispatch(incrementCount(5))
store.dispatch(incrementCount())

//Reset the count to 0
store.dispatch(resetCount())

//Decrement the count
store.dispatch(decrementCount())
store.dispatch(decrementCount(10))

//Set the count
store.dispatch(setCount(101))