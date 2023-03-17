import classes from "./User.module.css";

const User = (props) => {
  let userInfo = props.userInfo;

  return (
    <div className={classes.user}>
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
    </div>
  );
};

export default User;
