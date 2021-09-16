import { useEffect, useState } from "react";

interface PhotoStorageProps {
  /** Function to check whether a photo is liked */
  isLiked: boolean;

  /** Function to like/unlike a photo */
  toggleLike: () => void;
}

const usePhotoStorage = (id: number): PhotoStorageProps => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    let likedPhotos = localStorage["likedPhotos"];
    if (likedPhotos) {
      likedPhotos = JSON.parse(localStorage["likedPhotos"]);

      setIsLiked(Boolean(likedPhotos[id]));
    } else {
      setIsLiked(false);
    }
  }, [id]);

  const toggleLike = () => {
    let likedPhotos = localStorage["likedPhotos"];

    if (likedPhotos) {
      likedPhotos = JSON.parse(likedPhotos);

      if (likedPhotos[id]) {
        //remove already liked photo from storage
        delete likedPhotos[id];
        setIsLiked(false);
      } else {
        likedPhotos[id] = true;
        setIsLiked(true);
      }
    } else {
      likedPhotos = { [id]: true };
      setIsLiked(true);
    }

    localStorage["likedPhotos"] = JSON.stringify(likedPhotos);
  };

  return { isLiked, toggleLike };
};

export default usePhotoStorage;
