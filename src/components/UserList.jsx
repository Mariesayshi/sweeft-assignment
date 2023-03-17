import { useState, useEffect } from "react";
import User from "./User";

let apiURL =
  "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user";

const getAllUsers = async (page, size) => {
  let response = await fetch(`${apiURL}/${page}/${size}`);
  let responseJson = await response.json();
  // console.log(responseJson);
  return responseJson;
};

const UserList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [htmlData, setHtmlData] = useState(null);

  // console.log('data: ', data)
  useEffect(() => {
    const getDataInsideUseEffect = async () => {
      setIsLoading(true)
      let response = await getAllUsers(1, 20);
      setData(response);
    };
    getDataInsideUseEffect();
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data.list);
      let newArr = data.list.map((el, i) => {
        console.log(el);
        let newEl = <User key={"user" + el.id} userInfo={el} />;
        return newEl;
      });
      setIsLoading(false)
      setHtmlData(newArr);
    }
  }, [data]);

  useEffect(() => {
    console.log("mounted");
    const onScroll = (e) => {
      console.log(e);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      console.log("unmounted");
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="userList">
      {htmlData}
      {isLoading ? <p>Loading...</p> : null}
    </section>
  );
};

export default UserList;
