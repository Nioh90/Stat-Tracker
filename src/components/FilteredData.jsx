import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

function FilteredData(props) {
  const { specificData } = useGlobalContext();
  const [query, setQuery] = useState(null);
  console.log(props.game);
  function fetchQuery() {
    let newItem = props.segmentData
      .filter((item, i) => {
        console.log(props.game);
        // prettier-ignore
        if (!props.game === "apex") {

          console.log("csgo");
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
  console.log(query);
  if (!specificData) {
    return <h7>Input a {props.segment}</h7>;
  }
  if (!query) {
    return <h7>Input the correct {props.segment}</h7>;
  } else {
    return (
      <div className="stat-card-container">
        <h5>{query.metadata.name}</h5>
        {props.segment === "weapon" && (
          <h5>Category: {query.metadata.category.displayValue}</h5>
        )}
        <img src={query.metadata.imageUrl}></img>
        <div>
          {Object.keys(query.stats).map((stat, i) => {
            console.log(query.stats[stat]);
            return (
              <div key={i}>
                <h7>{query.stats[stat].displayName}</h7>
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
