import React from "react";
import { FuseAuthorization, FuseLayout, FuseTheme } from "@fuse";
import Provider from "react-redux/es/components/Provider";
import { Router } from "react-router-dom";
import jssExtend from "jss-extend";
import history from "@history";
import { Auth } from "./auth";
import store from "./store";
import AppContext from "./AppContext";
import routes from "./fuse-configs/routesConfig";
import { create } from "jss";
import {
  StylesProvider,
  jssPreset,
  createGenerateClassName,
} from "@material-ui/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import rtl from "jss-rtl";
import { Spinner } from "./main/shared/Spinner";

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend(), rtl()],
  insertionPoint: document.getElementById("jss-insertion-point"),
});

const generateClassName = createGenerateClassName();

const App = () => {
  return (
    <AppContext.Provider
      value={{
        routes,
      }}
    >
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Spinner />
            <Auth>
              <Router history={history}>
                <FuseAuthorization>
                  <FuseTheme>
                    <FuseLayout />
                  </FuseTheme>
                </FuseAuthorization>
              </Router>
            </Auth>
          </MuiPickersUtilsProvider>
        </Provider>
      </StylesProvider>
    </AppContext.Provider>
  );
};

export default App;
