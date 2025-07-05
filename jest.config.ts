import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|png)$": "<rootDir>/src/__mocks__/fileMock.js",
    // ここを修正します:
    // Windows環境でのパスの区切り文字と、インポートパスの形式に対応するため、
    // 正規表現をより柔軟にします。
    // `(.*\\.(svg))$` は任意のディレクトリとファイル名にマッチし、末尾が.svgであるファイルを捉えます。
    // `/vite\\.svg$/` は '/vite.svg' という絶対パスに特化しています。
    "^.+\\.(svg)$": "<rootDir>/src/__mocks__/svgMock.tsx", // この行を修正
    "^/vite\\.svg$": "<rootDir>/src/__mocks__/svgMock.tsx", // この行は `/vite.svg` のインポート用
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default config;
