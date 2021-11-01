import React from "react";
import Link from "next/link";

const PostCardContent = ({ postData }) => (
  <div>
    {postData.split(/(#+[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s]+)/)) {
        return (
          <Link
            href={{ pathname: "/hashtag", query: { tag: v.slice(1) } }}
            as={`/hashtag/${v.slice(1)}`}
            key={i}
          >
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>
);

export default PostCardContent;
