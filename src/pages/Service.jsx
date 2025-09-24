import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlowers } from "../redux/product/productSlice";
import "./Service.css"; // подключаем стили

function Service() {
  const { loading, error, list } = useSelector((state) => state.flower);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlowers());
  }, [dispatch]);

  if (loading) {
    return <p className="service-title">Загрузка...</p>;
  }

  if (error) {
    return <p className="service-title">Ошибка: {error}</p>;
  }

  return (
    <div className="service-container">
      <h1 className="service-title">Наши товары</h1>

      <div className="service-grid">
        {list.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-description">{item.description}</p>
              <div className="card-footer">
                <span className="card-price">${item.price}</span>
                <span className="card-category">{item.category}</span>
              </div>
              <button className="buy-btn">Купить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
