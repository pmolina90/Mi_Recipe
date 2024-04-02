import React, { Component } from "react";
import {Col, Container, Row } from "reactstrap";
import RecipeList from "./RecipeList";
import NewRecipeModal from "./NewRecipeModal";

import axios from 'axios';

import { API_URL } from "../constants";

class Home extends Component {
    state = {
        recipes: []
    };

    componentDidMount() {
        this.resetState();
    }

    getRecipes = () => {
        axios.get(API_URL)
            .then(res => {
                console.log("Response data:" , res.data)
                // Response data is an array of recipes
                const recipes = res.data;
                this.setState({ recipes }); // Shorthand for { recipes: recipes }
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching recipes:', error);
            });
    };

    resetState = () => {
        this.getRecipes();
    };

    render(){
        return (
            <Container style={{ marginTop: '20px' }}>
                <Row>
                    <Col>
                        <RecipeList
                            recipes={this.state.recipes}
                            resetState={this.resetState}
                        />    
                    </Col>
                </Row>
                <Row>
                    <Col>
                     <NewRecipeModal create={true} resetState={this.resetState} />       
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;