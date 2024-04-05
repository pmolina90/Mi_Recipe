import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import RecipeList from "./RecipeList";
import NewRecipeModal from "./NewRecipeModal";
import "./Home.css"; // Import home.css here

import axios from "axios"; 
import { API_URL } from "../constants/index";

class Home extends Component {
    state = {
        recipes: []
    };

    componentDidMount() {
        this.resetState();
    }

    getRecipes = () => {
        console.log("Request URL:", `${API_URL}`); // Log the request URL
        axios.get(`${API_URL}`)
            .then(res => {
                console.log("Response data:", res.data);
                const recipes = res.data;
                this.setState({ recipes });
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    };

    resetState = () => {
        this.getRecipes();
    };

    render(){
        return (
            <Container className="home-container" style={{ marginTop: '20px' }}>
                <Row>
                    <Col>
                        <RecipeList
                            recipes={this.state.recipes}
                            resetState={this.resetState}
                        />    
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
