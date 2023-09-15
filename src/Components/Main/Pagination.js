import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/user-context";

const Pagination = () => {
  const { storedUsers } = useContext(UserContext);

  //   const [page, setPage] = useState();
  // console.log(Math.ceil(storedUsers.length / 6));

  return (
    <div>
      <span>◀</span>
      {/* {storedUsers.length > 6 &&
        .map((page, i) => (
          <span key={i}>{page}</span>
        ))
        } */}
      <span>▶</span>
    </div>
  );
};

export default Pagination;
