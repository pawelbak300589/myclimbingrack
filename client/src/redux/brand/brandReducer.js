import brandActionTypes from "./brandTypes";

const INITIAL_STATE = {
    loading: false,
    // TODO: think what should be visible for normal user and what for admin
    //  maybe different API calls, or checking user role in the API and returning different data for brands.
    //  that's because brands can be used for normal user view too : like brand select input or similar...
    items: [],
    pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 25,
        total: 0
    },
    search: {
        phrase: '',
        exact: false,
    },
    error: null
};

const brandReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case brandActionTypes.GETALL_REQUEST:
        case brandActionTypes.GETONE_REQUEST:
        case brandActionTypes.CREATE_REQUEST:
        case brandActionTypes.UPDATE_REQUEST:
        case brandActionTypes.DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case brandActionTypes.GETALL_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.data,
                pagination: {
                    current_page: action.payload.current_page,
                    last_page: action.payload.last_page,
                    per_page: action.payload.per_page,
                    total: action.payload.total,
                },
                search: {
                    phrase: action.payload.search.phrase,
                    exact: action.payload.search.exact,
                },
                error: null
            };
        case brandActionTypes.GETALL_FAILURE:
            return {
                ...state,
                loading: false,
                items: [],
                pagination: {
                    current_page: 1,
                    last_page: 1,
                    per_page: 25,
                    total: 0,
                },
                search: {
                    phrase: '',
                    exact: false,
                },
                error: action.payload
            };
        case brandActionTypes.GETONE_SUCCESS:
        case brandActionTypes.CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload],
                error: null
            };
        case brandActionTypes.UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return { // return updated item
                            ...item,
                            ...action.payload
                        };
                    }
                    return item; // return item without change
                }),
                error: null
            };
        case brandActionTypes.DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: state.items.filter((item) => item.id !== action.payload),
                error: null
            };
        case brandActionTypes.GETONE_FAILURE:
        case brandActionTypes.CREATE_FAILURE:
        case brandActionTypes.UPDATE_FAILURE:
        case brandActionTypes.DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case brandActionTypes.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    current_page: action.payload,
                },
            };
        case brandActionTypes.CHANGE_ITEMS_PER_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    per_page: action.payload,
                },
            };
        case brandActionTypes.UPDATE_SEARCH_PHRASE:
            console.log(action.payload);
            return {
                ...state,
                search: {
                    ...state.search,
                    phrase: action.payload.phrase,
                    exact: action.payload.exact,
                },
            };
        default:
            return state;
    }
};

export default brandReducer;