import React from "react";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import axios from 'axios';

import { API_URL } from '../constants'

class NewRecipeForm extends React.Component {
    state = {
        pk: 0,
        title: '',
        ingredients:'',
        directions:'',
    };

    componentDidMount() {
        if (this.props.recipe) {
            const { pk, title, ingredients, directions } = this.props.recipe;
            this.setState({pk, title, ingredients, directions });
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
            // Reset the form fields
            this.setState({
                pk: 0,
                title: '',
                ingredients:'',
                directions:'',
            });
        })
        .catch(error => {
            console.error('Error creating recipe:', error);
        });
    };

    editRecipe = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.pk, this.state)
        .then(() => {
            this.props.resetState();
            this.props.toggle();
            // Reset the form fields
            this.setState({
                pk: 0,
                title: '',
                ingredients:'',
                directions:'',
            });
        })
        .catch(error => {
            console.error('Error editing recipe:', error);
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
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
                        value={this.defaultIfEmpty(this.state.title)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for='ingredients'>Ingredients:</Label>
                    <Input
                        type="text"
                        name="ingredients"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.ingredients)}
                        />
                </FormGroup>
                <FormGroup>
                    <Label for='directions'>Directions:</Label>
                    <Input
                        type="text"
                        name="directions"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.directions)}
                        />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewRecipeForm;