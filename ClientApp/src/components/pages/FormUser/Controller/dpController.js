//PalletType & intermediateLayerType onChange :-
export const handleSelection_PalletType = (
    name,
    event,
    firstCaseOriginChangeFlush,
    setS_pallete_Type,
    G_palletType1,
    G_palletType2,
    updatefor_Basiparameter_working_Area,
    handleSelection_intermediateLayer,
    setPallete_Type,
    setintermediate_Layer_Type,
    setS_errorHelperForInter,
    setS_errorNumberOfInter,
    S1_dyMarginTop_swiperText,
    S1_dyMarginLeft_swiperText,
    S1_dyMarginBottom_swiperText,
    toast,
    clearingSchemaFields,

    G_dyMarginTop_swiperText,
    G_dyMarginLeft_swiperText,
    G_dyMarginBottom_swiperText,
    S_dyMarginTop_swiperText,
    S_dyMarginLeft_swiperText,
    S_dyMarginBottom_swiperText,

) => {


    if (event.target.value === "EU 6: 800 x 600") {
        S_dyMarginLeft_swiperText = ('-47px')
        S_dyMarginBottom_swiperText = ('50px')
        S_dyMarginTop_swiperText = ('50px')

        S1_dyMarginTop_swiperText('50px');
        S1_dyMarginLeft_swiperText('-47px');
        S1_dyMarginBottom_swiperText('50px');
       
    }
    if (event.target.value === "US 1: 1219 x 1016 ") {
        // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
        // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

        // G_dyMarginLeft_swiperText = ('90px')
        S_dyMarginLeft_swiperText = ('9px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')



        S1_dyMarginLeft_swiperText('9px');
        S1_dyMarginBottom_swiperText('50px');
        // S1_dyMarginBottom_swiperText('50px')
    }
    if (event.target.value === "EU 1: 1200 x 800") {
       
        S_dyMarginLeft_swiperText = ('-19px')
     
        S_dyMarginBottom_swiperText = ('50px')


        S1_dyMarginLeft_swiperText('-19px');
        S1_dyMarginBottom_swiperText('50px');
    }
    if (event.target.value === "EU 2: 1200 x 1000") {

        S_dyMarginLeft_swiperText = ('10px')
       
        S_dyMarginBottom_swiperText = ('11px')


        S1_dyMarginLeft_swiperText('54px');
        S1_dyMarginBottom_swiperText('50px');
    }
    if (event.target.value === "AU 1: 1165 x 1165") {
        // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
        // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

        // G_dyMarginLeft_swiperText = ('100px')
        S_dyMarginLeft_swiperText = ('35px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')


        S1_dyMarginLeft_swiperText('35px');
        S1_dyMarginBottom_swiperText('50px');
    }

    if (event.target.value === "ASIA 1: 1100 x 1100") {

        // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
        // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

        // G_dyMarginLeft_swiperText = ('100px')
        S_dyMarginLeft_swiperText = ('37px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')


        // console.log("Inside PalletType onChange function event ::");

        S1_dyMarginLeft_swiperText('37px');
        S1_dyMarginBottom_swiperText('50px');
    }

    if (event.target.value === "US 2: 1067 x 1067") {

        // G_dyMarginLeft_swiperText = ('100px')
        S_dyMarginLeft_swiperText = ('29px')
        // G_dyMarginBottom_swiperText = ('50px')
        S_dyMarginBottom_swiperText = ('50px')


        console.log("Inside PalletType onChange function event :: ", G_dyMarginLeft_swiperText);

        S1_dyMarginLeft_swiperText('29px');
        S1_dyMarginBottom_swiperText('50px');
    }
    



    if (name === "palletType") {
        console.log("Inside PalletType onChange function event = " + event.target.value);
        firstCaseOriginChangeFlush("pltType");
        clearingSchemaFields("palletType");
        // this.setState({
        //     pallete_Type: event.target.value
        // });
        setS_pallete_Type(event.target.value);

        G_palletType1 = event.target.value;
        G_palletType2 = event.target.value;
        // toast.info(" Please Change the WorkArea offset from Basic parameter ", { autoClose: 2000, position: toast.POSITION.TOP_CENTER });


        updatefor_Basiparameter_working_Area(event.target.value);
    }

    if (name === "intermediateLayerType") {
        console.log("Inside AAAA event = " + event.target.value);
        if (event.target.value === "" || event.target.value <= 0 || event.target.value > 10) {
            // S_errorHelperForInter = "Enter in 1 - 10"
            // S_errorNumberOfInter = true;
            setS_errorHelperForInter(" 1 - 10")
            setS_errorNumberOfInter(true)
        }

        else {
            // S_errorHelperForInter = ""
            // S_errorNumberOfInter = false;
            setS_errorHelperForInter("")
            setS_errorNumberOfInter(false)
        }
        // this.setState({
        //     intermediate_Layer_Type: event.target.value
        // });
        setintermediate_Layer_Type(event.target.value);
        if (event.target.value < 0) {
            setintermediate_Layer_Type(0);
        }
        if (event.target.value > 10) {
            setintermediate_Layer_Type(10);
        }
    }

    const selected = event.target.value;
    handleSelection_intermediateLayer(selected);

};

//CaseType onChange :-
export const handleSelection_CaseType = (
    name,
    event,
    G_drawCaseImage,
    setS_outside_Label_Priority,
    G_outside_Label_Priority,
    splitCaseType,
    G_listForOutsideLabelPrior,
    getCallLabel,
    G_typeoptions5,
    G_caseType,
    selectedOne,
    selectedTwo,
    firstCaseOriginChangeFlush,
    G_tempLabelindex,
    setS_case_Type,
    clearingSchemaFields,
    setS_setDefaultCase,
    setS_caseTypeSet,

) => {

    G_drawCaseImage = true;
    if (selectedOne) {

        setS_outside_Label_Priority(G_outside_Label_Priority);

    } else if (selectedTwo) {

        setS_outside_Label_Priority(G_outside_Label_Priority);
    }
    const selected = event.target.value;

    splitCaseType(selected);
    console.log("handleSelection_CaseType G_listForOutsideLabelPrior bef..... " + G_listForOutsideLabelPrior)
    G_listForOutsideLabelPrior = [];

    getCallLabel(selected);
    G_typeoptions5 = [];

    G_caseType = event.target.value;

    if (name === "caseType") {
        firstCaseOriginChangeFlush("pal1");
        firstCaseOriginChangeFlush("pal2");
        G_tempLabelindex = 0;
        if (selectedOne) {

            setS_case_Type(event.target.value);
        } else {

            setS_case_Type(event.target.value);
        }
        clearingSchemaFields(name);

        setS_case_Type(event.target.value);
    }


    setS_setDefaultCase(selected);

    if (name == "caseType") {

        setS_caseTypeSet(true);
    }
};

//No Of Layers onChange :-
export const changeLayer = (
    event,
    setS_errorNumberOfLayer,
    setS_errorHelperForLayer,
    setS_layers,
    G_noOfLayers,
    setS_no_Of_Layers,
    height,
    set_WA_1_Height_Z_Dir,
    set_WA_2_Height_Z_Dir,
    pallet
) => {

    // this.setState({
    //     errorNumberOfLayer: false
    // });
    var maxLayers
    if(pallet===1){
        maxLayers=parseInt(set_WA_1_Height_Z_Dir/height[3])

    }
    if(pallet===2){
    maxLayers=parseInt(set_WA_2_Height_Z_Dir/height[3])

    }
    console.log(set_WA_1_Height_Z_Dir,maxLayers,"maxLayers",set_WA_2_Height_Z_Dir,pallet)
    
    setS_errorNumberOfLayer(false);
    // this.state.errorHelperForLayer = ""
    setS_errorHelperForLayer("");

    if (event.target.value < 0 || event.target.value > maxLayers) {
        // this.setState({
        //     errorNumberOfLayer: true
        // });
        setS_errorNumberOfLayer(true);
        // this.state.errorHelperForLayer = "Enter in 1 - 50"
        setS_errorHelperForLayer(` 1 - ${maxLayers}`);
    }
    else if (event.target.value == "" || event.target.value <= 0) {
        // this.setState({
        //     errorNumberOfLayer: true
        // });
        setS_errorNumberOfLayer(true);
        // this.state.errorHelperForLayer = "Enter in 1 - 50"
        setS_errorHelperForLayer(` 1 - ${maxLayers}`);
    }
    else {
        // this.setState({
        //     errorNumberOfLayer: false
        // });
        setS_errorNumberOfLayer(false);
        // this.state.errorHelperForLayer = ""
        setS_errorHelperForLayer("");
    }
    if (event.target.value <= maxLayers) {
        if (event.target.value < 0) {
            setS_layers(1);
            event.target.value = 1;
        }
    }
    else {
        // this.setState({
        //     errorNumberOfLayer: false
        // });
        setS_errorNumberOfLayer(false);
        // this.state.errorHelperForLayer = ""
        setS_errorHelperForLayer("");
        // this.state.layers = 50;
        setS_layers(maxLayers);
        event.target.value = maxLayers;
    }

    G_noOfLayers = event.target.value;

    setS_layers(G_noOfLayers);

    // this.setState({
    //     no_Of_Layers: event.target.value,
    //     layers: event.target.value
    // });
    setS_no_Of_Layers(event.target.value);
    setS_layers(event.target.value);
}

// SchemaA onChange :-
export const handleChangeForCasesSchemaA = (
    name,
    event,
    G_setVariantName_SchemaA,
    G_cases_Schema_A1,
    G_CasesSchemaA,
    G_cases_Schema_A2,
    G_colorA,
    G_colorB,
    G_colorC,
    setSetVariantName_SchemaA,
    setCases_Schema_A,
    casesSchemaPrcUpdate,
    forceUpdate,
    clearingSchemaFields1,
    firstCaseOriginChangeFlushA

) => {

    if (event.target.value == 0) {
        G_setVariantName_SchemaA = "";

        setSetVariantName_SchemaA("");
    }

    G_cases_Schema_A1 = event.target.value;
    G_CasesSchemaA = G_cases_Schema_A1;
    G_cases_Schema_A2 = event.target.value;
    G_CasesSchemaA = G_cases_Schema_A2;


    if (event.target.value < 0) {
        G_cases_Schema_A1 = 0;
        G_CasesSchemaA = G_cases_Schema_A1;
        G_cases_Schema_A2 = 0;
        G_CasesSchemaA = G_cases_Schema_A2;
    }

    console.log("Enter in dp controller zero condition G_cases_Schema_A1 : " + G_cases_Schema_A1)
    console.log("Enter in dp controller zero condition G_CasesSchemaA : " + G_CasesSchemaA)

    setCases_Schema_A(G_CasesSchemaA);
    G_colorA = '#5eb8b3';
    G_colorB = '';
    G_colorC = '';

    casesSchemaPrcUpdate(G_CasesSchemaA, "handleChangeForCasesSchema", "Schema A");
    clearingSchemaFields1("Schema-A");
    firstCaseOriginChangeFlushA("CasesSchemaA");

    // forceUpdate();
}

// SchemaB onChange :-
export const handleChangeForCasesSchemaB = (
    name,
    event,
    G_setVariantName_SchemaB,
    G_cases_Schema_B1,
    G_CasesSchemaB,
    G_cases_Schema_B2,
    G_colorA,
    G_colorB,
    G_colorC,
    setSetVariantName_SchemaB,
    setCases_Schema_B,
    forceUpdate,
    casesSchemaPrcUpdate,
    clearingSchemaFields1,
    firstCaseOriginChangeFlushB

) => {
    if (event.target.value == 0) {
        G_setVariantName_SchemaB = "";

        setSetVariantName_SchemaB("");
    }

    G_cases_Schema_B1 = event.target.value;
    G_CasesSchemaB = G_cases_Schema_B1;
    G_cases_Schema_B2 = event.target.value;
    G_CasesSchemaB = G_cases_Schema_B2;

    if (event.target.value < 0) {
        G_cases_Schema_B1 = 0;
        G_CasesSchemaB = G_cases_Schema_B1;
        G_cases_Schema_B2 = 0;
        G_CasesSchemaB = G_cases_Schema_B2;
    }

    setCases_Schema_B(G_CasesSchemaB);
    G_colorA = '';
    G_colorB = '#5eb8b3';
    G_colorC = '';
    casesSchemaPrcUpdate(G_CasesSchemaB, "handleChangeForCasesSchema", "Schema B");
    // forceUpdate();
    clearingSchemaFields1("Schema-B");
    firstCaseOriginChangeFlushB("CasesSchemaB");
}

// Intermediate onBlur :-
export const updateSelection3 = (
    event,
    name,
    updatePallet,
    G_intermediateLayerType1,
    G_intermediateLayerType2,
    setS_errorHelperForInter,
    setS_errorNumberOfInter,
    setS_intermediate_Layer_Type) => {


    if (name === "intermediateLayerType") {

        if (event.target.value === "" || event.target.value <= 0) {
            // S_errorHelperForInter = " 1 - 10";
            setS_errorHelperForInter(" 1 - 10")
            setS_errorNumberOfInter(true)
            // S_errorNumberOfInter = true;
            event.target.value = 1;
            // S_intermediate_Layer_Type = 1;
            setS_intermediate_Layer_Type(1);

        }

        else {
            // S_errorHelperForInter = "";
            setS_errorHelperForInter("")
            // S_errorNumberOfInter = false;
            setS_errorNumberOfInter(false)
        }

        if (event.target.value > 10) {

            // S_errorHelperForInter = " 1 - 10";
            setS_errorHelperForInter(" 1 - 10")
            // S_errorNumberOfInter = true;
            setS_errorNumberOfInter(true)
            event.target.value = 10;
            // S_errorHelperForInter = "";
            setS_errorHelperForInter("")
            // S_intermediate_Layer_Type = 10;
            setS_intermediate_Layer_Type(10);
        }

        else {
            // S_errorHelperForInter = "";
            setS_errorHelperForInter("")
            // S_errorNumberOfInter = false;
            setS_errorNumberOfInter(false)
        }

        setS_intermediate_Layer_Type(event.target.value);
        G_intermediateLayerType1 = event.target.value;
        G_intermediateLayerType2 = event.target.value;

    }

    for (let i = 1; i < 3; i++) {
        updatePallet(i);
    }
};

export const handleSelectionForinterWidth = (
    name,
    event,
    firstCaseOriginChangeFlush,
    setS_pallete_Type,
    G_palletType1,
    G_palletType2,
    updatefor_Basiparameter_working_Area,
    handleSelection_intermediateLayer,
    setPallete_Type,
    setS_errorHelperForInterWidth,
    setS_errorNumberOfInterWidth,
    setS_intermediate_Layer_Width,
    S1_dyMarginTop_swiperText,
    S1_dyMarginLeft_swiperText,
    S1_dyMarginBottom_swiperText,
    toast,
    clearingSchemaFields,

    G_dyMarginTop_swiperText,
    G_dyMarginLeft_swiperText,
    G_dyMarginBottom_swiperText,
    S_dyMarginTop_swiperText,
    S_dyMarginLeft_swiperText,
    S_dyMarginBottom_swiperText,


) => {
    console.log(G_palletType1, "G_palletType1")
    console.log(G_palletType2, "G_palletType2")

    ////
    // if (event.target.value === "EU 6: 800 x 600") {

    //     // G_dyMarginTop_swiperText = S_dyMarginTop_swiperText
    //     // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
    //     // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

    //     // G_dyMarginLeft_swiperText = ('60px')
    //     S_dyMarginLeft_swiperText = ('-4px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')
    //     // G_dyMarginTop_swiperText = ('50px')
    //     S_dyMarginTop_swiperText = ('50px')




    //     // this.setState({
    //     //     // dyMarginTop_swiper: '-10px',
    //     //     dyMarginTop_swiperText: '50px',
    //     // })
    //     S1_dyMarginTop_swiperText('50px');
    //     S1_dyMarginLeft_swiperText('-4px');
    //     S1_dyMarginBottom_swiperText('50px');
    //     console.log(" this.state.dyMarginTop_swiper ", S1_dyMarginTop_swiperText);
    // }
    // if (event.target.value === "US 1: 1219 x 1016 ") {
    //     // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
    //     // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

    //     // G_dyMarginLeft_swiperText = ('90px')
    //     S_dyMarginLeft_swiperText = ('64px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')



    //     S1_dyMarginLeft_swiperText('64px');
    //     S1_dyMarginBottom_swiperText('50px');
    //     // S1_dyMarginBottom_swiperText('50px')
    // }
    // if (event.target.value === "EU 1: 1200 x 800") {
    //     // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
    //     // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

    //     // G_dyMarginLeft_swiperText = ('75px')
    //     S_dyMarginLeft_swiperText = ('27px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')


    //     S1_dyMarginLeft_swiperText('27px');
    //     S1_dyMarginBottom_swiperText('50px');
    // }
    // if (event.target.value === "EU 2: 1200 x 1000") {

    //     // G_dyMarginLeft_swiperText = ('90px');
    //     // G_dyMarginBottom_swiperText = ('50px')

    //     // G_dyMarginLeft_swiperText = ('90px')
    //     S_dyMarginLeft_swiperText = ('54px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('11px')


    //     S1_dyMarginLeft_swiperText('54px');
    //     S1_dyMarginBottom_swiperText('50px');
    // }
    // if (event.target.value === "AU 1: 1165 x 1165") {
    //     // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
    //     // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

    //     // G_dyMarginLeft_swiperText = ('100px')
    //     S_dyMarginLeft_swiperText = ('85px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')


    //     S1_dyMarginLeft_swiperText('85px');
    //     S1_dyMarginBottom_swiperText('50px');
    // }

    // if (event.target.value === "ASIA 1: 1100 x 1100") {

    //     // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
    //     // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

    //     // G_dyMarginLeft_swiperText = ('100px')
    //     S_dyMarginLeft_swiperText = ('70px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')


    //     // console.log("Inside PalletType onChange function event ::");

    //     S1_dyMarginLeft_swiperText('70px');
    //     S1_dyMarginBottom_swiperText('50px');
    // }

    // if (event.target.value === "US 2: 1067 x 1067") {

    //     // G_dyMarginLeft_swiperText = ('100px')
    //     S_dyMarginLeft_swiperText = ('71px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')


    //     console.log("Inside PalletType onChange function event :: ", G_dyMarginLeft_swiperText);

    //     S1_dyMarginLeft_swiperText('71px');
    //     S1_dyMarginBottom_swiperText('50px');
    // }

    var width = 0;
    if (G_palletType1 == "EU 6: 800 x 600") {
        width = 600
    }
    if (G_palletType1 == "ASIA 1: 1100 x 1100") {
        width = 1100
    }
    if (G_palletType1 == "US 2: 1067 x 1067") {
        width = 1067
    }
    if (G_palletType1 == "US 1: 1219 x 1016 ") {
        width = 1016
    }
    if (G_palletType1 == "EU 1: 1200 x 800") {
        width = 800
    }
    if (G_palletType1 == "EU 2: 1200 x 1000") {
        width = 1000
    }
    if (G_palletType1 == "AU 1: 1165 x 1165") {
        width = 1165
    }
    if (name === "intermediateLayerWidth") {
        console.log("Inside AAAA event = " + event.target.value);

        if (event.target.value === "" || event.target.value <= 0 || event.target.value > width) {

            setS_errorHelperForInterWidth(`1 - ${width}`)
            setS_errorNumberOfInterWidth(true)
        }

        else {

            setS_errorHelperForInterWidth("")
            setS_errorNumberOfInterWidth(false)
        }

        setS_intermediate_Layer_Width(event.target.value);
    }

    const selected = event.target.value;
    handleSelection_intermediateLayer(selected);

};
export const handleSelectionForinterLength = (
    name,
    event,
    firstCaseOriginChangeFlush,
    setS_pallete_Type,
    G_palletType1,
    G_palletType2,
    updatefor_Basiparameter_working_Area,
    handleSelection_intermediateLayer,
    setPallete_Type,
    setS_errorHelperForInterLength,
    setS_errorNumberOfInterLength,
    setS_intermediate_Layer_Length,
    S1_dyMarginTop_swiperText,
    S1_dyMarginLeft_swiperText,
    S1_dyMarginBottom_swiperText,
    toast,
    clearingSchemaFields,

    G_dyMarginTop_swiperText,
    G_dyMarginLeft_swiperText,
    G_dyMarginBottom_swiperText,
    S_dyMarginTop_swiperText,
    S_dyMarginLeft_swiperText,
    S_dyMarginBottom_swiperText,


) => {
    console.log(G_palletType1, "G_palletType1")
    console.log(G_palletType2, "G_palletType2")

    ////
    // if (event.target.value === "EU 6: 800 x 600") {

    //     // G_dyMarginTop_swiperText = S_dyMarginTop_swiperText
    //     // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
    //     // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

    //     // G_dyMarginLeft_swiperText = ('60px')
    //     S_dyMarginLeft_swiperText = ('-4px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')
    //     // G_dyMarginTop_swiperText = ('50px')
    //     S_dyMarginTop_swiperText = ('50px')




    //     // this.setState({
    //     //     // dyMarginTop_swiper: '-10px',
    //     //     dyMarginTop_swiperText: '50px',
    //     // })
    //     S1_dyMarginTop_swiperText('50px');
    //     S1_dyMarginLeft_swiperText('-4px');
    //     S1_dyMarginBottom_swiperText('50px');
    //     console.log(" this.state.dyMarginTop_swiper ", S1_dyMarginTop_swiperText);
    // }
    // if (event.target.value === "US 1: 1219 x 1016 ") {
    //     // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
    //     // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

    //     // G_dyMarginLeft_swiperText = ('90px')
    //     S_dyMarginLeft_swiperText = ('64px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')



    //     S1_dyMarginLeft_swiperText('64px');
    //     S1_dyMarginBottom_swiperText('50px');
    //     // S1_dyMarginBottom_swiperText('50px')
    // }
    // if (event.target.value === "EU 1: 1200 x 800") {
    //     // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
    //     // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

    //     // G_dyMarginLeft_swiperText = ('75px')
    //     S_dyMarginLeft_swiperText = ('27px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')


    //     S1_dyMarginLeft_swiperText('27px');
    //     S1_dyMarginBottom_swiperText('50px');
    // }
    // if (event.target.value === "EU 2: 1200 x 1000") {

    //     // G_dyMarginLeft_swiperText = ('90px');
    //     // G_dyMarginBottom_swiperText = ('50px')

    //     // G_dyMarginLeft_swiperText = ('90px')
    //     S_dyMarginLeft_swiperText = ('54px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('11px')


    //     S1_dyMarginLeft_swiperText('54px');
    //     S1_dyMarginBottom_swiperText('50px');
    // }
    // if (event.target.value === "AU 1: 1165 x 1165") {
    //     // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
    //     // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

    //     // G_dyMarginLeft_swiperText = ('100px')
    //     S_dyMarginLeft_swiperText = ('85px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')


    //     S1_dyMarginLeft_swiperText('85px');
    //     S1_dyMarginBottom_swiperText('50px');
    // }

    // if (event.target.value === "ASIA 1: 1100 x 1100") {

    //     // G_dyMarginLeft_swiperText = S_dyMarginLeft_swiperText
    //     // G_dyMarginBottom_swiperText = S_dyMarginBottom_swiperText

    //     // G_dyMarginLeft_swiperText = ('100px')
    //     S_dyMarginLeft_swiperText = ('70px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')


    //     // console.log("Inside PalletType onChange function event ::");

    //     S1_dyMarginLeft_swiperText('70px');
    //     S1_dyMarginBottom_swiperText('50px');
    // }

    // if (event.target.value === "US 2: 1067 x 1067") {

    //     // G_dyMarginLeft_swiperText = ('100px')
    //     S_dyMarginLeft_swiperText = ('71px')
    //     // G_dyMarginBottom_swiperText = ('50px')
    //     S_dyMarginBottom_swiperText = ('50px')


    //     console.log("Inside PalletType onChange function event :: ", G_dyMarginLeft_swiperText);

    //     S1_dyMarginLeft_swiperText('71px');
    //     S1_dyMarginBottom_swiperText('50px');
    // }

    var Length = 0
    if (G_palletType1 == "EU 6: 800 x 600") {
        Length = 800
    }
    if (G_palletType1 == "ASIA 1: 1100 x 1100") {
        Length = 1100
    }
    if (G_palletType1 == "US 2: 1067 x 1067") {
        Length = 1067
    }
    if (G_palletType1 == "US 1: 1219 x 1016 ") {
        Length = 1219
    }
    if (G_palletType1 == "EU 1: 1200 x 800") {
        Length = 1200
    }
    if (G_palletType1 == "EU 2: 1200 x 1000") {
        Length = 1200
    }
    if (G_palletType1 == "AU 1: 1165 x 1165") {
        Length = 1165
    }
    if (name === "intermediateLayerLength") {
        console.log("Inside AAAA event = " + event.target.value);

        if (event.target.value === "" || event.target.value <= 0 || event.target.value > Length) {

            setS_errorHelperForInterLength(`1 - ${Length}`)
            setS_errorNumberOfInterLength(true)
        }

        else {

            setS_errorHelperForInterLength("")
            setS_errorNumberOfInterLength(false)
        }

        setS_intermediate_Layer_Length(event.target.value);
    }

    const selected = event.target.value;
    handleSelection_intermediateLayer(selected);

};



export const updateSelectionForWidth = (
    event,
    name,
    updatePallet,
    G_palletType1,
    G_palletType2,
    // G_intermediateLayerType1,
    // G_intermediateLayerType2,
    // setS_errorHelperForInter,
    // setS_errorNumberOfInter,
    // setS_intermediate_Layer_Type,
    setS_errorHelperForInterWidth,
    setS_errorNumberOfInterWidth,
    setS_intermediate_Layer_Width,) => {

    console.log(G_palletType1, "G_palletType1")
    var width = 0
    if (G_palletType1 == "EU 6: 800 x 600") {
        width = 800
    }
    if (G_palletType1 == "ASIA 1: 1100 x 1100") {
        width = 1100
    }
    if (G_palletType1 == "US 2: 1067 x 1067") {
        width = 1067
    }
    if (G_palletType1 == "US 1: 1219 x 1016 ") {
        width = 1219
    }
    if (G_palletType1 == "EU 1: 1200 x 800") {
        width = 1200
    }
    if (G_palletType1 == "EU 2: 1200 x 1000") {
        width = 1200
    }
    if (G_palletType1 == "AU 1: 1165 x 1165") {
        width = 1165
    }
    if (name === "intermediateLayerWidth") {

        if (event.target.value === "" || event.target.value <= 0) {
            // S_errorHelperForInter = " 1 - 10";
            setS_errorHelperForInterWidth(`1 - ${width}`)
            setS_errorNumberOfInterWidth(true)
            // S_errorNumberOfInter = true;
            event.target.value = 1;
            // S_intermediate_Layer_Type = 1;
            setS_intermediate_Layer_Width(1);

        }

        else {
            // S_errorHelperForInter = "";
            setS_errorHelperForInterWidth("")
            // S_errorNumberOfInter = false;
            setS_errorNumberOfInterWidth(false)
        }

        if (event.target.value > width) {

            // S_errorHelperForInter = " 1 - 10";
            setS_errorHelperForInterWidth(`1 - ${width}`)
            // S_errorNumberOfInter = true;
            setS_errorNumberOfInterWidth(true)
            event.target.value = width;
            // S_errorHelperForInter = "";
            setS_errorHelperForInterWidth("")
            // S_intermediate_Layer_Type = 10;
            setS_intermediate_Layer_Width(width);
        }

        else {
            // S_errorHelperForInter = "";
            setS_errorHelperForInterWidth("")
            // S_errorNumberOfInter = false;
            setS_errorNumberOfInterWidth(false)
        }

        setS_intermediate_Layer_Width(event.target.value);
        // G_intermediateLayerType1 = event.target.value;
        // G_intermediateLayerType2 = event.target.value;

    }


    for (let i = 1; i < 3; i++) {
        updatePallet(i);
    }
};

export const updateSelectionForLength = (
    event,
    name,
    updatePallet,
    G_palletType1,
    G_palletType2,
    // G_intermediateLayerType1,
    // G_intermediateLayerType2,
    // setS_errorHelperForInter,
    // setS_errorNumberOfInter,
    // setS_intermediate_Layer_Type,
    setS_errorHelperForInterLength,
    setS_errorNumberOfInterLength,
    setS_intermediate_Layer_Length,) => {

    console.log(G_palletType1, "G_palletType1")
    var Length = 0
    if (G_palletType1 == "EU 6: 800 x 600") {
        Length = 600
    }
    if (G_palletType1 == "ASIA 1: 1100 x 1100") {
        Length = 1100
    }
    if (G_palletType1 == "US 2: 1067 x 1067") {
        Length = 1067
    }
    if (G_palletType1 == "US 1: 1219 x 1016 ") {
        Length = 1016
    }
    if (G_palletType1 == "EU 1: 1200 x 800") {
        Length = 800
    }
    if (G_palletType1 == "EU 2: 1200 x 1000") {
        Length = 1000
    }
    if (G_palletType1 == "AU 1: 1165 x 1165") {
        Length = 1165
    }
    if (name === "intermediateLayerLength") {

        if (event.target.value === "" || event.target.value <= 0) {
            // S_errorHelperForInter = " 1 - 10";
            setS_errorHelperForInterLength(`1 - ${Length}`)
            setS_errorNumberOfInterLength(true)
            // S_errorNumberOfInter = true;
            event.target.value = 1;
            // S_intermediate_Layer_Type = 1;
            setS_intermediate_Layer_Length(1);

        }

        else {
            // S_errorHelperForInter = "";
            setS_errorHelperForInterLength("")
            // S_errorNumberOfInter = false;
            setS_errorNumberOfInterLength(false)
        }

        if (event.target.value > Length) {

            // S_errorHelperForInter = " 1 - 10";
            setS_errorHelperForInterLength(`1 - ${Length}`)
            // S_errorNumberOfInter = true;
            setS_errorNumberOfInterLength(true)
            event.target.value = Length;
            // S_errorHelperForInter = "";
            setS_errorHelperForInterLength("")
            // S_intermediate_Layer_Type = 10;
            setS_intermediate_Layer_Length(Length);
        }

        else {
            // S_errorHelperForInter = "";
            setS_errorHelperForInterLength("")
            // S_errorNumberOfInter = false;
            setS_errorNumberOfInterLength(false)
        }

        setS_intermediate_Layer_Length(event.target.value);
        // G_intermediateLayerType1 = event.target.value;
        // G_intermediateLayerType2 = event.target.value;

    }


    for (let i = 1; i < 3; i++) {
        updatePallet(i);
    }
};
// SchemaC onChange :-
export const handleChangeForCasesSchemaC = (
    name,
    event,
    G_setVariantName_SchemaC,
    setS_setVariantName_SchemaC,
    G_cases_Schema_C1,
    G_CasesSchemaC,
    G_cases_Schema_C2,
    setS_cases_Schema_C,
    G_colorA,
    G_colorB,
    G_colorC,
    casesSchemaPrcUpdate,
    forceUpdate,
    clearingSchemaFields1,
    firstCaseOriginChangeFlushC
) => {
    if (event.target.value == 0) {
        G_setVariantName_SchemaC = "";

        setS_setVariantName_SchemaC("");
    }

    G_cases_Schema_C1 = event.target.value;
    G_CasesSchemaC = G_cases_Schema_C1;
    G_cases_Schema_C2 = event.target.value;
    G_CasesSchemaC = G_cases_Schema_C2;

    if (event.target.value < 0) {
        G_cases_Schema_C1 = 0;
        G_CasesSchemaC = G_cases_Schema_C1;
        G_cases_Schema_C2 = 0;
        G_CasesSchemaC = G_cases_Schema_C2;
    }

    setS_cases_Schema_C(G_CasesSchemaC);
    G_colorA = '';
    G_colorB = '';
    G_colorC = '#5eb8b3';
    casesSchemaPrcUpdate(G_CasesSchemaC, "handleChangeForCasesSchema", "Schema C");
    clearingSchemaFields1("Schema-C");
    firstCaseOriginChangeFlushC("CasesSchemaC");
    // forceUpdate();
}

//caseType onBlur :-
export const updateSelection2 = (updatePallet, e) => {

    for (let i = 1; i < 3; i++) {
        updatePallet(i);
    }
};
