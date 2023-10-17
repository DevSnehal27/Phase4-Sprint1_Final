using System;
using System.Collections.Generic;

#nullable disable

namespace threed.Models
{
    public partial class Threed
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long? Length { get; set; }
        public long? Width { get; set; }
        public long? Height { get; set; }
        public long? Directionx { get; set; }
        public long? Directiony { get; set; }
        public long? Directionz { get; set; }
        public string Material { get; set; }
        public float? Mass { get; set; }
        public string Typename { get; set; }
        public string Labelname { get; set; }
        public string labelcolour { get; set; }
        public long? Labelx { get; set; }
        public long? Labely { get; set; }
        public long? Labelwidth { get; set; }
        public long? Labelheight { get; set; }
        public bool? IsActive { get; set; }
        public string? CreatedBy { get; set; }
        public string CreatedDatetime { get; set; }
        public string? UpdatedBy { get; set; }
        public string UpdatedDatetime { get; set; }

        public string old_case_name { get; set; }
        public string renamed_by { get; set; }
        public string renamed_datetime { get; set; }
        public string saveas_from_caseid { get; set; }
        public string import_data_filename { get; set; }

        public string line_rotation { get; set; }
        public string line_position { get; set; }

    }
    }
