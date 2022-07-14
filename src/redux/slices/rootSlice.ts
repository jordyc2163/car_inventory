import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Audi",
        model: "S8",
        series: "6",
        description: "Ride with style.",
        price: 20000.00,
        condition: "New",
        max_speed: "200 mph",
        horsepower: "20 hp"
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseSeries: (state, action) => { state.series = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseCondition: (state, action) => { state.condition = action.payload},
        chooseMaxSpeed: (state, action) => { state.max_speed = action.payload},
        chooseHorsepower: (state, action) => { state.horsepower = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseSeries, chooseDescription, choosePrice, chooseCondition, chooseMaxSpeed, chooseHorsepower } = rootSlice.actions