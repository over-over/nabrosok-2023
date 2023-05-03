import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_FOLDER = path.join(__dirname, '../../public/images-max');

const resizeImages = async () => {
  try {
    const images: string[] = [];
    fs.readdirSync(IMAGES_FOLDER + '/artists').forEach(item => {
      if (
        item.includes('.jpg') ||
        item.includes('.peg') ||
        item.includes('.webp')
      ) {
        images.push(path.join(IMAGES_FOLDER, '/artists', item));
      }
    });
    fs.readdirSync(IMAGES_FOLDER + '/works').forEach(item => {
      if (
        item.includes('.jpg') ||
        item.includes('.peg') ||
        item.includes('.webp')
      ) {
        images.push(path.join(IMAGES_FOLDER, '/works', item));
      }
    });
    for (const path of images) {
      const newPath = path.replace('images-max', 'images');
      const sharpResult = await sharp(path)
        .resize(512, 512, { fit: 'cover' })
        .withMetadata()
        .jpeg({ quality: 85 })
        .toBuffer();
      fs.writeFileSync(newPath, sharpResult);
    }
  } catch (e) {
    console.log(e);
  }
};

resizeImages();
