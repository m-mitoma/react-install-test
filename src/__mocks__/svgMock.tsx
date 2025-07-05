// src/__mocks__/svgMock.tsx
import * as React from "react";

// SVGProps 型を明示的に使用
const SVG = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => <svg {...props} ref={ref} data-testid="mock-svg" />
);

// デフォルトエクスポートは 'test-file-stub' を返し、img src で使用できるようにします
// 名前付きエクスポート (例: ReactComponent) は、SVGがReactコンポーネントとして直接インポートされる場合に使用されます
export const ReactComponent = SVG;
export default "test-file-stub";
