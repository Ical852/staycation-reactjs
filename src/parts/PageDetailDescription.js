import React from "react";

import ReactHtmlParser from 'react-html-parser'
import { Fade } from "react-reveal";
export default function PageDetailDescription({ data }) {
  return (
    <main>
        <h4 className="font-weight-bold mb-3">About the place</h4>
        {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.length === 0
          ? "Tidak Ada Feature"
          : data.featureId.map((feature, index) => {
              return (
                  <div
                    key={`feature-${index}`}
                    className="col-3"
                    style={{ marginBottom: 20 }}
                  >
                    <img
                      width="38"
                      className="d-block mb-2"
                      src={`http://localhost:8000/${feature.imageUrl}`}
                      alt={feature.name}
                    />{" "}
                    <span>{feature.qty}</span>{" "}
                    <span className="text-gray-500 font-weight-light">
                      {feature.name}
                    </span>
                  </div>
              );
            })}
      </div>
    </main>
  );
}
