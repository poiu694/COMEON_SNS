import { ADD_POST } from "./type";

const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "Lee",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Iamges: [
        {
          src: "https://avatars.githubusercontent.com/u/43488305?s=60&v=4",
        },
        {
          src: "https://avatars.githubusercontent.com/u/43488305?s=60&v=4",
        },
        {
          src: "https://avatars.githubusercontent.com/u/43488305?s=60&v=4",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "han",
          },
          content: "우와 이게 뭐에요 ?",
        },
        {
          User: {
            nickname: "hana",
          },
          content: "멋있어요 ~!!",
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
