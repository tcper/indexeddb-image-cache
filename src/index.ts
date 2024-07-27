export interface Props {
  version: number;
  assets?: object;
  db?: IDBDatabase | null;
}

export * from './image-cache'