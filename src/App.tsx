import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Settings from './components/settings/settings';
import TagSettings from './components/tagSettings/tagSettings';
import Page from './components/page/page';
import DragDrop from './components/dragDrop/dragDrop';
import useLivePosition from './hooks/useLivePosition';
import usePosition from './hooks/usePosition';

function App() {

  const livePos = useLivePosition();
  const currentPos = usePosition();

  const [pages, setPages] = useState<JSX.Element[]>([]);



  const loadPages = (files: any[]) => {
    console.log(files);
    let pageArr: JSX.Element[] = []

    for (let i = 0; i < files.length; i++) {

      pageArr.push(<Page pageNumber={i+1} image={files[i]} onPositionChange={(x:number, y:number, page:number) => {livePos.updatePos(x, y, page)}} onClick={(page:number) => {window.alert(page)}} />);
    }

    setPages(pageArr);
  }

  return (
    <div className="App">
      <div className="settingsDiv">
        <Settings />
      </div>
      <div className="tagSettingsDiv">
        <TagSettings />
      </div>
      <div className="dragDropDiv">
        <DragDrop fileCallback={loadPages} />
      </div>
      {pages}
    </div>
  );
}

export default App;
