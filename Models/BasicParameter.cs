using System;
using System.Collections.Generic;

#nullable disable

namespace threed.Models
{
    public partial class BasicParameter{

        public long palletId { get; set; }
        public string pallet_name { get; set; }
        public string origin_pal_1 { get; set; }
        public string origin_pal_2 { get; set; }
        public string first_origin_pal1 { get; set; }
        public string first_origin_pal2 { get; set; }
        public int working_area_1_width_X_direction { get; set; }
        public int working_area_1_length_Y_direction { get; set; }
        public int working_area_1_offset_X_direction { get; set; }
        public int working_area_1_offset_Y_direction { get; set; }
        public int working_area_2_width_X_direction { get; set; }
        public int working_area_2_length_Y_direction { get; set; }
        public int working_area_2_offset_X_direction { get; set; }
        public int working_area_2_offset_Y_direction { get; set; }
        public int isActive { get; set; }
        public int createdby { get; set; }
        public string created_datetime { get; set; }
        public int updatedby { get; set; }
        public string updated_datetime { get; set; }

    }
}