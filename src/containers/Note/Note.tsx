import React, {
  FC,
  useRef,
  ChangeEvent,
  FormEvent,
  useState,
  useEffect
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';

import { addNote, fetchNote } from 'store/actions/note';

import {
  selectNoteFetchedData,
  selectNoteFetching,
  selectNoteFetchError
} from 'selectors/note';

import NotFound from 'components/NotFound/NotFound';

import config from 'config';

interface RouteInfo {
  id: string;
}

const MAX_SIZE = config.attachment.MAX_ATTACHMENT_SIZE / 1000000;

const Note: FC<RouteComponentProps<RouteInfo>> = ({ match }) => {
  const { id } = match.params;

  const dispatch = useDispatch();
  const file = useRef<File>();
  const [error, setError] = useState('');
  const [content, setContent] = useState('');

  const note = useSelector(selectNoteFetchedData);
  const fetchingNote = useSelector(selectNoteFetching);
  const fetchNoteError = useSelector(selectNoteFetchError);

  useEffect(() => {
    dispatch(fetchNote(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (note) setContent(note.content);
  }, [note]);

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

    dispatch(addNote(content, file.current));
  };

  const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const formatFilename = (str: string) => {
    return str.replace(/^\w+-/, '');
  };

  if (fetchNoteError) {
    return <NotFound />;
  }

  if (fetchingNote) {
    return (
      <Row className="justify-content-center align-items-center">
        <Spinner
          animation="border"
          variant="primary"
          size="sm"
          style={{ marginRight: 5 }}
        />
        <span>Fetching your scratch note...</span>
      </Row>
    );
  }

  return (
    <Row className="justify-content-center">
      <Col lg={7}>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form.Group controlId="content">
            <Form.Control
              name="content"
              as="textarea"
              placeholder="Scratch your notes here"
              rows="10"
              onChange={handleChangeContent}
              value={content}
              required
            />
          </Form.Group>

          {note && note.attachmentURL && note.attachment && (
            <div>
              <h6>
                Attachment -{' '}
                <a
                  href={note.attachmentURL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {formatFilename(note.attachment)}
                </a>
              </h6>
            </div>
          )}

          <Form.Group controlId="attachment">
            <Form.Text style={{ marginBottom: 15 }}>
              (Optional) You can upload an attachment to your scratch, make sure
              it's smaller than 5MB
            </Form.Text>
            <Form.Control
              onChange={handleFileChange}
              name="attachment"
              type="file"
            />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Update note
          </Button>

          <Button variant="outline-danger" block>
            Delete note
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Note;
