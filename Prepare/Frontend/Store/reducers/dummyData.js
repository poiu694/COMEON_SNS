/* dummy Post */
export const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "Lee Sangmin",
  },
  Images: [],
  Comments: [],
});

export const dummyComment = data => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "Lee",
  },
});

/* dummy User */
export const dummyUser = data => ({
  ...data,
  nickname: "Lee",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [
    { nickname: "Sangmin" },
    { nickname: "Chanho Lee" },
    { nickname: "neue zeal" },
  ],
  Followers: [
    { nickname: "Sangmin" },
    { nickname: "Chanho Lee" },
    { nickname: "neue zeal" },
  ],
});