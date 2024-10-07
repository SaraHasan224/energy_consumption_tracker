import { useSelector } from "react-redux";


function PageLoader() {
  const { showPageLoader } = useSelector((state) => state.loading);

  return showPageLoader ? (
    <div className="loading">
      <div className="spinner"></div>
    </div>
  ) : (
    <></>
  );
}

export default PageLoader;
