import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols1 md:grid-cols-2 my-12 items-center gap-8 mx-24 px-8 md:px-20 py-12">
        <div>
          <div className="font-bold text-lg">
            <h1>Hello, it's me</h1>
          </div>
          <div className="text-4xl font-extrabold mt-5">
            <header>Artist John</header>
          </div>
          <div className="font-bold text-lg mt-5">
            <h1>I am an artist</h1>
          </div>
          <div className="font-bold mt-5">
            <p>Please hold your breath as we dive into a world full of creativity with designer John.</p>
          </div>
          <div className="flex items-center p-2 gap-3 mb-5 " >
            <div className="h-15 w-15">
              <img src='https://img.icons8.com/ios-filled/512/facebook-new.png'/>
            </div>
            <div className="h-15 w-15">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/2048px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png'/>
            </div>
            <div className="h-15 w-15">
              <img src='https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-vector-mail-icon-png-image_995083.jpg'/>
            </div>
          </div>
          <div>
            <button className="text-white bg-green-900 hover:bg-green-800 focus:outline-none transition cursor-pointer font-medium rounded-full  text-lg px-15 py-2 text-center">
              My Profile
            </button>
          </div>
        </div>
        <div className="grid items-start h-100 w-70">
          <img src='https://www.pngall.com/wp-content/uploads/9/Male-Entrepreneur-PNG-Free-Image.png'/>
        </div>
      </div>
    </div>

  );
}
export default Home;