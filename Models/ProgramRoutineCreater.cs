using System;
using System.Collections.Generic;

#nullable disable

namespace threed.Models
{
    public partial class  ProgramRoutineCreater{
        public long PRCId { get; set; }
        public int? pallet { get; set; }
        public int? PalletId { get; set; }
        public string schema { get; set; }
        public string cases { get; set; }
        public bool? Offset_X_neg { get; set; }
        public bool? Offset_Y_neg { get; set; }
        public string position { get; set; }
        public bool? position_freezed { get; set; }
        public long? Pre_Pos_X { get; set; }
        public long? Pre_Pos_Y { get; set; }
        public long? Pre_Pos_Z { get; set; }
        public long? Pre_Pos_2X { get; set; }
        public long? Pre_Pos_2Y { get; set; }
        public long? Pre_Pos_2Z { get; set; }
        public long? Pre_Pos_3X { get; set; }
        public long? Pre_Pos_3Y { get; set; }
        public long? Pre_Pos_3Z { get; set; }
        public long? prePos_X_for_Auto { get; set; }
        public long? prePos_Y_for_Auto { get; set; }
        public long? prePos_Z_for_Auto { get; set; }
        public bool? auto_generation { get; set; }
        public int? rotation { get; set; }
        public float? case_x_position { get; set; }
        public float? case_y_position { get; set; }
        public float? case_z_position { get; set; }
        public bool? isActive { get; set; }
        public int? Updatedby { get; set; }
        public int? createdby { get; set; }
        public string created_datetime { get; set; }
        public string updated_datetime { get; set; }
    }
}