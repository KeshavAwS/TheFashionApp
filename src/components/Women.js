export default function Women(){
    return (
        <div className="women">
            <img src={require("../assets/Rectanglebg.png")} loading="lazy" className="r1" />
            <div className="w1">
              <h2 className="w">Clothes</h2>
              <button className="Wbtn">Click here</button>
            </div>
            <div className="w2">
              <h2 className="w">Footwear</h2>
              <button className="Wbtn">Click here</button>
            </div>
            <div className="w3">
              <h2 className="w">Hand Bags</h2>
              <button className="Wbtn">Click here</button>
            </div>
          </div>
    );
}