import * as React from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";

import { Header } from "src/fragments/Header/Header";
import { Footer } from "./Footer/Footer";
import { MenuList } from "./Main/Main";
import { StackLayout } from "./articles/Stack/StackLayout";
import { LinkedListLayout } from "./articles/LinkedList/LinkedListLayout";

export function Page() {
  return (
    <HashRouter>
      <div className="page-wrapper">
        <Header />
        <main className="main">
          <Redirect exact from="/" to="/linked-list/" />
          <Switch>
            <Route exact key="home" path="/main/" component={MenuList} />
            <Route exact key="stack" path="/stack/" component={StackLayout} />
            <Route
              exact
              key="linked-list"
              path="/linked-list/"
              component={LinkedListLayout}
            />

            {/* <Route key="photos" path="/photos/:uid/:pid" component={<div > Home Page </div>} /> */}
          </Switch>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
