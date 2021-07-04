import { TOGGLE_SETTINGS } from "./action";

const initState   =  {
    settingsOpen: false,
}

export  function commonReducer(state=initState, action){
    switch(action.type){
        case TOGGLE_SETTINGS:
            return {
                ...state,
                userProfileOpen: false,
                settingsOpen: !state.settingsOpen,
            };
    
        default:
            return state;
    }
}
