import { Storage } from 'aws-amplify';

export const upload = async (file: File) => {
  const name = `${Date.now()}-${file.name}`;
  const stored = await Storage.vault.put(name, file, {
    contentType: file.type
  });

  return stored.key;
};
