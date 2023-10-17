import { useEffect, useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleRadians } from "../utils/angle";
import BlocksLevels from "./BlocksLevels";
import axios from 'axios';
import { useTexture } from "@react-three/drei";
import { toast } from 'material-react-toastify';

import PalletTexture_red from "../../../Solid_red.png";
// import blackTexture from "../../../Black.png";
let meshRef;
const BuildingModal3d = (props) => {

  const palletTexture_red = useTexture(PalletTexture_red);

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
  meshRef = useRef(null);



  const [newSimCasesPositionsForSchemaA, setNewSimCasesPositionsForSchemaA] = useState([])
  const [newSimCasesPositionsForSchemaB, setNewSimCasesPositionsForSchemaB] = useState([])
  const [newSimCasesPositionsForSchemaC, setNewSimCasesPositionsForSchemaC] = useState([])
  const [readyToRender, setReadyToRender] = useState(false)
  const [prc_values_check, setPrc_values_check] = useState(false)
  const [WA_Positions, setWA_Positions] = useState([0, 0, 0])
  const [sim_case_label_data, setSim_case_label_data] = useState({})
  const [line_rotation, setLine_rotation] = useState()
  const [line_position, setLine_position] = useState()

  const WA_width_X_Dir = props.selectedOne ? props.WA_1_width_X_Dir : props.WA_2_width_X_Dir;
  const WA_Length_Y_Dir = props.selectedOne ? props.WA_1_Length_Y_Dir : props.WA_2_Length_Y_Dir;
  const Offset_X_Dir = props.selectedOne ? props.WA_1_Offset_X_Dir : props.WA_2_Offset_X_Dir;
  const Offset_Y_Dir = props.selectedOne ? props.WA_1_Offset_Y_Dir : props.WA_2_Offset_Y_Dir;
  const origin = props.selectedOne ? props.originPal1 : props.originPal2;
  let current_texture;


  // console.log("BuildingModal3d props.WA_1_width_X_Dir...: ", props.WA_1_width_X_Dir, "   ...WA_2_width_X_Dir....: ", props.WA_2_width_X_Dir)
  // console.log("BuildingModal3d props.WA_1_Length_Y_Dir...: ", props.WA_1_Length_Y_Dir, "   ...WA_2_Length_Y_Dir....: ", props.WA_2_Length_Y_Dir)

  const sortByPos = () => {
    props.simCasesPositionsForSchemaA.map((caseValues, i) => {
      let nrIndexToUpdate = parseInt(caseValues.position.split(" ")[1]);
      let temp_newSimCasesPositionsForSchemaA = newSimCasesPositionsForSchemaA;
      if (props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1] !== null && props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1] !== undefined) {

        temp_newSimCasesPositionsForSchemaA[i] = { ...caseValues, rotation: props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1].rotation, x: props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1].x, y: props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1].y, orientation: props.simCasesPositionsForSchemaA[nrIndexToUpdate - 1].orientation }
        setNewSimCasesPositionsForSchemaA(temp_newSimCasesPositionsForSchemaA)
      }
    })

    props.simCasesPositionsForSchemaB.map((caseValues, i) => {
      let nrIndexToUpdate = parseInt(caseValues.position.split(" ")[1]);
      let temp_newSimCasesPositionsForSchemaB = newSimCasesPositionsForSchemaB;
      if (props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1] !== null && props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1] !== undefined) {

        temp_newSimCasesPositionsForSchemaB[i] = { ...caseValues, rotation: props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1].rotation, x: props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1].x, y: props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1].y, orientation: props.simCasesPositionsForSchemaB[nrIndexToUpdate - 1].orientation }
        setNewSimCasesPositionsForSchemaB(temp_newSimCasesPositionsForSchemaB)
      }
    })

    props.simCasesPositionsForSchemaC.map((caseValues, i) => {
      let nrIndexToUpdate = parseInt(caseValues.position.split(" ")[1]);
      let temp_newSimCasesPositionsForSchemaC = newSimCasesPositionsForSchemaC;
      if (props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1] !== null && props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1] !== undefined) {

        temp_newSimCasesPositionsForSchemaC[i] = { ...caseValues, rotation: props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1].rotation, x: props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1].x, y: props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1].y, orientation: props.simCasesPositionsForSchemaC[nrIndexToUpdate - 1].orientation }
        setNewSimCasesPositionsForSchemaC(temp_newSimCasesPositionsForSchemaC)
      }
    })
  }

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

  const empty_values_check_schemas = () => {
    // console.log("running simulation renedr test..props.simCasesPositionsForSchemaA..", props.simCasesPositionsForSchemaA)
    // console.log("running simulation renedr test..props.simCasesPositionsForSchemaB..", props.simCasesPositionsForSchemaB)
    // console.log("running simulation renedr test..props.simCasesPositionsForSchemaC..", props.simCasesPositionsForSchemaC)
    setPrc_values_check(false)
    let check = false;
    let layer_schemas = [];

    props.layer_data.map((layer) => {
      if (layer.layername !== "" || layer.layername !== null || layer.layername != undefined || layer.layername != " ") {
        if (!layer_schemas.includes(layer.layername)) {
          layer_schemas.push(layer.layername)
        }
      }
    })

    if (!check && layer_schemas.includes("Schema A")) {
      props.simCasesPositionsForSchemaA.map((schema, index) => {
        if (schema.position == "" || schema.position == null || schema.position == undefined || schema.position == " ") {
          check = true;
        }
      })
    }
    if (!check && layer_schemas.includes("Schema B")) {
      props.simCasesPositionsForSchemaB.map((schema, index) => {
        if (schema.position == "" || schema.position == null || schema.position == undefined || schema.position == " ") {
          check = true;
        }
      })
    }
    if (!check && layer_schemas.includes("Schema C")) {
      props.simCasesPositionsForSchemaC.map((schema, index) => {
        if (schema.position == "" || schema.position == null || schema.position == undefined || schema.position == " ") {
          check = true;
        }
      })
    }

    if (check) {
      // toast.error(`Please set all values and positions of cases in Program Routine Creator`, { autoClose: 5000, position: toast.POSITION.TOP_CENTER });
      setPrc_values_check(false);
      props.setDownloadablePDF(false);
    } else {
      setPrc_values_check(true);
      props.setDownloadablePDF(true);
    }

  }

  useEffect(() => {
    if (origin == "Upper Left Corner") {
      setWA_Positions([(((WA_width_X_Dir - props.Pallet_Width) / 2) + Offset_Y_Dir), 0, (((WA_Length_Y_Dir - props.Pallet_Length) / 2) - Offset_X_Dir)])
    } else if (origin == "Upper Right Corner") {
      setWA_Positions([-(((WA_width_X_Dir - props.Pallet_Width) / 2) - Offset_Y_Dir), 0, (((WA_Length_Y_Dir - props.Pallet_Length) / 2) - Offset_X_Dir)])
    } else if (origin == "Lower Left Corner") {
      setWA_Positions([(((WA_width_X_Dir - props.Pallet_Width) / 2) + Offset_Y_Dir), 0, -(((WA_Length_Y_Dir - props.Pallet_Length) / 2) + Offset_X_Dir)])
    } else if (origin == "Lower Right Corner") {
      setWA_Positions([-(((WA_width_X_Dir - props.Pallet_Width) / 2) - Offset_Y_Dir), 0, -(((WA_Length_Y_Dir - props.Pallet_Length) / 2) + Offset_X_Dir)])
    }
  }, [props.selectedOne, props.selectedTwo, WA_width_X_Dir, WA_Length_Y_Dir])

  useEffect(() => {
    // console.log("use effect 2 ran buildingBlocks")
    empty_values_check_schemas();
    sortByPos();
    Set_labels();
    setReadyToRender(true)
  }, [props.simCasesPositionsForSchemaA, props.simCasesPositionsForSchemaB, props.simCasesPositionsForSchemaC])

  // console.log("running simulation renedr test..newSimCasesPositionsForSchemaA...", newSimCasesPositionsForSchemaA)
  // console.log("running simulation renedr test...newSimCasesPositionsForSchemaB..", newSimCasesPositionsForSchemaB)
  // console.log("running simulation renedr test...newSimCasesPositionsForSchemaC..", newSimCasesPositionsForSchemaC)


  return (
    <>
      <PerspectiveCamera position={props.S_state == "panel7" ?
        props.noOfLayers <= 6 && props.Case_Height_Original <= 50 ? [-1, 4, 5] :
          props.noOfLayers <= 5 && props.Case_Height_Original <= 100 ? [-3, 4, 5] :
            props.noOfLayers <= 5 && props.Case_Height_Original <= 200 ? [-5, 4, 5] :
              props.noOfLayers <= 5 && props.Case_Height_Original <= 300 ? [-7, 4, 5] :
                props.noOfLayers <= 5 && props.Case_Height_Original <= 400 ? [-10, 4, 5] :
                  props.noOfLayers <= 5 && props.Case_Height_Original <= 500 ? [-13, 4, 5] :
                    props.noOfLayers <= 5 && props.Case_Height_Original <= 600 ? [-14, 4, 5] :
                      props.noOfLayers <= 5 && props.Case_Height_Original <= 700 ? [-20, 4, 5] :
                        props.noOfLayers <= 5 && props.Case_Height_Original <= 800 ? [-21, 4, 5] :
                          props.noOfLayers <= 5 && props.Case_Height_Original <= 900 ? [-23, 4, 5] :
                            props.noOfLayers <= 3 && props.Case_Height_Original <= 1000 ? [-15, 4, 5] :
                              props.noOfLayers <= 5 && props.Case_Height_Original <= 1000 ? [-25, 4, 5] :
                                [-(((props.Case_Height) * 2.8) * (props.layer_data.length - 1)), (((props.Case_Height) * 1.8) * (props.layer_data.length - 1)), (((props.Case_Height) * 1.8) * (props.layer_data.length - 1))] :

        [-3, 4, 5]} makeDefault />
      <OrbitControls enablePan={false} enableZoom={true} maxPolarAngle={angleRadians(85)} minPolarAngle={angleRadians(20)} />
      <mesh ref={meshRef}>
        {/* pallet */}
        <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
          <boxGeometry attach="geometry" args={[props.Pallet_Width, 0.2, props.Pallet_Length]} />
          <meshStandardMaterial map={palletTexture_red} attach="material" color="#a32f26" />
          {/* <meshStandardMaterial attach="material" color="#a32f26" /> */}
        </mesh>
        {/* pallet */}


        {readyToRender && props.simulationRunning &&
          <BlocksLevels
            positionX={-0.2}
            positionY={0.6}
            positionZ={0}
            Case_Width={props.Case_Width}
            Case_Height={props.Case_Height}
            Case_Length={props.Case_Length}
            windowHeight={0.4}
            speed={props.simulationSpeed}
            Pallet_Width={props.Pallet_Width}
            Pallet_Length={props.Pallet_Length}
            intermediate_Layer_Type_Length={props.intermediate_Layer_Type_Length}
            intermediate_Layer_Type_Width={props.intermediate_Layer_Type_Width}
            pallet_xpos={props.pallet_xpos}
            pallet_ypos={props.pallet_ypos}
            simCasesPositionsForSchemaA={newSimCasesPositionsForSchemaA}
            simCasesPositionsForSchemaB={newSimCasesPositionsForSchemaB}
            simCasesPositionsForSchemaC={newSimCasesPositionsForSchemaC}
            layer_data={props.layer_data}
            S_state={props.S_state}
            intermediate_Layer_Type={props.intermediate_Layer_Type}
            handleAbortSimulation={props.handleAbortSimulation}
            handleSimulationPassed={props.handleSimulationPassed}
            selectedOne={props.selectedOne}
            selectedTwo={props.selectedTwo}
            sim_case_label_data={sim_case_label_data}
            prc_values_check={prc_values_check}
            current_texture={current_texture}
            line_rotation={line_rotation}
            line_position={line_position}
            t={props.t}
            abordSimulation={props.abordSimulation}
            simulationRunning={props.simulationRunning}
            simulationToast = {props.simulationToast}

          secondSetPrePosY={props.secondSetPrePosY}
          secondSetPrePosX={props.secondSetPrePosX}
          secondSetPrePosZ={props.secondSetPrePosZ}
          secondSetPrePosZForMap={props.secondSetPrePosZForMap}

          xPosRD={props.xPosRD}
          yPosRD={props.yPosRD}
          />
        }



      </mesh>
      {/* Working Area */}
      {/* 
      //position={[x,z,y]} 

        //upper right cor
          [-(((props.WA_1_width_X_Dir - props.Pallet_Width) / 2) - Offset_Y_Dir), 0, (((props.WA_1_Length_Y_Dir - props.Pallet_Length) / 2) - Offset_X_Dir)]

        // upper left cor
          [(((props.WA_1_width_X_Dir - props.Pallet_Width) / 2) + Offset_Y_Dir), 0, (((props.WA_1_Length_Y_Dir - props.Pallet_Length) / 2) - Offset_X_Dir)]

        //lower left cor
          [(((props.WA_1_width_X_Dir - props.Pallet_Width) / 2) + Offset_Y_Dir), 0, -(((props.WA_1_Length_Y_Dir - props.Pallet_Length) / 2) + Offset_X_Dir)]

        //lower right cor
          [-(((props.WA_1_width_X_Dir - props.Pallet_Width) / 2) - Offset_Y_Dir), 0, -(((props.WA_1_Length_Y_Dir - props.Pallet_Length) / 2) + Offset_X_Dir)]

      */}
      <mesh rotation={[-angleRadians(90), 0, 0]}
        position={WA_Positions}
        receiveShadow>
        <planeGeometry attach="geometry" args={[WA_width_X_Dir, WA_Length_Y_Dir]} />
        <meshStandardMaterial attach="material" color="#fcdb7c" />
      </mesh>
      {/* Working Area */}

      <ambientLight args={["#ffffff", 0.3]} />
      <directionalLight args={["#ffffff", 1]} position={[-3, 3, 2]} castShadow />
    </>
  );
};

export default BuildingModal3d;
export const GetThreedPallet = () => { return meshRef.current; };
