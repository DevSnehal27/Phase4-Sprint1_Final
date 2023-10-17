using System;
using System.Collections.Generic;

#nullable disable

namespace threed.Models
{
    public partial class DesignParameter
    {
        public long layoutId { get; set; }
        public int pallet { get; set; }
        public int palletId { get; set; }
        public string palletType { get; set; }
        public string intermediateLayerType { get; set; }
        public string caseType { get; set; }
        public int noOfLayers { get; set; }
        public int case_Schema_A { get; set; }
        public int case_Schema_B { get; set; }
        public int case_Schema_C { get; set; }
        public string outside_label_priority { get; set; }
        public bool rule_symmetric_mass_distribution { get; set; }
        public string schema_A { get; set; }
        public string schema_B { get; set; }
        public string schema_C { get; set; }
        public bool isActive { get; set; }
        public int createdby { get; set; }
        public string created_datetime { get; set; }
        public int updatedby { get; set; }
        public string updated_datetime { get; set; }
    }
}