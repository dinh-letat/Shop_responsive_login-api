import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFacebookApi } from '../../redux/productReducer/userReducer';
 

 
export default function LoginFacebook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Gọi api đăng nhập facebook
  const responseFacebook = async (response) => {
    console.log(response);

    const action = loginFacebookApi(response.accessToken);
    await dispatch(action);

    //Chuyển hướng về profile
    navigate('/profile');

    /*
      ./ : về đầu thư mục chứa nó
      /: đi từ root
      name: đi qua lại giữa các tập tin chung thư mục
    */
  }
  return (
    <div>
      <FacebookLogin
        appId="5599034476831451"
        // autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook} 
        render={<button>aaa</button>}
        
        />
        
    </div>
  )
}
