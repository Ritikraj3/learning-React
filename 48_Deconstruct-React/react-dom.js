import react from "./react";

export function render(reactElement, rootElement) {
  function createDOMElement(reactElement) {

    if (reactElement === null || reactElement === undefined || reactElement === false) {
    return null;
  }

    if (typeof reactElement.type === "function") {
      return createDOMElement(reactElement.type(reactElement.props));
    }

    if (Array.isArray(reactElement)) {
      return reactElement.map((el) => createDOMElement(el));
    }

    if (typeof reactElement === "string") {
      return document.createTextNode(reactElement);
    }

    const { type, props } = reactElement;
    const DOMElement = document.createElement(type);

    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (key === "children") return;
        DOMElement[key] = value;
      });
      props.children?.forEach((child) => {
        if (Array.isArray(child)) {
          DOMElement.append(...child.map((el) => createDOMElement(el)));
        } else if (typeof child === "string" || typeof child === "number") {
          const textNode = document.createTextNode(child);
          DOMElement.append(textNode);
        } else {
          DOMElement.append(createDOMElement(child));
        }
      });
    }

    return DOMElement;
  }

  const DOMElement = createDOMElement(reactElement);

  if (Array.isArray(DOMElement)) {
    rootElement.append(...DOMElement);
  } else {
    rootElement.append(DOMElement);
  }
}

export default { render };
