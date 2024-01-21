import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
    list: JSON.parse(localStorage.getItem("favouriteList")) || [],
};

const favouriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE:
            const updatedAddList = [...state.list, action.payload];
            localStorage.setItem(
                "favouriteList",
                JSON.stringify(updatedAddList)
            );
            return {
                ...state,
                list: updatedAddList,
            };

        case REMOVE_FROM_FAVOURITE:
            const updatedRemoveList = state.list.filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem(
                "favouriteList",
                JSON.stringify(updatedRemoveList)
            );
            return {
                ...state,
                list: updatedRemoveList,
            };

        default:
            return state;
    }
};

export default favouriteReducer;
