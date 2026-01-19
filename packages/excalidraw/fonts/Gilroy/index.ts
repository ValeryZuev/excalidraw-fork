import { type ExcalidrawFontFaceDescriptor } from "../Fonts";

import Regular from "./gilroy-regular-webfont.woff2";
import Medium from "./gilroy-medium-webfont.woff2";
import SemiBold from "./gilroy-semibold-webfont.woff2";
import Bold from "./gilroy-bold-webfont.woff2";

export const GilroyFontFaces: ExcalidrawFontFaceDescriptor[] = [
  {
    uri: Regular,
    descriptors: { weight: "400", style: "normal" },
  },
  {
    uri: Medium,
    descriptors: { weight: "500", style: "normal" },
  },
  {
    uri: SemiBold,
    descriptors: { weight: "600", style: "normal" },
  },
  {
    uri: Bold,
    descriptors: { weight: "700", style: "normal" },
  },
];
