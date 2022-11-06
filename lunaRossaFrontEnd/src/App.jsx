import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css'
import { AppRouter } from './router/appRouter';
import { AppTheme } from './theme/appTheme';

function App() {

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}

export default App
