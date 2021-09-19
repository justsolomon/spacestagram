import usePhotoStorage from "..";

const PhotoStorageTest = () => {
  const { isLiked, toggleLike } = usePhotoStorage(1);

  return (
    <button onClick={toggleLike} data-testid="like-button">
      {isLiked ? "Unlike" : "Like"}
    </button>
  );
};

export default PhotoStorageTest;
