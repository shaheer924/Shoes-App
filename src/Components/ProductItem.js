import React from "react";
import './Product.css';
import {useParams, Link} from 'react-router-dom';
import shoe from '../Shoe.json';

import {Button} from 'react-bootstrap';


function ProductItem() {
  const {id} = useParams();
  return (
    <div className="head">
      <h1>Product Items</h1>
      <h1>Product Name : {id}</h1>
      <img src={shoe[id].img}/>
      <br/>
      <br/>
      <Link to="/product"><Button>Go Back</Button></Link>
    </div>
  );
}

export default ProductItem;
