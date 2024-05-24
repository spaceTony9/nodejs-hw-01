import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  let allContacts = [];

  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    allContacts = JSON.parse(data);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    console.error('error reading the file', error);
  }

  return allContacts;
};

console.log(await getAllContacts());


// Alternative Solution

// export const getAllContacts = async () => {
//   let allContacts = [];
//
//   try {
//     const bufferData = await fs.readFile(PATH_DB);
//     const stringData = bufferData.toString();
//     allContacts = JSON.parse(stringData);
//   } catch (error) {
//     console.error('error reading the file', error);
//   }
//
//   return allContacts;
// };
//
//
// console.log(await getAllContacts());
