import { useEffect, useState } from "react";
import { getProductTypes } from "../../services/customer";

const Github = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getProductTypes().then((response) => {
     console.log('data: ', response.data)
    });
  }, []);

  return (
    <div className="github">
      {/* {user && (
        <>
          <div>
            <p>{user.login}</p>
          </div>
          <div className="avatar">
            <img src={user.avatar_url} alt="" />
          </div>
        </>
      )} */}
    </div>
  );
};

export default Github;
