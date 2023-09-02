import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
    if (db.objectStoreNames.contains('jate')) {
      console.log('jate database already exists');
      return;
    }
    db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    console.log('jate database created');
  },
});

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await dbPromise;
  const transaction = db.transaction('jate', 'readwrite');
  const store = transaction.objectStore('jate');

  try {
    const result = await store.add(content);
    console.log('Data added to the database:', result);
  } catch (error) {
    console.error('Error adding data to the database:', error);
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>  {
  const db = await dbPromise;
  const transaction = db.transaction('jate', 'readonly');
  const store = transaction.objectStore('jate');

  try {
    const allData = await store.getAll();
    console.log('All data retrieved from the database:', allData);
    return allData;
  } catch (error) {
    console.error('Error retrieving data from the database:', error);
    return [];
  }
};

// Initialize the database
const dbPromise = initdb();