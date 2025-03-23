import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <div className="grid grid-cols1 md:grid-cols-2 my-12 items-center gap-8 mx-24 px-8 md:px-20 py-12">
        
        <div className="grid items-end h-100 w-70">
          <img src='https://pngimg.com/d/man_PNG6531.png'/>
        </div>
        <div>
          <div className="text-4xl font-extrabold mt-10">
            <header>About Me</header>
          </div>
          <div className="font-bold text-lg mt-5">
            <h1>Artist & Designer</h1>
          </div>
          <div className="font-bold text-sm mt-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fuga eveniet doloribus similique unde! Eligendi,
            deserunt totam quaerat laborum, veritatis aliquid placeat
            quis hic facilis officiis dolore ea aperiam consequuntur
            modi? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officiis blanditiis eum laborum nesciunt vero inventore
            voluptatum sed nemo, placeat fuga esse iure accusantium
            reiciendis magni enim impedit nulla quo obcaecati. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum
            quaerat praesentium soluta rerum doloribus sunt, molestiae  nemo?
            Architecto vel voluptate eligendi neque enim autem molestias officiis,
            nam ad dolorem.</p>
          </div>
          
          <div>
            <button className="text-white bg-green-900 hover:bg-green-800 focus:outline-none transition cursor-pointer font-medium rounded-full  text-lg px-15 py-2 text-center mt-10">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default AboutMe;