import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

export const counterSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state ,{payload}) => {
           state.todos.push(payload)
        },
        removeTodo:(state , {payload}) => {
            state.todos.filter((todo) => {
                return todo.id !== payload
            })
        }
    }
})

export const {addTodo , removeTodo} = counterSlice.actions
export default counterSlice.reducer