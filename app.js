// import webpconv from "@caed0/webp-conv";
// import sharp from "sharp";
import csv from "csv-parser";
import fs from "fs";
import axios from "axios";
// import path from "path";

const links = [];
const allLinks = [];

const dowloadImage = async (url) => {

  try {
const response = await axios.get(url, {
  responseType: 'arraybuffer'
})
const imageName = url.split('/')
console.log(typeof(imageName[4]))
// const imageName = 'test22.webp'
// console.log(imageName[4])

fs.writeFileSync(`stickers-input/${imageName[4]}.webp`, response.data)
console.log(`Imagen descargada: ${imageName}`);
  } catch (error) {
    console.error(`Error al descargar la imagen desde ${url}: ${error.message}`);
  }
};


const downloadAllImages = async (links) => {
  // console.log(links)
  for (const link of links) {
    await dowloadImage(link)
  }
}
// -----------------------

fs.createReadStream("stickers.csv")
  .pipe(csv())
  .on("data", (data) => {
    const originalLink = data.link;
    const modifiedLink =
      originalLink.replace(
        "https://7tv.app/emotes/",
        "https://cdn.7tv.app/emote/"
      ) + "/4x.webp";
      allLinks.push(modifiedLink);
    links.push(modifiedLink);

  })
  .on("end", () => {
    // console.log('Valores de la columna "link":', links);
    downloadAllImages(links)
  });


// const isWebAnimated = async (filePath) => {
//   try {
//     const buffer = fs.readFileSync(filePath);
//     const metadata = await sharp(buffer).metadata();
//     const isAnimated = metadata.pages > 1;
//     return isAnimated;
//   } catch (error) {
//     console.error("Error", error);
//   }
// };

// const getFileName = (input) => {
//   const parts = input.split(".");
//   return parts[0];
// };

// const input = "peposalto2.webp";

// const typeToConverter = await isWebAnimated(input);
// // console.log(typeToConverter)
// const name = getFileName(input);
// const output = `stickers-output/${name}${typeToConverter ? ".gif" : ".png"}`;
// console.log(output);

// try {
//   const converter = new webpconv();
//   converter.convert(input, output, { quality: 10, transparent: "0x000000" });
// } catch (error) {
//   console.log(error);
// }
