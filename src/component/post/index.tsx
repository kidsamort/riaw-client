import { FC } from 'react';
import { postAPI } from 'service/postService';

export const Post: FC = () => {
  const { data: posts } = postAPI.useFeathAllPostQuery(5);
  return (
    <>
      <div>
        {posts?.map((post) => {
          return (
            <>
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
