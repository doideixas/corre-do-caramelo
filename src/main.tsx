import React from 'react';
import { createRoot } from 'react-dom/client';
import MotoboyGame from './components/MotoboyGame';
import './style.css';
class GameBoundary extends React.Component<React.PropsWithChildren, {error: boolean}> {
 state={error:false};
 static getDerivedStateFromError(){return {error:true};}
 render(){return this.state.error?<main className="fatal"><h1>O bairro não carregou.</h1><p>Atualize a página em um navegador com suporte a gráficos 3D.</p><button onClick={()=>location.reload()}>Tentar novamente</button></main>:this.props.children;}
}
createRoot(document.getElementById('root')!).render(<GameBoundary><MotoboyGame/></GameBoundary>);
