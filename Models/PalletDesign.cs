using System;
using System.Collections.Generic;

#nullable disable

namespace threed.Models
{
    public partial class PalletDesign
    {
        public long pId {get; set;}
        public long? PalletId { get; set; }
        public int? pallet_no { get; set; }
        public string PalletName { get; set; }
        public string OriginPal1 { get; set; }
        public string OriginPal2 { get; set; }
        public string Firstcasepal1 { get; set; }
        public string Firstcasepal2 { get; set; }
        public int? Working_area_1_Width_X_Direction { get; set; }
        public int? Working_area_1_Length_Y_Direction { get; set; }
        public int? Working_area_1_Offset_X_Direction { get; set; }
        public int? Working_area_1_Offset_Y_Direction { get; set; }
        public int? Working_area_2_Width_X_Direction { get; set; }
        public int? Working_area_2_Length_Y_Direction { get; set; }
        public int? Working_area_2_Offset_X_Direction { get; set; }
        public int? Working_area_2_Offset_Y_Direction { get; set; }
        public int? working_area_1_Height_Z_Direction { get; set; }
        public int? working_area_2_Height_Z_Direction { get; set; }
        public string PalletType { get; set; }
        public int? IntermediateLayerType { get; set; }
        public int? IntermediateLayerWidth { get; set; }
        public int? IntermediateLayerLength { get; set; }
        public string CaseType { get; set; }
        public long? NoOfLayers { get; set; }
        public long? CasesSchemaA { get; set; }
        public long? CasesSchemaB { get; set; }
        public long? CasesSchemaC { get; set; }
        public string OutsideLabelPriority { get; set; }
        public bool? rule_symmetric_mass_distribution { get; set; }
        public bool? horizontal_mass_distribution { get; set; }
        public bool? vertical_mass_distribution { get; set; }
        public string SchemaA { get; set; }
        public string SchemaB { get; set; }
        public string SchemaC { get; set; }
        public long? CreatedBy { get; set; }
        public bool? intermediate_Layer { get; set; }
        public string? case_position { get; set; }
        public string? CreatedDate { get; set; }
        public long? UpdatedBy { get; set; }
        public string? UpdatedDate { get; set; }
        public long? IsActive { get; set; }

        public int? simulation_speed { get; set; }
        public string? simulation_result { get; set; }
        public string? simulation_reason { get; set; }
        public bool? export_documentation { get; set; }
        public bool? case_dimensions { get; set; }
        public bool? label_description { get; set; }
        public bool? basic_parameter { get; set; }
        public bool? design_parameter { get; set; }
        public bool? pattern_wizard { get; set; }
        public bool? layer_creator { get; set; }
        public bool? program_routine_creator { get; set; }
        public bool? simulation { get; set; }
        public bool? export_palette_data { get; set; }

        public string old_pallet_name { get; set; }
        public string renamed_by { get; set; }
        public string renamed_datetime { get; set; }
        public string saveas_from_palletid { get; set; }
        public string import_data_filename { get; set; }
        public string layerSchemaA { get; set; }
        public string layerSchemaB { get; set; }
        public string layerSchemaC { get; set; }
    }
}
