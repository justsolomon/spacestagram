import { useEffect, useState } from "react";

interface PhotoStorageProps {
  /** Boolean showing whether the photo is liked */
  isLiked: boolean;

  /** Function to like/unlike the photo */
  toggleLike: () => void;
}

/**
 * A hook used for checking a photo's liked status
 * in the localStorage and for liking/unliking photos
 *
 * @param id the id of the photo
 * @returns the liked status of a photo and a function to like/unlike it
 * @example
 * ```jsx
 * import React from "react";
 * import usePhotoStorage from "hooks/usePhotoStorage";
 *
 * const Component = () => {
 *    const id = 1;
 *    const { isLiked, toggleLike } = usePhotoStorage(id);
 *
 *    return (
 *      <button onClick={toggleLike}>
 *        {isLiked ? "Unlike" : "Like"}
 *      </button>
 *    )
 * }
 * ```
 */
const usePhotoStorage = (id: number): PhotoStorageProps => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

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
        //remove already liked photo from storage field
        delete likedPhotos[id];
        setIsLiked(false);
      } else {
        //add liked photo if storage field already exists
        likedPhotos[id] = true;
        setIsLiked(true);
      }
    } else {
      //add new storage field with liked photo
      likedPhotos = { [id]: true };
      setIsLiked(true);
    }

    localStorage["likedPhotos"] = JSON.stringify(likedPhotos);
  };

  return { isLiked, toggleLike };
};

export default usePhotoStorage;
