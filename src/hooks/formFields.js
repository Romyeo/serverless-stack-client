import { useState } from 'react';

const useFormFields = initState => {
  const [fields, setValues] = useState(initState);

  return [
    fields,
    event => {
      setValues({
        ...fields,
        [event.target.name]: event.target.value
      });
    }
  ];
};

export default useFormFields;
