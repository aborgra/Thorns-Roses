import React from "react";

export default ({ distributor, Flowers, retailers}) => {
  debugger

  return(
  
  <section className="distributor">
    <h3 className="distributor__name">{distributor.name}</h3>
    <ul className="distributor__flowersList">
      Flowers:
      {Flowers.map(fl => (
      <li className="distributor__flower" key={Flowers.id}>
        {fl.flower.color} {fl.flower.species} ${fl.price}
      </li>))}
    </ul>
    <ul className="distributor__retailersList">
      Retailers:
      {retailers.map(r => (
      <li className="distributor__retailers" key={r.id}>{r.name}</li>
      ))}
    </ul>
  </section>
)}
