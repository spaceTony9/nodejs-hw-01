import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  let updatedArray = [];

  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parsedData = JSON.parse(data);
    updatedArray = parsedData.filter(() => Math.random() > 0.5);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    console.error('error reading the file', error);
  }

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedArray, null, 2));
  } catch (error) {
    console.error('error writing to the file', error);
  }
};

await thanos();
