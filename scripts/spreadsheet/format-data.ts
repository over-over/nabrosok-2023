import fs from 'node:fs';
import path from 'node:path';

import {
  TArtistDetails,
  TSpreadsheetData,
  TWorkDetails,
} from '../../src/shared/lib';

const TABLE_INPUT_PATH = path.join(__dirname, './data/spreadsheet.json');
const ARTISTS_OUTPUT_PATH = path.join(__dirname, './data/artists.json');
const WORKS_OUTPUT_PATH = path.join(__dirname, './data/works.json');
const PUBLIC_FOLDER = path.join(__dirname, '../../public');

type TArtistsData = Record<number, TArtistDetails>;
type TWorksData = Record<number, TWorkDetails>;

const formatData = () => {
  if (!fs.existsSync(TABLE_INPUT_PATH)) {
    console.error(
      'Spreadsheet json is empty, try to run fetch-data script first',
    );
    return;
  }

  const artistsData: TArtistsData = {};
  const worksData: TWorksData = {};

  const tableDataRaw = fs.readFileSync(TABLE_INPUT_PATH);
  const tableData: TSpreadsheetData = JSON.parse(tableDataRaw.toString());

  let artistId = 0;
  let workId = 0;

  tableData.table.rows.forEach((values, rowIndex) => {
    artistId++;

    const localPhoto = `/images/artists/artist-${artistId}.webp`;
    const localURI = fs.existsSync(PUBLIC_FOLDER + localPhoto)
      ? localPhoto
      : '';

    artistsData[artistId] = {
      id: String(artistId),
      name: values.c?.[1]?.v ? String(values.c[1].v) : '-',
      style: values.c?.[2]?.v ? String(values.c[2].v) : '-',
      biography: values.c?.[3]?.v ? String(values.c[3].v) : undefined,
      birthDate: values.c?.[4]?.f
        ? values.c[4]?.f.split('.').reverse().join('-') + 'T00:00:00.000Z'
        : undefined,
      photo: values.c?.[5]?.v
        ? {
            externalURI: String(values.c[5].v),
            localURI,
          }
        : undefined,
      email: values.c?.[6]?.v ? String(values.c[6].v) : undefined,
      vk: values.c?.[7]?.v ? String(values.c[7].v) : undefined,
      telegram: values.c?.[8]?.v ? String(values.c[8].v) : undefined,
    };

    for (const workNumber of Array(10).keys()) {
      workId++;
      const valueOffset = 9 + 8 * workNumber;
      const localWorkPhoto = `/images/works/work-${workId}.webp`;
      const localWorkURI = fs.existsSync(PUBLIC_FOLDER + localWorkPhoto)
        ? localWorkPhoto
        : '';

      worksData[workId] = {
        id: String(workId),
        artistId: String(artistId),
        name: values.c?.[valueOffset].v
          ? String(values.c?.[valueOffset].v)
          : '-',
        photo: values.c?.[valueOffset + 1].v
          ? {
              externalURI: String(values.c[valueOffset + 1].v),
              localURI: localWorkURI,
            }
          : undefined,
        technique: values.c?.[valueOffset + 2]?.v
          ? String(values.c[valueOffset + 2].v)
          : undefined,
        year: values.c?.[valueOffset + 3]?.f
          ? String(values.c[valueOffset + 3].f)
          : undefined,
        description: values.c?.[valueOffset + 4]?.v
          ? String(values.c[valueOffset + 4].v)
          : undefined,
        size: values.c?.[valueOffset + 5]?.v
          ? String(values.c[valueOffset + 5].v)
          : undefined,
        auction: values.c?.[valueOffset + 6]?.f
          ? { price: String(values.c[valueOffset + 6].f), link: '' }
          : undefined,
      };

      if (values.c?.[valueOffset + 7] !== null) {
        break;
      }
    }
  });

  fs.writeFileSync(ARTISTS_OUTPUT_PATH, JSON.stringify(artistsData));
  fs.writeFileSync(WORKS_OUTPUT_PATH, JSON.stringify(worksData));
  console.log('Successefuly saved artist and works data as JSON files');
};

formatData();
