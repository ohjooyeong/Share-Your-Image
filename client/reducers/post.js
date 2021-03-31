import produce from "immer";

export const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: "ohzz",
            },
            content: "첫 번째 게시글 #해시태그 #익스프레스",
            Images: [
                {
                    src: "https://i.pinimg.com/564x/09/4c/27/094c27bb93bec23a4ce2f22fd5c0758e.jpg",
                },
                {
                    src: "https://i.pinimg.com/564x/d6/52/e9/d652e967b6b2579f2b2078b5974a9f8a.jpg",
                },
            ],
            Comments: [
                {
                    User: {
                        nickname: "ohoh",
                    },
                    content: "오우",
                },
            ],
        },
    ],
    loadPostsLoading: false, // 게시글(여러개) 불러오기 시도중
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false, // 게시글 게시 시도중
    addPostDone: false,
    addPostError: null,
    imagePaths: [],
};

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

const dummyPost = {
    id: 2,
    content: "더미데이터입니다",
    User: {
        id: 1,
        nickname: "ohzz",
    },
    Images: [
        {
            src: "https://i.pinimg.com/564x/09/4c/27/094c27bb93bec23a4ce2f22fd5c0758e.jpg",
        },
    ],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                draft.me = action.data;
                break;
            case LOAD_POSTS_FAILURE:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = false;
                draft.loadPostsError = action.error;
                break;
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(dummyPost);
                draft.imagePaths = [];
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostDone = false;
                draft.addPostError = action.error;
                break;
            default:
                break;
        }
    });
};

export default reducer;
