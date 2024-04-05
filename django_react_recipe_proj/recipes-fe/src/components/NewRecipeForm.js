import React from "react";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import axios from 'axios';

import { API_URL } from '../constants';

class NewRecipeForm extends React.Component {
    state = {
        title: '',
        ingredients: '',
        directions: '',
    };

    componentDidMount() {
        const { recipe } = this.props;
        if (recipe) {
            const { title, ingredients, directions } = recipe;
            this.setState({ title, ingredients, directions });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    createRecipe = e => {
        e.preventDefault();
        axios.post(API_URL, this.state)
            .then(() => {
                this.props.resetState();
                this.props.toggle();
            })
            .catch(error => {
                console.error('Error creating recipe:', error);
            });
    };

    editRecipe = e => {
        e.preventDefault();
        const { recipe } = this.props;
        axios.put(`${API_URL}${recipe.pk}/`, this.state)
            .then(() => {
                this.props.resetState();
                this.props.toggle();
            })
            .catch(error => {
                console.error('Error editing recipe:', error);
            });
    };

    render() {
        return (
            <Form onSubmit={this.props.recipe ? this.editRecipe : this.createRecipe}>
                <FormGroup>
                    <Label for='title'>Title:</Label>
                    <Input
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.title}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='ingredients'>Ingredients:</Label>
                    <Input
                        type="text"
                        name="ingredients"
                        onChange={this.onChange}
                        value={this.state.ingredients}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='directions'>Directions:</Label>
                    <textarea
                        className="directions-input form-control"
                        type="text"
                        name="directions"
                        onChange={this.onChange}
                        value={this.state.directions}
                    ></textarea>
                </FormGroup>
                <Button type="submit">Save</Button>
            </Form>
        );
    }
}

export default NewRecipeForm;
