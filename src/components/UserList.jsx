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

let canFetch = true;

const UserList = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [htmlData, setHtmlData] = useState(null);

  useEffect(() => {
    const getDataInsideUseEffect = async () => {
      setIsLoading(true);
      let response = await getAllUsers(page, 100);
      setData((prevState) => {
        if (
          !prevState ||
          response.pagination.total >
            prevState.list.length + response.list.length
        ) {
          canFetch = true;
        }

        if (!prevState) return response;
        else {
          return {
            pagination: response.pagination,
            list: [...prevState.list, ...response.list],
          };
        }
      });
    };
    getDataInsideUseEffect();
  }, [page]);

  useEffect(() => {
    if (data) {
      console.log(data.list);
      let newArr = data.list.map((el, i) => {
        let newEl = <User key={"user" + el.id} userInfo={el} />;
        return newEl;
      });
      setIsLoading(false);
      setHtmlData(newArr);
    }
  }, [data]);

  useEffect(() => {
    console.log("mounted");
    const onScroll = (e) => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollHeight - clientHeight - scrollTop <= 100 && canFetch) {
        setPage((prevState) => prevState + 1);
        canFetch = false;
      }
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
