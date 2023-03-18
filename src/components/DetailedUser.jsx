import { useEffect, useState } from "react";
import Header from "./Header";
import UserList from "./UserList";
import classes from "./DetailedUser.module.css";
import { useParams } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";

let apiURL =
  "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user";

const getUser = async (userId) => {
  let response = await fetch(`${apiURL}/${userId}`);
  let responseJson = await response.json();
  // console.log(responseJson);
  return responseJson;
};

const DetailedUser = (props) => {
  console.log(props);
  const [detailedUserData, setDetailedUserData] = useState(null);
  const { id } = useParams();
  console.log("id: ", id);

  useEffect(() => {
    const getUserInsideUseEffect = async () => {
      if (id) {
        let data = await getUser(id);
        setDetailedUserData(data);
        props.setBreadCrumbs((prevState) => [...prevState, data]);
      }
    };
    getUserInsideUseEffect();
  }, [id]);

  return (
    <div className={classes.detailedUser}>
      {detailedUserData ? (
        <>
          <Header detailedUserData={detailedUserData} />
          {props.breadCrumbs.map((el) => (
            <p>{el.name}</p>
          ))}
          <BreadCrumbs data={props.breadCrumbs} />
          <h2>Friends:</h2>
          <UserList userId={id} />
        </>
      ) : null}
    </div>
  );
};

export default DetailedUser;
