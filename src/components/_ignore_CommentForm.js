import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, ModalBody, Button, Label, Row } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const minLength = len => val => val && val.length >= len;
const maxLength = len => val => !val || val.length <= len;

class CommentForm extends Component {
  state = { isModalOpen: false };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleSubmit = vals => {
    alert(`Current State is: ${JSON.stringify(vals)}`);
    this.toggleModal();
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <Fragment>
        <Button outline type="submit" value="submit" onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg mr-1" />
          Submit Comment
        </Button>
        <Modal isOpen={isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <Row className="form-group px-3">
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  id="rating"
                  name="rating"
                  className="form-control"
                  defaultValue="1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>
              <Row className="form-group px-3">
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    minLength: minLength(3),
                    maxLength: maxLength(15)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less"
                  }}
                />
              </Row>
              <Row className="form-group px-3">
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  rows="6"
                  className="form-control"
                />
              </Row>
              <Row className="form-group px-3">
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default CommentForm;
