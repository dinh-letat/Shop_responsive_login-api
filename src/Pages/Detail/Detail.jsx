import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetailApi } from "../../redux/productReducer/productReducer";
import { useParams ,NavLink} from "react-router-dom";
export default function Detail() {
  const { productDetail } = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const action = getProductDetailApi(id);
    dispatch(action);

  }, [id])
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4 mt-2'>
          <img src={productDetail.image} alt='...' />
        </div>
        <div className='col-8 mt-2'>
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
        </div>
      </div>
      <h3 className="mt-2">Related Products</h3>
      <div className="row mt-2">
        {productDetail.relatedProducts?.map((prod, index) => {
          return <div className="col-4" key={index}>
            <div className="card">
              <img src={prod.image} alt="..." />
              <div className="card-body">
                <p>{prod.name}</p>
                <p>{prod.price}</p>
                <NavLink className="btn btn-warning" to={`/detail/${prod.id}`}>
                  Add to cart
                </NavLink>
              </div>
            </div>

          </div>
        })}
      </div>
    </div>
  )
}
