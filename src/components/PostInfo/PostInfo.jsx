import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import '../UserInfo/UserInfo.scss';
import '../CommentList/CommentList.scss';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  <div className="PostInfo" key={post.id}>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">qui est esse</h3>
      <p>
        {' Posted by  '}
        <UserInfo user={post.user} />
      </p>
    </div>
    <p className="PostInfo__body">{post.body}</p>
    <hr />
    <CommentList comments={post.comments} />
  </div>
);
