import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Descriptions } from 'antd';

const ShowBeer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [beer, setBeer] = useState([]);
  
  const handleNavigateToBeers = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/api/v1/beers/${params.id}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        setBeer(data);
      } catch (error) {
        navigate("/");
      }
    };

    fetchData();
  }, [params.id, navigate]);

  return (
    <>
    <div>
      <Button type="primary" onClick={handleNavigateToBeers}>
        Back To All Beers
      </Button>
      </div><br/><br/>
      <div>
      <Descriptions title="Brew Info">
        <Descriptions.Item label="Brand">{beer.brand}</Descriptions.Item>
        <Descriptions.Item label="Style">{beer.style}</Descriptions.Item>
        <Descriptions.Item label="Country">{beer.country}</Descriptions.Item>
        <Descriptions.Item label="Quantity">{beer.quantity}</Descriptions.Item>
      </Descriptions>
      </div>
    </>
  )
};

export default ShowBeer;