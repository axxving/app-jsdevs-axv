import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { colors } from '../../components/utils/colors';

export const Hero = () => {
    const heroStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors[0],
        color: colors[4],
    };

    return (
        <section className="py-5 position-relative" style={heroStyle}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Encabezado y CTA alineados a la izquierda */}
                    <div className="col-md-6">
                        <div className="mb-4">
                            <h1
                                className="display-2 fw-bold"
                                style={{ color: colors[4], textTransform: 'uppercase' }}
                            >
                                Transformamos tus ideas
                            </h1>
                            <h2
                                className="display-5 fw-light"
                                style={{ color: colors[3] }}
                            >
                                en aplicaciones innovadoras
                            </h2>
                            <p
                                className="lead mt-3"
                                style={{ color: colors[2] }}
                            >
                                Somos especialistas en desarrollo de
                                aplicaciones web y móviles adaptadas a tus
                                necesidades. Haz que tus ideas cobren vida con
                                tecnología moderna.
                            </p>
                        </div>
                        <div>
                            <button
                                className="btn btn-light btn-lg px-4 py-3 shadow-sm"
                            >
                                Contáctanos
                            </button>
                            <button
                                className="btn btn-outline-light btn-lg px-4 py-3 mx-2 shadow-sm"
                            >
                                Cotiza tu proyecto
                            </button>
                        </div>
                    </div>

                    {/* Modelo interactivo 3D a la derecha */}
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div
                            style={{
                                height: '600px',
                                width: '100%',
                                maxWidth: '500px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Canvas>
                                {/* Configuración de luces */}
                                <ambientLight intensity={0.5} />
                                <directionalLight
                                    position={[10, 10, 10]}
                                    intensity={1.5}
                                />
                                <spotLight
                                    position={[15, 20, 5]}
                                    angle={0.3}
                                    intensity={2}
                                />
                                <Environment preset="studio" />

                                {/* OrbitControls: Desactivar zoom y ajustar vista */}
                                <OrbitControls
                                    autoRotate
                                    enablePan={false}
                                    enableZoom={false} // Desactiva el zoom
                                    maxPolarAngle={Math.PI / 2.2} // Limita la rotación vertical
                                    minPolarAngle={Math.PI / 3} // Evita que el usuario rote demasiado
                                />
                                <PCModel />
                            </Canvas>
                        </div>
                    </div>
                </div>
            </div>

            {/* Elementos decorativos */}
            <div
                className="position-absolute"
                style={{
                    top: 0,
                    left: 0,
                    width: '150px',
                    height: '150px',
                    backgroundColor: colors[3],
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                }}
            ></div>
            <div
                className="position-absolute"
                style={{
                    bottom: 0,
                    right: 0,
                    width: '200px',
                    height: '200px',
                    backgroundColor: colors[2],
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                }}
            ></div>
        </section>
    );
};

// Carga del modelo GLTF
const PCModel = () => {
    const { scene } = useGLTF('/models/scene.gltf');

    // Inclinar el modelo ligeramente hacia abajo y centrarlo
    return (
        <group position={[0, -0.5, 0]}>
            <primitive object={scene} scale={0.02} rotation={[0.2, 0, 0]} />
        </group>
    );
};
