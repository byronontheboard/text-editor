import { openDB } from 'idb';

// Initializing the database
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
  try {
    const db = await initdb();
    const transaction = db.transaction('jate', 'readwrite');
    const store = transaction.objectStore('jate');
    
    // Add the content to the database
    const id = await store.add({ content });
    console.log(`Added content with ID: ${id}`);
  } catch (error) {
    console.error('Error in putDb:', error);
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const db = await initdb();
    const transaction = db.transaction('jate', 'readonly');
    const store = transaction.objectStore('jate');
    
    // Retrieve all content from the database
    const contentArray = await store.getAll();
    console.log('Retrieved content from the database:', contentArray);
    
    // Extract and return the content from the array
    return contentArray.map(item => item.content);
  } catch (error) {
    console.error('Error in getDb:', error);
  }
};
