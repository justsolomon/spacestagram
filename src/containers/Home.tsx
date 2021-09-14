import CardList from "components/PhotoCardList";
import Layout from "components/global/Layout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/types";
import { updatePhotos } from "redux/photo/photoActions";
import { useEffect } from "react";
import fetchPhotos from "redux/photo/photoService";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const {
    data: photos,
    page,
    hasNextPage,
  } = useSelector((state: RootState) => state.photos);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0 });

  const togglePhotoLike = (id: number): void => {
    const photoIndex = photos.findIndex((photo) => photo.id === id);

    photos[photoIndex].liked = !photos[photoIndex].liked;

    dispatch(updatePhotos(photos));
  };

  useEffect(() => {
    if (inView) dispatch(fetchPhotos(page));
  }, [inView, page, dispatch]);

  return (
    <Layout>
      <CardList
        photos={photos}
        toggleLike={togglePhotoLike}
        loaderRef={ref}
        hasNextPage={hasNextPage}
      />
    </Layout>
  );
};

export default Home;
