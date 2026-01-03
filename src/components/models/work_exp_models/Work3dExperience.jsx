import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { VrHeadset } from "./Oculus_quest_2";
import { Shelby } from "./Shelby_427_cobra";
import { Mustang } from "./Ford_mustang_gtd";
import { FordGt } from "./Ford_gt";

const Work3dExperience = ({ model, scale, rotation }) => {
  const MODEL_MAP = {
    vr: VrHeadset,
    shelby: Shelby,
    mustang_gtd: Mustang,
    ford_gt: FordGt,
  };

  const ModelComponent = MODEL_MAP[model];

  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      <ambientLight intensity={0.5} color="#fff4e6" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={0.5}
        color="#ffd9b3"
      />
      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {ModelComponent && (
        <group
          scale={scale}
          position={[0, 0, 0]}
          rotation={rotation}
          castShadow
        >
          <ModelComponent />
        </group>
      )}
    </Canvas>
  );
};

export default Work3dExperience;
