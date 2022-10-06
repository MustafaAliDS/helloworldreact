// PascalCase for file naming conventions
import Button from "./Button";
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1> {title}</h1>
      <Button color="green" text="Add" />
    </header>
  );
};

export default Header;

// export default Greet; ->> doing so you can do import MyComponent from "./components/Greet" in App.js,
// but I prefer name exports because it forces the user to use the exact name
