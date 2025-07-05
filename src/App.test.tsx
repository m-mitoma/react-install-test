import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App"; // テスト対象のコンポーネントをインポート
import "@testing-library/jest-dom"; // jest-domのマッチャーを使用するためにインポート

describe("App", () => {
  // 各テストの前にコンポーネントを再レンダリングするためのヘルパー関数
  const renderApp = () => render(<App />);

  test("Vite and React logos are displayed", () => {
    renderApp();

    // Viteロゴが存在することを確認
    const viteLogo = screen.getByAltText("Vite logo");
    expect(viteLogo).toBeInTheDocument();
    expect(viteLogo).toHaveAttribute("src", "test-file-stub");

    // Reactロゴが存在することを確認
    const reactLogo = screen.getByAltText("React logo");
    expect(reactLogo).toBeInTheDocument();
    expect(reactLogo).toHaveAttribute("src", "test-file-stub");
  });

  test("renders the main heading", () => {
    renderApp();
    // <h1>Vite + React</h1> が表示されていることを確認
    expect(
      screen.getByRole("heading", { name: /Vite \+ React/i })
    ).toBeInTheDocument();
  });

  test("button click increments the count", () => {
    renderApp();

    // 初期状態のカウントボタンを取得し、テキストが "count is 0" であることを確認
    const counterButton = screen.getByRole("button", { name: /count is \d+/i });
    expect(counterButton).toHaveTextContent("count is 0");

    // ボタンをクリック
    fireEvent.click(counterButton);

    // クリック後のカウントボタンのテキストが "count is 1" になっていることを確認
    expect(counterButton).toHaveTextContent("count is 1");

    // もう一度クリック
    fireEvent.click(counterButton);

    // クリック後のカウントボタンのテキストが "count is 2" になっていることを確認
    expect(counterButton).toHaveTextContent("count is 2");
  });

  test("displays instructions for editing src/App.tsx", () => {
    renderApp();
    // コードブロック内のテキストを確認
    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    expect(screen.getByText(/src\/App.tsx/i)).toBeInTheDocument();
    expect(screen.getByText(/and save to test HMR/i)).toBeInTheDocument();
  });

  test('displays the "Click on the Vite and React logos to learn more" text', () => {
    renderApp();
    // 特定のテキストが存在することを確認
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i)
    ).toBeInTheDocument();
  });

  test("Vite and React logo links have correct href attributes and target/rel", () => {
    renderApp();

    // Viteロゴのリンクを取得し、属性を確認
    const viteLink = screen.getByRole("link", { name: "Vite logo" });
    expect(viteLink).toHaveAttribute("href", "https://vitejs.dev");
    expect(viteLink).toHaveAttribute("target", "_blank");
    expect(viteLink).toHaveAttribute("rel", "noopener noreferrer");

    // Reactロゴのリンクを取得し、属性を確認
    const reactLink = screen.getByRole("link", { name: "React logo" });
    expect(reactLink).toHaveAttribute("href", "https://react.dev");
    expect(reactLink).toHaveAttribute("target", "_blank");
    expect(reactLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
