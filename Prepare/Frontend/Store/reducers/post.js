import { ADD_POST } from "./type";

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "Lee",
      },
      content: "첫 번째 게시글 #해시태그 #안녕 ##이런것도?#헤헤",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "Han",
          },
          content: "우와 이게 뭐에요 ?!",
        },
        {
          User: {
            nickname: "HANA",
          },
          content: "얼른 보고 싶어요~",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터 입니다.',
  User: {
    id: 2,
    nickname: 'Lee'
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state, 
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
};

export default reducer;
