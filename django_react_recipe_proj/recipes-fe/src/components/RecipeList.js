import React, { Component } from "react";
import { Table } from "reactstrap";
import NewRecipeModal from "./NewRecipeModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";
import "./RecipeList.css"; // Import recipelist.css here

class RecipeList extends Component {
    render() {
        const { recipes, hover } = this.props;
        return (
            <div className="background-container">
                <div className="table-wrapper">
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
                            {!recipes || recipes.length === 0 ? (
                                <tr>
                                    <td colSpan='5' align="center">
                                        <b>Oops, no one here yet</b>
                                    </td>
                                </tr>
                            ) : (
                                recipes.map((recipe, index) => (
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
