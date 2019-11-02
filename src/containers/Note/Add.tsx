import React, { FC, useRef, ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';

import { addNote } from 'store/actions/note';

import useFormFields from 'hooks/formFields';

import config from 'config';
import { selectNoteAdding, selectNoteAddError } from 'selectors/note';

interface IFormFields {
  content: string;
}

const MAX_SIZE = config.attachment.MAX_ATTACHMENT_SIZE / 1000000;

const NoteAdd: FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const file = useRef<File>();
  const [error, setError] = useState('');
  const [fields, handleFieldChange] = useFormFields<IFormFields>({
    content: ''
  });

  const adding = useSelector(selectNoteAdding);
  const addError = useSelector(selectNoteAddError);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    file.current = event.target.files![0];
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (
      file.current &&
      file.current.size > config.attachment.MAX_ATTACHMENT_SIZE
    ) {
      setError(
        `Attachment is too large, please pick a file smaller than ${MAX_SIZE}MB.`
      );
      return;
    }

    dispatch(addNote(fields.content, file.current));
  };

  return (
    <Row className="justify-content-center">
      <Col lg={7}>
        <Form onSubmit={handleSubmit}>
          {(error || addError) && (
            <Alert variant="danger">{error || addError}</Alert>
          )}

          <Form.Group controlId="content">
            <Form.Control
              name="content"
              as="textarea"
              placeholder="Scratch your notes here"
              rows="10"
              disabled={adding}
              onChange={handleFieldChange}
              value={fields.content}
              required
            />
          </Form.Group>
          <Form.Group controlId="attachment">
            <Form.Text style={{ marginBottom: 15 }}>
              (Optional) You can upload an attachment to your scratch, make sure
              it's smaller than 5MB
            </Form.Text>
            <Form.Control
              disabled={adding}
              onChange={handleFileChange}
              name="attachment"
              type="file"
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={adding} block>
            {adding ? 'Adding note...' : 'Add note'}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default NoteAdd;
