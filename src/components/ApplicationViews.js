import React from "react";
import { Route } from "react-router-dom";
import { NurseryProvider } from "./nurseries/NurseryProvider";
import { NurseryFlowerProvider } from "./nurseries/NurseryFlowerProvider";
import { NurseryDistributorProvider } from "./nurseries/NuseryDistributorProvider"
import { DistributorProvider } from "./distributors/DistributorProvider";
import NurseryList from "./nurseries/NurseryList";

export default props => {
  return (
    <>
      {/* <RetailerProvider> */}
        {/* <DistributorProvider> */}
          <Route exact path="/">
            <></>
          </Route>
        {/* </DistributorProvider> */}
      {/* </RetailerProvider> */}

      <NurseryProvider>
        <NurseryFlowerProvider>
          <NurseryDistributorProvider>
            {/* <DistributorProvider> */}
            <Route
          exact
          path="/"
          render={props => {
            return <NurseryList {...props} />;
          }}
          />
            {/* </DistributorProvider> */}
          </NurseryDistributorProvider>
        </NurseryFlowerProvider>
      </NurseryProvider>

      <DistributorProvider>
        <NurseryProvider>
          <Route exact path="/distributors">
            <></>
          </Route>
        </NurseryProvider>
      </DistributorProvider>
    </>
  );
};
