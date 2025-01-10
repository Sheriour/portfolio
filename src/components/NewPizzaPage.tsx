import { useRef } from "react";
import { useState } from "react";
import "../styles/pizzaMain.css";

type ingredient = {
  id: number;
  name: string;
  portion: number; //not included (0), single portion (1), double portion (2)
};

function NewPizzaPage() {
  let innerMargins: string = "mt-3";

  const nameInputRef = useRef<HTMLInputElement>(null);
  const [crust, setCrust] = useState("Select Crust");
  const [ingredients, setIngredients] = useState<ingredient[]>([
    {
      id: 1,
      name: "Pepperoni",
      portion: 0,
    },
    {
      id: 2,
      name: "Mozarella",
      portion: 1,
    },
    {
      id: 3,
      name: "Mixed Peppers",
      portion: 2,
    },
  ]);

  /**
   * Creates the pizza (TODO: expand on this once you got proper handling here)
   */
  const handlePizzaCreate = () => {
    if (nameInputRef.current) console.log(nameInputRef.current.value);
  };

  /**
   * Sets the crust type
   *
   * @param crust String representation of the pizza crust type
   */
  const handleCrustSelect = (crust: string) => {
    setCrust(crust);
  };

  /**
   * Handles ingredient selection. Ingredients will cycle between 0/1/2 values.
   *
   * @param ingredientId Id of the ingredient being modified
   */
  const handleIngredientSelect = (ingredientId: number) => {
    const ingredient = ingredients.find((x) => x.id === ingredientId);
    if (ingredient != null) {
      ingredient.portion++;
      if (ingredient.portion > 2) {
        ingredient.portion = 0;
      }
      setIngredients([...ingredients]);
    }
  };

  return (
    <>
      <div className="container border mt-3 pb-3">
        <h4 className={"text-center " + innerMargins}>Create your pizza!</h4>
        <label htmlFor="pizzaNameInput" className={innerMargins}>
          Pizza Name
        </label>
        <input
          id="pizzaNameInput"
          ref={nameInputRef}
          type="text"
          className={"form-control "}
          placeholder="Pepperoni, Meat Lovers..."
        ></input>

        <label htmlFor="pizzaCrustDropdown" className={innerMargins}>
          Crust Type
        </label>
        <div className="dropdown">
          <button
            className="btn btn-pizza-clickable dropdown-toggle"
            type="button"
            id="pizzaCrustDropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ width: 200 }}
          >
            {crust}
          </button>
          <div className="dropdown-menu" aria-labelledby="pizzaCrustDropdown">
            <button
              className="dropdown-item piz-hover"
              type="button"
              onClick={() => handleCrustSelect("Italian")}
            >
              Italian
            </button>
            <button
              className="dropdown-item piz-hover"
              type="button"
              onClick={() => handleCrustSelect("Thick")}
            >
              Thick
            </button>
          </div>
        </div>

        <div className={"text-center "}>
          <label htmlFor="ingredients" className={innerMargins}>
            Ingredients (click to add or change portion size)
          </label>
        </div>

        <ul className="list-group" id="ingredients">
          {ingredients.map((x) => (
            <button
              key={x.id}
              onClick={() => handleIngredientSelect(x.id)}
              className={
                "list-group-item d-flex justify-content-between " +
                (x.portion === 1
                  ? "piz-ingredient-single"
                  : x.portion === 2
                  ? "piz-ingredient-double"
                  : "")
              }
            >
              <span>{x.name}</span>
              <span>
                {x.portion === 1 ? "Single" : x.portion === 2 ? "Double!" : ""}
              </span>
            </button>
          ))}
        </ul>

        <div className={"text-center " + innerMargins}>
          <button
            onClick={handlePizzaCreate}
            type="button"
            className="btn btn-pizza-clickable"
            style={{ width: 200 }}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default NewPizzaPage;
