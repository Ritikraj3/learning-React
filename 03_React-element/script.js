const container = React.createElement(
    'div',
    { className: 'container', id: 'container' },
    [
        React.createElement('section', { key: 1 }, [
            React.createElement('p', { key: 2 }, 'I am learning React.js'),
            React.createElement('img', 
                { key: 3, style: {width: 200, backgroundColor: 'black', borderRadius:8, padding: 32}, src: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" },
            ),
            React.createElement('form', {key:1}, [

            React.createElement('div', {key: 1, className: 'input-container'}, [
                React.createElement('label', {key: 2, style: {cursor: 'pointer'}, htmlFor: 'username'}, 'username'),
            React.createElement('input', {key: 3, id: 'username'}, )
            ]),
            React.createElement('div', {key: 2, className: 'input-container'}, [
                React.createElement('label', {key: 2, style: {cursor: 'pointer'}, htmlFor: 'password'}, 'username'),
            React.createElement('input', {key: 3, id: 'password', type: 'password'}, )
            ])
            ])

        ]),

    ]
)

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)























// const h2 = {
//     $$typeof: Symbol.for('react.element'),
//     type: "h2",
//     ref: null,
//     props: {
//         className: "subheading",
//         children: "Hello React"
//     }
// };