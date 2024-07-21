// import webpconv from "@caed0/webp-conv";
// import sharp from "sharp";
import csv from 'csv-parser';
import fs from 'fs';


const links = [];

fs.createReadStream('stickers.csv')
  .pipe(csv())
  .on('data', (data) => {
    const originalLink = data.link
    const modifiedLin = originalLink.replace('https://7tv.app/emotes/','https://cdn.7tv.app/emote/') + '/4x.webp'
    links.push(modifiedLin);
    
  })
  .on('end', () => {
    console.log('Valores de la columna "link":', links);
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
