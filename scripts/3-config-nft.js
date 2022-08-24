import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xf82147aD748464796C7E6599bc9d7BD8c5Ca24e1");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Hunter license",
        description: "This License will give you access to HxHDAO!",
        image: readFileSync("scripts/assets/hunter-license-render-video_AdobeExpress.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();