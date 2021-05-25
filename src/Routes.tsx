import React from "react";
import { Route } from "react-router-dom";

const Home = React.lazy(() => import("./routes/Home"));
const AdminContainer = React.lazy(() => import("./routes/Admin"));
const Search = React.lazy(() => import("./routes/Search"));

export function Routes() {
  return (
    <React.Suspense fallback={null}>
      <Route exact path="/" component={Home} />
      <Route exact path="/admin" component={AdminContainer} />
      <Route exact path="/search/:postalCode" component={Search} />
    </React.Suspense>
  );
}
