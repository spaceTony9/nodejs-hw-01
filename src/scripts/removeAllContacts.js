import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {

  try {
    fs.writeFile(PATH_DB, JSON.stringify([]));
  } catch (error) {
    console.error('error writing to the file', error);

  }
};

await removeAllContacts();
