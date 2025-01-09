//también se podría cambiar el 'use client' del HomePage y ponerlo aca. Eso en caso de no querer
//que el HomePage sea un Client Component
"use client";
import { useEffect } from "react";

function Users() {
  // useEffect(() => {
  //   alert("loaded"); //funciona porque esta siendo llamado desde HomePage y ahi esta el 'use client'
  // }, []);

  return <div>Users</div>;
}

export default Users;
