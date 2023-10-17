import { useEffect, useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleRadians } from "../../utils/angle";
import axios from 'axios';
import { extend } from "@react-three/fiber";
import { FontLoader, TextGeometry } from "three";
import Roboto from "./Roboto_Regular.json";
import { toast } from 'material-react-toastify';


import { useTexture } from "@react-three/drei";
import Texture1 from "../../../../texture1.png";
import Texture2 from "../../../../texture2.png";
import Texture3 from "../../../../texture3.png";
import Texture4 from "../../../../texture4.png";
import BlackTexture from "../../../../Black.png";
import PlaneArrow from "../../../../plane.png";
let emptyCase;

extend({ TextGeometry })

const map = (Val, in_max, in_min, out_max, out_min) => {
    var calculatedVal = (((Val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
    return calculatedVal;
}
const EmptyCaseModal = (props) => {
    const font = new FontLoader().parse(Roboto);

    let sim_case_label_data_glob = {
        "Top": undefined,
        "Front": undefined,
        "Back": undefined,
        "Left": undefined,
        "Right": undefined,
        "Top-Left": undefined,
        "Top-Right": undefined,
        "Top-Front": undefined,
        "Top-Back": undefined,
        "Front-Left": undefined,
        "Front-Right": undefined,
        "Right-Back": undefined,
        "Left-Back": undefined,
    }


    let current_texture;

    const [sim_case_label_data, setSim_case_label_data] = useState({})
    const [line_rotation, setLine_rotation] = useState()
    const [line_position, setLine_position] = useState()

    emptyCase = useRef(null);



    const texture1 = useTexture(Texture1);
    const texture2 = useTexture(Texture2);
    const texture3 = useTexture(Texture3);
    const texture4 = useTexture(Texture4);
    const blackTexture = useTexture(BlackTexture);
    const planeArrow = useTexture(PlaneArrow);

    const Set_labels = async () => {
        let records = [];
        try {
            let resonse = await axios.get(`/Threed`);
            records = resonse.data;

            let current_Case = records.filter((cases, i) => {
                return (cases.name == props.case_Type.split("_")[0] && cases.labelname != null);
            })
            current_texture = current_Case[0].Material;
            setLine_rotation(current_Case[0].line_rotation)
            setLine_position(current_Case[0].line_position)
            // console.log("checking line for cases in sim:::: ", current_Case[0].line_rotation);
            // console.log("checking line for cases in sim:::: ", current_Case[0].line_position);

            current_Case.map((cases, i) => {
                let temp_sim_case_label_data = { ...sim_case_label_data_glob, [cases.typename]: cases }
                sim_case_label_data_glob = temp_sim_case_label_data;
            })
            setSim_case_label_data(sim_case_label_data_glob)
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {

        Set_labels();
    }, [props.simCasesPositionsForSchemaA, props.simCasesPositionsForSchemaB, props.simCasesPositionsForSchemaC])
    return (
        <>

            <PerspectiveCamera position={[-((props.Case_Height + props.Case_Length + props.Case_Width)), ((props.Case_Height + props.Case_Length + props.Case_Width)), ((props.Case_Height + props.Case_Length + props.Case_Width))]}
                // zoom={0.6 / ((props.Case_Height + props.Case_Length + props.Case_Width) / 3)}
                makeDefault />
            <OrbitControls enableZoom={true} maxPolarAngle={angleRadians(85)} minPolarAngle={angleRadians(20)} />
            <mesh rotation={[angleRadians(180), -angleRadians(90), -angleRadians(90)]}
                position={[-(props.Case_Width / 2), -(props.Case_Height / 2.5), -((props.Case_Length / 3))]} castShadow receiveShadow>

                <textGeometry attach="geometry" args={['<- Height ->', { font, size: (props.Case_Height / 8.5), height: 0.004 }]} />
                <meshPhysicalMaterial attach='material' color={'black'} />
            </mesh>

            <mesh rotation={[angleRadians(180), -angleRadians(90), -angleRadians(180)]}
                position={[-(props.Case_Width / 2), -(props.Case_Height / 2.5), -((props.Case_Length / 3))]} castShadow receiveShadow>

                <textGeometry attach="geometry" args={['<- Length ->', { font, size: (props.Case_Length / 8.5), height: 0.004 }]} />
                <meshPhysicalMaterial attach='material' color={'black'} />
            </mesh>

            <mesh rotation={[angleRadians(180), -angleRadians(180), -angleRadians(180)]}
                position={[-(props.Case_Width / 2), -(props.Case_Height / 2.5), (props.Case_Length / 2)]} castShadow receiveShadow>

                <textGeometry attach="geometry" args={['<- Width ->', { font, size: (props.Case_Width / 7), height: 0.004 }]} />
                <meshPhysicalMaterial attach='material' color={'black'} />
            </mesh>

            <mesh ref={emptyCase} rotation={[0, -angleRadians(180), 0]}
                position={[0, 0, 0]} castShadow receiveShadow>

                {/* <mesh
                    // rotation={[0, -angleRadians(180), 0]}
                    position={[0, (props.Case_Height / 1.9), 0]} castShadow receiveShadow>
                    <coneGeometry attach="geometry" args={[0.01, 0.08, 100]} />
                    <meshStandardMaterial color={"#c7a887"} />

                </mesh> */}


                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}


                {/* line top-bottom */}
                {(line_position == "Topside" || line_position == "Bottomside")
                    &&
                    <>
                        {line_rotation == "Vertical" ?
                            <>
                                <mesh position={[0, (props.Case_Height / 2), 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[map(40, 0, 1400, 0, props.Case_Width), 0.005, props.Case_Length]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>
                                <mesh position={[0, -(props.Case_Height / 2), 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[map(40, 0, 1400, 0, props.Case_Width), 0.005, props.Case_Length]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>
                            </>
                            :
                            <>
                                <mesh position={[0, (props.Case_Height / 2), 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[props.Case_Width, 0.005, map(40, 0, 1400, 0, props.Case_Length)]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>

                                <mesh position={[0, -(props.Case_Height / 2), 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[props.Case_Width, 0.005, map(40, 0, 1400, 0, props.Case_Length)]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>
                            </>
                        }
                    </>
                }

                {/* line front-back */}
                {(line_position == "Frontside" || line_position == "Backside")
                    &&
                    <>
                        {line_rotation == "Vertical" ?
                            <>
                                <mesh position={[0, 0, (props.Case_Length / 2)]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[map(40, 0, 1400, 0, props.Case_Width), props.Case_Height, 0.005]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>
                                <mesh position={[0, 0, -(props.Case_Length / 2)]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[map(40, 0, 1400, 0, props.Case_Width), props.Case_Height, 0.005]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>
                            </>
                            :
                            <>
                                <mesh position={[0, 0, (props.Case_Length / 2)]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[props.Case_Width, map(40, 0, 1400, 0, props.Case_Length), 0.005]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>

                                <mesh position={[0, 0, -(props.Case_Length / 2)]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[props.Case_Width, map(40, 0, 1400, 0, props.Case_Length), 0.005]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>
                            </>
                        }
                    </>
                }

                {/* line right-left */}
                {(line_position == "Leftside" || line_position == "Rightside")
                    &&
                    <>
                        {line_rotation == "Vertical" ?
                            <>
                                <mesh position={[(props.Case_Width / 2), 0, 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[0.005, props.Case_Height, map(40, 0, 1400, 0, props.Case_Length)]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>
                                <mesh position={[-(props.Case_Width / 2), 0, 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[0.005, props.Case_Height, map(40, 0, 1400, 0, props.Case_Length)]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>
                            </>
                            :
                            <>
                                <mesh position={[(props.Case_Width / 2), 0, 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[0.005, map(40, 0, 1400, 0, props.Case_Height), props.Case_Length]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>

                                <mesh position={[-(props.Case_Width / 2), 0, 0,]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[0.005, map(40, 0, 1400, 0, props.Case_Height), props.Case_Length]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>
                            </>
                        }
                    </>
                }

                <mesh rotation={[-angleRadians(90), 0, -angleRadians(180)]}
                    position={[0, -(props.Case_Height / 2), 0]}
                    receiveShadow>
                    <planeGeometry attach="geometry" args={[(props.Case_Width * 2.5), (props.Case_Length * 2.5)]} />
                    <meshStandardMaterial map={planeArrow} attach="material" />
                </mesh>
            </mesh>

            <ambientLight args={["#ffffff", 0.3]} />
            <directionalLight args={["#ffffff", 1]} position={[-3, 3, 2]} castShadow />


        </>
    );
};

export default EmptyCaseModal;