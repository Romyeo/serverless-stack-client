import { Storage } from 'aws-amplify';

type storeVaultPut = {
  key: string;
};

export const fileUpload = async (file: File) => {
  const name = `${Date.now()}-${file.name}`;
  const stored = (await Storage.vault.put(name, file, {
    contentType: file.type
  })) as storeVaultPut;

  return stored.key;
};
