import React, { Component } from "react";
import { Table } from "reactstrap";
import NewRecipeModal from "./NewRecipeModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class RecipeList extends Component {
    render() {
        const recipes = this.props.recipes;
        return (
            <Table dark>
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
                    {!recipes || recipes.length === 0 ? (
                        <tr>
                            <td colSpan='10' align="center">
                                <b>Oops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        recipes.map((recipe) => (
                            <tr key={recipe.pk}>
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
        );
    }
}

export default RecipeList;
