import Rating from "./Rating";
import React, { useState } from 'react';


export default function Shop(){

  let dummyData = [
    {
      id: 100,
      image: 'g1.png',
      heading: 'ASOS Hourglass cord pants Stripes',
      price: '₹ 899.24'
    },
    {
      id: 101,
      image: 'bag.png',
      heading: 'Topshop Steph crinkle shoulder bag',
      price: '₹ 5,314.45'
    },
    {
      id: 102,
      image: 'g2.png',
      heading: 'Noisy May trench coat',
      price: '₹ 2,354.18'
    },
    {
      id: 103,
      image: 'shoes.png',
      heading: 'River Island patent sock boots in brown',
      price: '₹ 9,269.00'
    },
    {
      id: 17,
      image: 'girl17.webp',
      heading: 'Monki cord straight pants',
      price: '₹ 1,349.24'
    },
    {
      id: 3,
      image: 'girl3.webp',
      heading: 'French high neck zip sweater',
      price: '₹ 1,654.20'
    },
    {
      id: 12,
      image: 'girl12.webp',
      heading: 'PUMA paleramo special sneakers',
      price: '₹ 4,225.41'
    },
    {
      id: 29,
      image: 'm8.webp',
      heading: 'New Balance 574 Sneakers ',
      price: '₹ 5,698.67'
    },
    {
      id: 27,
      image: 'm12.webp',
      heading: 'Jack & Jones puffer in black',
      price: '₹ 6,006.15'
    },
    {
      id: 19,
      image: 'girl19.webp',
      heading: 'Vintage unisex knitted shirts',
      price: '₹ 2,549.19'
    },
    {
      id: 10,
      image: 'girl10.webp',
      heading: '&other wool blend sweater',
      price: '₹ 2,725.41'
    },
    {
      id: 32,
      image: 'm6.webp',
      heading: 'Unisex Conan fitted T-Shirt',
      price: '₹ 906.80'
    },
    {
      id: 26,
      image: 'm4.webp',
      heading: 'ASOS Dark oversized hoodie',
      price: '₹ 2,606.84'
    },
    {
      id: 22,
      image: 'girl22.webp',
      heading: 'Motel mini dress in black',
      price: '₹ 2,679.48'
    },
    {
      id: 5,
      image: 'girl5.webp',
      heading: 'Woah Oversized Aviator Jacket',
      price: '₹ 5,154.18'
    },
    {
      id: 25,
      image: 'm3.webp',
      heading: 'The North Face T-Shirt',
      price: '₹ 691.23'
    },
    {
      id: 8,
      image: 'girl8.webp',
      heading: 'Pull&Bear highneck cropped sweater ',
      price: '₹ 3,554.15'
    },
    {
      id: 14,
      image: 'girl14.webp',
      heading: 'ASOS oversized T-shirt',
      price: '₹ 525.24'
    },
    {
      id: 13,
      image: 'girl13.jpeg',
      heading: 'ASOS oversized with red paris',
      price: '₹ 799.99'
    },
    {
      id: 20,
      image: 'girl20.webp',
      heading: 'Weekday unisex fabian sweater',
      price: '₹ 3,749.57'
    },
    {
      id: 31,
      image: 'm10.webp',
      heading: 'New Balance 610 Sneakers in blue',
      price: '₹ 5,608.09'
    },
    {
      id: 1,
      image: 'girl1.png',
      heading: "Vans relaxed cardign pink",
      price: '₹ 1,499.22'
    },
    {
      id: 33,
      image: 'm5.jpeg',
      heading: 'CK96 Design hoodie',
      price: '₹ 1758.11'
    },
    {
      id: 9,
      image: 'girl9.webp',
      heading: 'Adidas Orignals cap in green ',
      price: '₹ 554.24'
    },
    {
      id: 16,
      image: 'girl16.jpeg',
      heading: 'Bershka long sleeve top in Black',
      price: '₹ 949.00'
    },
    {
      id: 7,
      image: 'girl7.webp',
      heading: 'Armani Exchange leather card holder',
      price: '₹ 1,554.16'
    },
    {
      id: 28,
      image: 'm7.webp',
      heading: 'The North Face Floral Jacket',
      price: '₹ 3,406.76'
    },
    {
      id: 30,
      image: 'm9.webp',
      heading: 'New Balance 480 Sneakers B/W',
      price: '₹ 4,395.58'
    },
    {
      id: 18,
      image: 'girl18.webp',
      heading: 'Stradivaroius leg sweatpants',
      price: '₹ 1,249.53'
    },
    {
      id: 11,
      image: 'girl11.webp',
      heading: 'Adidas Orignals campus sneakers',
      price: '₹ 4,999.00'
    },
    {
      id: 4,
      image: 'girl4.webp',
      heading: 'Weekend Curve Hoodie',
      price: '₹ 2,654.19'
    },
    {
      id: 6,
      image: 'girl6.webp',
      heading: 'ASOS Design cut out mini dress',
      price: '₹ 854.17'
    },
    {
      id: 15,
      image: 'girl15.webp',
      heading: 'Bershka long sleeve top in khaki',
      price: '₹ 949.00'
    },
    {
      id: 34,
      image: 'm11.webp',
      heading: 'Bershka super baggy jeans',
      price: '₹ 2,970.52'
    },
    {
      id: 21,
      image: 'girl21.webp',
      heading: 'Motel midi dress in dark toupe',
      price: '₹ 4,179.94'
    },
    {
      id: 2,
      image: 'girl2.png',
      heading: 'LUXE cotton shirt dress',
      price: '₹ 754.21'
    }
  ];
  

  const [newVariable1, setNewVariable1] = useState(0);
  const [newVariable2, setNewVariable2] = useState(1);
  const [newVariable3, setNewVariable3] = useState(2);
  const [newVariable4, setNewVariable4] = useState(3);

  const handleNext = () => {
    setNewVariable1((newVariable1 + 2) % dummyData.length);
    setNewVariable2((newVariable2 + 2) % dummyData.length);
    setNewVariable3((newVariable3 + 2) % dummyData.length);
    setNewVariable4((newVariable4 + 2) % dummyData.length);
  };

  const handlePrev = () => {
    setNewVariable1((newVariable1 - 2 + dummyData.length) % dummyData.length);
    setNewVariable2((newVariable2 - 2 + dummyData.length) % dummyData.length);
    setNewVariable3((newVariable3 - 2 + dummyData.length) % dummyData.length);
    setNewVariable4((newVariable4 - 2 + dummyData.length) % dummyData.length);
  };


  const NewArrival = () => {
    setNewVariable1(0);
    setNewVariable2((0 + 1) % dummyData.length);
    setNewVariable3((0 + 2) % dummyData.length);
    setNewVariable4((0 + 3) % dummyData.length);
  };
  const BestSeller = () => {
    setNewVariable1(8);
    setNewVariable2((8 + 1) % dummyData.length);
    setNewVariable3((8 + 2) % dummyData.length);
    setNewVariable4((8 + 3) % dummyData.length);
  };
  const Popular = () => {
    setNewVariable1(16);
    setNewVariable2((16 + 1) % dummyData.length);
    setNewVariable3((16 + 2) % dummyData.length);
    setNewVariable4((16 + 3) % dummyData.length);
  };

  const newVariableData1 = dummyData[newVariable1];
  const newVariableData2 = dummyData[newVariable2];
  const newVariableData3 = dummyData[newVariable3];
  const newVariableData4 = dummyData[newVariable4];





  const [activeHeading, setActiveHeading] = useState(1);

  const handleHeadingClick = (headingNumber) => {
    setActiveHeading(headingNumber);
  };




    return (
        <div className="shop">
            <img src={require("../assets/Rectanglebg.png")} loading="eager" className="ShopRec" />
            <div className="shopHead">
              <div className="Shopleft">
                <div className="M_L" onClick={NewArrival}>
                  <h1 className="m1" style={{ color: activeHeading === 1 ? 'black' : '#808080' }} onClick={() => handleHeadingClick(1)}>New Arrivals</h1>
                  <div className="rectangle" />
                </div>
                <div className="M_L" onClick={BestSeller}>
                  <h1 className="m1 s1" style={{ color: activeHeading === 2 ? 'black' : '#808080' }} onClick={() => handleHeadingClick(2)}>Best Sellers</h1>
                  <div className="rectangle" />
                </div>
                <div className="M_L" onClick={Popular}>
                  <h1 className="m1 s1" style={{ color: activeHeading === 3 ? 'black' : '#808080' }} onClick={() => handleHeadingClick(3)}>Popular</h1>
                  <div className="rectangle" />
                </div>
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
            <div className="ShopItems">
              <div className="right1">
                <img src={`/assets/${newVariableData1.image}`} />
                <h5 className="mentextheading">{newVariableData1.heading}</h5>
                <hr />
                <div className="Mprice sp">{newVariableData1.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
                  </div>
                  <div className="sbtn">
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="right1">
                <img src={`/assets/${newVariableData2.image}`} />
                <h5 className="mentextheading">{newVariableData2.heading}</h5>
                <hr />
                <div className="Mprice sp">{newVariableData2.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
                  </div>
                  <div className="sbtn">
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="right1">
                <img src={`/assets/${newVariableData3.image}`} />
                <h5 className="mentextheading">{newVariableData3.heading}</h5>
                <hr />
                <div className="Mprice sp">{newVariableData3.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
                  </div>
                  <div className="sbtn">
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="right1">
                <img src={`/assets/${newVariableData4.image}`} />
                <h5 className="mentextheading">{newVariableData4.heading}</h5>
                <hr />
                <div className="Mprice sp">{newVariableData4.price}</div>
                <div className="revContainer">
                  <div className="review">
                    <Rating/>
                  </div>
                  <div className="sbtn">
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
    );
}