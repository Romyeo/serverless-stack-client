import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Spinner, Alert } from 'react-bootstrap';
import moment from 'moment';

import { fetchListNote } from 'store/actions/note';

import {
  selectNoteListFetching,
  selectNoteListError,
  selectNoteListFetchedData
} from 'selectors/note';

import './styles/List.css';
import { RouteComponentProps } from 'react-router';

// TODO: This could also be converted to a generic list component
const NoteList: FC<RouteComponentProps> = ({ history }) => {
  const { push } = history;

  const dispatch = useDispatch();
  const fetching = useSelector(selectNoteListFetching);
  const error = useSelector(selectNoteListError);
  const notes = useSelector(selectNoteListFetchedData);

  useEffect(() => {
    dispatch(fetchListNote());
  }, [dispatch]);

  const handleAddNote = () => {
    push('/notes/add');
  };

  let items = [
    <ListGroup.Item key="fetching-list-item">
      <Row className="justify-content-center align-items-center">
        <Spinner
          animation="border"
          variant="primary"
          size="sm"
          style={{ marginRight: 5 }}
        />
        <span>Fetching your scratch notes...</span>
      </Row>
    </ListGroup.Item>
  ];

  if (error && !fetching) {
    items = [
      <ListGroup.Item key="error-list-item">
        <Alert variant="danger">{error}</Alert>
      </ListGroup.Item>
    ];
  }

  if (notes.length && !fetching && !error) {
    items = notes.map(note => {
      const { noteId, content, createdAt } = note;
      const noteLines = content.split('\n');
      const relevantDate = moment(createdAt).fromNow();

      return (
        <ListGroup.Item
          onClick={() => push(`notes/${noteId}`)}
          key={noteId}
          className="custom-flush-list-item"
          action
        >
          <div className="item-note-con">
            <h4 className="item-note-con-header">{noteLines[0]}</h4>
            <div className="item-note-con-footer">
              <p>{relevantDate}</p>
              {noteLines[1] && <p>{noteLines[1]}</p>}
            </div>
          </div>
        </ListGroup.Item>
      );
    });
  }

  return (
    <Row className="justify-content-center">
      <Col xl={7}>
        <h4>Notes</h4>
        <ListGroup variant="flush">
          {!fetching && !error && (
            <ListGroup.Item
              key="add new note"
              className="custom-flush-list-item"
              action
              onClick={handleAddNote}
            >
              <div className="item-note-con">
                <h4 className="item-note-con-header">
                  <b>{'\uFF0B'}</b> Add a new scratch note
                </h4>
              </div>
            </ListGroup.Item>
          )}

          {items.map(item => item)}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default NoteList;
