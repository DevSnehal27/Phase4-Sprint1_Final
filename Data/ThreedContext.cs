using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using threed.Models;

#nullable disable

namespace threed.Data
{
    public partial class ThreedContext : DbContext
    {
        public ThreedContext()
        {
        }

        public ThreedContext(DbContextOptions<ThreedContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Dropdown> Dropdowns { get; set; }
        public virtual DbSet<PalletDesign> PalletDesigns { get; set; }
        public virtual DbSet<TblUserInfoTrn> TblUserInfoTrns { get; set; }
        public virtual DbSet<Threed> Threeds { get; set; }
        public virtual DbSet<LayerCreator> LayerCreators { get; set; }
        public virtual DbSet<ProgramRoutineCreater> ProgramRoutineCreaters { get; set; }
        public virtual DbSet<palletId> PalletIds { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Dropdown>(entity =>
            {
                entity.HasKey(e => e.DdpId);

                entity.ToTable("dropdown");

                entity.Property(e => e.DdpId).HasColumnName("ddp_id");

                entity.Property(e => e.DdpName).HasColumnName("ddp_name");

                entity.Property(e => e.DdpValue).HasColumnName("ddp_value");

                entity.Property(e => e.IsActive).HasColumnName("is_active");

                entity.Property(e => e.UpdatedBy).HasColumnName("updated_by");

                entity.Property(e => e.UpdatedDate).HasColumnName("updated_date");
            });

           modelBuilder.Entity<PalletDesign>(entity =>
            {
                
                entity.HasKey(e => e.pId);

                entity.ToTable("pallet_design");

                entity.Property(e => e.pId).HasColumnName("pId");

                entity.Property(e => e.PalletId).HasColumnName("pallet_id");

                entity.Property(e => e.pallet_no).HasColumnName("pallet_no");

                entity.Property(e => e.PalletName)
                    .IsRequired()
                    .HasColumnName("pallet_name");
                 entity.Property(e => e.OriginPal1).HasColumnName("origin_pal_1");

                entity.Property(e => e.OriginPal2).HasColumnName("origin_pal_2");

                entity.Property(e => e.Firstcasepal1).HasColumnName("First_Case_Pal_1");
                
                entity.Property(e => e.Firstcasepal2).HasColumnName("First_Case_Pal_2");
             
                entity.Property(e => e.PalletType).HasColumnName("pallet_type");

                 entity.Property(e => e.IntermediateLayerType).HasColumnName("intermediate_layer_type");


                entity.Property(e => e.CaseType).HasColumnName("case_type");

                entity.Property(e => e.NoOfLayers).HasColumnName("no_of_layers");

                entity.Property(e => e.CasesSchemaA).HasColumnName("cases_schema_A");

                entity.Property(e => e.CasesSchemaB).HasColumnName("cases_schema_B");
                entity.Property(e => e.CasesSchemaC).HasColumnName("cases_schema_C");

                
                entity.Property(e => e.OutsideLabelPriority).HasColumnName("outside_label_priority");
                entity.Property(e => e.rule_symmetric_mass_distribution).HasColumnName("rule_symmetric_mass_distribution");
                
                entity.Property(e => e.horizontal_mass_distribution).HasColumnName("horizontal_mass_distribution");
                
                entity.Property(e => e.vertical_mass_distribution).HasColumnName("vertical_mass_distribution");

                
                entity.Property(e => e.SchemaA).HasColumnName("schema_A");

                entity.Property(e => e.SchemaB).HasColumnName("schema_B");
                entity.Property(e => e.SchemaC).HasColumnName("schema_C");
                
                
                entity.Property(e => e.Working_area_1_Width_X_Direction).HasColumnName("Working_area_1_Width_X_Direction");

                entity.Property(e => e.Working_area_1_Length_Y_Direction).HasColumnName("Working_area_1_Length_Y_Direction");

                entity.Property(e => e.Working_area_1_Offset_X_Direction).HasColumnName("Working_area_1_Offset_X_Direction");

                entity.Property(e => e.Working_area_1_Offset_Y_Direction).HasColumnName("Working_area_1_Offset_Y_Direction");

                entity.Property(e => e.Working_area_2_Width_X_Direction).HasColumnName("Working_area_2_Width_X_Direction");

                entity.Property(e => e.Working_area_2_Length_Y_Direction).HasColumnName("Working_area_2_Length_Y_Direction");

                entity.Property(e => e.Working_area_2_Offset_X_Direction).HasColumnName("Working_area_2_Offset_X_Direction");
                
                entity.Property(e => e.Working_area_2_Offset_Y_Direction).HasColumnName("Working_area_2_Offset_Y_Direction");
                entity.Property(e => e.intermediate_Layer).HasColumnName("intermediate_Layer");
               
                entity.Property(e => e.case_position).HasColumnName("case_position");

                entity.Property(e => e.CreatedBy).HasColumnName("created_by");

                entity.Property(e => e.CreatedDate).HasColumnName("created_date");
               
                entity.Property(e => e.IsActive).HasColumnName("is_active");

                entity.Property(e => e.UpdatedBy).HasColumnName("updated_by");

                entity.Property(e => e.UpdatedDate).HasColumnName("updated_date");
                
                

                entity.Property(e => e.simulation_speed).HasColumnName("simulation_speed");

                entity.Property(e => e.simulation_result).HasColumnName("simulation_result");

                entity.Property(e => e.simulation_reason).HasColumnName("simulation_reason");

                entity.Property(e => e.export_documentation).HasColumnName("export_documentation");

                entity.Property(e => e.case_dimensions).HasColumnName("case_dimensions");

                entity.Property(e => e.label_description).HasColumnName("label_description");

                entity.Property(e => e.basic_parameter).HasColumnName("basic_parameter");
                
                entity.Property(e => e.design_parameter).HasColumnName("design_parameter");
                
                entity.Property(e => e.pattern_wizard).HasColumnName("pattern_wizard");

                entity.Property(e => e.layer_creator).HasColumnName("layer_creator");

                entity.Property(e => e.program_routine_creator).HasColumnName("program_routine_creator");

                entity.Property(e => e.simulation).HasColumnName("simulation");
                
                entity.Property(e => e.export_palette_data).HasColumnName("export_palette_data");

                entity.Property(e => e.old_pallet_name).HasColumnName("old_pallet_name");

                entity.Property(e => e.renamed_by).HasColumnName("renamed_by");

                entity.Property(e => e.renamed_datetime).HasColumnName("renamed_datetime");

                entity.Property(e => e.saveas_from_palletid).HasColumnName("saveas_from_palletid");

                entity.Property(e => e.import_data_filename).HasColumnName("import_data_filename");

                entity.Property(e => e.IntermediateLayerWidth).HasColumnName("Intermediate_Layer_Width");

                entity.Property(e => e.IntermediateLayerLength).HasColumnName("Intermediate_Layer_Length");
                entity.Property(e => e.working_area_1_Height_Z_Direction).HasColumnName("working_area_1_Height_Z_Direction");
                entity.Property(e => e.working_area_2_Height_Z_Direction).HasColumnName("working_area_2_Height_Z_Direction");
                         entity.Property(e => e.layerSchemaA).HasColumnName("layerSchemaA");
	        entity.Property(e => e.layerSchemaB).HasColumnName("layerSchemaB");
                entity.Property(e => e.layerSchemaC).HasColumnName("layerSchemaC");
            });

              modelBuilder.Entity<palletId>(entity =>
            {
                entity.HasKey(e => e.PalletId);

                entity.ToTable("pallet_ID");

                entity.Property(e => e.PalletId).HasColumnName("palletId");
                entity.Property(e => e.PalletName)
                    .IsRequired()
                    .HasColumnName("palletName");
                    
                    entity.Property(e => e.Image_A).HasColumnName("Image_A");
                    
                    entity.Property(e => e.Image_B).HasColumnName("Image_B");
                    entity.Property(e => e.Image_C).HasColumnName("Image_C");
            });

            modelBuilder.Entity<TblUserInfoTrn>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("tbl_user_info_trn");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Lcid).HasColumnName("lcid");

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasColumnName("role");

                entity.Property(e => e.UpdatedBy).HasColumnName("updated_by");

                entity.Property(e => e.UpdatedDatetime).HasColumnName("updated_date");

                entity.Property(e => e.Usergroup)
                    .IsRequired()
                    .HasColumnName("usergroup");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username");
            });

            modelBuilder.Entity<Threed>(entity =>
            {
                entity.ToTable("threed");

                entity.HasIndex(e => e.Id, "IX_threed_id")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedBy).HasColumnName("created_by");

                entity.Property(e => e.CreatedDatetime).HasColumnName("created_datetime");
                entity.Property(e => e.Directionx).HasColumnName("directionx");

                entity.Property(e => e.Directiony).HasColumnName("directiony");

                entity.Property(e => e.Directionz).HasColumnName("directionz");
                entity.Property(e => e.Material).HasColumnName("Material");
               
                entity.Property(e => e.Mass).HasColumnName("Mass");

                entity.Property(e => e.Height).HasColumnName("height");

                entity.Property(e => e.IsActive).HasColumnName("is_active");

                entity.Property(e => e.Labelheight).HasColumnName("labelheight");

                entity.Property(e => e.Labelname).HasColumnName("labelname");
                entity.Property(e => e.labelcolour).HasColumnName("labelcolour");

                entity.Property(e => e.Labelwidth).HasColumnName("labelwidth");

                entity.Property(e => e.Labelx).HasColumnName("labelx");

                entity.Property(e => e.Labely).HasColumnName("labely");

                entity.Property(e => e.Length).HasColumnName("length");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.Typename).HasColumnName("typename");

                entity.Property(e => e.UpdatedBy).HasColumnName("updated_by");

                entity.Property(e => e.UpdatedDatetime).HasColumnName("updated_datetime");

                entity.Property(e => e.Width).HasColumnName("width");

                entity.Property(e => e.old_case_name).HasColumnName("old_case_name");

                entity.Property(e => e.renamed_by).HasColumnName("renamed_by");

                entity.Property(e => e.renamed_datetime).HasColumnName("renamed_datetime");

                entity.Property(e => e.saveas_from_caseid).HasColumnName("saveas_from_caseid"); 

                entity.Property(e => e.import_data_filename).HasColumnName("import_data_filename"); 
                 
                entity.Property(e => e.line_rotation).HasColumnName("line_rotation");  
                entity.Property(e => e.line_position).HasColumnName("line_position");  
            });

             modelBuilder.Entity<LayerCreator>(entity =>
            {
                entity.HasKey(e => e.Lid);

                entity.ToTable("Layercreator");

                entity.Property(e => e.Lid).HasColumnName("Lid");

                entity.Property(e => e.Palletid).HasColumnName("Palletid");
                entity.Property(e => e.pallet_no).HasColumnName("pallet_no");
                

                entity.Property(e => e.Layername) .HasColumnName("Layername");
                entity.Property(e => e.Intermediatelayer) .HasColumnName("Intermediatelayer");
                entity.Property(e => e.LayerSequence) .HasColumnName("LayerSequence");
                entity.Property(e => e.isActive) .HasColumnName("isActive");

                entity.Property(e => e.UpdatedBy).HasColumnName("UpdatedBy");

                entity.Property(e => e.Updated_DateTime).HasColumnName("Updated_DateTime");
            });
                modelBuilder.Entity<ProgramRoutineCreater>(entity =>{
                entity.HasKey(e => e.PRCId);
                entity.ToTable("ProgramRoutineCreator");
                entity.Property(e => e.PRCId).HasColumnName("PRCId");
                entity.Property(e => e.pallet).HasColumnName("pallet");
                entity.Property(e => e.PalletId).HasColumnName("PalletId");
                entity.Property(e => e.schema).HasColumnName("schema");
                entity.Property(e => e.cases).HasColumnName("cases");
                entity.Property(e => e.Offset_X_neg).HasColumnName("Offset_X_neg");
                entity.Property(e => e.Offset_Y_neg).HasColumnName("Offset_Y_neg");
                entity.Property(e => e.position).HasColumnName("position");
                entity.Property(e => e.position_freezed).HasColumnName("position_freezed");
                entity.Property(e => e.Pre_Pos_X).HasColumnName("Pre_Pos_X");
                entity.Property(e => e.Pre_Pos_Y).HasColumnName("Pre_Pos_Y");
                entity.Property(e => e.Pre_Pos_Z).HasColumnName("Pre_Pos_Z");

                entity.Property(e => e.Pre_Pos_2X).HasColumnName("Pre_Pos_2X");
                entity.Property(e => e.Pre_Pos_2Y).HasColumnName("Pre_Pos_2Y");
                entity.Property(e => e.Pre_Pos_2Z).HasColumnName("Pre_Pos_2Z");

                entity.Property(e => e.Pre_Pos_3X).HasColumnName("Pre_Pos_3X");
                entity.Property(e => e.Pre_Pos_3Y).HasColumnName("Pre_Pos_3Y");
                entity.Property(e => e.Pre_Pos_3Z).HasColumnName("Pre_Pos_3Z");


                entity.Property(e => e.prePos_X_for_Auto).HasColumnName("prePos_X_for_Auto");
                entity.Property(e => e.prePos_Y_for_Auto).HasColumnName("prePos_Y_for_Auto");
                entity.Property(e => e.prePos_Z_for_Auto).HasColumnName("prePos_Z_for_Auto");
                entity.Property(e => e.auto_generation).HasColumnName("auto_generation");
                entity.Property(e => e.rotation).HasColumnName("rotation");
                entity.Property(e => e.case_x_position).HasColumnName("case_x_position");
                entity.Property(e => e.case_y_position).HasColumnName("case_y_position");
                entity.Property(e => e.case_z_position).HasColumnName("case_z_position");
                entity.Property(e => e.isActive).HasColumnName("isActive");
                entity.Property(e => e.Updatedby).HasColumnName("Updatedby");
                entity.Property(e => e.createdby).HasColumnName("createdby");
                entity.Property(e => e.created_datetime).HasColumnName("created_datetime");
                entity.Property(e => e.updated_datetime).HasColumnName("updated_datetime");
            });
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}