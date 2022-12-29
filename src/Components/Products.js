import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/features/productSlice";
export default function Products() {
  const { Products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (loading) {
    return (
      <div>
        <h3> LOADING...! </h3>
      </div>
    );
  }
  return (
    <div>
      <h2> Products </h2>
      <div className="phone-container">
        {Products.map((item) => {
          const { id, thumbnail } = item;
          return (
            <div key={id} className="phones">
              <Link to={`/products/${id}`}>
                <img alt="phones" src={thumbnail} width={210} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
