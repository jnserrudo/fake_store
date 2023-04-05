import React, { useEffect, useState } from "react";
import { helpHttp } from "./helpers/helpHttp";
import { Product } from "./Product";
import Button from '@mui/material/Button';

export const ProductList = () => {
  const [db, setDb] = useState(null);

  const [dataToEdit, setDataToEdit] = useState(null);
  const [ver, setVer] = useState(false)

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



  let api = helpHttp();
  let url = "https://fakestoreapi.com/products";

  useEffect(() => {
    //antes de hacer la peticion hago visible el loader
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        console.log(res,res.slice(0,5));

        setDb(res);
        if (!res.err) {
          setError(null);
        } else {
          setDb(null);
        }
        setLoading(false);
      });
  }, [url]);

  return (
    <>
    <div className="cont_product_list">
        <div className="product_list">
        {ver? (db && db.map((prod) => <Product key={prod.id} data={prod} />)):(db && db.slice(0,5).map((prod) => <Product key={prod.id} data={prod} />)) }
        </div>
        {db && <Button onClick={()=>setVer(!ver)} className="btn_ver_mas" variant="contained">{ver?"Ver Menos":"Ver Mas"}</Button>}
    </div>
    
    </>
    
  );
};
