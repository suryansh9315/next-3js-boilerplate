import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import Box from "../components/Box";
import Floor from "../components/Floor";
import LightBulb from "../components/LightBulb";
import styles from "../styles/Home.module.css";
import OrbitControls from "../components/OrbitControls";
import Draggable from "../components/Draggable";
import { Suspense } from "react";
import Box2 from "../components/Box2";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs-Three.js Boilerplate</title>
        <meta name="description" content="Nextjs-Three.js Boilerplate" />
      </Head>
      <p className={styles.heading}>Nextjs-Three.js Boilerplate</p>
      <Canvas shadows={true} className={styles.canvas} camera={{position: [-6, 7, 7],}} style={{height:500,width:500}}>
        <ambientLight color='white' intensity={0.3}/>
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
          <Suspense>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Draggable>
        <Suspense>
          <Box2 position={[2, 0, 2]} />
        </Suspense>
        <OrbitControls />
        <Floor position={[0, -5, 0]} />
      </Canvas>
    </div>
  );
}
