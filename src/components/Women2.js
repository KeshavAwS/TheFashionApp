import Rating from "./Rating";
import React, { useState } from 'react';

export default function Women2(){

  let dummyData = [
    {
      id: 1,
      image: 'girl1.png',
      heading: "Vans relaxed cardign pink",
      price: '₹ 1,499.22'
    },
    {
      id: 2,
      image: 'girl2.png',
      heading: 'LUXE cotton shirt dress',
      price: '₹ 754.21'
    },
    {
      id: 3,
      image: 'girl3.webp',
      heading: 'French high neck zip sweater',
      price: '₹ 1,654.20'
    },
    {
      id: 4,
      image: 'girl4.webp',
      heading: 'Weekend Curve Hoodie',
      price: '₹ 2,654.19'
    },
    {
      id: 5,
      image: 'girl5.webp',
      heading: 'Woah Oversized Aviator Jacket',
      price: '₹ 5,154.18'
    },
    {
      id: 6,
      image: 'girl6.webp',
      heading: 'ASOS Design cut out mini dress',
      price: '₹ 854.17'
    },
    {
      id: 7,
      image: 'girl7.webp',
      heading: 'Armani Exchange leather card holder',
      price: '₹ 1,554.16'
    },
    {
      id: 8,
      image: 'girl8.webp',
      heading: 'Pull&Bear highneck cropped sweater ',
      price: '₹ 3,554.15'
    },
    {
      id: 9,
      image: 'girl9.webp',
      heading: 'Adidas Orignals cap in green ',
      price: '₹ 554.24'
    },
    {
      id: 10,
      image: 'girl10.webp',
      heading: '&other wool blend sweater',
      price: '₹ 2,725.41'
    },
    {
      id: 11,
      image: 'girl11.webp',
      heading: 'Adidas Orignals campus sneakers',
      price: '₹ 4,999.00'
    },
    {
      id: 12,
      image: 'girl12.webp',
      heading: 'PUMA paleramo special sneakers',
      price: '₹ 4,225.41'
    },
    {
      id: 13,
      image: 'girl13.jpeg',
      heading: 'ASOS oversized with red paris',
      price: '₹ 799.99'
    },
    {
      id: 14,
      image: 'girl14.webp',
      heading: 'ASOS oversized T-shirt',
      price: '₹ 525.24'
    },
    {
      id: 15,
      image: 'girl15.webp',
      heading: 'Bershka long sleeve top in khaki',
      price: '₹ 949.00'
    },
    {
      id: 16,
      image: 'girl16.jpeg',
      heading: 'Bershka long sleeve top in Black',
      price: '₹ 949.00'
    },
    {
      id: 17,
      image: 'girl17.webp',
      heading: 'Monki cord straight pants',
      price: '₹ 1,349.24'
    },
    {
      id: 18,
      image: 'girl18.webp',
      heading: 'Stradivaroius leg sweatpants',
      price: '₹ 1,249.53'
    },
    {
      id: 19,
      image: 'girl19.webp',
      heading: 'Vintage unisex knitted shirts',
      price: '₹ 2,549.19'
    },
    {
      id: 20,
      image: 'girl20.webp',
      heading: 'Weekday unisex fabian sweater',
      price: '₹ 3,749.57'
    },
    {
      id: 21,
      image: 'girl21.webp',
      heading: 'Motel midi dress in dark toupe',
      price: '₹ 4,179.94'
    },
    {
      id: 22,
      image: 'girl22.webp',
      heading: 'Motel mini dress in black',
      price: '₹ 2,679.48'
    },
  ];

  const [currentItem, setCurrentItem] = useState(1);
    const [newVariable, setNewVariable] = useState(0);
  
    const handleNext = () => {
      setCurrentItem((currentItem + 1) % dummyData.length);
      setNewVariable((newVariable + 1) % dummyData.length);
    };
  
    const handlePrev = () => {
      setCurrentItem((currentItem - 1 + dummyData.length) % dummyData.length);
      setNewVariable((newVariable - 1 + dummyData.length) % dummyData.length);
    };
  
    const currentItemData = dummyData[currentItem];
    const newVariableData = dummyData[newVariable];


    return (
        <div className="women2">
            <img src={require("../assets/Rectanglebg.png")} loading="eager" className="WomenRec" />
            <div className="menHead">
              <div className="M_L">
                <h1 className="m1">Women</h1>
                <div className="m2" />
              </div>
              <div className="M_R">
                <div className="mArrowBox" onClick={handlePrev}>
                  <i className="fi fi-br-angle-left mArrow" />
                </div>
                <div className="mArrowBox" onClick={handleNext}>
                  <i className="fi fi-bs-angle-right mArrow" />
                </div>
              </div>
            </div>
            <div className="MenBanner womenBanner">
              <div className="leftBanner womenLeftBanner">
                <h1>For WoMen</h1>
                <button>Click here</button>
              </div>
              <div className="right1">
                <img src={`/assets/${currentItemData.image}`} />
                <h5 className="mentextheading">{currentItemData.heading}</h5>
                <hr />
                <div className="Mprice">{currentItemData.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
                  </div>
                  <div className="ReviewBtn">
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="right2">
                <img src={`/assets/${newVariableData.image}`} />
                <h5 className="mentextheading">{newVariableData.heading}</h5>
                <hr />
                <div className="Mprice">{newVariableData.price}</div>
                <div className="revContainer">
                  <div className="review">
                  <Rating/>
                  </div>
                  <div className="ReviewBtn">
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}