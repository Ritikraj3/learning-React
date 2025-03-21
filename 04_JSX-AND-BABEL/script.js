const container = 
<div className ="container" id="container">
        <section>
            <p>I am learning React.js</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" 
            style={{ 
                width: 200,
                backgroundColor: 'black' , 
                borderRadius:8, 
                padding: 32}} />
        </section>
        <section>
            <form> 
                <div className ="input-container">
                    <label htmlFor="username" 
                    style={{cursor: 'pointer' }}>username</label>
                    <input id="username" />
                </div>

                <div className ="input-container">
                    <label htmlFor="password" 
                    style={{cursor: 'pointer' }}>username</label>
                    <input id="password" type="password" />
                </div>
            </form>
        </section>
    </div>


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)




