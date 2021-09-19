import { useState } from "react";
import LikeButton from "..";

const LikeButtonTest = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <LikeButton
      liked={isLiked}
      title="test"
      toggleLike={() => setIsLiked(!isLiked)}
    />
  );
};

export default LikeButtonTest;
