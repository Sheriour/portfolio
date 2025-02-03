import { Pizza } from "../Types";
import CreatedPizzaListItem from "./CreatedPizzaListItem";

type PizzaListProps = {
  createdPizzas: Pizza[];
};

function PizzaList({ createdPizzas }: PizzaListProps) {
  return (
    <>
      <div className="container border mt-2 pb-3">
        <h4 className={"text-center mt-3"}>Pizza Archive</h4>

        <div className={"container mt-2"}>
          <div className="list-group" id="pizza-list">
            {createdPizzas.map((x) => (
              <CreatedPizzaListItem
                key={x.pizzaName}
                pizzaName={x.pizzaName}
                crust={x.crust}
                ingredients={x.ingredients}
              ></CreatedPizzaListItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PizzaList;
