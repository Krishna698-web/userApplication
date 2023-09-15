import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/user-context";

const Pagination = () => {
  const { storedUsers } = useContext(UserContext);

  //   const [page, setPage] = useState();
  // console.log(Math.ceil(storedUsers.length / 6));

  return (
    <div>
      {storedUsers.length > 6 && (
        <div>
          <span>◀</span>
          {[
            ...Array(storedUsers.length / 6).map((_, i) => (
              <span key={i}>{i + 1}</span>
            )),
          ]}
          <span>▶</span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
