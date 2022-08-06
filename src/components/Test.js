import { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { db, Db } from "./Db";

const Text = styledComponents.div``;

export const Test = () => {
  //   const arr1 = [1, 2, 3];
  //   const firstEl = arr1.shift();
  //   console.log(arr1);
  //   console.log(firstEl);

  const [el, setEl] = useState();

  useEffect(() => {
    const firstEl = db.shift();
    setEl(firstEl);
  }, []);

  console.log(el);

  //   ================unshift

  //   const firstEl = db.unshift("fuck");
  //   console.log(firstEl);
  return (
    <>
      {db && el && (
        <>
          <Text>{el.name}</Text>
          {db.map((a) => (
            <Text key={a.id}>{a.name}</Text>
          ))}
        </>
      )}
    </>
  );
};
