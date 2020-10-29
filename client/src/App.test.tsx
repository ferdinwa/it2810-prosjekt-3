import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import SearchBar from "./components/SearchBar";
import store from "./store/store";
import Scroller from "./components/Scroller";
import { Jumbotron } from "reactstrap";
import { renderHook, act } from "@testing-library/react-hooks";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Test header", () => {
  const { getByText } = render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  expect(getByText("FutHeader")).toBeInTheDocument();
});

test("Scroller mount", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Scroller />
    </Provider>
  );
  expect(getByTestId("scroller")).toBeTruthy();
});

test("Searchbar mounts", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  expect(getByTestId("jumbotron")).toBeTruthy();
});

test("Test search-text", () => {
  const { getByText } = render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  expect(getByText("Search")).toBeInTheDocument();
});
