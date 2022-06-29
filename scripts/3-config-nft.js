import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x5Fb9B0DeAb39a1c417a1dB6d5c2fADfF50503574"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Universal Euphoria",
        description: "This NFT will give you access to EuphoricDao!",
        image: readFileSync("scripts/assets/UniPhoric.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
