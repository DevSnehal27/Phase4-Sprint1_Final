import React, { useState, useRef ,useEffect} from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ThreedBuildModal from "./simComponents/BuildingModal3d";
import CaptureBuildingModal from "./simComponents/CaptureBuildingModal3d";
import SingleCaseModal from "./simComponents/SingleCaseModal";
import EmptyCaseModal from "./simComponents/CssesFor2d/EmptyCaseModal";
import FrontCaseModal from "./simComponents/CssesFor2d/FrontCaseModal";
import TopCaseModal from "./simComponents/CssesFor2d/TopCaseModal";
import BackCaseModal from "./simComponents/CssesFor2d/BackCaseModal";
import RightCaseModal from "./simComponents/CssesFor2d/RightCaseModal";
import LeftCaseModal from "./simComponents/CssesFor2d/LeftCaseModal";
import TopBackCaseModal from "./simComponents/CssesFor2d/TopBackCaseModal";
import TopFrontCaseModal from "./simComponents/CssesFor2d/TopFrontCaseModal";
import TopLeftCaseModal from "./simComponents/CssesFor2d/TopLeftCaseModal";
import TopRightCaseModal from "./simComponents/CssesFor2d/TopRightCaseModal";
import FrontLeftCaseModal from "./simComponents/CssesFor2d/FrontLeftCaseModal";
import FrontRightCaseModal from "./simComponents/CssesFor2d/FrontRightCaseModal";
import LeftBackCaseModal from "./simComponents/CssesFor2d/LeftBackCaseModal";
import RightBackCaseModal from "./simComponents/CssesFor2d/RightBackCaseModal";
import Grid from '@mui/material/Grid';

// import "./App.css";


let Pallet;
let CapturePallet;

let EmptyCase;
let FrontCase;
let TopCase;
let BackCase;
let RightCase;
let LeftCase;
let TopBackCase;
let TopFrontCase;
let TopLeftCase;
let TopRightCase;
let FrontLeftCase;
let FrontRightCase;
let LeftBackCase;
let RightBackCase;

function Simulation(props) {
  // console.log("simulation checking case_Type", props.case_Type)
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
      window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);



  Pallet = useRef(null);
  CapturePallet = useRef(null);
  EmptyCase = useRef(null);
  FrontCase = useRef(null);
  TopCase = useRef(null);
  BackCase = useRef(null);
  RightCase = useRef(null);
  LeftCase = useRef(null);
  TopBackCase = useRef(null);
  TopFrontCase = useRef(null);
  TopLeftCase = useRef(null);
  TopRightCase = useRef(null);
  FrontLeftCase = useRef(null);
  FrontRightCase = useRef(null);
  LeftBackCase = useRef(null);
  RightBackCase = useRef(null);

  return (
    <>
      <div style={{ zIndex: 12, height: "371px" }}>
        {/* <div style={{zIndex: 12, borderStyle: "solid"}}> */}
        <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={Pallet} id="three-canvas-container" shadows>
          <Suspense fallback={null}>
            <ThreedBuildModal
              simulationSpeed={props.simulationSpeed}
              intermediate_Layer_Type_Length={props.intermediate_Layer_Type_length}
              intermediate_Layer_Type_Width={props.intermediate_Layer_Type_Width}
              simulationRunning={props.simulationRunning}
              Pallet_Length={props.Pallet_Length}
              Pallet_Width={props.Pallet_Width}
              Case_Length={props.Case_Length}
              Case_Width={props.Case_Width}
              Case_Height={props.Case_Height}
              pallet_xpos={props.pallet_xpos}
              pallet_ypos={props.pallet_ypos}
              simCasesPositionsForSchemaA={props.simCasesPositionsForSchemaA}
              simCasesPositionsForSchemaB={props.simCasesPositionsForSchemaB}
              simCasesPositionsForSchemaC={props.simCasesPositionsForSchemaC}
              layer_data={props.layer_data}
              S_state={props.S_state}
              intermediate_Layer_Type={props.intermediate_Layer_Type}
              handleAbortSimulation={props.handleAbortSimulation}
              handleSimulationPassed={props.handleSimulationPassed}
              WA_1_width_X_Dir={props.WA_1_width_X_Dir}
              WA_1_Length_Y_Dir={props.WA_1_Length_Y_Dir}
              WA_2_width_X_Dir={props.WA_2_width_X_Dir}
              WA_2_Length_Y_Dir={props.WA_2_Length_Y_Dir}
              WA_1_Offset_X_Dir={props.WA_1_Offset_X_Dir}
              WA_1_Offset_Y_Dir={props.WA_1_Offset_Y_Dir}
              WA_2_Offset_X_Dir={props.WA_2_Offset_X_Dir}
              WA_2_Offset_Y_Dir={props.WA_2_Offset_Y_Dir}
              selectedOne={props.selectedOne}
              selectedTwo={props.selectedTwo}
              originPal1={props.originPal1}
              originPal2={props.originPal2}
              case_Type={props.case_Type}
              t={props.t}
              setDownloadablePDF={props.setDownloadablePDF}
              abordSimulation={props.abordSimulation}
              Case_Height_Original={props.Case_Height_Original}
              noOfLayers={props.noOfLayers}
              simulationToast = {props.simulationToast}
            // callSchema1={props.callSchema1}

              secondSetPrePosY={props.secondSetPrePosY}
              secondSetPrePosX={props.secondSetPrePosX}
              secondSetPrePosZ={props.secondSetPrePosZ}
              secondSetPrePosZForMap={props.secondSetPrePosZForMap}
              

              xPosRD={props.xPosRD}
              yPosRD={props.yPosRD}

            />
          </Suspense>
        </Canvas>
      </div>
  {/* <h2 style={{marginTop: "10%"}}>Width: {windowSize.innerWidth}</h2>
    <h2>Height: {windowSize.innerHeight}</h2> */}
      <div style={{
        zIndex: 12,
        // display: "none"
        marginTop: "900px",
        marginLeft:windowSize.innerWidth>3000?(windowSize.innerWidth/10)+50:(windowSize.innerWidth/10)+100,
      }} className="CaptureDiv">
        <Grid>
          <Grid>
            {/* <Canvas id="three-canvas-container" shadows>
          <Suspense fallback={null}>
            <SingleCaseModal
              Case_Width={props.Case_Width}
              Case_Height={props.Case_Height}
              Case_Length={props.Case_Length}
              case_Type={props.case_Type}
            />
          </Suspense>
        </Canvas> */}
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={CapturePallet} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <CaptureBuildingModal
                  simulationSpeed={props.simulationSpeed}
                  simulationRunning={props.simulationRunning}
                  Pallet_Length={props.Pallet_Length}
                  Pallet_Width={props.Pallet_Width}
                  Case_Length={props.Case_Length}
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  pallet_xpos={props.pallet_xpos}
                  pallet_ypos={props.pallet_ypos}
                  simCasesPositionsForSchemaA={props.simCasesPositionsForSchemaA}
                  simCasesPositionsForSchemaB={props.simCasesPositionsForSchemaB}
                  simCasesPositionsForSchemaC={props.simCasesPositionsForSchemaC}
                  layer_data={props.layer_data}
                  S_state={props.S_state}
                  intermediate_Layer_Type={props.intermediate_Layer_Type}
                  handleAbortSimulation={props.handleAbortSimulation}
                  handleSimulationPassed={props.handleSimulationPassed}
                  WA_1_width_X_Dir={props.WA_1_width_X_Dir}
                  WA_1_Length_Y_Dir={props.WA_1_Length_Y_Dir}
                  WA_2_width_X_Dir={props.WA_2_width_X_Dir}
                  WA_2_Length_Y_Dir={props.WA_2_Length_Y_Dir}
                  WA_1_Offset_X_Dir={props.WA_1_Offset_X_Dir}
                  WA_1_Offset_Y_Dir={props.WA_1_Offset_Y_Dir}
                  WA_2_Offset_X_Dir={props.WA_2_Offset_X_Dir}
                  WA_2_Offset_Y_Dir={props.WA_2_Offset_Y_Dir}
                  selectedOne={props.selectedOne}
                  selectedTwo={props.selectedTwo}
                  originPal1={props.originPal1}
                  originPal2={props.originPal2}
                  case_Type={props.case_Type}
                  t={props.t}
                  setDownloadablePDF={props.setDownloadablePDF}
                  abordSimulation={props.abordSimulation}
                  Case_Height_Original={props.Case_Height_Original}
                  noOfLayers={props.noOfLayers}
                // callSchema1={props.callSchema1}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={EmptyCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <EmptyCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={TopCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <TopCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={FrontCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <FrontCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={RightCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <RightCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={LeftCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <LeftCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={BackCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <BackCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={TopFrontCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <TopFrontCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={TopBackCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <TopBackCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={TopRightCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <TopRightCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={TopLeftCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <TopLeftCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={FrontLeftCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <FrontLeftCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={FrontRightCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <FrontRightCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={RightBackCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <RightBackCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>
            <Canvas gl={{ antialias: true, preserveDrawingBuffer: true }} ref={LeftBackCase} id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <LeftBackCaseModal
                  Case_Width={props.Case_Width}
                  Case_Height={props.Case_Height}
                  Case_Length={props.Case_Length}
                  case_Type={props.case_Type}
                />
              </Suspense>
            </Canvas>

          </Grid>

        </Grid>
      </div>

    </>

  );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}


export default Simulation;

export const GetPallet = () => { return Pallet.current; }
export const GetCapturePallet = () => { return CapturePallet.current; }

export const GetEmptyCase = () => { return EmptyCase.current; }
export const GetFrontCase = () => { return FrontCase.current; }
export const GetTopCase = () => { return TopCase.current; }
export const GetBackCase = () => { return BackCase.current; }
export const GetRightCase = () => { return RightCase.current; }
export const GetLeftCase = () => { return LeftCase.current; }
export const GetTopBackCase = () => { return TopBackCase.current; }
export const GetTopFrontCase = () => { return TopFrontCase.current; }
export const GetTopLeftCase = () => { return TopLeftCase.current; }
export const GetTopRightCase = () => { return TopRightCase.current; }
export const GetFrontLeftCase = () => { return FrontLeftCase.current; }
export const GetFrontRightCase = () => { return FrontRightCase.current; }
export const GetLeftBackCase = () => { return LeftBackCase.current; }
export const GetRightBackCase = () => { return RightBackCase.current; }
