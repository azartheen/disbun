import React from "react";
import bg from "../Assets/bg.svg";
import icLogoDisbunWhite from "../Assets/icLogoDisbunWhite.svg";

export default function Login({ setPopup }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const login = React.useCallback(async () => {}, []);

  const EnterPress = (event) => {
    if (event.key === "Enter") {
      // login();
    }
  };
  return (
    <div>
      <div
        className='absolute bg-opacity-75 bg-black'
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "100vh",
          width: "100vw",
        }}
        onClick={() => {
          setPopup(false);
        }}
      />
      <div
        className='none lg:flex absolute rounded-b-lg'
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "448px",
        }}
      >
        <div
          className='rounded-l relative lg:block hidden w-loginwidthbg'
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={icLogoDisbunWhite}
            alt='logo'
            className='m-8 mt-12 text-white text-md text-lg'
          ></img>
          <p className=' text-3xl text-white ml-8 mt-20'>
            Layanan Integrasi <br />
            Fitur Sistem Informasi <br />
            Perkebunan
          </p>
          <p className='m-8 mt-12 text-white text-xs fixed bottom-0'>
            Copyright © 2020 <br />
            Dinas Perkebunan Jawa Barat. All Rights Reserved.
          </p>
        </div>
        <div className='lg:w-loginwidthbg w-full bg-white rounded-r'>
          <div className='m-auto my-10 p-4 lg:p-8 text-sm'>
            <p className='text-gray-700 text-center font-bold mb-4'>Sign In</p>
            <div>
              <p className='text-gray-700'>Username or Email</p>
              <input
                type='text'
                id='email'
                name='email'
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder='Masukan username or email'
                className='p-3 my-4 w-full border rounded'
                onKeyPress={EnterPress}
              ></input>
            </div>
            <div>
              <p className='text-gray-700'>Password</p>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                className='p-3 my-4 w-full border rounded'
                placeholder='Masukan password'
                style={{ width: "calc(100% - 66px)" }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onKeyPress={EnterPress}
              ></input>{" "}
            </div>
            <button
              onClick={() => {
                login();
              }}
              className='rounded-md bg-green-600 w-full mt-10 h-20 mb-5 p-3 text-white m-auto'
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
