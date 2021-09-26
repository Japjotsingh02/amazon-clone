import React, {useReducer, createContext, useContext} from 'react';

// Make a data layer
export const StateContext = createContext();

// Wrap our app to provide data layer
export const StateProvider = ({ reducer,initialState,childern }) => (

    // const [number, setNumber] = useState(0);

        <StateContext.Provider value = { useReducer(reducer, initialState) }>
            {childern}
        </StateContext.Provider>
    
);

// Pull Information from data layer
export const useStateValue = () => useContext(StateContext);

