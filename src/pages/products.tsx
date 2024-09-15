import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductType } from "./types";

const Products = () => {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://d06c201ea6d01322.mokky.dev/products"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {data.map((item, index) => {
        return (
          <ul key={index} className="list-disc p-5">
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.description}</li>
            <li>{item.price}</li>
            <div>
              {item.comment.map((item, index) => {
                return (
                  <>
                    <ul key={item.id} className="list-decimal p-5">
                      Commentator: {index + 1}
                      <li>Full name: {item.fullName}</li>
                      <li>Email addres: {item.email}</li>
                      <li>Review: {item.review}</li>
                      <li> Stars: {item.stars}</li>
                    </ul>
                  </>
                );
              })}
            </div>
          </ul>
        );
      })}
    </>
  );
};

export default Products;
