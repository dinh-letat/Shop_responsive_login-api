import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getProductApi } from '../../redux/productReducer/productReducer';

export default function Home() {
  const {arrProduct} = useSelector(state => state.productReducer);
  const dispatch = useDispatch();
  // const stateA = useSelector(state => state.productReducer.stateA);

  useEffect(()=>{
    //Hàm này sẽ 1 lần sau khi component load xong giao diện
    //Gọi api
    const action = getProductApi();
    /*
     action = async dispatch => {
          //Xử lý api
          let result = await axios({
              url:'https://shop.cyberlearn.vn/api/Product',
              method:'GET'
          });
          //Sau khi lấy dữ liệu từ api về => dispatch lên reducer
          //Tạo ra action creator đưa dữ liệu lên reducer
          const action = getDataProductAction(result.data.content);
          dispatch(action);
      }
    */
    dispatch(action);
    
  },[])

  return (
    <div>
      <div className='carousel'>

      </div>

      <div className='container'>
        <h3>Product list</h3>
        <div className='row'>
            {arrProduct.map((prod,index)=>{
              return <div className='col-4 mt-2' key={index}>
              <div className='card'>
                <img src={prod.image} alt='...' />
                <div className='card-body'>
                  <h3>{prod.name}</h3>
                  <p>{prod.price}$</p>
                  <NavLink to={`/detail/${prod.id}`} className='btn btn-warning'>
                    Add to cart <i className='fa fa-cart-plus'></i>
                  </NavLink>
                </div>
              </div>
            </div>
            })}
        </div>
      </div>
    </div>
  )
}
