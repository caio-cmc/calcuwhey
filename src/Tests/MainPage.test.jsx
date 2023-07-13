import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "./intersectionObserverMock";
import App from "../App";

describe("Tests header area", () => {
  it("Should render header", () => {
    render(<App />);
    const header = screen.getByTestId("header-test");
    expect(header).toBeInTheDocument();
  })

  it("Should render header logo", () => {
    render(<App />);
    const logo = screen.getByTestId("logo-header-test");
    expect(logo).toBeInTheDocument();
  })

  it("Should render header nav buttons", () => {
    render(<App />);
    const howtoButton = screen.getByTestId("howto-bt-header-test");
    const calcButton = screen.getByTestId("calc-bt-header-test");
    expect(howtoButton).toBeInTheDocument();
    expect(calcButton).toBeInTheDocument();
  })
})

describe("Tests Articles area", () => {
  it("Should render main article", () => {
    render(<App />);
    const whatsWhey = screen.getByTestId("main-article-test");
    expect(whatsWhey).toBeInTheDocument();
  })

  it("Should render aside", () => {
    render(<App />);
    const howToUse = screen.getByTestId("article-aside-test");
    expect(howToUse).toBeInTheDocument();
  })
})

describe("Tests WheyForm area", () => {
  it("Should render WheyForm", () => {
    render(<App />);
    const form = screen.getByTestId("form-test-0");
    expect(form).toBeInTheDocument();
  })

  it("Should render all inputs", () => {
    render(<App />);
    const brand1 = screen.getByTestId("brand-input-test-0");
    const weight1 = screen.getByTestId("weight-input-test-0");
    const serving1 = screen.getByTestId("serving-input-test-0");
    const protein1 = screen.getByTestId("protein-input-test-0");
    const price1 = screen.getByTestId("price-input-test-0");
    expect(brand1).toBeInTheDocument();
    expect(weight1).toBeInTheDocument();
    expect(serving1).toBeInTheDocument();
    expect(protein1).toBeInTheDocument();
    expect(price1).toBeInTheDocument();
  })

  it("Should render second WheyForm", async () => {
    render(<App />);
    const compareButton = screen.getByTestId("compare-test");
    await userEvent.click(compareButton);
    const form2 = screen.getByTestId("form-test-1");
    expect(form2).toBeInTheDocument();
  })

  it("Should render second WheyForm inputs", async () => {
    render(<App />);
    const compareButton = screen.getByTestId("compare-test");
    await userEvent.click(compareButton);
    const brand2 = screen.getByTestId("brand-input-test-1");
    const weight2 = screen.getByTestId("weight-input-test-1");
    const serving2 = screen.getByTestId("serving-input-test-1");
    const protein2 = screen.getByTestId("protein-input-test-1");
    const price2 = screen.getByTestId("price-input-test-1");
    expect(brand2).toBeInTheDocument();
    expect(weight2).toBeInTheDocument();
    expect(serving2).toBeInTheDocument();
    expect(protein2).toBeInTheDocument();
    expect(price2).toBeInTheDocument();
  })

  it("Should close second WheyForm", async () => {
    render(<App />);
    const compareButton = screen.getByTestId("compare-test");
    await userEvent.click(compareButton);
    const form2 = screen.getByTestId("form-test-1");
    expect(form2).toBeInTheDocument();
    const closeButton = screen.getByTestId("close-button-test");
    await userEvent.click(closeButton);
    expect(form2).not.toBeInTheDocument();
  })

  it("Calculate button should be disabled", () => {
    render(<App />);
    const calculateButton = screen.getByTestId("calculate-button-test");
    expect(calculateButton).toBeDisabled();
  })
})