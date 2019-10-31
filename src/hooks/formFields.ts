import { useState, ChangeEvent } from 'react';

const useFormFields = <S>(
  initState: S
): [S, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [fields, setValues] = useState(initState);

  return [
    fields,
    (event: ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...fields,
        [event.target.name]: event.target.value
      });
    }
  ];
};

export default useFormFields;
