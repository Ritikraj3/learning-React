const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, "I am learning React.js"), /*#__PURE__*/React.createElement("img", {
  src: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg",
  style: {
    width: 200,
    backgroundColor: 'black',
    borderRadius: 12,
    padding: 32
  }
})), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "input-container"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username",
  style: {
    cursor: 'pointer'
  }
}, "username"), /*#__PURE__*/React.createElement("input", {
  id: "username"
})), /*#__PURE__*/React.createElement("div", {
  className: "input-container"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password",
  style: {
    cursor: 'pointer'
  }
}, "username"), /*#__PURE__*/React.createElement("input", {
  id: "password",
  type: "password"
})))));
console.log(container);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);
//# sourceMappingURL=script.js.map