import { Props } from ".";

export default class Cache {

  db: IDBDatabase | null = null;
  version = 1;
  assets = {};

  constructor(props: Props) {
    this.version = props.version || 1;
    this.assets = {};
    this.db = null;
  }

  init() {
    return new Promise<void>(resolve => {
      const request = indexedDB.open('INDEXED.image.cache', this.version);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        (event.target as IDBOpenDBRequest).result.createObjectStore('cache');
      };

      request.onsuccess = () => {
        this.db = request.result;

        this.db.onerror = () => {
          console.error('Error creating/accessing db');
        };
        resolve();
      };
    });
  }

  putImage(key: string, url: string) {
    return new Promise<void>((resolve, reject) => {
      if (!this.db) {
        return reject('DB not initialized. Call the init method');
      }

      const db = this.db;

      fetch(url)
        .then(res => res.blob())
        .then(blob => {
          const transaction = db.transaction(['cache'], 'readwrite');
          transaction.objectStore('cache').put(blob, key);
          resolve();
        });
    });
  }

  putBlob(key: string, blob: Blob) {
    return new Promise<void>((resolve, reject) => {
      if (!this.db) {
        return reject('DB not initialized. Call the init method');
      }

      const db = this.db;

      const transaction = db.transaction(['cache'], 'readwrite');
      transaction.objectStore('cache').put(blob, key);
      resolve();
    });
  }

  getImage(key: string): Promise<string | null> {
    return new Promise<string | null>(resolve => {
      const transaction = this.db?.transaction(['cache'], 'readwrite');
      if (!transaction) {
        resolve(null)
      }
      transaction!.objectStore('cache').get(key).onsuccess = event => {
        const blob = (event.target as IDBRequest).result;
        if (!blob) {
          resolve(null);
          return;
        }
        resolve(URL.createObjectURL(blob));
      };
    });
  }

  async clearImage(key: string) {
    if (!key) {
      return;
    }
    const image = await this.getImage(key)
    if (image) {
      const db = this.db;
      const transaction = db?.transaction(['cache'], 'readwrite');
      transaction?.objectStore('cache').delete(key);
    }
  }

  clearAll() {
    const db = this.db;
    const transaction = db?.transaction(['cache'], 'readwrite');
    transaction?.objectStore('cache').clear()
  }
}
