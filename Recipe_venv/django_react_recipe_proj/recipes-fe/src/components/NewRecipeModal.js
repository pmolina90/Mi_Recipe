import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import NewRecipeForm from './NewRecipeForm';

class NewRecipeModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        var title = 'Editing Recipe';
        var button = <Button onClick={this.toggle}>Edit</Button>;
        if (create) {
            title = "Creating New Recipe";

            button = (
                <Button
                    color="primary"
                    className='float-right'
                    onClick={this.toggle}
                    style={{ minWidth: '200px'}}
                    >Create New</Button>
            );
        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <NewRecipeForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            recipes={this.props.recipes}
                        />    
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewRecipeModal;