import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../Redux/features/productSlice";
export default function ProductDescription() {
  const [modified, setModified] = useState({});
  const { id } = useParams();
  console.log("id", id);
  const { Product, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct({ id }));
  }, [dispatch, id]);
  useEffect(() => {
    if (Product.length > 0) {
      const {
        title: name,
        description: productDescription,
        price: cost,
        stock: availableStock,
        brand: brandName,
        category: BrandCategory,
        thumbnail: image
      } = Product[0];
      const singleProduct = {
        name,
        productDescription,
        cost,
        availableStock,
        brandName,
        BrandCategory,
        image
      };
      setModified(singleProduct);
    } else {
      setModified(null);
    }
  }, [Product, id]);
  if (loading) {
    return (
      <div>
        <h3> LOADING...!</h3>
      </div>
    );
  }
  // if(!modified){
  //   return(
  //     <div>
  //       <h2> NO Product Found</h2>
  //       </div>
  //   )
  // }else{
  //   const {name,productDescription,cost,availableStock,brandName,BrandCategory,image} = modified
  // }
  return (
    <div>
      <h2> Product Description </h2>
      <div>
        <h3> {modified?.name} </h3>
        <img alt="title" src={modified?.image} width={250} />
        <h5> {modified?.availableStock}</h5>
        <h5> {modified?.brandName}</h5>
        <h5> {modified?.BrandCategory} </h5>
        <button> {modified?.cost} </button>
      </div>
    </div>
  );
}
