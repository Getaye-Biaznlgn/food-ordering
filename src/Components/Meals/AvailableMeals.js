import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem"
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    descripiton: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    descripiton: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Berger",
    descripiton: "American, raw, neaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Schnitzel",
    descripiton: "A german specialty!",
    price: 23.9,
  },
];
const AvailableMeals = () => {
  const items = DUMMY_MEALS.map((item) =><MealItem key={item.id} name={item.name} descripiton={item.descripiton} price={item.price}></MealItem>);

  return (
    <section className={classes.meals}>
      <Card>
        <u1 className={classes.meals} style={{ listStyle: "none" }}>
          {items}
        </u1>
      </Card>
    </section>
  );
};

export default AvailableMeals;
