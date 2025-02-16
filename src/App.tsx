
import './App.css';
import { TileProvider } from './context/TileContext.tsx';
import { PathFindingProvider } from './context/PathFindingContext.tsx';
import * as React from 'react';
import { SpeedProvider } from './context/SpeedContext.tsx';
import { Grid } from './components/Grid.tsx';
import { useRef } from 'react';
import { Nav } from './components/Nav.tsx';
function App() {
  const isVisualizationRunningRef=useRef(false);
  return (
      <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <Nav isVisualizationRunningRef={isVisualizationRunningRef}/>
         <Grid isVisualizationRunningRef={isVisualizationRunningRef}/>
         </SpeedProvider>
      </TileProvider>
      </PathFindingProvider>
  );
}
export default App;