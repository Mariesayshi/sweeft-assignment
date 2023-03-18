import classes from "./User.module.css";
import { Link } from "react-router-dom";

const User = (props) => {
  let userInfo = props.userInfo;

  return (
    <Link to={`/user/${userInfo.id}`} className={classes.user}>
      <img
        className={classes.userImg}
        src={`${userInfo.imageUrl}?v=${userInfo.id}`}
      />
      <div className={classes.userTextContent}>
        <div
          className={classes.userName}
        >{`${userInfo.prefix} ${userInfo.name} ${userInfo.lastName}`}</div>
        <div>{userInfo.title}</div>
      </div>
    </Link>
  );
};

export default User;
