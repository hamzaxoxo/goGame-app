import { createSlice } from "@reduxjs/toolkit";

interface taskData {
    id: number;
    task: string;
    tasks: string[];
}

const initialState: taskData = {
    id: 0,
    task: '',
    tasks: [],
}

const taskSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((_, idx) => idx !== action.payload);
        },
    },
});

export default taskSlice.reducer;