import { JSX, Builder } from "canvacord";

// Options for the builder
interface Props {
  message: string;
}

class MyBuilder extends Builder<Props> {
  public constructor() {
    // The super constructor takes the width and height of the output image
    super(500, 500);
  }

  public setMessage(value: string) {
    // The set method is used to set the value of a property
    this.options.set("message", value);
    return this;
  }

  // The render method is where the JSX is rendered
  public async render() {
    const message = this.options.get("message");
    // You can render any component you want
    // this markup describes the shape/content of output image
    return <h1>{message}</h1>;
  }
}
