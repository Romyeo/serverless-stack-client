import React, {
  FC,
  useRef,
  ChangeEvent,
  FormEvent,
  useState,
  useEffect,
  MouseEvent
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';

import { fetchNote, deleteNote, updateNote } from 'store/actions/note';

import {
  selectNoteDeleteError,
  selectNoteDeleting,
  selectNoteFetchedData,
  selectNoteFetchError,
  selectNoteFetching,
  selectNoteUpdating,
  selectNoteUpdateError
} from 'selectors/note';

import NotFound from 'components/NotFound/NotFound';

import config from 'config';

interface RouteInfo {
  id: string;
}

const MAX_SIZE = config.attachment.MAX_ATTACHMENT_SIZE / 1000000;

const formatFilename = (str: string) => {
  return str.replace(/^\w+-/, '');
};

const Note: FC<RouteComponentProps<RouteInfo>> = ({ match }) => {
  const { id } = match.params;

  const dispatch = useDispatch();
  const file = useRef<File>();
  const [error, setError] = useState('');
  const [content, setContent] = useState('');
  const [validated, setValidated] = useState(false);

  const {
    attachment,
    attachmentURL,
    createdAt,
    content: noteContent,
    noteId,
    userId
  } = useSelector(selectNoteFetchedData);

  const fetching = useSelector(selectNoteFetching);
  const fetchError = useSelector(selectNoteFetchError);

  const deleteError = useSelector(selectNoteDeleteError);
  const deleting = useSelector(selectNoteDeleting);

  const updateError = useSelector(selectNoteUpdateError);
  const updating = useSelector(selectNoteUpdating);

  useEffect(() => {
    dispatch(fetchNote(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (noteContent) setContent(noteContent);
  }, [noteContent]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    file.current = event.target.files![0];
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!validated) setValidated(true);
    if (!event.currentTarget.checkValidity()) return;

    if (!content || !noteId || !createdAt || !userId) {
      setError(
        `
          Missing fields
          ${!content && 'Content,'}
          ${!noteId && 'Note ID,'}
          ${!userId && 'User ID,'}
          ${!createdAt && 'Created time,'}
        `
      );
      return;
    }

    if (
      file.current &&
      file.current.size > config.attachment.MAX_ATTACHMENT_SIZE
    ) {
      setError(
        `Attachment is too large, please pick a file smaller than ${MAX_SIZE}MB.`
      );
      return;
    }

    if (content === noteContent && !file.current) {
      setError(`Please try to change something before updating`);
      return;
    }

    dispatch(
      updateNote(
        { attachment, content, createdAt, noteId, userId },
        file.current
      )
    );
  };

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setError('');

    const confirmed = window.confirm(
      'Are you sure you want to delete this scratch?'
    );

    if (!confirmed) return;

    dispatch(deleteNote(id, attachment));
  };

  const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  if (fetchError) {
    return <NotFound />;
  }

  if (fetching) {
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

  const disabled = deleting || updating;

  return (
    <Row className="justify-content-center">
      <Col lg={7}>
        <Form validated={validated} onSubmit={handleSubmit} noValidate>
          {(error || deleteError || updateError) && (
            <Alert variant="danger">
              {error || deleteError || updateError}
            </Alert>
          )}

          <Form.Group controlId="content">
            <Form.Control
              name="content"
              as="textarea"
              placeholder="Scratch your notes here"
              onChange={handleChangeContent}
              value={content}
              disabled={disabled}
              rows="10"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please make sure that your scratch note is not empty.
            </Form.Control.Feedback>
          </Form.Group>

          {attachmentURL && attachment && (
            <div>
              <h6>
                Attachment -{' '}
                <a
                  href={attachmentURL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {formatFilename(attachment)}
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
              name="attachment"
              type="file"
              disabled={disabled}
              onChange={handleFileChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={disabled} block>
            {updating ? 'Updating scratch note...' : 'Update note'}
          </Button>

          <Button
            variant="outline-danger"
            onClick={handleDelete}
            disabled={disabled}
            block
          >
            {deleting ? 'Deleting scratch note...' : 'Delete note'}
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Note;
