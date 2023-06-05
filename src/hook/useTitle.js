import { useEffect, useState } from "react";

const useTitle = (initialState) => {
  const [title, setTitle] = useState(initialState);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = `${title} | 미디어커뮤니케이션학부 대여 서비스`;
  };
  useEffect(updateTitle, [title]);

  return setTitle;
};

export default useTitle;
