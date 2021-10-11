import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

function FilteredData(props) {
  const { specificData } = useGlobalContext();
  const [query, setQuery] = useState(null);
  function fetchQuery() {
    let newItem = props.segmentData
      .filter((item, i) => {
        // prettier-ignore
        if (!props.game === "apex") {
          return(item.metadata.name.toLowerCase() === specificData.toLowerCase() || item.attributes.key.toLowerCase() === specificData.toLowerCase())
        } else {
          return(item.metadata.name.toLowerCase() === specificData.toLowerCase())
        }
      })
      .map((item) => {
        return item;
      });
    setQuery(newItem[0]);
  }
  useEffect(() => {
    fetchQuery();
  }, [specificData]);
  if (!specificData) {
    return <h6>Input a {props.segment}</h6>;
  }
  if (!query) {
    return <h6>Input the correct {props.segment}</h6>;
  } else {
    return (
      <div className="stat-card-container">
        <h5>{query.metadata.name}</h5>
        {props.segment === "weapon" && (
          <h5>Category: {query.metadata.category.displayValue}</h5>
        )}
        <img src={query.metadata.imageUrl} alt="stat chosen"></img>
        <div>
          {Object.keys(query.stats).map((stat, i) => {
            return (
              <div key={i}>
                <h6>{query.stats[stat].displayName}</h6>
                <div className="white-line"></div>
                <p>{query.stats[stat].displayValue}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FilteredData;
