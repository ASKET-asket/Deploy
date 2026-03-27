// import faker from "faker";
import { MOCK_IMAGE_BASE64 } from "../src/assets/mockImage.js";

export const fakeList = (dates, count = 1000) => {
  const res = [];
  for (let i = 1; i < count + 1;) {
    res.push({
      id: i,
      title: "Polet№" + i++,
      dates: dates,
      image: MOCK_IMAGE_BASE64,
    });
  }
  return res;
};