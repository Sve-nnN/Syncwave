import { Button } from "@material-tailwind/react";
import PropTypes from "prop-types";

export default function CallToAction({
  text = "Conoce mas",
  variant = "filled",
  estilos = {},
}) {
  return (
    <Button className={estilos} variant={variant}>
      {text}
    </Button>
  );
}
CallToAction.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  estilos: PropTypes.object,
};
