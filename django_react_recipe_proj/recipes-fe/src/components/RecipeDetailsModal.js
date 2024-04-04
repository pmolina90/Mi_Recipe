import React, { Component, Fragment } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

class RecipeDetailsModal extends Component {
    render() {
        const { recipe, closeModal, openEditModal } = this.props;

        if (!recipe || !recipe.title) {
            return null;
        }

        return (
            <Fragment> 
                <Modal isOpen={true} toggle={closeModal}>
                    <ModalHeader toggle={closeModal}>{recipe.title}</ModalHeader>
                    <ModalBody>
                        <p>Ingredients: {recipe.ingredients}</p>
                        <p>Directions: {recipe.directions}</p>
                        <p>Created At: {recipe.createdAt}</p>
                    </ModalBody>
                    <div className='modal-footer'>
                        <Button color='primary' onClick={() => openEditModal(recipe)}>Edit</Button>
                        <Button color='secondary' onClick={closeModal}>Close</Button>
                    </div>
                </Modal>
            </Fragment>
        )
    }
}

export default RecipeDetailsModal;
