import webpconv from "@caed0/webp-conv";
import sharp from "sharp";
import csv from "csv-parser";
import fs from "fs";
import axios from "axios";
// import path from "path";

// const links = [];
// const allLinks = [];

// const getFileName = (input) => {
//   const parts = input.split("/");
//   return parts[4] + '.webp';
// };

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

// const converte = (input, output) => {
//   try {
//     const converter = new webpconv();
//     converter.convert(input, output, { quality: 10, transparent: "0x000000" });
//     console.log('Creado nuevo Stickers ')
//   } catch (error) {
//     console.log(error);
//   }
// }


// //-----------------------------------

// const dowloadImage = async (url) => {
//   try {
//     const response = await axios.get(url, {
//       responseType: "arraybuffer",
//     });
//     const imageName = url.split("/");
//     console.log(typeof imageName[4]);
//     // const imageName = 'test22.webp'
//     // console.log(imageName[4])

//     fs.writeFileSync(`stickers-input/${imageName[4]}.webp`, response.data);
//     console.log(`Imagen descargada: ${imageName}`);
//   } catch (error) {
//     console.error(
//       `Error al descargar la imagen desde ${url}: ${error.message}`
//     );
//   }
// };

// const downloadAllImages = async (links) => {
//   for (const link of links) {
//     await dowloadImage(link);
//   }
// };
// // -----------------------


// fs.createReadStream("stickers.csv")
//   .pipe(csv())
//   .on("data", (data) => {
//     const originalLink = data.link;
//     console.log(`papito aqui el error${data}`)
//     const modifiedLink =
//       originalLink.replace(
//         "https://7tv.app/emotes/",
//         "https://cdn.7tv.app/emote/"
//       ) + "/4x.webp";
    
//     links.push(modifiedLink);
//     const filePath =  getFileName(modifiedLink)
//     allLinks.push(filePath);
//     // const filePath =  getFileName(modifiedLink)
//     // const typeFile = await isWebAnimated(`stickers-input/${filePath}`)
//     // const output = `stickers-output/${filePath}${typeFile ? ".gif" : ".png"}`;
//     // converte(`stickers-input/${filePath}`,output)

//   })
//   .on("end", async () => {
//     // console.log('Valores de la columna "link":', links);
//     await downloadAllImages(links);
//     console.log('Valores de la columna "allLinks":', allLinks);
//      for (const allLink of allLinks) {
//     const typeFile = await isWebAnimated(`stickers-input/${allLink}`)
//     const newName = allLink.split('.')
//     const output = `stickers-output/${newName[0]}${typeFile ? ".gif" : ".png"}`;
//     converte(`stickers-input/${allLink}`,output)
      
//     }
//   });


const isWebAnimated = async (filePath) => {
  try {
    const buffer = fs.readFileSync(filePath);
    const metadata = await sharp(buffer).metadata();
    const isAnimated = metadata.pages > 1;
    return isAnimated;
  } catch (error) {
    console.error("Error", error);
  }
};

const getFileName = (input) => {
  const parts = input.split(".");
  return parts[0];
};

const input = "stickers-input/61d309bb5c6572b1f6a7719a.webp";

const typeToConverter = await isWebAnimated(input);
// console.log(typeToConverter)
const name = getFileName('61d309bb5c6572b1f6a7719a.webp');
const output = `stickers-output/${name}${typeToConverter ? ".gif" : ".png"}`;
console.log(name)


const convertirdor = (input,output) => {
  try {
    const converter = new webpconv();
    converter.convert(input, output, { quality: 10, transparent: "0x000000" });
  } catch (error) {
    console.log(error);
  }
  
}
convertirdor(input,output)