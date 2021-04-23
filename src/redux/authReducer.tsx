export type AuthReducerAC =
    ReturnType<typeof setAuthUserData>

export type InitialStateAuthReducerType = {
    isAuth: boolean,
    id: number | null,
    email: string,
    login: string | null
}

const initialState: InitialStateAuthReducerType = {
    id: null,
    email: '',
    login: '',
    isAuth: false
};

export const authReducer = (state = initialState, action: AuthReducerAC): InitialStateAuthReducerType => {

    switch (action.type) {
        case 'SET-USER-DATA': {
            debugger
            return {
                ...state,
                login: action.data,

                isAuth: true
            };
        }
        default:
            return state;
    }
};

export const setAuthUserData = (data: string | null) => ({
    type: 'SET-USER-DATA',
    data
} as const);
