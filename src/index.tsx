// React v18
import {App} from "./App";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);


// React ~v17
// import { render } from "react-dom";
// import {App} from "./App";
// const rootElement = document.getElementById('root');
// render(<App />, rootElement);