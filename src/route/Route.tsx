import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "../screen/Form";
import Docs from "../screen/Docs";
import Header from "../fractions/Header";
import Footer from "../fractions/Footer";
import Page404 from "../screen/_404";

export const pages: any = [
  { path: "/", exact: true, component: Form },
  { path: "/docs", exact: true, component: Docs },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {pages.map(({ component, path, exact }: any) => {
          return (
            <Route
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          );
        })}
        <Route component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
