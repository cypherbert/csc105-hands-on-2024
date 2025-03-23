import React from 'react';

const Gallery = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center mt-100">
      <div className="font-bold text-4xl"> 
        <header>Gallery</header>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center px-20 py-12 rounded-3xl">
        <div className="">
          <img src='https://mountaintopwebdesign.com/wp-content/uploads/mobile-friendly.jpg'/>
        </div>
        <div>
          <img src='https://sorightcreative.com.au/wp-content/uploads/2020/11/effective-mobile-website.jpg'/>
        </div>
        <div>
          <img src='https://www.ipulsedesign.com/wp-content/uploads/2021/08/Evolve-Mobile-Render-3-600x400.jpg'/>
        </div>
        <div>
          <img src='https://excelontheweb.com/wp-content/uploads/2023/12/website-development-small.png'/>
        </div>
        <div>
          <img src='https://klyp.co/storage/app/media/content-images/creative/Creative-ResponsiveWebDesign-MultipleDevices-large.jpg'/>
        </div>
        <div>
          <img src='https://klyp.co/storage/app/media/content-images/creative/Creative-ResponsiveWebDesign-Responsive-small.jpg'/>
        </div>
    </div>
</div>
       
  );
}
export default Gallery;