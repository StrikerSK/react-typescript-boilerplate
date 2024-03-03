import * as React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import FirstParagraph from "./components/FirstParagraph";

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<FirstParagraph/>);