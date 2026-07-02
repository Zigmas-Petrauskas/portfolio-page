import { useState } from "react";

const useAbout = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return { showMore, toggleShowMore };
};

export default useAbout;
