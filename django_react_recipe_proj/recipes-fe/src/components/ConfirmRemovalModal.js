import React, {Component, Fragment } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from 'reactstrap';

import axios from 'axios';

import { API_URL } from "../constants";

class ConfirmRemovalModal extends Component {
    state = {
        modal:false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    deleteRecipe = pk => {
        console.log("Recipe ID:", pk) // troubleshooting purposes checking value of ok
        axios.delete(`${API_URL}${pk}/`).then(() => {
            this.props.resetState();
            this.toggle();
        });
    };

    render() {
        return (
            <Fragment>
                <Button color="danger" onClick={() => this.toggle()} >
                    Remove
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Do you really want to delete the recipe?
                    </ModalHeader>

                    <ModalFooter>
                        <Button type='button' onClick={() => this.toggle()}>
                            Cancel
                        </Button>
                        <Button
                            type="button"
                            color="primary"
                            onClick={() => this.deleteRecipe(this.props.pk)}
                            >
                            Yes
                        </Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default ConfirmRemovalModal;
