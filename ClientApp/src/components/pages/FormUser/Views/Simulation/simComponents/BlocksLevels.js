import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box3, Vector3, TextureLoader } from "three";
import { useTexture } from "@react-three/drei";
import { toast } from 'material-react-toastify';
import Texture1 from "../../../texture1.png";
import Texture2 from "../../../texture2.png";
import Texture3 from "../../../texture3.png";
import Texture4 from "../../../texture4.png";
import IntermediateLayer from "../../../grey.png";
import BlackTexture from "../../../Black.png";
import { angleRadians } from "../utils/angle";


const BlocksLevels = (props) => {

  const texture1 = useTexture(Texture1);
  const texture2 = useTexture(Texture2);
  const texture3 = useTexture(Texture3);
  const texture4 = useTexture(Texture4);
  const intermediateLayerTex = useTexture(IntermediateLayer);
  const blackTexture = useTexture(BlackTexture);



  const map = (Val, in_max, in_min, out_max, out_min) => {
    var calculatedVal = (((Val - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
    return calculatedVal;
  }


  const startA = props.simCasesPositionsForSchemaA.map((caseValue, i) => {

    // console.log("cases shiftig check tempStart: props.pallet_xpos.... ", props.pallet_xpos) // creating cases shifting issues in pallet 1/2

    let tempStart = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      // x: -((((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)),
      y: (((props.Case_Height / 2) + 0.2)),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    // console.log("cases shiftig check tempStart:.... ", tempStart)
    return tempStart;
  })
  const startB = props.simCasesPositionsForSchemaB.map((caseValue, i) => {
    let tempStart = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      // x: -((((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)),
      y: (((props.Case_Height / 2) + 0.2)),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    return tempStart;
  })
  const startC = props.simCasesPositionsForSchemaC.map((caseValue, i) => {
    let tempStart = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      y: (((props.Case_Height / 2) + 0.2)),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    return tempStart;
  })
  const endA = props.simCasesPositionsForSchemaA.map((caseValue, i) => {

    let tempEnd = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      y: ((props.Case_Height / 2) + 0.2),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    // console.log("cases shiftig check tempStart: props.pallet_xpos....endA:... ", tempEnd) // creating cases shifting issues in pallet 1/2
    return tempEnd;
  })
  const endB = props.simCasesPositionsForSchemaB.map((caseValue, i) => {
    let tempEnd = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      y: ((props.Case_Height / 2) + 0.2),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    return tempEnd;
  })
  const endC = props.simCasesPositionsForSchemaC.map((caseValue, i) => {
    let tempEnd = {
      x: -(((props.Pallet_Width / 2) - map((caseValue.x - props.pallet_xpos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length) / 2)),
      y: ((props.Case_Height / 2) + 0.2),
      z: -(((props.Pallet_Length / 2) - map((caseValue.y - props.pallet_ypos), 0, 1400, 0, 18.925)) - ((caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length) / 2)),
      intermediatelayer: false
    };
    return tempEnd;
  })

  let intermediate_LayerHeightChangeStart_Layer = 0;
  let intermediate_LayerHeightChangeStart_Case = 0;
  let intermediate_LayerHeightChangeEnd_Layer = 0;
  let intermediate_LayerHeightChangeEnd_case = 0;
  let layerEndIncrement = 0;

  const tempStart = props.layer_data.map((layer, i) => {
    if (layer.layername == "Schema A") {
      let newHeigthY = 0;
      let startPositionsA = startA.map((startPos, index) => {
        newHeigthY = (startPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        if(props.simCasesPositionsForSchemaA[index].pre_Pos_Z == 0){
          props.simCasesPositionsForSchemaA[index].pre_Pos_Z = 1
        }
        const object = {
          ...startPos,
          x: (startPos.x + map((props.simCasesPositionsForSchemaA[index].pre_Pos_Y), 0, 1400, 0, 2.98)),
          y: ((newHeigthY + intermediate_LayerHeightChangeStart_Case) + map((props.simCasesPositionsForSchemaA[index].pre_Pos_Z), 0, 1400, 0, 2.98)),
          z: (startPos.z - map((props.simCasesPositionsForSchemaA[index].pre_Pos_X), 0, 1400, 0, 2.98))
        };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeStart_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeStart_Case += props.intermediate_Layer_Type;
        startPositionsA.push({ x: 0, y: ((newHeigthY) + intermediate_LayerHeightChangeStart_Layer), z: 0, intermediatelayer: true });
      }
      return startPositionsA;
    } else if (layer.layername == "Schema B") {
      let newHeigthY = 0;
      let startPositionsB = startB.map((startPos, index) => {
        newHeigthY = (startPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        if(props.simCasesPositionsForSchemaB[index].pre_Pos_Z == 0){
          props.simCasesPositionsForSchemaB[index].pre_Pos_Z = 1
        }
        const object = {
          ...startPos,
          x: (startPos.x + map((props.simCasesPositionsForSchemaB[index].pre_Pos_Y), 0, 1400, 0, 2.98)),
          y: ((newHeigthY + intermediate_LayerHeightChangeStart_Case) + map((props.simCasesPositionsForSchemaB[index].pre_Pos_Z), 0, 1400, 0, 2.98)),
          z: (startPos.z - map((props.simCasesPositionsForSchemaB[index].pre_Pos_X), 0, 1400, 0, 2.98))

        };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeStart_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeStart_Case += props.intermediate_Layer_Type;
        startPositionsB.push({ x: 0, y: ((newHeigthY) + intermediate_LayerHeightChangeStart_Layer), z: 0, intermediatelayer: true });
      }
      return startPositionsB;
    } else if (layer.layername == "Schema C") {
      let newHeigthY = 0;
      let startPositionsC = startC.map((startPos, index) => {
        newHeigthY = (startPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        if(props.simCasesPositionsForSchemaC[index].pre_Pos_Z == 0){
          props.simCasesPositionsForSchemaC[index].pre_Pos_Z = 1
        }
        const object = {
          ...startPos,
          x: (startPos.x + map((props.simCasesPositionsForSchemaC[index].pre_Pos_Y), 0, 1400, 0, 2.98)),
          y: ((newHeigthY + intermediate_LayerHeightChangeStart_Case) + map((props.simCasesPositionsForSchemaC[index].pre_Pos_Z), 0, 1400, 0, 2.98)),
          z: (startPos.z - map((props.simCasesPositionsForSchemaC[index].pre_Pos_X), 0, 1400, 0, 2.98))

        };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeStart_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeStart_Case += props.intermediate_Layer_Type;
        startPositionsC.push({ x: 0, y: ((newHeigthY) + intermediate_LayerHeightChangeStart_Layer), z: 0, intermediatelayer: true });
      }
      return startPositionsC;
    } else {
      if (layer.intermediatelayer == true) {

        intermediate_LayerHeightChangeStart_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeStart_Case += props.intermediate_Layer_Type;
      }
      return;
    }
  });
  const tempEnd = props.layer_data.map((layer, i) => {
    if (layer.layername == "Schema A") {
      let newHeigthY = 0;
      let endPositionsA = endA.map((endPos, index) => {
        newHeigthY = (endPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        const object = { ...endPos, y: (newHeigthY + intermediate_LayerHeightChangeEnd_case) };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeEnd_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeEnd_case += props.intermediate_Layer_Type;
        endPositionsA.push({ x: 0, y: ((newHeigthY + (props.Case_Height / 2)) + (intermediate_LayerHeightChangeEnd_Layer + ((props.intermediate_Layer_Type / 2) * (layerEndIncrement)))), z: 0, intermediatelayer: true });
        layerEndIncrement += 1;
      }
      return endPositionsA;
    } else if (layer.layername == "Schema B") {
      let newHeigthY = 0;
      let endPositionsB = endB.map((endPos, index) => {
        newHeigthY = (endPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        const object = { ...endPos, y: (newHeigthY + intermediate_LayerHeightChangeEnd_case) };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeEnd_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeEnd_case += props.intermediate_Layer_Type;
        endPositionsB.push({ x: 0, y: ((newHeigthY + (props.Case_Height / 2)) + (intermediate_LayerHeightChangeEnd_Layer + ((props.intermediate_Layer_Type / 2) * (layerEndIncrement)))), z: 0, intermediatelayer: true });
        layerEndIncrement += 1;
      }
      return endPositionsB;
    } else if (layer.layername == "Schema C") {
      let newHeigthY = 0;
      let endPositionsC = endC.map((endPos, index) => {
        newHeigthY = (endPos.y + (props.Case_Height * (layer.layerSequence - 1)))
        const object = { ...endPos, y: (newHeigthY + intermediate_LayerHeightChangeEnd_case) };
        return object;
      })
      if (layer.intermediatelayer == true) {
        intermediate_LayerHeightChangeEnd_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeEnd_case += props.intermediate_Layer_Type;
        endPositionsC.push({ x: 0, y: ((newHeigthY + (props.Case_Height / 2)) + (intermediate_LayerHeightChangeEnd_Layer + ((props.intermediate_Layer_Type / 2) * (layerEndIncrement)))), z: 0, intermediatelayer: true });
        layerEndIncrement += 1;
      }
      return endPositionsC;
    } else {
      if (layer.intermediatelayer == true) {

        intermediate_LayerHeightChangeEnd_Layer += (props.intermediate_Layer_Type / 2);
        intermediate_LayerHeightChangeEnd_case += props.intermediate_Layer_Type;
        layerEndIncrement += 1;
      }
      return
    }
  });

  const schemaArrangement = props.layer_data.map((layer, i) => {
    let currentSchemaLayer = null;
    if (layer.layername == "Schema A") {
      let temp_simCasesPositionsForSchemaA = [];
      props.simCasesPositionsForSchemaA.forEach((value, i) => {
        temp_simCasesPositionsForSchemaA.push({ ...value, layer_no: layer.layerSequence, schema: layer.layername })
      })
      currentSchemaLayer = [...temp_simCasesPositionsForSchemaA];
      if (layer.intermediatelayer == true) {
        currentSchemaLayer.push({ x: 0, y: 0, orientation: "Width", intermediateLayer: true })
      }
    } else if (layer.layername == "Schema B") {
      let temp_simCasesPositionsForSchemaB = [];
      props.simCasesPositionsForSchemaB.forEach((value, i) => {
        temp_simCasesPositionsForSchemaB.push({ ...value, layer_no: layer.layerSequence, schema: layer.layername })
      })
      currentSchemaLayer = [...temp_simCasesPositionsForSchemaB];
      if (layer.intermediatelayer == true) {
        currentSchemaLayer.push({ x: 0, y: 0, orientation: "Width", intermediateLayer: true })
      }
    } else if (layer.layername == "Schema C") {
      let temp_simCasesPositionsForSchemaC = [];
      props.simCasesPositionsForSchemaC.forEach((value, i) => {
        temp_simCasesPositionsForSchemaC.push({ ...value, layer_no: layer.layerSequence, schema: layer.layername })
      })
      currentSchemaLayer = [...temp_simCasesPositionsForSchemaC];
      if (layer.intermediatelayer == true) {
        currentSchemaLayer.push({ x: 0, y: 0, orientation: "Width", intermediateLayer: true })
      }
    }
    // console.log("checking currentSchemaLayer::::: ", currentSchemaLayer);
    return currentSchemaLayer;
  })

  const cubeMesh = schemaArrangement.flat().slice(1).map((cases, i) => {
    return useRef();
  })

  const cubeMeshFirstIL = useRef();
  const caseVisibleChange = schemaArrangement.flat().slice(1).map((cases, i) => {
    if (props.S_state == "panel6") {
      return false;
    } else {
      return true;
    }
  })

  const [new_line_rotation, setNew_line_rotation] = useState("Vertical")
  const [new_line_position, setNew_line_position] = useState("Topside")
  const [cubeMeshIndex, setcubeMeshIndex] = useState(0);
  const [caseVisibleA, setCaseVisibleA] = useState(caseVisibleChange);
  const [start, setStart] = useState(tempStart.flat().slice(1));
  const [end, setEnd] = useState(tempEnd.flat().slice(1));
  const [schemaArrangementABC, setSchemaArrangementABC] = useState(schemaArrangement.flat().slice(1));
  const [firstILPresent, setFirstILPresent] = useState(props.layer_data[0].intermediatelayer);
  //
  //

  const cubeBBMesh = cubeMesh.map((mesh, i) => {
    if (mesh.current !== undefined) {
      return new Box3(new Vector3(), new Vector3()).setFromObject(mesh.current);
    }
  })

  let collisionDetection = false;

  useFrame((state, delta) => {

    if ((cubeMeshIndex !== -1) && (props.prc_values_check) && !props.abordSimulation && props.speed != 3.6666666666666665 && !collisionDetection) {
      if ((cubeMeshIndex < cubeMesh.length) && props.S_state == "panel6") {
        // updating bounding box of current simulating case (needed for case collision detection)
        if (cubeBBMesh.length > 0 && cubeBBMesh[cubeMeshIndex] !== undefined) {
          cubeBBMesh[cubeMeshIndex].copy(cubeMesh[cubeMeshIndex].current.geometry.boundingBox).applyMatrix4(cubeMesh[cubeMeshIndex].current.matrixWorld)
        }


        // making case visible one by one
        const CaseVisibleToChange = caseVisibleA.map((value, i) => {
          if (i <= cubeMeshIndex) {
            return true;
          } else {
            return false;
          }
        })
        setCaseVisibleA(CaseVisibleToChange)

                  // updating the case position on every iteration to animate
          cubeMesh[cubeMeshIndex].current.position.x += ((end[cubeMeshIndex].x - start[cubeMeshIndex].x) * delta) / props.speed;
          // updating the case position on every iteration to animate
          cubeMesh[cubeMeshIndex].current.position.y += ((end[cubeMeshIndex].y - start[cubeMeshIndex].y) * delta) / props.speed;
          // updating the case position on every iteration to animate
          cubeMesh[cubeMeshIndex].current.position.z += ((end[cubeMeshIndex].z - start[cubeMeshIndex].z) * delta) / props.speed;

                // detects collision with current simulating case and all already set cases.
        if (cubeBBMesh.length > 0 && cubeBBMesh[cubeMeshIndex] !== undefined) {
          for (let i = 0; i < cubeMeshIndex; i++) {
            if (cubeBBMesh[cubeMeshIndex].intersectsBox(cubeBBMesh[i])) {
              // simulation gets aborded if colision detected, status changes to Failed
              console.log("checking bounding box collision with intermediate layer::: ", schemaArrangementABC[i].intermediateLayer, schemaArrangementABC[cubeMeshIndex].layer_no == schemaArrangementABC[i].layer_no)
              if (!schemaArrangementABC[i].intermediateLayer && !schemaArrangementABC[cubeMeshIndex].intermediateLayer && schemaArrangementABC[cubeMeshIndex].layer_no == schemaArrangementABC[i].layer_no) {
                setcubeMeshIndex(-1);
                collisionDetection = true;
                props.handleAbortSimulation("collision", schemaArrangementABC[cubeMeshIndex].case_no, schemaArrangementABC[cubeMeshIndex].schema, schemaArrangementABC[cubeMeshIndex].layer_no)
                // console.log("checking collision.. true");

              }
            }
          }
        }

                  // sets the cube at final position
        if ((start[cubeMeshIndex].x > end[cubeMeshIndex].x) && (start[cubeMeshIndex].z < end[cubeMeshIndex].z)) {
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if ((start[cubeMeshIndex].x < end[cubeMeshIndex].x) && (start[cubeMeshIndex].z < end[cubeMeshIndex].z)) {
          if (cubeMesh[cubeMeshIndex].current.position.x >= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if ((start[cubeMeshIndex].x > end[cubeMeshIndex].x) && (start[cubeMeshIndex].z > end[cubeMeshIndex].z)) {
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z <= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if ((start[cubeMeshIndex].x < end[cubeMeshIndex].x) && (start[cubeMeshIndex].z > end[cubeMeshIndex].z)) {
          if (cubeMesh[cubeMeshIndex].current.position.x >= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z <= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if ((start[cubeMeshIndex].x == end[cubeMeshIndex].x) && (start[cubeMeshIndex].z == end[cubeMeshIndex].z)) {
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if ((start[cubeMeshIndex].x == end[cubeMeshIndex].x) && (start[cubeMeshIndex].z < end[cubeMeshIndex].z)) {
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if ((start[cubeMeshIndex].x == end[cubeMeshIndex].x) && (start[cubeMeshIndex].z > end[cubeMeshIndex].z)) {
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z <= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if ((start[cubeMeshIndex].x > end[cubeMeshIndex].x) && (start[cubeMeshIndex].z == end[cubeMeshIndex].z)) {
          if (cubeMesh[cubeMeshIndex].current.position.x <= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
        else if ((start[cubeMeshIndex].x < end[cubeMeshIndex].x) && (start[cubeMeshIndex].z == end[cubeMeshIndex].z)) {
          if (cubeMesh[cubeMeshIndex].current.position.x >= end[cubeMeshIndex].x && cubeMesh[cubeMeshIndex].current.position.y <= end[cubeMeshIndex].y && cubeMesh[cubeMeshIndex].current.position.z >= end[cubeMeshIndex].z) {
            cubeMesh[cubeMeshIndex].current.position.x = end[cubeMeshIndex].x
            cubeMesh[cubeMeshIndex].current.position.y = end[cubeMeshIndex].y
            cubeMesh[cubeMeshIndex].current.position.z = end[cubeMeshIndex].z
            let tempUseFrameIndex = cubeMeshIndex + 1;
            setcubeMeshIndex(tempUseFrameIndex)
          }
        }
              } else {
        setcubeMeshIndex(-1)
        props.handleSimulationPassed("simPassed");
      }
    }

  });

  useEffect(() => {
    if (!props.prc_values_check) {
      console.log("Inside Bikram  = ",props.simulationToast);
     
      props.simulationToast == false ? toast.error(props.t(`pleasesetallvaluesandpositionsofcasesinProgramRoutineCreator`), { autoClose: 5000, position: toast.POSITION.TOP_CENTER }) : "";
      
      // props.Biks = true;
      props.handleAbortSimulation()
    }

    // case line check
    if (props.line_rotation !== undefined && props.line_rotation !== null) {
      setNew_line_rotation(props.line_rotation)
    }
    if (props.line_position !== undefined && props.line_position !== null) {
      setNew_line_position(props.line_position)
    }
  }, [props.prc_values_check, props.line_rotation, props.line_position])

  useEffect(() => {
    // console.log("checking for resetting simulation:::: ")
    let newcaseVisibleChange = schemaArrangement.flat().slice(1).map((cases, i) => {
      if (props.S_state == "panel6") {
        return false;
      } else {
        return true;
      }
    })
    setCaseVisibleA(newcaseVisibleChange);
    setcubeMeshIndex(0);
  }, [props.simulationRunning])

  return (
    <>
      {props.prc_values_check &&
        <>
          {firstILPresent &&

            <mesh visible={firstILPresent} ref={cubeMeshFirstIL}
              position={[0, ((props.intermediate_Layer_Type / 2) + 0.2), 0]} castShadow receiveShadow>
              <boxGeometry attach="geometry" args={[props.intermediate_Layer_Type_Width, props.intermediate_Layer_Type, props.intermediate_Layer_Type_Length]} />
              <meshStandardMaterial map={intermediateLayerTex} attach="material" color={"#808080"} />
            </mesh>
          }


          {schemaArrangementABC &&
            schemaArrangementABC.map((caseValue, i) => {
              return <>
                {(props.S_state == "panel6")
                  ?
                  // main case smulation
                  <mesh rotation={start[i].intermediatelayer == true ? [0, 0, 0] : [0, caseValue.rotation == -1 ? 0 : (caseValue.orientation == "Width" ? -angleRadians(caseValue.rotation) : -angleRadians(caseValue.rotation - 90)), 0]} visible={caseVisibleA[i]} ref={cubeMesh[i]}
                    position={[start[i].x, start[i].y, start[i].z]} castShadow receiveShadow>
                    <boxGeometry attach="geometry" args={start[i].intermediatelayer == true ? [props.intermediate_Layer_Type_Width, props.intermediate_Layer_Type, props.intermediate_Layer_Type_Length] : [caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length, props.Case_Height, caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length]} />
                    <meshStandardMaterial map={start[i].intermediatelayer == true ? intermediateLayerTex : props.current_texture == "Testure1" ? texture1 : props.current_texture == "Testure2" ? texture2 : props.current_texture == "Testure3" ? texture3 : texture4} attach="material" color={start[i].intermediatelayer == true ? "#808080" : "#c7a887"} />

                    {/* label for back */}
                    {props.sim_case_label_data["Back"] !== undefined
                      &&
                      start[i].intermediatelayer == false &&
                      <mesh position={caseValue.orientation == "Width"
                        ?
                        [
                          -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Back"].labelx, 0, 1400, 0, 2.965)),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Back"].labely, 0, 1400, 0, 2.965)),
                          (props.Case_Length / 2)]
                        :
                        [
                          -(props.Case_Length / 2),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Back"].labely, 0, 1400, 0, 2.965)),
                          -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Back"].labelx, 0, 1400, 0, 2.965))
                        ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                          ?
                          [
                            (map(props.sim_case_label_data["Back"].labelwidth, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Back"].labelheight, 0, 1400, 0, 2.965)),
                            0.0002
                          ]
                          :
                          [
                            0.0002,
                            (map(props.sim_case_label_data["Back"].labelheight, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Back"].labelwidth, 0, 1400, 0, 2.965))
                          ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                      </mesh>
                    }

                    {/* label for front */}
                    {props.sim_case_label_data["Front"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <mesh position={caseValue.orientation == "Width"
                        ?
                        [
                          (((props.Case_Width / 2) - (map(props.sim_case_label_data["Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front"].labelx, 0, 1400, 0, 2.965)),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Front"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front"].labely, 0, 1400, 0, 2.965)),
                          -(props.Case_Length / 2)]
                        :
                        [
                          (props.Case_Length / 2),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Front"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front"].labely, 0, 1400, 0, 2.965)),
                          (((props.Case_Width / 2) - (map(props.sim_case_label_data["Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front"].labelx, 0, 1400, 0, 2.965))
                        ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                          ?
                          [
                            (map(props.sim_case_label_data["Front"].labelwidth, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Front"].labelheight, 0, 1400, 0, 2.965)),
                            0.0002
                          ]
                          :
                          [
                            0.0002,
                            (map(props.sim_case_label_data["Front"].labelheight, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Front"].labelwidth, 0, 1400, 0, 2.965))
                          ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                      </mesh>
                    }

                    {/* label for right */}
                    {props.sim_case_label_data["Right"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <mesh position={caseValue.orientation == "Width"
                        ?
                        [
                          (props.Case_Width / 2),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right"].labely, 0, 1400, 0, 2.965)),
                          (((props.Case_Length / 2) - (map(props.sim_case_label_data["Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right"].labelx, 0, 1400, 0, 2.965)),
                        ]
                        :
                        [
                          -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right"].labelx, 0, 1400, 0, 2.965)),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right"].labely, 0, 1400, 0, 2.965)),
                          (props.Case_Width / 2)
                        ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                          ?
                          [
                            0.0002,
                            (map(props.sim_case_label_data["Right"].labelheight, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Right"].labelwidth, 0, 1400, 0, 2.965))
                          ]
                          :
                          [
                            (map(props.sim_case_label_data["Right"].labelwidth, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Right"].labelheight, 0, 1400, 0, 2.965)),
                            0.0002
                          ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                      </mesh>
                    }

                    {/* label for left */}
                    {props.sim_case_label_data["Left"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <mesh position={caseValue.orientation == "Width"
                        ?
                        [
                          -(props.Case_Width / 2),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left"].labely, 0, 1400, 0, 2.965)),
                          -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left"].labelx, 0, 1400, 0, 2.965)),
                        ]
                        :
                        [
                          (((props.Case_Length / 2) - (map(props.sim_case_label_data["Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left"].labelx, 0, 1400, 0, 2.965)),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left"].labely, 0, 1400, 0, 2.965)),
                          -(props.Case_Width / 2)
                        ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                          ?
                          [
                            0.0002,
                            (map(props.sim_case_label_data["Left"].labelheight, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Left"].labelwidth, 0, 1400, 0, 2.965))
                          ]
                          :
                          [
                            (map(props.sim_case_label_data["Left"].labelwidth, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Left"].labelheight, 0, 1400, 0, 2.965)),
                            0.0002
                          ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                      </mesh>
                    }

                    {/* label for top */}
                    {props.sim_case_label_data["Top"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <mesh position={caseValue.orientation == "Width"
                        ?
                        [
                          (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top"].labelx, 0, 1400, 0, 2.965)),
                          (props.Case_Height / 2),
                          (((props.Case_Length / 2) - (map(props.sim_case_label_data["Top"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top"].labely, 0, 1400, 0, 2.965))
                        ]
                        :
                        [
                          -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Top"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top"].labely, 0, 1400, 0, 2.965)),
                          (props.Case_Height / 2),
                          (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top"].labelx, 0, 1400, 0, 2.965))
                        ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                          ?
                          [
                            (map(props.sim_case_label_data["Top"].labelwidth, 0, 1400, 0, 2.965)),
                            0.0002,
                            (map(props.sim_case_label_data["Top"].labelheight, 0, 1400, 0, 2.965))
                          ]
                          :
                          [
                            (map(props.sim_case_label_data["Top"].labelheight, 0, 1400, 0, 2.965)),
                            0.0002,
                            (map(props.sim_case_label_data["Top"].labelwidth, 0, 1400, 0, 2.965))
                          ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                      </mesh>
                    }

                    {/* label for top-right */}
                    {props.sim_case_label_data["Top-Right"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (props.Case_Width / 2),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)),
                            (((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Right"].labelx, 0, 1400, 0, 2.965)),
                          ]
                          :
                          [
                            -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Right"].labelx, 0, 1400, 0, 2.965)),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0002,
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965)),
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965))),
                              0.0002
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (((props.Case_Width / 2) - ((map(props.sim_case_label_data["Top-Right"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)))) / 2))),
                            (props.Case_Height / 2),
                            (((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Right"].labelx, 0, 1400, 0, 2.965))
                          ]
                          :
                          [
                            -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Right"].labelx, 0, 1400, 0, 2.965)),
                            (props.Case_Height / 2),
                            (((props.Case_Width / 2) - ((map(props.sim_case_label_data["Top-Right"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)))) / 2)))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Right"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)))), // new label height
                              0.0002,
                              (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965)), // this is new label height 
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965)), // this is new label height
                              0.0002,
                              (map(props.sim_case_label_data["Top-Right"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)))), // new label height
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for top-left */}
                    {props.sim_case_label_data["Top-Left"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(props.Case_Width / 2),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Left"].labelx, 0, 1400, 0, 2.965)),
                          ]
                          :
                          [
                            (((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Left"].labelx, 0, 1400, 0, 2.965)),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0002,
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965)),
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965))),
                              0.0002
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(((props.Case_Width / 2) - ((map(props.sim_case_label_data["Top-Left"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)))) / 2))),
                            (props.Case_Height / 2),
                            -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Left"].labelx, 0, 1400, 0, 2.965))
                          ]
                          :
                          [
                            (((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Left"].labelx, 0, 1400, 0, 2.965)),
                            (props.Case_Height / 2),
                            -(((props.Case_Width / 2) - ((map(props.sim_case_label_data["Top-Left"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)))) / 2))),
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Left"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)))), //new width
                              0.0002,
                              (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965)),  // new height
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965)), // new height
                              0.0002,
                              (map(props.sim_case_label_data["Top-Left"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)))), // new width
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for top-front */}
                    {props.sim_case_label_data["Top-Front"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&

                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Front"].labelx, 0, 1400, 0, 2.965)),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Length / 2)]
                          :
                          [
                            (props.Case_Length / 2),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)),
                            (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Front"].labelx, 0, 1400, 0, 2.965))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965)),
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))),
                              0.0002
                            ]
                            :
                            [
                              0.0002,
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Front"].labelx, 0, 1400, 0, 2.965)),
                            (props.Case_Height / 2),
                            -(((props.Case_Length / 2) - ((map(props.sim_case_label_data["Top-Front"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)))) / 2)))
                          ]
                          :
                          [
                            (((props.Case_Length / 2) - ((map(props.sim_case_label_data["Top-Front"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)))) / 2))),
                            (props.Case_Height / 2),
                            (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Front"].labelx, 0, 1400, 0, 2.965))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965)),
                              0.0002,
                              (map(props.sim_case_label_data["Top-Front"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Front"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)))),
                              0.0002,
                              (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for top-back */}
                    {props.sim_case_label_data["Top-Back"] !== undefined
                      &&
                      start[i].intermediatelayer == false &&

                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Back"].labelx, 0, 1400, 0, 2.965)),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Length / 2)]
                          :
                          [
                            -(props.Case_Length / 2),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Back"].labelx, 0, 1400, 0, 2.965))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965)),
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))),
                              0.0002
                            ]
                            :
                            [
                              0.0002,
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Back"].labelx, 0, 1400, 0, 2.965)),
                            (props.Case_Height / 2),
                            (((props.Case_Length / 2) - ((map(props.sim_case_label_data["Top-Back"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)))) / 2)))
                          ]
                          :
                          [
                            -(((props.Case_Length / 2) - ((map(props.sim_case_label_data["Top-Back"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)))) / 2))),
                            (props.Case_Height / 2),
                            -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Back"].labelx, 0, 1400, 0, 2.965))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965)),
                              0.0002,
                              (map(props.sim_case_label_data["Top-Back"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Back"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)))),
                              0.0002,
                              (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for front-right */}
                    {props.sim_case_label_data["Front-Right"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Right"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Length / 2) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965))) / 2)),
                          ]
                          :
                          [
                            (((props.Case_Length / 2) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965))) / 2)),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Right"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0002,
                              (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965)),
                              (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))
                            ]
                            :
                            [
                              (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965)),
                              0.0002
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (((props.Case_Width / 2) - ((map(props.sim_case_label_data["Front-Right"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))) / 2))),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Right"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Length / 2)]
                          :
                          [
                            (props.Case_Length / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Right"].labely, 0, 1400, 0, 2.965)),
                            (((props.Case_Width / 2) - ((map(props.sim_case_label_data["Front-Right"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))) / 2)))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Front-Right"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))),
                              (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965)),
                              0.0002
                            ]
                            :
                            [
                              0.0002,
                              (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965)),
                              (map(props.sim_case_label_data["Front-Right"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965))))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for front-left */}
                    {props.sim_case_label_data["Front-Left"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(((props.Case_Width / 2) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))) / 2)),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Left"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Length / 2)]
                          :
                          [
                            (props.Case_Length / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Left"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Width / 2) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))) / 2))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965)),
                              0.0002
                            ]
                            :
                            [
                              0.0002,
                              (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965)),
                              (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965)))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Left"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Length / 2) - ((map(props.sim_case_label_data["Front-Left"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965)))) / 2))),
                          ]
                          :
                          [
                            (((props.Case_Length / 2) - ((map(props.sim_case_label_data["Front-Left"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965)))) / 2))),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Left"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0002,
                              (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965)),
                              (map(props.sim_case_label_data["Front-Left"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Front-Left"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965)))),
                              (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965)),
                              0.0002
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                      </>
                    }


                    {/* label for right-back */}
                    {props.sim_case_label_data["Right-Back"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            ((props.Case_Width / 2) - ((props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)) / 2)),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Length / 2)
                          ]
                          :
                          [
                            -(props.Case_Length / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right-Back"].labely, 0, 1400, 0, 2.965)),
                            ((props.Case_Width / 2) - ((props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)) / 2))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)),
                              (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965)),
                              0.0002
                            ]
                            :
                            [
                              0.0002,
                              (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965)),
                              (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right-Back"].labely, 0, 1400, 0, 2.965)),
                            (((props.Case_Length / 2) - ((map(props.sim_case_label_data["Right-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965))) / 2))),
                          ]
                          :
                          [
                            -(((props.Case_Length / 2) - ((map(props.sim_case_label_data["Right-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965))) / 2))),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0002,
                              (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965)),
                              (map(props.sim_case_label_data["Right-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Right-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965)),
                              0.0002
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for left-back */}
                    {props.sim_case_label_data["Left-Back"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left-Back"].labely, 0, 1400, 0, 2.965)),
                            ((props.Case_Length / 2) - ((props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965))) / 2)),
                          ]
                          :
                          [
                            -((props.Case_Length / 2) - ((props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965))) / 2)),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left-Back"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0002,
                              (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965)),
                              (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))
                            ]
                            :
                            [
                              (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965)),
                              0.0002
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -((props.Case_Width / 2) - ((map(props.sim_case_label_data["Left-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))) / 2)),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Length / 2)]
                          :
                          [
                            -(props.Case_Length / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left-Back"].labely, 0, 1400, 0, 2.965)),
                            -((props.Case_Width / 2) - ((map(props.sim_case_label_data["Left-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))) / 2))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Left-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))),
                              (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965)),
                              0.0002
                            ]
                            :
                            [
                              0.0002,
                              (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965)),
                              (map(props.sim_case_label_data["Left-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965))))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* line top-bottom */}
                    {(new_line_position == "Topside" || new_line_position == "Bottomside")
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        {new_line_rotation == "Vertical" ?
                          <>
                            <mesh position={[0, (props.Case_Height / 2), 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [map(40, 0, 1400, 0, props.Case_Width), 0.000125, props.Case_Length] : [props.Case_Length, 0.000125, map(40, 0, 1400, 0, props.Case_Width)]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>
                            <mesh position={[0, -(props.Case_Height / 2), 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [map(40, 0, 1400, 0, props.Case_Width), 0.000125, props.Case_Length] : [props.Case_Length, 0.000125, map(40, 0, 1400, 0, props.Case_Width)]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>
                          </>
                          :
                          <>
                            <mesh position={[0, (props.Case_Height / 2), 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [props.Case_Width, 0.000125, map(40, 0, 1400, 0, props.Case_Length)] : [map(40, 0, 1400, 0, props.Case_Length), 0.000125, props.Case_Width]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>

                            <mesh position={[0, -(props.Case_Height / 2), 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [props.Case_Width, 0.000125, map(40, 0, 1400, 0, props.Case_Length)] : [map(40, 0, 1400, 0, props.Case_Length), 0.000125, props.Case_Width]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>
                          </>
                        }
                      </>
                    }

                    {/* line front-back */}
                    {(new_line_position == "Frontside" || new_line_position == "Backside")
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        {new_line_rotation == "Vertical" ?
                          <>
                            <mesh position={caseValue.orientation == "Width" ? [0, 0, (props.Case_Length / 2)] : [(props.Case_Length / 2), 0, 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [map(40, 0, 1400, 0, props.Case_Width), props.Case_Height, 0.000125] : [0.000125, props.Case_Height, map(40, 0, 1400, 0, props.Case_Width)]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>
                            <mesh position={caseValue.orientation == "Width" ? [0, 0, -(props.Case_Length / 2)] : [-(props.Case_Length / 2), 0, 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [map(40, 0, 1400, 0, props.Case_Width), props.Case_Height, 0.000125] : [0.000125, props.Case_Height, map(40, 0, 1400, 0, props.Case_Width)]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>
                          </>
                          :
                          <>
                            <mesh position={caseValue.orientation == "Width" ? [0, 0, (props.Case_Length / 2)] : [(props.Case_Length / 2), 0, 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [props.Case_Width, map(40, 0, 1400, 0, props.Case_Length), 0.000125] : [0.000125, map(40, 0, 1400, 0, props.Case_Length), props.Case_Width]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>

                            <mesh position={caseValue.orientation == "Width" ? [0, 0, -(props.Case_Length / 2)] : [-(props.Case_Length / 2), 0, 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [props.Case_Width, map(40, 0, 1400, 0, props.Case_Length), 0.000125] : [0.000125, map(40, 0, 1400, 0, props.Case_Length), props.Case_Width]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>
                          </>
                        }
                      </>
                    }

                    {/* line right-left */}
                    {(new_line_position == "Leftside" || new_line_position == "Rightside")
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        {new_line_rotation == "Vertical" ?
                          <>
                            <mesh position={caseValue.orientation == "Width" ? [(props.Case_Width / 2), 0, 0] : [0, 0, (props.Case_Width / 2)]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.000125, props.Case_Height, map(40, 0, 1400, 0, props.Case_Length)] : [map(40, 0, 1400, 0, props.Case_Length), props.Case_Height, 0.000125]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>
                            <mesh position={caseValue.orientation == "Width" ? [-(props.Case_Width / 2), 0, 0] : [0, 0, -(props.Case_Width / 2)]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.000125, props.Case_Height, map(40, 0, 1400, 0, props.Case_Length)] : [map(40, 0, 1400, 0, props.Case_Length), props.Case_Height, 0.000125]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>
                          </>
                          :
                          <>
                            <mesh position={caseValue.orientation == "Width" ? [(props.Case_Width / 2), 0, 0] : [0, 0, (props.Case_Width / 2)]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.000125, map(40, 0, 1400, 0, props.Case_Height), props.Case_Length] : [props.Case_Length, map(40, 0, 1400, 0, props.Case_Height), 0.000125]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>

                            <mesh position={caseValue.orientation == "Width" ? [-(props.Case_Width / 2), 0, 0,] : [0, 0, -(props.Case_Width / 2)]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.000125, map(40, 0, 1400, 0, props.Case_Height), props.Case_Length] : [props.Case_Length, map(40, 0, 1400, 0, props.Case_Height), 0.000125]} />
                              <meshStandardMaterial attach="material" color={"#000000"} />
                            </mesh>
                          </>
                        }
                      </>
                    }
                  </mesh>
                  :
                  // main case summary
                  <mesh rotation={end[i].intermediatelayer == true ? [0, 0, 0] : [0, caseValue.rotation == -1 ? 0 : (caseValue.orientation == "Width" ? -angleRadians(caseValue.rotation) : -angleRadians(caseValue.rotation - 90)), 0]} visible={caseVisibleA[i]} ref={cubeMesh[i]}
                    position={[end[i].x, end[i].y, end[i].z]} castShadow receiveShadow>
                    <boxGeometry attach="geometry" args={end[i].intermediatelayer == true ? [props.intermediate_Layer_Type_Width, props.intermediate_Layer_Type, props.intermediate_Layer_Type_Length] : [caseValue.orientation == "Width" ? props.Case_Width : props.Case_Length, props.Case_Height, caseValue.orientation == "Length" ? props.Case_Width : props.Case_Length]} />
                    <meshStandardMaterial map={start[i].intermediatelayer == true ? intermediateLayerTex : texture1} attach="material" color={start[i].intermediatelayer == true ? "#808080" : "#c7a887"} />

                    {/* label for back */}
                    {
                      props.sim_case_label_data["Back"] !== undefined
                      &&
                      start[i].intermediatelayer == false &&
                      <mesh position={caseValue.orientation == "Width"
                        ?
                        [
                          -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Back"].labelx, 0, 1400, 0, 2.965)),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Back"].labely, 0, 1400, 0, 2.965)),
                          (props.Case_Length / 2)]
                        :
                        [
                          -(props.Case_Length / 2),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Back"].labely, 0, 1400, 0, 2.965)),
                          -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Back"].labelx, 0, 1400, 0, 2.965))
                        ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                          ?
                          [
                            (map(props.sim_case_label_data["Back"].labelwidth, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Back"].labelheight, 0, 1400, 0, 2.965)),
                            0.0041
                          ]
                          :
                          [
                            0.0041,
                            (map(props.sim_case_label_data["Back"].labelheight, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Back"].labelwidth, 0, 1400, 0, 2.965))
                          ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                      </mesh>
                    }

                    {/* label for front */}
                    {
                      props.sim_case_label_data["Front"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <mesh position={caseValue.orientation == "Width"
                        ?
                        [
                          (((props.Case_Width / 2) - (map(props.sim_case_label_data["Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front"].labelx, 0, 1400, 0, 2.965)),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Front"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front"].labely, 0, 1400, 0, 2.965)),
                          -(props.Case_Length / 2)]
                        :
                        [
                          (props.Case_Length / 2),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Front"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front"].labely, 0, 1400, 0, 2.965)),
                          (((props.Case_Width / 2) - (map(props.sim_case_label_data["Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front"].labelx, 0, 1400, 0, 2.965))
                        ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                          ?
                          [
                            (map(props.sim_case_label_data["Front"].labelwidth, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Front"].labelheight, 0, 1400, 0, 2.965)),
                            0.0041
                          ]
                          :
                          [
                            0.0041,
                            (map(props.sim_case_label_data["Front"].labelheight, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Front"].labelwidth, 0, 1400, 0, 2.965))
                          ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                      </mesh>
                    }

                    {/* label for right */}
                    {
                      props.sim_case_label_data["Right"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <mesh position={caseValue.orientation == "Width"
                        ?
                        [
                          (props.Case_Width / 2),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right"].labely, 0, 1400, 0, 2.965)),
                          (((props.Case_Length / 2) - (map(props.sim_case_label_data["Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right"].labelx, 0, 1400, 0, 2.965)),
                        ]
                        :
                        [
                          -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right"].labelx, 0, 1400, 0, 2.965)),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right"].labely, 0, 1400, 0, 2.965)),
                          (props.Case_Width / 2)
                        ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                          ?
                          [
                            0.0041,
                            (map(props.sim_case_label_data["Right"].labelheight, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Right"].labelwidth, 0, 1400, 0, 2.965))
                          ]
                          :
                          [
                            (map(props.sim_case_label_data["Right"].labelwidth, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Right"].labelheight, 0, 1400, 0, 2.965)),
                            0.0041
                          ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                      </mesh>
                    }

                    {/* label for left */}
                    {
                      props.sim_case_label_data["Left"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <mesh position={caseValue.orientation == "Width"
                        ?
                        [
                          -(props.Case_Width / 2),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left"].labely, 0, 1400, 0, 2.965)),
                          -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left"].labelx, 0, 1400, 0, 2.965)),
                        ]
                        :
                        [
                          (((props.Case_Length / 2) - (map(props.sim_case_label_data["Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left"].labelx, 0, 1400, 0, 2.965)),
                          -(((props.Case_Height / 2) - (map(props.sim_case_label_data["Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left"].labely, 0, 1400, 0, 2.965)),
                          -(props.Case_Width / 2)
                        ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                          ?
                          [
                            0.0041,
                            (map(props.sim_case_label_data["Left"].labelheight, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Left"].labelwidth, 0, 1400, 0, 2.965))
                          ]
                          :
                          [
                            (map(props.sim_case_label_data["Left"].labelwidth, 0, 1400, 0, 2.965)),
                            (map(props.sim_case_label_data["Left"].labelheight, 0, 1400, 0, 2.965)),
                            0.0041
                          ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                      </mesh>
                    }

                    {/* label for top */}
                    {
                      props.sim_case_label_data["Top"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <mesh position={caseValue.orientation == "Width"
                        ?
                        [
                          (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top"].labelx, 0, 1400, 0, 2.965)),
                          (props.Case_Height / 2),
                          (((props.Case_Length / 2) - (map(props.sim_case_label_data["Top"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top"].labely, 0, 1400, 0, 2.965))
                        ]
                        :
                        [
                          -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Top"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top"].labely, 0, 1400, 0, 2.965)),
                          (props.Case_Height / 2),
                          (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top"].labelx, 0, 1400, 0, 2.965))
                        ]}
                        receiveShadow>
                        <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                          ?
                          [
                            (map(props.sim_case_label_data["Top"].labelwidth, 0, 1400, 0, 2.965)),
                            0.0041,
                            (map(props.sim_case_label_data["Top"].labelheight, 0, 1400, 0, 2.965))
                          ]
                          :
                          [
                            (map(props.sim_case_label_data["Top"].labelheight, 0, 1400, 0, 2.965)),
                            0.0041,
                            (map(props.sim_case_label_data["Top"].labelwidth, 0, 1400, 0, 2.965))
                          ]} />
                        <meshStandardMaterial attach="material" color={"#ffffff"} />
                      </mesh>
                    }

                    {/* label for top-right */}
                    {
                      props.sim_case_label_data["Top-Right"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (props.Case_Width / 2),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)),
                            (((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Right"].labelx, 0, 1400, 0, 2.965)),
                          ]
                          :
                          [
                            -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Right"].labelx, 0, 1400, 0, 2.965)),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0041,
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965)),
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965))),
                              0.0041
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (((props.Case_Width / 2) - ((map(props.sim_case_label_data["Top-Right"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)))) / 2))),
                            (props.Case_Height / 2),
                            (((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Right"].labelx, 0, 1400, 0, 2.965))
                          ]
                          :
                          [
                            -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Right"].labelx, 0, 1400, 0, 2.965)),
                            (props.Case_Height / 2),
                            (((props.Case_Width / 2) - ((map(props.sim_case_label_data["Top-Right"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)))) / 2)))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Right"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)))), // new label height
                              0.0041,
                              (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965)), // this is new label height 
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Right"].labelwidth, 0, 1400, 0, 2.965)), // this is new label height
                              0.0041,
                              (map(props.sim_case_label_data["Top-Right"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Right"].labely, 0, 1400, 0, 2.965)))), // new label height
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for top-left */}
                    {
                      props.sim_case_label_data["Top-Left"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(props.Case_Width / 2),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Left"].labelx, 0, 1400, 0, 2.965)),
                          ]
                          :
                          [
                            (((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Left"].labelx, 0, 1400, 0, 2.965)),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0041,
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965)),
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965))),
                              0.0041
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(((props.Case_Width / 2) - ((map(props.sim_case_label_data["Top-Left"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)))) / 2))),
                            (props.Case_Height / 2),
                            -(((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Left"].labelx, 0, 1400, 0, 2.965))
                          ]
                          :
                          [
                            (((props.Case_Length / 2) - (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Left"].labelx, 0, 1400, 0, 2.965)),
                            (props.Case_Height / 2),
                            -(((props.Case_Width / 2) - ((map(props.sim_case_label_data["Top-Left"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)))) / 2))),
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Left"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)))), //new width
                              0.0041,
                              (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965)),  // new height
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Left"].labelwidth, 0, 1400, 0, 2.965)), // new height
                              0.0041,
                              (map(props.sim_case_label_data["Top-Left"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Left"].labely, 0, 1400, 0, 2.965)))), // new width
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for top-front */}
                    {
                      props.sim_case_label_data["Top-Front"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&

                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Front"].labelx, 0, 1400, 0, 2.965)),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Length / 2)]
                          :
                          [
                            (props.Case_Length / 2),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)),
                            (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Front"].labelx, 0, 1400, 0, 2.965))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965)),
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))),
                              0.0041
                            ]
                            :
                            [
                              0.0041,
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Front"].labelx, 0, 1400, 0, 2.965)),
                            (props.Case_Height / 2),
                            -(((props.Case_Length / 2) - ((map(props.sim_case_label_data["Top-Front"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)))) / 2)))
                          ]
                          :
                          [
                            (((props.Case_Length / 2) - ((map(props.sim_case_label_data["Top-Front"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)))) / 2))),
                            (props.Case_Height / 2),
                            (((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Front"].labelx, 0, 1400, 0, 2.965))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965)),
                              0.0041,
                              (map(props.sim_case_label_data["Top-Front"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965))))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Front"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Front"].labely, 0, 1400, 0, 2.965)))),
                              0.0041,
                              (map(props.sim_case_label_data["Top-Front"].labelwidth, 0, 1400, 0, 2.965))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for top-back */}
                    {
                      props.sim_case_label_data["Top-Back"] !== undefined
                      &&
                      start[i].intermediatelayer == false &&

                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Back"].labelx, 0, 1400, 0, 2.965)),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Length / 2)]
                          :
                          [
                            -(props.Case_Length / 2),
                            -(((props.Case_Height / 2) - ((props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))) / 2)) - map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Back"].labelx, 0, 1400, 0, 2.965))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965)),
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))),
                              0.0041
                            ]
                            :
                            [
                              0.0041,
                              (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Back"].labelx, 0, 1400, 0, 2.965)),
                            (props.Case_Height / 2),
                            (((props.Case_Length / 2) - ((map(props.sim_case_label_data["Top-Back"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)))) / 2)))
                          ]
                          :
                          [
                            -(((props.Case_Length / 2) - ((map(props.sim_case_label_data["Top-Back"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)))) / 2))),
                            (props.Case_Height / 2),
                            -(((props.Case_Width / 2) - (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Top-Back"].labelx, 0, 1400, 0, 2.965))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965)),
                              0.0041,
                              (map(props.sim_case_label_data["Top-Back"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965))))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Top-Back"].labelheight, 0, 1400, 0, 2.965) - (props.Case_Height - (map(props.sim_case_label_data["Top-Back"].labely, 0, 1400, 0, 2.965)))),
                              0.0041,
                              (map(props.sim_case_label_data["Top-Back"].labelwidth, 0, 1400, 0, 2.965))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for front-right */}
                    {
                      props.sim_case_label_data["Front-Right"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Right"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Length / 2) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965))) / 2)),
                          ]
                          :
                          [
                            (((props.Case_Length / 2) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965))) / 2)),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Right"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0041,
                              (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965)),
                              (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))
                            ]
                            :
                            [
                              (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965)),
                              0.0041
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (((props.Case_Width / 2) - ((map(props.sim_case_label_data["Front-Right"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))) / 2))),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Right"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Length / 2)]
                          :
                          [
                            (props.Case_Length / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Right"].labely, 0, 1400, 0, 2.965)),
                            (((props.Case_Width / 2) - ((map(props.sim_case_label_data["Front-Right"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))) / 2)))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Front-Right"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965)))),
                              (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965)),
                              0.0041
                            ]
                            :
                            [
                              0.0041,
                              (map(props.sim_case_label_data["Front-Right"].labelheight, 0, 1400, 0, 2.965)),
                              (map(props.sim_case_label_data["Front-Right"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Front-Right"].labelx, 0, 1400, 0, 2.965))))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for front-left */}
                    {
                      props.sim_case_label_data["Front-Left"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(((props.Case_Width / 2) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))) / 2)),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Left"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Length / 2)]
                          :
                          [
                            (props.Case_Length / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Left"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Width / 2) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))) / 2))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965)),
                              0.0041
                            ]
                            :
                            [
                              0.0041,
                              (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965)),
                              (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965)))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Left"].labely, 0, 1400, 0, 2.965)),
                            -(((props.Case_Length / 2) - ((map(props.sim_case_label_data["Front-Left"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965)))) / 2))),
                          ]
                          :
                          [
                            (((props.Case_Length / 2) - ((map(props.sim_case_label_data["Front-Left"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965)))) / 2))),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Front-Left"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0041,
                              (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965)),
                              (map(props.sim_case_label_data["Front-Left"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965))))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Front-Left"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - (map(props.sim_case_label_data["Front-Left"].labelx, 0, 1400, 0, 2.965)))),
                              (map(props.sim_case_label_data["Front-Left"].labelheight, 0, 1400, 0, 2.965)),
                              0.0041
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                      </>
                    }


                    {/* label for right-back */}
                    {
                      props.sim_case_label_data["Right-Back"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            ((props.Case_Width / 2) - ((props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)) / 2)),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Length / 2)
                          ]
                          :
                          [
                            -(props.Case_Length / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right-Back"].labely, 0, 1400, 0, 2.965)),
                            ((props.Case_Width / 2) - ((props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)) / 2))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)),
                              (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965)),
                              0.0041
                            ]
                            :
                            [
                              0.0041,
                              (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965)),
                              (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>

                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            (props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right-Back"].labely, 0, 1400, 0, 2.965)),
                            (((props.Case_Length / 2) - ((map(props.sim_case_label_data["Right-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965))) / 2))),
                          ]
                          :
                          [
                            -(((props.Case_Length / 2) - ((map(props.sim_case_label_data["Right-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965))) / 2))),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Right-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0041,
                              (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965)),
                              (map(props.sim_case_label_data["Right-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965)))
                            ]
                            :
                            [
                              (map(props.sim_case_label_data["Right-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Width - map(props.sim_case_label_data["Right-Back"].labelx, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Right-Back"].labelheight, 0, 1400, 0, 2.965)),
                              0.0041
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* label for left-back */}
                    {
                      props.sim_case_label_data["Left-Back"] !== undefined
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -(props.Case_Width / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left-Back"].labely, 0, 1400, 0, 2.965)),
                            ((props.Case_Length / 2) - ((props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965))) / 2)),
                          ]
                          :
                          [
                            -((props.Case_Length / 2) - ((props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965))) / 2)),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left-Back"].labely, 0, 1400, 0, 2.965)),
                            -(props.Case_Width / 2)
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              0.0041,
                              (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965)),
                              (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))
                            ]
                            :
                            [
                              (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965))),
                              (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965)),
                              0.0041
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                        <mesh position={caseValue.orientation == "Width"
                          ?
                          [
                            -((props.Case_Width / 2) - ((map(props.sim_case_label_data["Left-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))) / 2)),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left-Back"].labely, 0, 1400, 0, 2.965)),
                            (props.Case_Length / 2)]
                          :
                          [
                            -(props.Case_Length / 2),
                            (((props.Case_Height / 2) - (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965) / 2)) - map(props.sim_case_label_data["Left-Back"].labely, 0, 1400, 0, 2.965)),
                            -((props.Case_Width / 2) - ((map(props.sim_case_label_data["Left-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))) / 2))
                          ]}
                          receiveShadow>
                          <boxGeometry attach="geometry" args={caseValue.orientation == "Width"
                            ?
                            [
                              (map(props.sim_case_label_data["Left-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965)))),
                              (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965)),
                              0.0041
                            ]
                            :
                            [
                              0.0041,
                              (map(props.sim_case_label_data["Left-Back"].labelheight, 0, 1400, 0, 2.965)),
                              (map(props.sim_case_label_data["Left-Back"].labelwidth, 0, 1400, 0, 2.965) - (props.Case_Length - (map(props.sim_case_label_data["Left-Back"].labelx, 0, 1400, 0, 2.965))))
                            ]} />
                          <meshStandardMaterial attach="material" color={"#ffffff"} />
                        </mesh>
                      </>
                    }

                    {/* line top-bottom */}
                    {
                      (new_line_position == "Topside" || new_line_position == "Bottomside")
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        {new_line_rotation == "Vertical" ?
                          <>
                            <mesh position={[0, (props.Case_Height / 2), 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [map(40, 0, 1400, 0, props.Case_Width), 0.0041, props.Case_Length] : [props.Case_Length, 0.0041, map(40, 0, 1400, 0, props.Case_Width)]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>
                            <mesh position={[0, -(props.Case_Height / 2), 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [map(40, 0, 1400, 0, props.Case_Width), 0.0041, props.Case_Length] : [props.Case_Length, 0.0041, map(40, 0, 1400, 0, props.Case_Width)]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>
                          </>
                          :
                          <>
                            <mesh position={[0, (props.Case_Height / 2), 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [props.Case_Width, 0.0041, map(40, 0, 1400, 0, props.Case_Length)] : [map(40, 0, 1400, 0, props.Case_Length), 0.0041, props.Case_Width]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>

                            <mesh position={[0, -(props.Case_Height / 2), 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [props.Case_Width, 0.0041, map(40, 0, 1400, 0, props.Case_Length)] : [map(40, 0, 1400, 0, props.Case_Length), 0.0041, props.Case_Width]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>
                          </>
                        }
                      </>
                    }

                    {/* line front-back */}
                    {
                      (new_line_position == "Frontside" || new_line_position == "Backside")
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        {new_line_rotation == "Vertical" ?
                          <>
                            <mesh position={caseValue.orientation == "Width" ? [0, 0, (props.Case_Length / 2)] : [(props.Case_Length / 2), 0, 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [map(40, 0, 1400, 0, props.Case_Width), props.Case_Height, 0.0041] : [0.0041, props.Case_Height, map(40, 0, 1400, 0, props.Case_Width)]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>
                            <mesh position={caseValue.orientation == "Width" ? [0, 0, -(props.Case_Length / 2)] : [-(props.Case_Length / 2), 0, 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [map(40, 0, 1400, 0, props.Case_Width), props.Case_Height, 0.0041] : [0.0041, props.Case_Height, map(40, 0, 1400, 0, props.Case_Width)]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>
                          </>
                          :
                          <>
                            <mesh position={caseValue.orientation == "Width" ? [0, 0, (props.Case_Length / 2)] : [(props.Case_Length / 2), 0, 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [props.Case_Width, map(40, 0, 1400, 0, props.Case_Length), 0.0041] : [0.0041, map(40, 0, 1400, 0, props.Case_Length), props.Case_Width]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>

                            <mesh position={caseValue.orientation == "Width" ? [0, 0, -(props.Case_Length / 2)] : [-(props.Case_Length / 2), 0, 0]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [props.Case_Width, map(40, 0, 1400, 0, props.Case_Length), 0.0041] : [0.0041, map(40, 0, 1400, 0, props.Case_Length), props.Case_Width]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>
                          </>
                        }
                      </>
                    }

                    {/* line right-left */}
                    {
                      (new_line_position == "Leftside" || new_line_position == "Rightside")
                      &&
                      start[i].intermediatelayer == false
                      &&
                      <>
                        {new_line_rotation == "Vertical" ?
                          <>
                            <mesh position={caseValue.orientation == "Width" ? [(props.Case_Width / 2), 0, 0] : [0, 0, (props.Case_Width / 2)]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.0041, props.Case_Height, map(40, 0, 1400, 0, props.Case_Length)] : [map(40, 0, 1400, 0, props.Case_Length), props.Case_Height, 0.0041]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>
                            <mesh position={caseValue.orientation == "Width" ? [-(props.Case_Width / 2), 0, 0] : [0, 0, -(props.Case_Width / 2)]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.0041, props.Case_Height, map(40, 0, 1400, 0, props.Case_Length)] : [map(40, 0, 1400, 0, props.Case_Length), props.Case_Height, 0.0041]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>
                          </>
                          :
                          <>
                            <mesh position={caseValue.orientation == "Width" ? [(props.Case_Width / 2), 0, 0] : [0, 0, (props.Case_Width / 2)]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.0041, map(40, 0, 1400, 0, props.Case_Height), props.Case_Length] : [props.Case_Length, map(40, 0, 1400, 0, props.Case_Height), 0.0041]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>

                            <mesh position={caseValue.orientation == "Width" ? [-(props.Case_Width / 2), 0, 0,] : [0, 0, -(props.Case_Width / 2)]} receiveShadow>
                              <boxGeometry attach="geometry" args={caseValue.orientation == "Width" ? [0.0041, map(40, 0, 1400, 0, props.Case_Height), props.Case_Length] : [props.Case_Length, map(40, 0, 1400, 0, props.Case_Height), 0.0041]} />
                              <meshStandardMaterial map={blackTexture} attach="material" color={"#000000"} />
                            </mesh>
                          </>
                        }
                      </>
                    }

                  </mesh >
                }
              </>
            })
          }
        </>}
    </>
  );
};

export default BlocksLevels;
