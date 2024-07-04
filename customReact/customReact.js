const render = (element, container) => {
  //   const elementDom = document.createElement(element.type);
  //   elementDom.setAttribute("class", element.props.className);
  //   elementDom.innerHTML = element.children;
  //   container.appendChild(elementDom);

  const elementDom = document.createElement(element.type);
  elementDom.innerHTML = element.children;

  for (const key in element.props) {
    elementDom.setAttribute(key, element.props[key]);
  }
  container.appendChild(elementDom);
};

const reactElememnt = {
  type: "h1",
  props: {
    className: "title",
  },
  children: "Hello World",
};

const mainContainer = document.getElementById("root");

render(reactElememnt, mainContainer);
