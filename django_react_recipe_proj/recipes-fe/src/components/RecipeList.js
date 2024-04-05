import React, { Component } from "react";
import { Table, Input } from "reactstrap";
import NewRecipeModal from "./NewRecipeModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import "./RecipeList.css";

class RecipeList extends Component {
    state = {
        searchTerm: ""
    };

    handleSearch = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        const { recipes, hover } = this.props;
        const { searchTerm } = this.state;

        // Filter recipes based on search term
        const filteredRecipes = recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recipe.directions.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div>
                {/* Background image container */}
                <div className="background-container" />
                {/* Table and search input */}
                <div className="table-wrapper">
                    <div className="search-bar-container">
                        <Input
                            type="text"
                            placeholder="Search recipes..."
                            value={searchTerm}
                            onChange={this.handleSearch}
                        />
                    </div>
                    <div className="create-btn">
                        <NewRecipeModal create={true} resetState={this.props.resetState} />
                    </div>
                    <Table dark className="table-centered" striped={hover} style={{ fontFamily: '"Marker Felt", fantasy' }}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Ingredients</th>
                                <th>Directions</th>
                                <th>Created At</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!filteredRecipes.length ? (
                                <tr>
                                    <td colSpan="5" align="center">
                                        <b>No matching recipes found</b>
                                    </td>
                                </tr>
                            ) : (
                                filteredRecipes.map((recipe, index) => (
                                    <tr key={recipe.pk} className={hover && index % 2 === 0 ? "hoverable" : ""}>
                                        <td>{recipe.title}</td>
                                        <td>{recipe.ingredients}</td>
                                        <td>{recipe.directions}</td>
                                        <td>{recipe.createdAt}</td>
                                        <td align="center">
                                            <NewRecipeModal
                                                create={false}
                                                recipe={recipe}
                                                resetState={this.props.resetState}
                                            />
                                            &nbsp;&nbsp;
                                            <ConfirmRemovalModal
                                                pk={recipe.pk}
                                                resetState={this.props.resetState}
                                            />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default RecipeList;
