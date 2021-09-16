import CardList from "components/PhotoCardList";
import Layout from "components/global/Layout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/types";
import { useEffect } from "react";
import fetchPhotos from "redux/photo/photoService";
import { useInView } from "react-intersection-observer";
import ErrorMessage from "components/global/ErrorMessage";

const Home = () => {
  const {
    data: photos,
    page,
    hasNextPage,
    error,
  } = useSelector((state: RootState) => state.photos);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) dispatch(fetchPhotos(page));
  }, [inView, page, dispatch]);

  return (
    <Layout>
      {error && !photos.length ? (
        <ErrorMessage
          error={error}
          retryRequest={() => dispatch(fetchPhotos(page))}
        />
      ) : (
        <CardList photos={photos} loaderRef={ref} hasNextPage={hasNextPage} />
      )}
    </Layout>
  );
};

export default Home;
