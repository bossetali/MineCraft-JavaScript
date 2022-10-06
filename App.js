import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Ground } from './Components/Ground'
import { Player } from './Components/Player'




function App() {
    return (
        <>
            <Canvas>
                <Sky sunPosition={[100, 100, 20]} />
                <ambientLight intensity={0.5} />
                <Physics>
                    <Ground />
                    <Player />
                </Physics>
            </Canvas>

        </>
    );
}

export default App;
