import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPostPosts, getPosts } from '../../store';
import { tw } from '../../styles/twind';

export type TPostListProps = {
  /**
   * Additional class names for the component.
   * @optional
   */
  className?: string;
};

export const PostList: React.FC<TPostListProps> = ({ className }) => {
  const dispatch = useDispatch();
  const posts = useSelector(getPostPosts);

  useEffect(() => {
    dispatch(getPosts({ itemsPerPage: 20, page: 1 }));
  }, [dispatch]);

  const rootClasses = useMemo(() => {
    let result = 'post-list';

    if (className) result = `${result} ${className}`;

    return result;
  }, [className]);

  return (
    <div className={rootClasses}>
      <h2 className={tw`mb-4`}>Post List</h2>
      <ul>
        {posts.map(post => {
          return (
            <li key={`post-${post.id}`} className={tw`flex items-center mb-2`}>
              <h3 className={tw`inline`}>{post.id}</h3>
              &nbsp;-&nbsp;
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
