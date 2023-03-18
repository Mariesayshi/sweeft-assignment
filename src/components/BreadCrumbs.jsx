import { useState, useEffect } from "react";
import classes from "./BreadCrumbs.module.css";
import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
  const [crumbs, setCrumbs] = useState([]);
  console.log(props.breadCrumbs);

  useEffect(() => {
    setCrumbs(
      props.breadCrumbs.map((el, i) => {
        return (
          <Link className ={classes.crumb}
            to={`/user/${props.breadCrumbs[i].id}`}
            key={`breadCrumbID${i}`}
          ><span className={classes.crumbName}>{`${el.prefix} ${el.name} ${el.lastName}`}</span><span>{` > `}</span></Link>
        );
      })
    );
  }, []);

  return <>{crumbs}</>;
};

export default BreadCrumbs;
