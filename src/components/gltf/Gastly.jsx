/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/gastly.glb -o src/components/gltf/Gastly.jsx 
*/

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { extend, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";

export const Gastly = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/gastly.glb");
  const { actions } = useAnimations(animations, group);
  const texture = useTexture("/textures/gastly.png");
  texture.flipY = false;
  
  useEffect(() => {
    actions["winkR"].reset().fadeIn(0.5).play();
    actions["winkL"].reset().fadeIn(0.5).play();
  }, [actions]);
  
  const spotlightRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openLight, setopenLight] = useState(true);

  // 开关探照灯
  // const openLight = true;
  useControls({
    openLight: {
      value: openLight,
      onChange: (v) => {
        setopenLight(v);
      },
    },
  });
  useFrame(({ mouse, clock }) => {
    const time = clock.elapsedTime;
    // 手电筒
    if (openLight) {
      setMousePosition({ x: mouse.x, y: mouse.y });
      spotlightRef.current.position.x = -mouse.x * 22;
      spotlightRef.current.position.y = -mouse.y * 8;
    }

    /*********  LOOK AT *********/
    group.current.rotation.y = mouse.x;
    group.current.rotation.x = -mouse.y;
  });
  return (
    <>
      {openLight ? (
        <spotLight
          ref={spotlightRef}
          position={[0, 0, 10]}
          angle={Math.PI / 70}
          penumbra={0.5}
          intensity={1}
          distance={40}
        />
      ) : null}

      <spotLight
        position={[-1, 4, 1]}
        angle={0.3}
        penumbra={0.5}
        intensity={8}
        distance={10}
        // color={0x8d00c7}
      />

      <group ref={group} {...props} dispose={null}>
        {/* 头 */}
        <mesh
          geometry={nodes.Head.geometry}
          // material={nodes.Head.material}
        >
          <meshStandardMaterial map={texture} roughness={0.5} />
        </mesh>
        {/* 眉毛 */}
        <mesh geometry={nodes.lbrow.geometry} material={nodes.lbrow.material}>
          <meshStandardMaterial color="#000" roughness={0.5} />
        </mesh>
        <mesh geometry={nodes.rbrow.geometry} material={nodes.rbrow.material}>
          <meshStandardMaterial color="#000" roughness={0.5} />
        </mesh>
        {/* 眼球 */}
        <mesh
          name="Pupil"
          geometry={nodes.Pupil.geometry}
          material={nodes.Pupil.material}
          position={[-0.159, -0.113, 0.287]}
        >
          <meshStandardMaterial color="#000" roughness={0} />
        </mesh>
        <mesh
          name="Pupil001"
          geometry={nodes.Pupil001.geometry}
          material={nodes.Pupil001.material}
          position={[0.12, -0.118, 0.322]}
        >
          <meshStandardMaterial color="#000" roughness={0} />
        </mesh>
        <mesh geometry={nodes.white.geometry} material={nodes.white.material} />
        <mesh
          geometry={nodes.white001.geometry}
          material={nodes.white001.material}
        />
        <mesh geometry={nodes.Cone.geometry} material={nodes.Cone.material} />
        <mesh
          geometry={nodes.Cone_2.geometry}
          material={nodes.Cone_2.material}
        />
      </group>
    </>
  );
};

useGLTF.preload("/models/gastly.glb");
