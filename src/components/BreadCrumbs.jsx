import classes from "./BreadCrumbs.module.css";

const BreadCrumbs = (props) => {
  console.log(props.breadCrumbs);
  return (
    <div className={classes.breadCrumbs}>
      <span className={classes.breadCrumb}></span>
    </div>
  );
};

export default BreadCrumbs;
