import { useEffect, useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleRadians } from "../utils/angle";
import BlocksLevels from "./BlocksLevels";
import axios from 'axios';
import { toast } from 'material-react-toastify';


import { useTexture } from "@react-three/drei";
import Texture1 from "../../../texture1.png";
import Texture2 from "../../../texture2.png";
import Texture3 from "../../../texture3.png";
import Texture4 from "../../../texture4.png";
import BlackTexture from "../../../Black.png";

let singleCase;

let emptyCase;
let top;
let front;
let right;
let left;
let back;
let topFront;
let topBack;
let topRight;
let topLeft;
let frontLeft;
let frontRight;
let rightBack;
let leftBack;

const map = (Val, in_max, in_min, out_max, out_min) => {
    var calculatedVal = (((Val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
    return calculatedVal;
}
const SingleCaseModal = (props) => {
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
    singleCase = useRef(null);

    emptyCase = useRef(null);
    top = useRef(null);
    front = useRef(null);
    right = useRef(null);
    left = useRef(null);
    back = useRef(null);
    topFront = useRef(null);
    topBack = useRef(null);
    topRight = useRef(null);
    topLeft = useRef(null);
    frontLeft = useRef(null);
    frontRight = useRef(null);
    rightBack = useRef(null);
    leftBack = useRef(null);



    const texture1 = useTexture(Texture1);
    const texture2 = useTexture(Texture2);
    const texture3 = useTexture(Texture3);
    const texture4 = useTexture(Texture4);
    const blackTexture = useTexture(BlackTexture);

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
            <mesh ref={emptyCase}
                position={[0, 0, 0]} castShadow receiveShadow>
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
            </mesh>

            <mesh ref={top}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}


                {/* label for top */}
                {sim_case_label_data["Top"] !== undefined
                    &&
                    <mesh position={[
                        (((props.Case_Width / 2) - (map(sim_case_label_data["Top"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Top"].labelx, 0, 1400, 0, 2.965)),
                        (props.Case_Height / 2),
                        (((props.Case_Length / 2) - (map(sim_case_label_data["Top"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Top"].labely, 0, 1400, 0, 2.965))
                    ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={[
                            (map(sim_case_label_data["Top"].labelwidth, 0, 1400, 0, 2.965)),
                            0.005,
                            (map(sim_case_label_data["Top"].labelheight, 0, 1400, 0, 2.965))
                        ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                    </mesh>
                }

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
            </mesh>

            <mesh ref={front}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}

                {/* label for front */}
                {sim_case_label_data["Front"] !== undefined
                    &&
                    <mesh position={[
                        (((props.Case_Width / 2) - (map(sim_case_label_data["Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Front"].labelx, 0, 1400, 0, 2.965)),
                        -(((props.Case_Height / 2) - (map(sim_case_label_data["Front"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Front"].labely, 0, 1400, 0, 2.965)),
                        -(props.Case_Length / 2)]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={[
                            (map(sim_case_label_data["Front"].labelwidth, 0, 1400, 0, 2.965)),
                            (map(sim_case_label_data["Front"].labelheight, 0, 1400, 0, 2.965)),
                            0.005
                        ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                    </mesh>
                }

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
            </mesh>

            <mesh ref={right}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}

                {/* label for right */}
                {sim_case_label_data["Right"] !== undefined
                    &&
                    <mesh position={[
                        (props.Case_Width / 2),
                        -(((props.Case_Height / 2) - (map(sim_case_label_data["Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Right"].labely, 0, 1400, 0, 2.965)),
                        (((props.Case_Length / 2) - (map(sim_case_label_data["Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Right"].labelx, 0, 1400, 0, 2.965)),
                    ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={[
                            0.005,
                            (map(sim_case_label_data["Right"].labelheight, 0, 1400, 0, 2.965)),
                            (map(sim_case_label_data["Right"].labelwidth, 0, 1400, 0, 2.965))
                        ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                    </mesh>
                }

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
            </mesh>

            <mesh ref={left}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}



                {/* label for left */}
                {sim_case_label_data["Left"] !== undefined
                    &&
                    <mesh position={[
                        -(props.Case_Width / 2),
                        -(((props.Case_Height / 2) - (map(sim_case_label_data["Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Left"].labely, 0, 1400, 0, 2.965)),
                        -(((props.Case_Length / 2) - (map(sim_case_label_data["Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Left"].labelx, 0, 1400, 0, 2.965)),
                    ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={[
                            0.005,
                            (map(sim_case_label_data["Left"].labelheight, 0, 1400, 0, 2.965)),
                            (map(sim_case_label_data["Left"].labelwidth, 0, 1400, 0, 2.965))
                        ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                    </mesh>
                }

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
            </mesh>

            <mesh ref={back}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}

                {/* label for back */}
                {sim_case_label_data["Back"] !== undefined
                    &&
                    <mesh position={[
                        -(((props.Case_Width / 2) - (map(sim_case_label_data["Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Back"].labelx, 0, 1400, 0, 2.965)),
                        -(((props.Case_Height / 2) - (map(sim_case_label_data["Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Back"].labely, 0, 1400, 0, 2.965)),
                        (props.Case_Length / 2)]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={[
                            (map(sim_case_label_data["Back"].labelwidth, 0, 1400, 0, 2.965)),
                            (map(sim_case_label_data["Back"].labelheight, 0, 1400, 0, 2.965)),
                            0.005
                        ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                    </mesh>
                }

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
            </mesh>

            <mesh ref={topFront}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}



                {/* label for top-front */}
                {sim_case_label_data["Top-Front"] !== undefined
                    &&

                    <>
                        <mesh position={[
                            (((props.Case_Width / 2) - (map(sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Top-Front"].labelx, 0, 1400, 0, 2.965)),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))) / 2)) - map(sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Length / 2)]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                (map(sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965)),
                                (props.Case_Height - (map(sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))),
                                0.005
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={[
                            (((props.Case_Width / 2) - (map(sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Top-Front"].labelx, 0, 1400, 0, 2.965)),
                            (props.Case_Height / 2),
                            -(((props.Case_Length / 2) - ((map(sim_case_label_data["Top-Front"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)))) / 2)))
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                (map(sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965)),
                                0.005,
                                (map(sim_case_label_data["Top-Front"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))))
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                    </>
                }

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
            </mesh>

            <mesh ref={topBack}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}

                {/* label for top-back */}
                {sim_case_label_data["Top-Back"] !== undefined
                    &&

                    <>
                        <mesh position={[
                            -(((props.Case_Width / 2) - (map(sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Top-Back"].labelx, 0, 1400, 0, 2.965)),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))) / 2)) - map(sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Length / 2)]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                (map(sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965)),
                                (props.Case_Height - (map(sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))),
                                0.005
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={[
                            -(((props.Case_Width / 2) - (map(sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Top-Back"].labelx, 0, 1400, 0, 2.965)),
                            (props.Case_Height / 2),
                            (((props.Case_Length / 2) - ((map(sim_case_label_data["Top-Back"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)))) / 2)))
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                (map(sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965)),
                                0.005,
                                (map(sim_case_label_data["Top-Back"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))))
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                    </>
                }

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
            </mesh>

            <mesh ref={topRight}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}

                {/* label for top-right */}
                {sim_case_label_data["Top-Right"] !== undefined
                    &&
                    <>
                        <mesh position={[
                            (props.Case_Width / 2),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965))) / 2)) - map(sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)),
                            (((props.Case_Length / 2) - (map(sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Top-Right"].labelx, 0, 1400, 0, 2.965)),
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                0.005,
                                (props.Case_Height - (map(sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965))),
                                (map(sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965))
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={[
                            (((props.Case_Width / 2) - ((map(sim_case_label_data["Top-Right"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)))) / 2))),
                            (props.Case_Height / 2),
                            (((props.Case_Length / 2) - (map(sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Top-Right"].labelx, 0, 1400, 0, 2.965))
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                (map(sim_case_label_data["Top-Right"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)))), // new label height
                                0.005,
                                (map(sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965)), // this is new label height 
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                    </>
                }

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
            </mesh>

            <mesh ref={topLeft}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}

                {/* label for top-left */}
                {sim_case_label_data["Top-Left"] !== undefined
                    &&
                    <>
                        <mesh position={[
                            -(props.Case_Width / 2),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965))) / 2)) - map(sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Length / 2) - (map(sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Top-Left"].labelx, 0, 1400, 0, 2.965)),
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                0.005,
                                (props.Case_Height - (map(sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965))),
                                (map(sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965))
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={[
                            -(((props.Case_Width / 2) - ((map(sim_case_label_data["Top-Left"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)))) / 2))),
                            (props.Case_Height / 2),
                            -(((props.Case_Length / 2) - (map(sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Top-Left"].labelx, 0, 1400, 0, 2.965))
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                (map(sim_case_label_data["Top-Left"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)))), //new width
                                0.005,
                                (map(sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965)),  // new height
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                    </>
                }

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
            </mesh>

            <mesh ref={frontLeft}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}

                {/* label for front-left */}
                {sim_case_label_data["Front-Left"] !== undefined
                    &&
                    <>
                        <mesh position={[
                            -(((props.Case_Width / 2) - (props.Case_Width - (map(sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))) / 2)),
                            (((props.Case_Height / 2) - (map(sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Front-Left"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Length / 2)]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                (props.Case_Width - (map(sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))),
                                (map(sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965)),
                                0.005
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={[
                            -(props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Front-Left"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Length / 2) - ((map(sim_case_label_data["Front-Left"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - (map(sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965)))) / 2))),
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                0.005,
                                (map(sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965)),
                                (map(sim_case_label_data["Front-Left"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - (map(sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))))
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                    </>
                }

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
                                <mesh position={ [-(props.Case_Width / 2), 0, 0] } receiveShadow>
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
            </mesh>

            <mesh ref={frontRight}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}

                {/* label for front-right */}
                {sim_case_label_data["Front-Right"] !== undefined
                    &&
                    <>
                        <mesh position={[
                            (props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Front-Right"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Length / 2) - (props.Case_Length - (map(sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965))) / 2)),
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                0.005,
                                (map(sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965)),
                                (props.Case_Length - (map(sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={[
                            (((props.Case_Width / 2) - ((map(sim_case_label_data["Front-Right"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))) / 2))),
                            (((props.Case_Height / 2) - (map(sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Front-Right"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Length / 2)]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                (map(sim_case_label_data["Front-Right"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))),
                                (map(sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965)),
                                0.005
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                    </>
                }

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
            </mesh>

            <mesh ref={rightBack}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}

                {/* label for right-back */}
                {sim_case_label_data["Right-Back"] !== undefined
                    &&
                    <>
                        <mesh position={[
                            ((props.Case_Width / 2) - ((props.Case_Width - map(sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)) / 2)),
                            (((props.Case_Height / 2) - (map(sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Right-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Length / 2)
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                (props.Case_Width - map(sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)),
                                (map(sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965)),
                                0.005
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={[
                            (props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Right-Back"].labely, 0, 1400, 0, 2.965)),
                            (((props.Case_Length / 2) - ((map(sim_case_label_data["Right-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - map(sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965))) / 2))),
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                0.005,
                                (map(sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965)),
                                (map(sim_case_label_data["Right-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - map(sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)))
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                    </>
                }

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
                                    <boxGeometry attach="geometry" args={ [props.Case_Width, 0.005, map(40, 0, 1400, 0, props.Case_Length)]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>

                                <mesh position={[0, -(props.Case_Height / 2), 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={ [props.Case_Width, 0.005, map(40, 0, 1400, 0, props.Case_Length)]} />
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
            </mesh>

            <mesh ref={leftBack}
                position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry attach="geometry" args={[props.Case_Width, props.Case_Height, props.Case_Length]} />
                <meshStandardMaterial map={current_texture == "Testure1" ? texture1 : current_texture == "Testure2" ? texture2 : current_texture == "Testure3" ? texture3 : texture4} attach="material" color={"#c7a887"} />
                {/* <meshStandardMaterial color={"#c7a887"} /> */}

                {/* label for left-back */}
                {sim_case_label_data["Left-Back"] !== undefined
                    &&
                    <>
                        <mesh position={[
                            -(props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Left-Back"].labely, 0, 1400, 0, 2.965)),
                            ((props.Case_Length / 2) - ((props.Case_Length - (map(sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965))) / 2)),
                        ]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                0.005,
                                (map(sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965)),
                                (props.Case_Length - (map(sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                        <mesh position={[
                            -((props.Case_Width / 2) - ((map(sim_case_label_data["Left-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))) / 2)),
                            (((props.Case_Height / 2) - (map(sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(sim_case_label_data["Left-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Length / 2)]}
                            receiveShadow>
                            <boxGeometry attach="geometry" args={[
                                (map(sim_case_label_data["Left-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))),
                                (map(sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965)),
                                0.005
                            ]} />
                            <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                    </>
                }

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
                                    <boxGeometry attach="geometry" args={ [props.Case_Width, 0.005, map(40, 0, 1400, 0, props.Case_Length)]} />
                                    <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                                    {/* <meshStandardMaterial attach="material" color={"#000000"} /> */}
                                </mesh>

                                <mesh position={[0, -(props.Case_Height / 2), 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={ [props.Case_Width, 0.005, map(40, 0, 1400, 0, props.Case_Length)]} />
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
                                <mesh position={ [-(props.Case_Width / 2), 0, 0]} receiveShadow>
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
            </mesh>
        </>
    );
};

export default SingleCaseModal;

export const GetEmptyCase = () => { return emptyCase.current; };
export const GetCaseTop = () => { return top.current; };
export const GetCaseFront = () => { return front.current; };
export const GetCaseRight = () => { return right.current; };
export const GetCaseLeft = () => { return left.current; };
export const GetCaseBack = () => { return back.current; };

export const GetCaseTopFront = () => { return topFront.current; };
export const GetCaseTopBack = () => { return topBack.current; };
export const GetCaseTopRight = () => { return topRight.current; };
export const GetCaseTopLeft = () => { return topLeft.current; };

export const GetCaseFrontLeft = () => { return frontLeft.current; };
export const GetCaseFrontRight = () => { return frontRight.current; };
export const GetCaseRightBack = () => { return rightBack.current; };
export const GetCaseLeftBack = () => { return leftBack.current; };