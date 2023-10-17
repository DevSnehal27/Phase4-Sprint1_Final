using System.IO;
using System;
using System.Text;
using System.Text.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using threed.Data;
using threed.Models;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using System.Net;
using System.Net.Sockets;

//using System.Collections;
// using Aspose.ThreeD;
// using Aspose.ThreeD.Entities;
// using Aspose.ThreeD.Utilities;
// using Aspose.ThreeD.Shading;
// using Aspose.ThreeD.Formats;

// using Aspose._3D.Examples.CSharp;
// using Spire.Pdf;
// using Spire.Pdf.Annotations;
// using Spire.Pdf.Graphics;
using iTextSharp.text;
using iTextSharp.text.pdf;
//using System.Drawing;

using System.Diagnostics;
using System.Runtime.InteropServices;

namespace reactnet3.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ThreedController : ControllerBase
    {
        private readonly ThreedContext _context;
        public string emailid = "xyz@gmail.com";
        public string username = "PeterPan";
        public string usergroup = "service";        
        public string role = "guest";
        public string lcid = "1030";

        public ThreedController(ThreedContext context)
        {
            _context = context;
            
        }

        // GET: api/Threed
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Threed>>> GetThreeds()
        {
            InitializeProject();
            return await _context.Threeds.ToListAsync();
        }
        
        private void InitializeProject()
        {
            // string projectRootFolder = "/path/to/project/root/folder";
            string projectRootFolder = Path.Combine(Directory.GetCurrentDirectory(), "pdf");
            Console.WriteLine("projectRootFolder: " + projectRootFolder);
            try{
                    if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
                {
                    var osNameAndVersion = System.Runtime.InteropServices.RuntimeInformation.OSDescription;
                    Console.WriteLine("osNameAndVersion: " + osNameAndVersion);
                    try{
                        if(osNameAndVersion.Contains("Ubuntu")){
                            ExecuteCommand($"sudo chown -R ubuntu:ubuntu /tmp/NuGetScratch/");
                            ExecuteCommand($"sudo chmod -R 777 {projectRootFolder}");
                            ExecuteCommand($"sudo chown -R ubuntu:ubuntu {projectRootFolder}");
                        }
                        else{
                            ExecuteCommand($"chown -R root:root /tmp/NuGetScratch/");
                            ExecuteCommand($"chmod -R 777 {projectRootFolder}");
                            ExecuteCommand($"chown -R root:root {projectRootFolder}");
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Error - osNameAndVersion: " + ex.Message);                                        
                    }
                }
                else
                {
                    Console.WriteLine("This is not a Linux system. Skipping sudo commands.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error chown: " + ex.Message);                
            }
        }

        private void ExecuteCommand(string command)
        {
            Process process = new Process();
            process.StartInfo.FileName = "/bin/bash";
            process.StartInfo.Arguments = $"-c \"{command}\"";
            process.StartInfo.RedirectStandardOutput = true;
            process.StartInfo.RedirectStandardError = true;
            process.StartInfo.UseShellExecute = false;
            process.StartInfo.CreateNoWindow = true;

            process.Start();
            string output = process.StandardOutput.ReadToEnd();
            string error = process.StandardError.ReadToEnd();
            process.WaitForExit();

            if (!string.IsNullOrEmpty(output))
            {
                Console.WriteLine("Command output:");
                Console.WriteLine(output);
            }

            if (!string.IsNullOrEmpty(error))
            {
                Console.WriteLine("Command error:");
                Console.WriteLine(error);
            }
        }

        [HttpGet("adminpallet/{id}")]
        public async Task<ActionResult<object>> GetAdminPalletData(long id)
        {
            var admindata = await _context.PalletDesigns.Where(x=>x.PalletId == id).FirstOrDefaultAsync();
            return Ok(admindata);
        }
           

        [HttpGet("getpdf")]
        public IActionResult GetProcessedFile()
        {
            string outputDirectory = Path.Combine(Directory.GetCurrentDirectory(), "pdf");
            string outputFilePath = Path.Combine(outputDirectory, "output.pdf");
            
            try
            {
                // Check if the file exists
                if (!System.IO.File.Exists(outputFilePath))
                {
                    return NotFound("The processed file does not exist.");
                }
                
                // Read the file contents
                byte[] fileBytes = System.IO.File.ReadAllBytes(outputFilePath);
                
                // Set the content type as application/pdf
                string contentType = "application/pdf";
                
                // Return the file content as a response
                return File(fileBytes, contentType, "output_out.pdf");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error while accessing the processed file: " + ex.Message);
                return StatusCode(500, "An error occurred while accessing the processed file.");
            }
        }

        [HttpGet("Getpalletdropdown/{id}")]
         public async Task<ActionResult<object>> Getpalletdropdown(long id)
         {
            var pallet = await _context.PalletDesigns.Where(x=>x.PalletId == id).Select(x => new {
               
                x.PalletName,
             
            }).FirstOrDefaultAsync();
            if (pallet == null){
                return NotFound();
            }
            return Ok(pallet);
        }

        [HttpGet("outsideLabelPriority/{palletId}")]
        public async Task<IActionResult> GetOutsideLabelPriority(int palletId)
        {
            try
            {
                var record = await _context.PalletDesigns.FirstOrDefaultAsync(r =>
                r.PalletId == palletId);
                if (record == null)
                {
                    return NotFound();
                }
                var outsideLabelPriority = record.OutsideLabelPriority;
                
                return Ok(outsideLabelPriority);
            }
            catch (Exception)
            {
                return BadRequest("An error occurred while retrieving the outside label priority.");
            }
        }
        
        // [HttpPost("convertglbtou3dandpdf")] 
        // public async Task<IActionResult> GLBToU3DAndPDF(List<IFormFile> glbFiles, List<IFormFile> images) 
        // // public async Task<ActionResult> ConvertGLBToU3DAndPDF([FromForm(Name = "glbFile")] IFormFile file)
        // {
        //     //Arey bhai bhai bhai threed table se data fetch kr raha yeh
        //     string Name=Request.Form["Name"];
        //     //Arey bhai bhai bhai pallet table se data fetch kr raha yeh
        //     int.TryParse(Request.Form["PalletId"], out int PalletId);
        //     string caseDimensionToggle=Request.Form["caseDimensionToggle"];
        //     string LabelDescriptionToggle=Request.Form["LabelDescriptionToggle"];
            
        //     int Version=2;

        //     var casepdf = await _context.Threeds.Where(x=>x.Name == Name).ToListAsync();
        //     var palletpdf = await _context.PalletDesigns.Where(x=>x.PalletId ==PalletId).ToListAsync();
        //     var caseNameData=casepdf[1];
        //     var palletPdfData=palletpdf[1];

        //     // Initialize license object
        //     string licensefile = Path.Combine(Directory.GetCurrentDirectory(), "pdf", "Aspose.lic");
        //     Console.WriteLine("licensefile = " + licensefile);
        //     Aspose.ThreeD.License license = new Aspose.ThreeD.License();
            
        //     try
        //     {
        //         // Set license
        //         license.SetLicense(licensefile);
        //     }
        //     catch (Exception ex)
        //     {
        //         // Handle license error
        //         Console.WriteLine("License error: " + ex.Message);
        //         return BadRequest("License error");
        //     }
            
        //     if (glbFiles == null || glbFiles.Count == 0)
        //     {
        //         return BadRequest("No file was uploaded.");
        //     }

        //     string outputFolderPath = Path.Combine(Directory.GetCurrentDirectory(), "pdf");
        //     // string u3dFilePath = Path.Combine(outputFolderPath, "output.u3d");
        //     string u3dFilePath = "";
        //     string pdfFilePath = Path.Combine(outputFolderPath, "output.pdf");
        //     try
        //     {
        //         // convert Glb files into u3d
        //         List<List<string>> u3dFilePaths = new List<List<string>>();
                
        //         for(int i = 0; i< glbFiles.Count;i++){
        //             string glbFilePath = Path.Combine(outputFolderPath, glbFiles[i].FileName);
        //             u3dFilePath = Path.Combine(outputFolderPath, Path.GetFileNameWithoutExtension(glbFiles[i].FileName) + ".u3d");
        //             Console.WriteLine("Processing: " + glbFilePath);

        //             using (var stream = new FileStream(glbFilePath, FileMode.Create))
        //             {
        //             await glbFiles[i].CopyToAsync(stream);
        //             }

        //             var scene = Scene.FromFile(glbFilePath);
        //             scene.Save(u3dFilePath, Aspose.ThreeD.FileFormat.Universal3D);       

        //             string filename = Path.GetFileNameWithoutExtension(glbFiles[i].FileName);
        //             u3dFilePaths.Add(new List<string> {filename ,u3dFilePath});
        //             Console.WriteLine("Conversion completed: " + u3dFilePath);
        //         }
                
                
        //         // --------------------------------


        //         PdfDocument doc = new PdfDocument();
        //         PdfPageBase page = doc.Pages.Add();
           
        //         string Logo =  Path.Combine(Directory.GetCurrentDirectory(), "pdf", "Logo.png");
        //         PdfImage image1 = PdfImage.FromFile(Logo);
        //         float width1 = image1.Width * 0.50f;
        //         float height1 = image1.Height * 0.50f;
        //         float x1 = 380f;
        //         float y1 = 30f;
        //         page.Canvas.DrawImage(image1, x1, y1, width1, height1);

        //         PdfFont Headingfont = new PdfFont(PdfFontFamily.Helvetica, 30f);
        //         PdfFont SubHeadingfont = new PdfFont(PdfFontFamily.Helvetica, 20f);
        //         PdfFont Paragraphfont = new PdfFont(PdfFontFamily.Helvetica,16f);
        //         PdfSolidBrush brush = new PdfSolidBrush(Color.Black);
        //         PdfStringFormat leftAlignment = new PdfStringFormat(PdfTextAlignment.Left, PdfVerticalAlignment.Middle);
        //         PdfStringFormat centerAlignment = new PdfStringFormat(PdfTextAlignment.Center, PdfVerticalAlignment.Middle);
           

        //         page.Canvas.DrawString("pester pattern 3d:", Headingfont, brush, 0, 100, leftAlignment);
        //         page.Canvas.DrawString("Case Name: " +caseNameData.Name,Paragraphfont, brush, 0, 200, leftAlignment);
        //         page.Canvas.DrawString("Palette Name: "+palletPdfData.PalletName, Paragraphfont, brush, 0, 230, leftAlignment);
        //         page.Canvas.DrawString("Created By: "+caseNameData.CreatedBy, Paragraphfont, brush, 0, 260, leftAlignment);
        //         page.Canvas.DrawString("Creation Date: "+caseNameData.CreatedDatetime, Paragraphfont, brush, 0, 290, leftAlignment);
        //         page.Canvas.DrawString("Version: "+Version, Paragraphfont, brush, 0, 320, leftAlignment);

        //         int y=100;
        //         //  case description
        //         if(caseDimensionToggle=="true")
        //         {
        //             PdfPageBase page2 = doc.Pages.Add();
        //             var caseDescriptionData = casepdf[1]; // Accessing the second element of the list
        //             page2.Canvas.DrawString("Case Description:",SubHeadingfont, brush, 0, 80, leftAlignment);
        //             page2.Canvas.DrawString("Height: " + caseDescriptionData.Width, Paragraphfont, brush, 0, 130, leftAlignment);
        //             page2.Canvas.DrawString("Length: " + caseDescriptionData.Height, Paragraphfont, brush, 0, 160, leftAlignment);
        //             page2.Canvas.DrawString("Width: " + caseDescriptionData.Length, Paragraphfont, brush, 0, 190, leftAlignment);
        //             page2.Canvas.DrawString("Mass: " + caseDescriptionData.Mass, Paragraphfont, brush, 0, 220, leftAlignment);


        //             int emptyCase = 0;
        //             for(int c=0;c<u3dFilePaths.Count;c++){
        //                 if(u3dFilePaths[c][0] == "emptyCase"){
        //                     emptyCase = c;
        //                 }
        //             }

        //             Rectangle rt1 = new Rectangle(300,y-20, 200, 200); 
        //             Pdf3DAnnotation annotation1 = new Pdf3DAnnotation(rt1, u3dFilePaths[emptyCase][1]);
        //             annotation1.Activation = new Pdf3DActivation();
        //             annotation1.Activation.ActivationMode = Pdf3DActivationMode.PageOpen;
        //             Pdf3DView View1= new Pdf3DView();
        //             View1.Background = new Pdf3DBackground(new PdfRGBColor(Color.LightGray));
        //             View1.ViewNodeName = "test1";
        //             View1.RenderMode = new Pdf3DRendermode(Pdf3DRenderStyle.Solid);
        //             View1.InternalName = "test1";
        //             View1.LightingScheme = new Pdf3DLighting();
        //             View1.LightingScheme.Style = Pdf3DLightingStyle.Day;
        //             annotation1.Views.Add(View1);
        //             page2.AnnotationsWidget.Add(annotation1);
        //         }
                

        //         // label descriptions
        //         if(LabelDescriptionToggle=="true")
        //         {
        //             int labelCount=0;
        //             for(int i=0;i<casepdf.Count;i++)
        //             {
        //                 Console.WriteLine("i"+i);
        //                 Console.WriteLine("labelCount"+labelCount);
                        
        //                 var currentCasePdf = casepdf[i]; // Access the current element using the index
                        
        //                 if(currentCasePdf.Labelname == null)
        //                 continue;
                        
        //                 PdfPageBase newPage = doc.Pages.Add();
        //                 if(labelCount == 0){
        //                     newPage.Canvas.DrawString("Label Description:",SubHeadingfont, brush, 0, 80, leftAlignment);
        //                 }
                    
        //                 labelCount++;
        //                 newPage.Canvas.DrawString("Label: " + labelCount, Paragraphfont, brush, 0, y, leftAlignment);
        //                 newPage.Canvas.DrawString("Label Name: " + currentCasePdf.Labelname, Paragraphfont, brush, 0, y + 30, leftAlignment);
        //                 newPage.Canvas.DrawString("Location: " + currentCasePdf.Typename, Paragraphfont, brush, 0, y + 60, leftAlignment);
        //                 newPage.Canvas.DrawString("Width: " + currentCasePdf.Labelwidth, Paragraphfont, brush, 0, y + 90, leftAlignment);
        //                 newPage.Canvas.DrawString("Length: " + currentCasePdf.Labelheight, Paragraphfont, brush, 0, y + 120, leftAlignment);
        //                 newPage.Canvas.DrawString("Position A: " + currentCasePdf.Labelx, Paragraphfont, brush, 0, y + 150, leftAlignment);
        //                 newPage.Canvas.DrawString("Position B: " + currentCasePdf.Labely, Paragraphfont, brush, 0, y + 180, leftAlignment);

        //                 int seqIndex = 0;
        //                 for(int k=0;k<u3dFilePaths.Count;k++){
        //                     if(u3dFilePaths[k][0] == currentCasePdf.Typename){
        //                         seqIndex = k;
        //                     }
        //                 }
                        
        //                 Rectangle rt2 = new Rectangle(300,y-20, 200, 200); 
        //                 Pdf3DAnnotation annotation2 = new Pdf3DAnnotation(rt2, u3dFilePaths[seqIndex][1]);
        //                 annotation2.Activation = new Pdf3DActivation();
        //                 annotation2.Activation.ActivationMode = Pdf3DActivationMode.PageOpen; 
        //                 Pdf3DView View2= new Pdf3DView();
        //                 View2.Background = new Pdf3DBackground(new PdfRGBColor(Color.LightGray));
        //                 View2.ViewNodeName = "test2";
        //                 View2.RenderMode = new Pdf3DRendermode(Pdf3DRenderStyle.Solid);
        //                 View2.InternalName = "test2";
        //                 View2.LightingScheme = new Pdf3DLighting();
        //                 View2.LightingScheme.Style = Pdf3DLightingStyle.Day;
        //                 annotation2.Views.Add(View2);
        //                 newPage.AnnotationsWidget.Add(annotation2);

        //             }
        //         }
           
        //         PdfPageBase page3 = doc.Pages.Add();
        //         page3.Canvas.DrawString("Palette Description:",SubHeadingfont, brush, 0, 50, leftAlignment);
        //         page3.Canvas.DrawString("Pallet Type: "+palletPdfData.PalletType, Paragraphfont, brush, 0, 100, leftAlignment);
        //         page3.Canvas.DrawString("Number of Layers: "+palletPdfData.NoOfLayers, Paragraphfont, brush, 0, 130, leftAlignment);
        //         page3.Canvas.DrawString("Number of Cases Schema A: "+palletPdfData.CasesSchemaA, Paragraphfont, brush, 0, 160, leftAlignment);
        //         page3.Canvas.DrawString("Layers Schema A: "+ palletPdfData.SchemaA, Paragraphfont, brush, 0, 190, leftAlignment);
        //         page3.Canvas.DrawString("Number of Cases Schema B: "+palletPdfData.CasesSchemaB, Paragraphfont, brush, 0, 220, leftAlignment);
        //         page3.Canvas.DrawString("Layers Schema B: "+palletPdfData.SchemaB, Paragraphfont, brush, 0, 250, leftAlignment);
        //         page3.Canvas.DrawString("Number of Cases Schema C: "+palletPdfData.CasesSchemaC, Paragraphfont, brush, 0, 280, leftAlignment);
        //         page3.Canvas.DrawString("Layers Schema C: "+palletPdfData.SchemaC, Paragraphfont, brush, 0, 310, leftAlignment);
                

        //         int seqIndexPallet = 0;
        //         for(int k=0;k<u3dFilePaths.Count;k++){
        //             if(u3dFilePaths[k][0] == "Pallet"){
        //                 seqIndexPallet = k;
        //             }
        //         }
        //         Rectangle rt3 = new Rectangle(300, 80, 200, 200); 
        //         Pdf3DAnnotation annotation3 = new Pdf3DAnnotation(rt3, u3dFilePaths[seqIndexPallet][1]);
        //         annotation3.Activation = new Pdf3DActivation();
        //         annotation3.Activation.ActivationMode = Pdf3DActivationMode.PageOpen; 
        //         Pdf3DView View3= new Pdf3DView();
        //         View3.Background = new Pdf3DBackground(new PdfRGBColor(Color.LightGray));
        //         View3.ViewNodeName = "test";
        //         View3.RenderMode = new Pdf3DRendermode(Pdf3DRenderStyle.Solid);
        //         View3.InternalName = "test";
        //         View3.LightingScheme = new Pdf3DLighting();
        //         View3.LightingScheme.Style = Pdf3DLightingStyle.Day;
        //         annotation3.Views.Add(View3);
        //         page3.AnnotationsWidget.Add(annotation3);

        //         // Create an array to store image file paths
        //         string[] imageFilePaths = new string[images.Count];



        //         // Save each image file and store the file path in the array
        //         string outputFolderPath1 = Path.Combine(Directory.GetCurrentDirectory(), "pdf/image1");
        //         string outputFolderPath2 = Path.Combine(Directory.GetCurrentDirectory(), "pdf/image2");
        //         string outputFolderPath3 = Path.Combine(Directory.GetCurrentDirectory(), "pdf/image3");



        //         for (int i = 0; i < images.Count; i++)
        //         {
        //             var imageFile = images[i];
        //             if(i == 0){
        //                 string imageFilePath = Path.Combine(outputFolderPath1, imageFile.FileName);
        //                 imageFilePaths[i] = imageFilePath;

        //                 using (var imageStream = new FileStream(imageFilePath, FileMode.Create))
        //                 {
        //                     await imageFile.CopyToAsync(imageStream);
        //                 }
        //             }else if( i == 1){
        //                 string imageFilePath = Path.Combine(outputFolderPath2, imageFile.FileName);
        //                 imageFilePaths[i] = imageFilePath;

        //                 using (var imageStream = new FileStream(imageFilePath, FileMode.Create))
        //                 {
        //                     await imageFile.CopyToAsync(imageStream);
        //                 }
        //             }else if(i == 2){
        //                 string imageFilePath = Path.Combine(outputFolderPath3, imageFile.FileName);
        //                 imageFilePaths[i] = imageFilePath;

        //                 using (var imageStream = new FileStream(imageFilePath, FileMode.Create))
        //                 {
        //                     await imageFile.CopyToAsync(imageStream);
        //                 }
        //             }                
        //         }
                
        //         // Add images to the PDF document
        //         if(imageFilePaths.Length==1){
        //             string img1=imageFilePaths[0];
        //             page3.Canvas.DrawString("Schema A:",SubHeadingfont, brush, 50, 480, centerAlignment);
        //             PdfImage image2 = PdfImage.FromFile(img1);
        //             float width2 = image2.Width * 0.50f;
        //             float height2 = image2.Height * 0.50f;
        //             float x2 = 0f;
        //             float y2 = 500f;
        //             page3.Canvas.DrawImage(image2, x2, y2, width2, height2);
        //         }else if(imageFilePaths.Length==2){
        //             string img1=imageFilePaths[0];
        //             string img2=imageFilePaths[1];
        //             page3.Canvas.DrawString("Schema A:",SubHeadingfont, brush, 50, 480, centerAlignment);
        //             PdfImage image2 = PdfImage.FromFile(img1);
        //             float width2 = image2.Width * 0.50f;
        //             float height2 = image2.Height * 0.50f;
        //             float x2 = 0f;
        //             float y2 = 500f;
        //             page3.Canvas.DrawImage(image2, x2, y2, width2, height2);
                    
        //             page3.Canvas.DrawString("Schema B:",SubHeadingfont, brush, 250, 480, centerAlignment);
        //             PdfImage image3 = PdfImage.FromFile(img2);
        //             float width3 = image3.Width * 0.50f;
        //             float height3 = image3.Height * 0.50f;
        //             float x3 = 200f;
        //             float y3 = 500f;
        //             page3.Canvas.DrawImage(image3, x3, y3, width3, height3);
        //         }else if(imageFilePaths.Length==3){
        //             string img1=imageFilePaths[0];
        //             string img2=imageFilePaths[1];
        //             string img3=imageFilePaths[2];
        //             page3.Canvas.DrawString("Schema A:",SubHeadingfont, brush, 50, 480, centerAlignment);
                    
        //             PdfImage image2 = PdfImage.FromFile(img1);
        //             float width2 = image2.Width * 0.50f;
        //             float height2 = image2.Height * 0.50f;
        //             float x2 = 0f;
        //             float y2 = 500f;
        //             page3.Canvas.DrawImage(image2, x2, y2, width2, height2);
                    
        //             page3.Canvas.DrawString("Schema B:",SubHeadingfont, brush, 250, 480, centerAlignment);
        //             PdfImage image3 = PdfImage.FromFile(img2);
        //             float width3 = image3.Width * 0.50f;
        //             float height3 = image3.Height * 0.50f;
        //             float x3 = 200f;
        //             float y3 = 500f;
        //             page3.Canvas.DrawImage(image3, x3, y3, width3, height3);
                    
        //             page3.Canvas.DrawString("Schema C:",SubHeadingfont, brush, 450, 480,centerAlignment);
        //             PdfImage image4 = PdfImage.FromFile(img3);
        //             float width4 = image4.Width * 0.50f;
        //             float height4 = image4.Height * 0.50f;
        //             float x4 = 400f;
        //             float y4 = 500f;
        //             page3.Canvas.DrawImage(image4, x4, y4, width4, height4);
        //         }
                
        //         doc.SaveToFile(pdfFilePath, Spire.Pdf.FileFormat.PDF);
                
        //         return Ok(new { Result = "Success", PDFFilePath = pdfFilePath });
        //     }
        //     catch (Exception ex)
        //     {
        //         Console.WriteLine("Error during conversion: " + ex.Message);
        //         return StatusCode(500, "An error occurred during conversion.");
        //     }
        // }

        // ---------------------------ItextSharp
        
        // ---------------------------ItextSharp

  private IDictionary<string, string> LoadTranslationsFromFile(string filePath)
{
    string jsonData = System.IO.File.ReadAllText(filePath);
    return System.Text.Json.JsonSerializer.Deserialize<IDictionary<string, string>>(jsonData);
}


        [HttpPost("ConvertToPdf")]
        public async Task<IActionResult> ConvertToPdf( List<IFormFile> images)
        {
            string SelectedLanguage=Request.Form["SelectedLanguage"];
             Console.WriteLine(SelectedLanguage);
             string translationFilePath = Path.Combine(Directory.GetCurrentDirectory(), "locales", $"{SelectedLanguage}.json");
             Console.WriteLine(translationFilePath,"translations");
              IDictionary<string, string> translations = LoadTranslationsFromFile(translationFilePath);

            string Name=Request.Form["Name"];
            int.TryParse(Request.Form["PalletId"], out int PalletId);
            string caseDimensionToggle=Request.Form["caseDimensionToggle"];
            string LabelDescriptionToggle=Request.Form["LabelDescriptionToggle"];
            string noSchemaA=Request.Form["noSchemaA"];
            string noSchemaB=Request.Form["noSchemaB"];
            string noSchemaC=Request.Form["noSchemaC"];
            string LayersSchema_A=Request.Form["LayersSchema_A"];
            string LayersSchema_B=Request.Form["LayersSchema_B"];
            string LayersSchema_C=Request.Form["LayersSchema_C"];
            
                // int Version=2;

            var casepdf = await _context.Threeds.Where(x=>x.Name == Name).ToListAsync();
            var palletpdf = await _context.PalletDesigns.Where(x=>x.PalletId ==PalletId).ToListAsync();
            var caseNameData=casepdf[1];
            var palletPdfData=palletpdf[1];

            try
            {
                var formCollection = await Request.ReadFormAsync();
                var files = formCollection.Files;
                
                if (files == null || files.Count == 0)
                {
                    return BadRequest("No files were uploaded.");
                }
                
                var doc = new Document();
                string outputDirectory = Path.Combine(Directory.GetCurrentDirectory(), "pdf");
                string outputPath = Path.Combine(outputDirectory, "output.pdf");

                using (var stream = new FileStream(outputPath, FileMode.Create))
                {
                    var writer = PdfWriter.GetInstance(doc, stream);
                    doc.Open();
                    
                    // Add a new page
                    doc.NewPage();

                    // Load the logo image
                    string logoPath = Path.Combine(Directory.GetCurrentDirectory(), "pdf", "Logo.png");
                    iTextSharp.text.Image logoImage = iTextSharp.text.Image.GetInstance(logoPath);
                    logoImage.ScalePercent(30f);

                    // Set the position of the logo image on the page
                    float logoX = 380f;
                    float logoY = doc.PageSize.Height - 30f - logoImage.ScaledHeight;

                    // Add the logo image to the page
                    logoImage.SetAbsolutePosition(logoX, logoY);
                    doc.Add(logoImage);
                

                    // Create fonts
                    BaseFont baseFont = BaseFont.CreateFont(BaseFont.HELVETICA, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
                    Font headingFont = new Font(baseFont, 30f);
                    Font subHeadingFont = new Font(baseFont, 18f);
                    Font tableSubHeadingFont = new Font(baseFont, 10f);
                    Font paragraphFont = new Font(baseFont, 10f);

                    // Create black brush
                    BaseColor brushColor = BaseColor.BLACK;
                    PdfContentByte canvas = writer.DirectContent;
                    PdfGState gState = new PdfGState();
                    canvas.SetGState(gState);
                    canvas.SetColorFill(brushColor);

                    // Add the heading
                    Paragraph heading = new Paragraph("AdjuPal ", headingFont);
                    heading.SpacingAfter = 50f;
                    heading.SpacingBefore= 50f;
                    doc.Add(heading);

                    // Add case name
                    string caseName = translations["CaseName"]+": " + caseNameData.Name;
                    Paragraph caseNameParagraph = new Paragraph(caseName, paragraphFont);
                    doc.Add(caseNameParagraph);

                    // Add palette name
                    string paletteName = translations["PaletteName"]+": " + palletPdfData.PalletName;
                    Paragraph paletteNameParagraph = new Paragraph(paletteName, paragraphFont);
                    doc.Add(paletteNameParagraph);

                    // Add created by
                    string createdBy = translations["CreatedBy"]+": " + caseNameData.CreatedBy;
                    Paragraph createdByParagraph = new Paragraph(createdBy, paragraphFont);
                    doc.Add(createdByParagraph);

                    // Add creation date
                    string creationDate = translations["CreatedDateTime"]+": " + palletPdfData.CreatedDate;
                    Paragraph creationDateParagraph = new Paragraph(creationDate, paragraphFont);
                    doc.Add(creationDateParagraph);

                    // Add updated Date
                    string updatedDate = translations["LastUpdated"]+": " + palletPdfData.UpdatedDate;
                    Paragraph updatedParagraph = new Paragraph(updatedDate, paragraphFont);
                    doc.Add(updatedParagraph);

                    // Add Printed Date
                    string PrintedDate = translations["PrintedDate"]+": " +  DateTime.Now.ToString();
                    Paragraph printedParagraph = new Paragraph(PrintedDate, paragraphFont);
                    doc.Add(printedParagraph);

                    // // Add version
                    // string version = "Version: " + Version;
                    // Paragraph versionParagraph = new Paragraph(version, paragraphFont);
                    // doc.Add(versionParagraph);

                    if (caseDimensionToggle == "true")
                    {
                    doc.NewPage();
                    
                    for(int k=0;k<files.Count;k++)
                    {
                        string filename = Path.GetFileName(files[k].FileName);
                        
                        if(filename=="emptyCase")
                        {
                            if (files[k].Length > 0)
                            {
                                var buffer = new byte[files[k].Length];
                                using (var streamReader = new BinaryReader(files[k].OpenReadStream()))
                                {
                                    buffer = streamReader.ReadBytes((int)files[k].Length);
                                }
                                var EmptyCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                EmptyCaseimage.ScaleAbsolute(400f, 250f);
                                float logoX2 = 220f;
                                float logoY2 = doc.PageSize.Height - 10f -  EmptyCaseimage.ScaledHeight;
                                EmptyCaseimage.SetAbsolutePosition(logoX2, logoY2);
                                doc.Add(EmptyCaseimage);
                            }
                        }
                    }
                    
                    // Get case description data
                    var caseDescriptionData = casepdf[1];
                    
                    // Add case description heading
                    Paragraph caseDescriptionHeading = new Paragraph(translations["CaseDescription"], subHeadingFont);
                    caseDescriptionHeading.SpacingAfter = 50f;
                    doc.Add(caseDescriptionHeading);
                    
                    // Create table
                    PdfPTable table = new PdfPTable(3); // Number of columns: 3
                    table.WidthPercentage = 40f; // Decrease width to 60%
                    table.HorizontalAlignment = Element.ALIGN_LEFT; // Align table to the left side
                    // table.SpacingAfter = 20f;
                    
                    // Set column widths
                    float[] columnWidths = { 13f, 17f, 10f }; // Adjust the desired width of each column
                    table.SetWidths(columnWidths);
                            //table.DefaultCell.HorizontalAlignment = Element.ALIGN_RIGHT;
                    
                    // Add row 1
                            PdfPCell cellHeight = new PdfPCell(new Phrase(translations["height"], tableSubHeadingFont));
                            cellHeight.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellHeight.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellHeight.FixedHeight = 18f;
                            table.AddCell(cellHeight);
                            
                            PdfPCell cellHeightData = new PdfPCell(new Phrase(caseDescriptionData.Width.ToString(), paragraphFont));
                            cellHeightData.HorizontalAlignment = Element.ALIGN_CENTER;
                             cellHeightData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(cellHeightData);

                            PdfPCell cellHeightUnit = new PdfPCell(new Phrase("mm", paragraphFont));
                            cellHeightUnit.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellHeightUnit.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(cellHeightUnit);


                            // Add row 2

                            PdfPCell cellLength = new PdfPCell(new Phrase(translations["length"], tableSubHeadingFont));
                            cellLength.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLength.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellLength.FixedHeight = 18f;
                            table.AddCell(cellLength);
                            
                            PdfPCell cellLengthData = new PdfPCell(new Phrase(caseDescriptionData.Height.ToString(), paragraphFont));
                            cellLengthData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLengthData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(cellLengthData);
                            table.AddCell(cellHeightUnit);


                            // table.AddCell(new PdfPCell(new Phrase("", tableSubHeadingFont)));
                            // table.AddCell();
                            // table.AddCell(new PdfPCell(new Phrase("mm", paragraphFont)));

                            // Add row 3
                             PdfPCell cellWidth = new PdfPCell(new Phrase(translations["width"], tableSubHeadingFont));
                            cellWidth.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellWidth.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellWidth.FixedHeight = 18f;
                            table.AddCell(cellWidth);
                            
                            PdfPCell cellWidthData = new PdfPCell(new Phrase(caseDescriptionData.Length.ToString(), paragraphFont));
                            cellWidthData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellWidthData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(cellWidthData);
                            table.AddCell(cellHeightUnit);

                            // Add row 4
                            PdfPCell cellMass = new PdfPCell(new Phrase(translations["Mass"], tableSubHeadingFont));
                            cellMass.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellMass.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellMass.FixedHeight = 18f;
                            table.AddCell(cellMass);
                            
                            PdfPCell cellMassData = new PdfPCell(new Phrase(caseDescriptionData.Mass.ToString(), paragraphFont));
                            cellMassData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellMassData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(cellMassData);
                            table.AddCell(cellHeightUnit);
                    
                    // Add table to the document
                    doc.Add(table);
                }
                
                // Check if label description toggle is true
                if (LabelDescriptionToggle == "true")
                {
                    int labelCount = 0;
                    doc.NewPage(); 
                    
                    int fileSize=files.Count;
                    
                    int j=2;//first time 2
                    for (int k=0; k<casepdf.Count; k++)
                    {
                        if (labelCount%3==0)
                        {
                            doc.NewPage();
                        }
                        string filename = Path.GetFileName(files[j].FileName);
                        
                        // Skip if the label name is null
                        var currentCasePdf = casepdf[k];
                        if (currentCasePdf.Labelname == null||filename=="emptyCase")
                        continue;
                        
                        if (files[j].Length > 0)
                        {
                            // if(filename=="")
                            if(filename=="Front")
                            {
                                var buffer = new byte[files[j].Length];
                                using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                {
                                    buffer = streamReader.ReadBytes((int)files[j].Length);
                                }
                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                LabelCaseimage.ScaleAbsolute(400f, 250f);
                                float logoX2 =220f;
                                if(j==2||j==5||j==8||j==11||j==14)
                                {
                                    float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight; 
                                    LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);  
                                }else if(j==3||j==6||j==9||j==12||j==15)
                                {
                                    float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;
                                    LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);
                                }
                                else{
                                    float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;
                                    LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);
                                }
                                doc.Add(LabelCaseimage);
                            }
                            
                            if(filename=="Top")
                            {
                                var buffer = new byte[files[j].Length];
                                using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                {
                                    buffer = streamReader.ReadBytes((int)files[j].Length);
                                }
                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                LabelCaseimage.ScaleAbsolute(400f, 250f);
                                float logoX2 = 220f;
                                if(j==2||j==5||j==8||j==11||j==14)
                                {
                                    float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;
                                    LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);
                                }else if(j==3||j==6||j==9||j==12||j==15)
                                {
                                    float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;
                                    LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);
                                }
                                else{
                                    float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;
                                    LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);
                                }
                                doc.Add(LabelCaseimage);
                            }
                            if(filename=="Left")
                            {
                                var buffer = new byte[files[j].Length];
                                using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                {
                                    buffer = streamReader.ReadBytes((int)files[j].Length);
                                }
                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                LabelCaseimage.ScaleAbsolute(400f, 250f);
                                float logoX2 = 220f;

                                if(j==2||j==5||j==8||j==11||j==14)
                                {
                                    float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;
                                    LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);
                                }else if(j==3||j==6||j==9||j==12||j==15)
                                {
                                    float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;
                                    LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);
                                }
                                else{
                                    float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;
                                    LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);
                                }
                                doc.Add(LabelCaseimage);
                            } 
                                    if(filename=="Right")
                                    {        var buffer = new byte[files[j].Length];
                                            using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                            {
                                                buffer = streamReader.ReadBytes((int)files[j].Length);
                                            }
                                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                                LabelCaseimage.ScaleAbsolute(400f, 250f);
                                                float logoX2 = 220f;
                                               if(j==2||j==5||j==8||j==11||j==14)
                                               {
                                                  float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;   
                                                  LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);                                             
                                               }else if(j==3||j==6||j==9||j==12||j==15)
                                               {
                                                 float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;   
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);   
                                               }
                                               else{                                                
                                                float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;  
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2); 
                                               } 
                                               doc.Add(LabelCaseimage);
                                    }
                                    if(filename=="Back")
                                    {        var buffer = new byte[files[j].Length];
                                            using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                            {
                                                buffer = streamReader.ReadBytes((int)files[j].Length);
                                            }
                                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                                LabelCaseimage.ScaleAbsolute(400f, 250f);
                                                float logoX2 = 220f;
                                                if(j==2||j==5||j==8||j==11||j==14)
                                               {
                                                  float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;   
                                                  LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);                                             
                                               }else if(j==3||j==6||j==9||j==12||j==15)
                                               {
                                                 float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;   
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);   
                                               }
                                               else{                                                
                                                float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;  
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2); 
                                               } 
                                               doc.Add(LabelCaseimage);
                                    }
                                    if(filename=="Top-Front")
                                    {        var buffer = new byte[files[j].Length];
                                            using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                            {
                                                buffer = streamReader.ReadBytes((int)files[j].Length);
                                            }
                                            var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                            LabelCaseimage.ScaleAbsolute(400f, 250f);
                                             float logoX2 = 220f;
                                                if(j==2||j==5||j==8||j==11||j==14)
                                               {
                                                  float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;   
                                                  LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);                                             
                                               }else if(j==3||j==6||j==9||j==12||j==15)
                                               {
                                                 float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;   
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);   
                                               }
                                               else{                                                
                                                float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;  
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2); 
                                               } 
                                               doc.Add(LabelCaseimage);
                                    }
                                    if(filename=="Top-Right")
                                    {        var buffer = new byte[files[j].Length];
                                            using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                            {
                                                buffer = streamReader.ReadBytes((int)files[j].Length);
                                            }
                                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                                LabelCaseimage.ScaleAbsolute(400f, 250f);
                                                float logoX2 = 220f;
                                                 if(j==2||j==5||j==8||j==11||j==14)
                                               {
                                                  float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;   
                                                  LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);                                             
                                               }else if(j==3||j==6||j==9||j==12||j==15)
                                               {
                                                 float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;   
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);   
                                               }
                                               else{                                                
                                                float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;  
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2); 
                                               } 
                                               doc.Add(LabelCaseimage);
                                    }
                                    if(filename=="Top-Left")
                                    {        var buffer = new byte[files[j].Length];
                                            using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                            {
                                                buffer = streamReader.ReadBytes((int)files[j].Length);
                                            }
                                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                                LabelCaseimage.ScaleAbsolute(400f, 250f);
                                                float logoX2 = 220f;
                                                if(j==2||j==5||j==8||j==11||j==14)
                                               {
                                                  float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;   
                                                  LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);                                             
                                               }else if(j==3||j==6||j==9||j==12||j==15)
                                               {
                                                 float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;   
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);   
                                               }
                                               else{                                                
                                                float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;  
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2); 
                                               } 
                     
                                               doc.Add(LabelCaseimage);
                                    } 
                                    if(filename=="Top-Back")
                                    {        
                                        
                                        var buffer = new byte[files[j].Length];
                                            using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                            {
                                                buffer = streamReader.ReadBytes((int)files[j].Length);
                                            }
                                               var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                            LabelCaseimage.ScaleAbsolute(400f, 250f);
                                            
                                              float logoX2 = 220f;
                                                if(j==2||j==5||j==8||j==11||j==14)
                                               {
                                                  float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;   
                                                  LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);                                             
                                               }else if(j==3||j==6||j==9||j==12||j==15)
                                               {
                                                 float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;   
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);   
                                               }
                                               else{                                                
                                                float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;  
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2); 
                                               } 
                     
                                               
                                               doc.Add(LabelCaseimage);
                                    }
                                    if(filename=="Front-Right")
                                    {        var buffer = new byte[files[j].Length];
                                            using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                            {
                                                buffer = streamReader.ReadBytes((int)files[j].Length);
                                            }
                                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                                LabelCaseimage.ScaleAbsolute(400f, 250f);
                                              
                                               float logoX2 = 220f;
                                               if(j==2||j==5||j==8||j==11||j==14)
                                               {
                                                  float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;   
                                                  LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);                                             
                                               }else if(j==3||j==6||j==9||j==12||j==15)
                                               {
                                                 float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;   
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);   
                                               }
                                               else{                                                
                                                float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;  
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2); 
                                               }                    
                                               
                                               doc.Add(LabelCaseimage);
                                    }
                                    if(filename=="Front-Left")
                                    {        var buffer = new byte[files[j].Length];
                                            using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                            {
                                                buffer = streamReader.ReadBytes((int)files[j].Length);
                                            }
                                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                                LabelCaseimage.ScaleAbsolute(400f, 250f);                                                
                                                float logoX2 = 220f;
                                                if(j==2||j==5||j==8||j==11||j==14)
                                               {
                                                  float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;   
                                                  LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);                                             
                                               }else if(j==3||j==6||j==9||j==12||j==15)
                                               {
                                                 float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;   
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);   
                                               }
                                               else{                                                
                                                float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;  
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2); 
                                               }                     
                                               
                                               doc.Add(LabelCaseimage);
                                    }
                                    if(filename=="Right-Back")
                                    {        var buffer = new byte[files[j].Length];
                                            using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                            {
                                                buffer = streamReader.ReadBytes((int)files[j].Length);
                                            }
                                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                                LabelCaseimage.ScaleAbsolute(400f, 250f);
                                                float logoX2 = 220f;
                                               if(j==2||j==5||j==8||j==11||j==14)
                                               {
                                                  float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;   
                                                  LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);                                             
                                               }else if(j==3||j==6||j==9||j==12||j==15)
                                               {
                                                 float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;   
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);   
                                               }
                                               else{                                                
                                                float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;  
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2); 
                                               }                   
                                               
                                               doc.Add(LabelCaseimage);
                                    }
                                    if(filename=="Left-Back")
                                    {       
                                          var buffer = new byte[files[j].Length];
                                            using (var streamReader = new BinaryReader(files[j].OpenReadStream()))
                                            {
                                                buffer = streamReader.ReadBytes((int)files[j].Length);
                                            }
                                                var LabelCaseimage = iTextSharp.text.Image.GetInstance(buffer);
                                                LabelCaseimage.ScaleAbsolute(400f, 250f);
                                                float logoX2 =220f;
                                              if(j==2||j==5||j==8||j==11||j==14)
                                               {
                                                  float logoY2 = doc.PageSize.Height - 30f -  LabelCaseimage.ScaledHeight;   
                                                  LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);                                             
                                               }else if(j==3||j==6||j==9||j==12||j==15)
                                               {
                                                 float logoY2 = doc.PageSize.Height - 275f -  LabelCaseimage.ScaledHeight;   
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2);   
                                               }
                                               else{                                                
                                                float logoY2 = doc.PageSize.Height - 515f -  LabelCaseimage.ScaledHeight;  
                                                LabelCaseimage.SetAbsolutePosition(logoX2, logoY2); 
                                               }                     
                                               
                                               doc.Add(LabelCaseimage);
                                    }    
                                       
                                }

                        if (labelCount == 0)
                        {
                        Paragraph labelDescriptionHeading = new Paragraph(translations["LabelDescription"], subHeadingFont);
                        // labelDescriptionHeading.SpacingAfter = 30f;
                        doc.Add(labelDescriptionHeading);
                        }
                      if(labelCount%3==0&&labelCount!= 0)
                      {
                       Paragraph labelDescriptionHeading = new Paragraph("   ");
                        doc.Add(labelDescriptionHeading);
                      }


                        labelCount++;
                        Paragraph SpaceLabel = new Paragraph("     ", subHeadingFont);
                        SpaceLabel.SpacingAfter = 30f;
                        doc.Add(SpaceLabel);

                                  
                    // Create table
                    PdfPTable table = new PdfPTable(3); // Number of columns: 3
                    table.WidthPercentage = 40f; // Decrease width to 60%
                    table.HorizontalAlignment = Element.ALIGN_LEFT; // Align table to the left side
                    // table.SpacingAfter = 20f;

                    // Set column widths
                    float[] columnWidths = { 18f, 15f,7f }; // Adjust the desired width of each column
                    table.SetWidths(columnWidths);
                    table.DefaultCell.HorizontalAlignment = Element.ALIGN_CENTER;

                            PdfPCell cellLabel = new PdfPCell(new Phrase(translations["Label"], tableSubHeadingFont));
                            cellLabel.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLabel.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellLabel.FixedHeight = 18f;
                            table.AddCell(cellLabel);
                            
                            PdfPCell cellLabelCount = new PdfPCell(new Phrase(labelCount.ToString(), paragraphFont));
                            cellLabelCount.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLabelCount.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(cellLabelCount);

                            PdfPCell EmptyCell = new PdfPCell(new Phrase(" ", tableSubHeadingFont));
                            EmptyCell.HorizontalAlignment = Element.ALIGN_CENTER;
                            EmptyCell.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(EmptyCell);
                            

                            // table.AddCell(new PdfPCell(new Phrase("Label", tableSubHeadingFont)));
                            // table.AddCell(new PdfPCell(new Phrase(labelCount.ToString(), paragraphFont)));
                            // table.AddCell(new PdfPCell(new Phrase("  ", paragraphFont)));
                            // Add row 2
                            PdfPCell cellLabelname = new PdfPCell(new Phrase(translations["labelName"], tableSubHeadingFont));
                            cellLabelname.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLabelname.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellLabelname.FixedHeight = 18f;
                            table.AddCell(cellLabelname);     

                            PdfPCell LabelnameData = new PdfPCell(new Phrase(currentCasePdf.Labelname.ToString(), paragraphFont));
                            LabelnameData.HorizontalAlignment = Element.ALIGN_CENTER;
                            LabelnameData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(LabelnameData);
                            table.AddCell(EmptyCell);

                            // table.AddCell(new PdfPCell(new Phrase("Label Name", tableSubHeadingFont)));
                            // table.AddCell(new PdfPCell(new Phrase(currentCasePdf.Labelname.ToString(), paragraphFont)));
                            // table.AddCell(new PdfPCell(new Phrase(" ", paragraphFont)));
                            // Add row 3
                             PdfPCell Location = new PdfPCell(new Phrase(translations["Location"], tableSubHeadingFont));
                            Location.HorizontalAlignment = Element.ALIGN_CENTER;
                            Location.VerticalAlignment = Element.ALIGN_MIDDLE;
                            Location.FixedHeight = 18f;
                            table.AddCell(Location);     

                            PdfPCell LocationData = new PdfPCell(new Phrase(currentCasePdf.Typename.ToString(), paragraphFont));
                            LocationData.HorizontalAlignment = Element.ALIGN_CENTER;
                            LocationData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(LocationData);
                            table.AddCell(EmptyCell);

                            // table.AddCell(new PdfPCell(new Phrase("Location", tableSubHeadingFont)));
                            // table.AddCell(new PdfPCell(new Phrase(currentCasePdf.Typename.ToString(), paragraphFont)));
                            // table.AddCell(new PdfPCell(new Phrase(" ", paragraphFont)));
                            // Add row 4
                             PdfPCell LabelWidth = new PdfPCell(new Phrase(translations["width"], tableSubHeadingFont));
                            LabelWidth.HorizontalAlignment = Element.ALIGN_CENTER;
                            LabelWidth.VerticalAlignment = Element.ALIGN_MIDDLE;
                            LabelWidth.FixedHeight = 18f;
                            table.AddCell(LabelWidth);     

                            PdfPCell LabelWidthData = new PdfPCell(new Phrase(currentCasePdf.Labelwidth.ToString(), paragraphFont));
                            LabelWidthData.HorizontalAlignment = Element.ALIGN_CENTER;
                            LabelWidthData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(LabelWidthData);

                            PdfPCell cellHeightUnit = new PdfPCell(new Phrase("mm", paragraphFont));
                            cellHeightUnit.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellHeightUnit.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(cellHeightUnit);
                            

                            // table.AddCell(new PdfPCell(new Phrase("Width", tableSubHeadingFont)));
                            // table.AddCell(new PdfPCell(new Phrase(currentCasePdf.Labelwidth.ToString(), paragraphFont)));
                            // table.AddCell(new PdfPCell(new Phrase("mm", paragraphFont)));
                            // Add row 5
                            PdfPCell LabelLength = new PdfPCell(new Phrase(translations["length"], tableSubHeadingFont));
                            LabelLength.HorizontalAlignment = Element.ALIGN_CENTER;
                            LabelLength.VerticalAlignment = Element.ALIGN_MIDDLE;
                            LabelLength.FixedHeight = 18f;
                            table.AddCell(LabelLength);     

                            PdfPCell LabelLengthData = new PdfPCell(new Phrase(currentCasePdf.Labelheight.ToString(), paragraphFont));
                            LabelLengthData.HorizontalAlignment = Element.ALIGN_CENTER;
                            LabelLengthData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(LabelLengthData);
                            table.AddCell(cellHeightUnit);

                            // table.AddCell(new PdfPCell(new Phrase("Length", tableSubHeadingFont)));
                            // table.AddCell(new PdfPCell(new Phrase(currentCasePdf.Labelheight.ToString(), paragraphFont)));
                            // table.AddCell(new PdfPCell(new Phrase("mm ", paragraphFont)));
                            // Add row 6
                            PdfPCell LabelPositionA = new PdfPCell(new Phrase(translations["PositionA"], tableSubHeadingFont));
                            LabelPositionA.HorizontalAlignment = Element.ALIGN_CENTER;
                            LabelPositionA.VerticalAlignment = Element.ALIGN_MIDDLE;
                            LabelPositionA.FixedHeight = 18f;
                            table.AddCell(LabelPositionA);     

                            PdfPCell LabelPositionAData = new PdfPCell(new Phrase(currentCasePdf.Labelx.ToString(), paragraphFont));
                            LabelPositionAData.HorizontalAlignment = Element.ALIGN_CENTER;
                            LabelPositionAData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(LabelPositionAData);
                            table.AddCell(cellHeightUnit);

                            // table.AddCell(new PdfPCell(new Phrase("Position A", tableSubHeadingFont)));
                            // table.AddCell(new PdfPCell(new Phrase(currentCasePdf.Labelx.ToString(), paragraphFont)));
                            // table.AddCell(new PdfPCell(new Phrase("mm", paragraphFont)));
                            // Add row 7
                            PdfPCell LabelPositionB = new PdfPCell(new Phrase(translations["PositionB"], tableSubHeadingFont));
                            LabelPositionB.HorizontalAlignment = Element.ALIGN_CENTER;
                            LabelPositionB.VerticalAlignment = Element.ALIGN_MIDDLE;
                            LabelPositionB.FixedHeight = 18f;
                            table.AddCell(LabelPositionB);     

                            PdfPCell LabelPositionBData = new PdfPCell(new Phrase(currentCasePdf.Labely.ToString(), paragraphFont));
                            LabelPositionBData.HorizontalAlignment = Element.ALIGN_CENTER;
                            LabelPositionBData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table.AddCell(LabelPositionBData);
                            table.AddCell(cellHeightUnit);

                            // table.AddCell(new PdfPCell(new Phrase("Position B", tableSubHeadingFont)));
                            // table.AddCell(new PdfPCell(new Phrase(currentCasePdf.Labely.ToString(), paragraphFont)));
                            // table.AddCell(new PdfPCell(new Phrase("mm", paragraphFont)));
                            table.SpacingAfter = 60f;    
                            doc.Add(table); 
                            table.SpacingAfter = 90f;    
                            j++;          
                   
                        }   
                    }

                        doc.NewPage();
                        Paragraph palleteDescriptionHeading = new Paragraph(translations["PaletteDescription"], subHeadingFont);
                        palleteDescriptionHeading.SpacingAfter = 50f;
                        doc.Add(palleteDescriptionHeading);
                        // Create table
                        PdfPTable table1 = new PdfPTable(2); // Number of columns: 3
                        table1.WidthPercentage = 50f; // Decrease width to 60%
                        table1.HorizontalAlignment = Element.ALIGN_LEFT; // Align table to the left side
                        // table.SpacingAfter = 20f;

// Set column widths
float[] columnWidths1 = { 30f, 20f }; // Adjust the desired width of each column
table1.SetWidths(columnWidths1);
table1.DefaultCell.HorizontalAlignment = Element.ALIGN_CENTER;


                        // Add row 1
                        PdfPCell cellPalletType = new PdfPCell(new Phrase(translations["palletType"], tableSubHeadingFont));
                            cellPalletType.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellPalletType.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellPalletType.FixedHeight = 18f;
                            table1.AddCell(cellPalletType);
                            
                            PdfPCell cellPalletTypeData = new PdfPCell(new Phrase(palletPdfData.PalletType.ToString(), paragraphFont));
                            cellPalletTypeData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellPalletTypeData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table1.AddCell(cellPalletTypeData);
                           

                        // table1.AddCell(new PdfPCell(new Phrase("Pallet Type", tableSubHeadingFont)));
                        // table1.AddCell(new PdfPCell(new Phrase(palletPdfData.PalletType, paragraphFont)));
                        // Add row 2
                         PdfPCell cellNumberofLayers = new PdfPCell(new Phrase(translations["numberOfLayers"], tableSubHeadingFont));
                            cellNumberofLayers.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellNumberofLayers.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellNumberofLayers.FixedHeight = 18f;
                            table1.AddCell(cellNumberofLayers);
                            
                            PdfPCell cellNumberofLayersData = new PdfPCell(new Phrase(palletPdfData.NoOfLayers.ToString(), paragraphFont));
                            cellNumberofLayersData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellNumberofLayersData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table1.AddCell(cellNumberofLayersData);
                           

                        // table1.AddCell(new PdfPCell(new Phrase("Number of Layers", tableSubHeadingFont)));
                        // table1.AddCell(new PdfPCell(new Phrase(palletPdfData.NoOfLayers.ToString(), paragraphFont)));
                        // Add row 3
                         PdfPCell cellnoSchemaA = new PdfPCell(new Phrase(translations["numberOfCasesSchemaA"], tableSubHeadingFont));
                            cellnoSchemaA.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellnoSchemaA.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellnoSchemaA.FixedHeight = 18f;
                            table1.AddCell(cellnoSchemaA);
                            
                            PdfPCell cellnoSchemaAData = new PdfPCell(new Phrase(noSchemaA, paragraphFont));
                            cellnoSchemaAData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellnoSchemaAData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table1.AddCell(cellnoSchemaAData);
                           

                        // table1.AddCell(new PdfPCell(new Phrase("Number of Cases Schema A", tableSubHeadingFont)));
                        // table1.AddCell(new PdfPCell(new Phrase(noSchemaA, paragraphFont)));
                        // Add row 4
                        PdfPCell cellLayersSchema_A = new PdfPCell(new Phrase(translations["LayersSchemaA"], tableSubHeadingFont));
                            cellLayersSchema_A.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLayersSchema_A.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellLayersSchema_A.FixedHeight = 18f;
                            table1.AddCell(cellLayersSchema_A);
                            
                            PdfPCell cellLayersSchema_AData = new PdfPCell(new Phrase(LayersSchema_A, paragraphFont));
                            cellLayersSchema_AData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLayersSchema_AData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table1.AddCell(cellLayersSchema_AData);
                           

                        // table1.AddCell(new PdfPCell(new Phrase("Layers Schema A", tableSubHeadingFont)));
                        // table1.AddCell(new PdfPCell(new Phrase(LayersSchema_A, paragraphFont)));
                        // Add row 5
                         PdfPCell cellnoSchemaB = new PdfPCell(new Phrase(translations["numberOfCasesSchemaB"], tableSubHeadingFont));
                            cellnoSchemaB.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellnoSchemaB.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellnoSchemaB.FixedHeight = 18f;
                            table1.AddCell(cellnoSchemaB);
                            
                            PdfPCell cellnoSchemaBData = new PdfPCell(new Phrase(noSchemaB, paragraphFont));
                            cellnoSchemaBData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellnoSchemaBData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table1.AddCell(cellnoSchemaBData);
                          
                        // table1.AddCell(new PdfPCell(new Phrase("Number of Cases Schema B", tableSubHeadingFont)));
                        // table1.AddCell(new PdfPCell(new Phrase(noSchemaB, paragraphFont)));
                        // Add row 6
                        PdfPCell cellLayersSchema_B = new PdfPCell(new Phrase(translations["LayersSchemaB"], tableSubHeadingFont));
                            cellLayersSchema_B.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLayersSchema_B.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellLayersSchema_B.FixedHeight = 18f;
                            table1.AddCell(cellLayersSchema_B);
                            
                            PdfPCell cellLayersSchema_BData = new PdfPCell(new Phrase(LayersSchema_B, paragraphFont));
                            cellLayersSchema_BData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLayersSchema_BData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table1.AddCell(cellLayersSchema_BData);
                          

                        // table1.AddCell(new PdfPCell(new Phrase("Layers Schema B", tableSubHeadingFont)));
                        // table1.AddCell(new PdfPCell(new Phrase(LayersSchema_B, paragraphFont)));
                        // Add row 7
                         PdfPCell cellnoSchemaC = new PdfPCell(new Phrase(translations["numberOfCasesSchemaC"], tableSubHeadingFont));
                            cellnoSchemaC.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellnoSchemaC.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellnoSchemaC.FixedHeight = 18f;
                            table1.AddCell(cellnoSchemaC);
                            
                            PdfPCell cellnoSchemaCData = new PdfPCell(new Phrase(noSchemaC, paragraphFont));
                            cellnoSchemaCData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellnoSchemaCData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table1.AddCell(cellnoSchemaCData);
                          

                        // table1.AddCell(new PdfPCell(new Phrase("Number of Cases Schema C", tableSubHeadingFont)));
                        // table1.AddCell(new PdfPCell(new Phrase(noSchemaC, paragraphFont)));
                        // Add row 8
                         PdfPCell cellLayersSchema_C = new PdfPCell(new Phrase(translations["LayersSchemaC"], tableSubHeadingFont));
                            cellLayersSchema_C.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLayersSchema_C.VerticalAlignment = Element.ALIGN_MIDDLE;
                            cellLayersSchema_C.FixedHeight = 18f;
                            table1.AddCell(cellLayersSchema_C);
                            
                            PdfPCell cellLayersSchema_CData = new PdfPCell(new Phrase(LayersSchema_C, paragraphFont));
                            cellLayersSchema_CData.HorizontalAlignment = Element.ALIGN_CENTER;
                            cellLayersSchema_CData.VerticalAlignment = Element.ALIGN_MIDDLE;
                            table1.AddCell(cellLayersSchema_CData);
                          
                        // table1.AddCell(new PdfPCell(new Phrase("Layers Schema C", tableSubHeadingFont)));
                        // table1.AddCell(new PdfPCell(new Phrase(LayersSchema_C, paragraphFont)));
                        
                            doc.Add(table1); 
                 
                      for(int k=0;k<casepdf.Count;k++)
                      {
                       string filename = Path.GetFileName(files[k].FileName);
                       if(filename=="Pallet")
                       {                        
                            if (files[k].Length > 0)
                            {
                                 var buffer = new byte[files[k].Length];
                                 using (var streamReader = new BinaryReader(files[k].OpenReadStream()))
                                {
                                    buffer = streamReader.ReadBytes((int)files[k].Length);
                                }
                                    var Palletimage = iTextSharp.text.Image.GetInstance(buffer);
                                    Palletimage.ScaleAbsolute(400f, 250f);

                                    float logoX2 = 240f;

                                    float logoY2 = doc.PageSize.Height -75f -  Palletimage.ScaledHeight;

                                    Palletimage.SetAbsolutePosition(logoX2, logoY2);
                                    doc.Add(Palletimage);

                            }
    
                        }                      
                      }

                    // Create an array to store image file paths
                    string[] imageFilePaths = new string[images.Count];

                    // Save each image file and store the file path in the array
                    string outputFolderPath1 = Path.Combine(Directory.GetCurrentDirectory(), "pdf/image1");
                    string outputFolderPath2 = Path.Combine(Directory.GetCurrentDirectory(), "pdf/image2");
                    string outputFolderPath3 = Path.Combine(Directory.GetCurrentDirectory(), "pdf/image3");

                    for (int i = 0; i < images.Count; i++)
                    {
                    var imageFile = images[i];
                        // if(i == 0){
                        //     string imageFilePath = Path.Combine(outputFolderPath1, imageFile.FileName);
                        //     imageFilePaths[i] = imageFilePath;

                        //     using (var imageStream = new FileStream(imageFilePath, FileMode.Create))
                        //     {
                        //         await imageFile.CopyToAsync(imageStream);
                        //     }
                        // }else if( i == 1){
                        //     string imageFilePath = Path.Combine(outputFolderPath2, imageFile.FileName);
                        //     imageFilePaths[i] = imageFilePath;

                        //     using (var imageStream = new FileStream(imageFilePath, FileMode.Create))
                        //     {
                        //         await imageFile.CopyToAsync(imageStream);
                        //     }
                        // }else if(i == 2){
                        //     string imageFilePath = Path.Combine(outputFolderPath3, imageFile.FileName);
                        //     imageFilePaths[i] = imageFilePath;

                        //     using (var imageStream = new FileStream(imageFilePath, FileMode.Create))
                        //     {
                        //         await imageFile.CopyToAsync(imageStream);
                        //     }
                        // }                
                    }
                    canvas.SetFontAndSize(subHeadingFont.BaseFont, 16f);

                            canvas.SetColorFill(brushColor);
                            canvas.BeginText();
                            canvas.ShowTextAligned(Element.ALIGN_LEFT, translations["schemaA"], 30, 450, 0);
                            canvas.EndText();
                            // for image2
                            canvas.BeginText();
                            canvas.ShowTextAligned(Element.ALIGN_CENTER, translations["schemaB"], 290, 450, 0);
                            canvas.EndText();
                            // string img3 = imageFilePaths[2];
                            canvas.BeginText();
                            canvas.ShowTextAligned(Element.ALIGN_CENTER, translations["schemaC"], 510, 450, 0);
                            canvas.EndText();
                     for(int k=0;k<files.Count;k++)
                {
                    string filename = Path.GetFileName(files[k].FileName);
                    Console.WriteLine("imageFile::::::::"+filename);
                  //  Console.WriteLine("imageFile Count::::::::"+files.Count);
                  if(filename.Substring(0,2)== "Sc"){
                    Console.WriteLine("imageFile substring::::::::"+filename.Substring(7));
                    Console.WriteLine("imageFile substring2::::::::"+filename.Substring(8,3));
                    Console.WriteLine("imageFile substring3::::::::"+filename.Substring(12));

                  }
                    

                        if(filename.Substring(0,2)== "Sc" && filename.Substring(0,7)=="SchemaA")
                        {
                          
                             // Drawing "Schema A:" as subheading
                            
                            
                             if (files[k].Length > 0)
                            {
                                 var buffer = new byte[files[k].Length];
                                 using (var streamReader = new BinaryReader(files[k].OpenReadStream()))
                                {
                                    buffer = streamReader.ReadBytes((int)files[k].Length);
                                }
                                    var SchemaAimage = iTextSharp.text.Image.GetInstance(buffer);
                                    float logoX2;
                                    float logoY2;
                                    if(filename.Substring(8,3) == "pat"){
                                        logoX2 = 30f;
                                        logoY2 = 300f;
                                         if(filename.Substring(12) == "EU 6: 800 x 600"){
                                            SchemaAimage.ScaleAbsolute(50f, 65f);
                                              logoX2 = 40f;
                                              logoY2 = 300f;
                                           
                                        }else if(filename.Substring(12) == "US 1: 1219 x 1016 "){
                                            SchemaAimage.ScaleAbsolute(80f, 98f);
                                            
                                        }else if(filename.Substring(12) == "US 2: 1067 x 1067"){
                                          
                                            SchemaAimage.ScaleAbsolute(90f, 85f);
                                        }else if(filename.Substring(12) == "EU 1: 1200 x 800"){
                                              SchemaAimage.ScaleAbsolute(70f, 95f);
                                           
                                        }else if(filename.Substring(12) == "EU 2: 1200 x 1000"){
                                             SchemaAimage.ScaleAbsolute(78f, 98f);
                                          
                                        }else if(filename.Substring(12) == "AU 1: 1165 x 1165"){
                                            SchemaAimage.ScaleAbsolute(100f, 95f);
                                              logoX2 = 20f;
                                              logoY2 = 300f;
                               
                                        }else if(filename.Substring(12) == "ASIA 1: 1100 x 1100"){
                                          SchemaAimage.ScaleAbsolute(90f, 90f);
                                           
                                        }else{
                                         SchemaAimage.ScaleAbsolute(100f, 120f);
                                        }
                                      
                                     
                                     SchemaAimage.Border = Image.LEFT_BORDER | Image.TOP_BORDER | Image.RIGHT_BORDER | Image.BOTTOM_BORDER;
                                    SchemaAimage.BorderWidthLeft = 0.1f;
                                    SchemaAimage.BorderWidthTop = 0.1f;
                                    SchemaAimage.BorderWidthRight = 0.1f;
                                    SchemaAimage.BorderWidthBottom = 0.1f;
                                    SchemaAimage.BorderColor = new iTextSharp.text.BaseColor(System.Drawing.Color.Black);
                                   
                                    }else{
                                          SchemaAimage.ScalePercent(50f);
                                           Console.WriteLine("imageFile::::::::"+filename);
                                        if(filename.Substring(12) == "EU 6: 800 x 600"){
                                            logoX2 = -140f;
                                            logoY2 = 184f;
                                        }else if(filename.Substring(12) == "US 1: 1219 x 1016 "){
                                            logoX2 = -125f;
                                            logoY2 = 201f;
                                        }else if(filename.Substring(12) == "US 2: 1067 x 1067"){
                                            logoX2 = -127f;
                                            logoY2 = 196f;
                                        }else if(filename.Substring(12) == "EU 1: 1200 x 800"){
                                            logoX2 = -130f;
                                            logoY2 = 202f;
                                        }else if(filename.Substring(12) == "EU 2: 1200 x 1000"){
                                            logoX2 = -130f;
                                            logoY2 = 202f;
                                        }else if(filename.Substring(12) == "AU 1: 1165 x 1165"){
                                            logoX2 = -130f;
                                            logoY2 = 200f;
                                        }else if(filename.Substring(12) == "ASIA 1: 1100 x 1100"){
                                            logoX2 = -125f;
                                            logoY2 = 198f;
                                        }else{
                                            logoX2 = 30f;
                                        logoY2 = 300f;
                                        }
                                    }

                                    SchemaAimage.SetAbsolutePosition(logoX2, logoY2);
                                    doc.Add(SchemaAimage);

                            }                                                    

                        }
                         if(filename.Substring(0,2)== "Sc" && filename.Substring(0,7)=="SchemaB")
                        {
                          //  string img2 = imageFilePaths[1];
                            // Drawing "Schema A:" as subheading
                            canvas.SetFontAndSize(subHeadingFont.BaseFont, 16f);

                            
                           
                              if (files[k].Length > 0)
                            {
                                 var buffer = new byte[files[k].Length];
                                 using (var streamReader = new BinaryReader(files[k].OpenReadStream()))
                                {
                                    buffer = streamReader.ReadBytes((int)files[k].Length);
                                }
                                    var SchemaAimage = iTextSharp.text.Image.GetInstance(buffer);
                                    
                             
                                    float logoX2;
                                    float logoY2;
                                    if(filename.Substring(8,3) == "pat"){
                                         logoX2 = 250f;
                                        logoY2 = 300f;
                                        if(filename.Substring(12) == "EU 6: 800 x 600"){
                                           SchemaAimage.ScaleAbsolute(50f, 65f);
                                            logoX2 = 265f;
                                            logoY2 = 300f;
                                           
                                        }else if(filename.Substring(12) == "US 1: 1219 x 1016 "){
                                              SchemaAimage.ScaleAbsolute(80f, 98f);
                                            
                                        }else if(filename.Substring(12) == "US 2: 1067 x 1067"){
                                          SchemaAimage.ScaleAbsolute(90f, 85f);
                                            
                                        }else if(filename.Substring(12) == "EU 1: 1200 x 800"){
                                            SchemaAimage.ScaleAbsolute(70f, 95f);
                                           
                                        }else if(filename.Substring(12) == "EU 2: 1200 x 1000"){
                                            SchemaAimage.ScaleAbsolute(78f, 98f);
                                            
                                          
                                        }else if(filename.Substring(12) == "AU 1: 1165 x 1165"){
                                            SchemaAimage.ScaleAbsolute(100f, 95f);
                                           logoX2 = 240f;
                                           logoY2 = 300f;
                               
                                        }else if(filename.Substring(12) == "ASIA 1: 1100 x 1100"){
                                           SchemaAimage.ScaleAbsolute(90f, 90f);
                                           
                                        }else{
                                         SchemaAimage.ScaleAbsolute(100f, 120f);
                                        }
                                       
                                    SchemaAimage.Border = Image.LEFT_BORDER | Image.TOP_BORDER | Image.RIGHT_BORDER | Image.BOTTOM_BORDER;
                                    SchemaAimage.BorderWidthLeft = 0.1f;
                                    SchemaAimage.BorderWidthTop = 0.1f;
                                    SchemaAimage.BorderWidthRight = 0.1f;
                                    SchemaAimage.BorderWidthBottom = 0.1f;
                                    SchemaAimage.BorderColor = new iTextSharp.text.BaseColor(System.Drawing.Color.Black);
                                    
                                    }else{
                                       SchemaAimage.ScalePercent(50f);
                                        // logoX2 = 75f;
                                        // logoY2 = 195f;
                                        if(filename.Substring(12) == "EU 6: 800 x 600"){
                                            logoX2 = 90f;
                                            logoY2 = 184f;
                                        }else if(filename.Substring(12) == "US 1: 1219 x 1016 "){
                                            logoX2 = 90f;
                                            logoY2 = 201f;
                                        }else if(filename.Substring(12) == "US 2: 1067 x 1067"){
                                            logoX2 = 92f;
                                            logoY2 = 196f;
                                        }else if(filename.Substring(12) == "EU 1: 1200 x 800"){
                                            logoX2 = 90f;
                                            logoY2 = 202f;
                                        }else if(filename.Substring(12) == "EU 2: 1200 x 1000"){
                                            logoX2 = 90f;
                                            logoY2 = 202f;
                                        }else if(filename.Substring(12) == "AU 1: 1165 x 1165"){
                                            logoX2 = 90f;
                                            logoY2 = 200f;
                                        }else if(filename.Substring(12) == "ASIA 1: 1100 x 1100"){
                                            logoX2 = 93f;
                                            logoY2 = 198f;
                                        }else{
                                            logoX2 = 30f;
                                        logoY2 = 300f;
                                        }
                                    }

                                    SchemaAimage.SetAbsolutePosition(logoX2, logoY2);
                                    doc.Add(SchemaAimage);

                            }    
                        }
                        if(filename.Substring(0,2)== "Sc" && filename.Substring(0,7)=="SchemaC")
                        {
                               // for image3
                                canvas.SetFontAndSize(subHeadingFont.BaseFont, 16f);

                           
                                  if (files[k].Length > 0)
                            {
                                 var buffer = new byte[files[k].Length];
                                 using (var streamReader = new BinaryReader(files[k].OpenReadStream()))
                                {
                                    buffer = streamReader.ReadBytes((int)files[k].Length);
                                }
                                    var SchemaAimage = iTextSharp.text.Image.GetInstance(buffer);
                                    
                                    float logoX2;
                                    float logoY2;
                                    if(filename.Substring(8,3) == "pat"){
                                        logoX2 = 470f;
                                        logoY2 = 300f;
                                        if(filename.Substring(12) == "EU 6: 800 x 600"){
                                            SchemaAimage.ScaleAbsolute(50f, 65f);
                                             logoX2 = 485f;
                                             logoY2 = 300f;
                                           
                                        }else if(filename.Substring(12) == "US 1: 1219 x 1016 "){
                                              SchemaAimage.ScaleAbsolute(80f, 98f);
                                            
                                        }else if(filename.Substring(12) == "US 2: 1067 x 1067"){
                                            SchemaAimage.ScaleAbsolute(90f, 85f);
                                        }else if(filename.Substring(12) == "EU 1: 1200 x 800"){
                                             SchemaAimage.ScaleAbsolute(70f, 95f);
                                           
                                        }else if(filename.Substring(12) == "EU 2: 1200 x 1000"){
                                             SchemaAimage.ScaleAbsolute(78f, 98f);
                                          
                                        }else if(filename.Substring(12) == "AU 1: 1165 x 1165"){
                                            SchemaAimage.ScaleAbsolute(100f, 95f);
                                            logoX2 = 460f;
                                            logoY2 = 300f;
                                        }else if(filename.Substring(12) == "ASIA 1: 1100 x 1100"){
                                            SchemaAimage.ScaleAbsolute(90f, 90f);
                                           
                                        }else{
                                         SchemaAimage.ScaleAbsolute(100f, 120f);
                                        }
                                     
                                       
                                    SchemaAimage.Border = Image.LEFT_BORDER | Image.TOP_BORDER | Image.RIGHT_BORDER | Image.BOTTOM_BORDER;
                                    SchemaAimage.BorderWidthLeft = 0.1f;
                                    SchemaAimage.BorderWidthTop = 0.1f;
                                    SchemaAimage.BorderWidthRight = 0.1f;
                                    SchemaAimage.BorderWidthBottom = 0.1f;
                                    SchemaAimage.BorderColor = new iTextSharp.text.BaseColor(System.Drawing.Color.Black);
                                    
                                    }else{
                                        SchemaAimage.ScalePercent(50f);
                                        // logoX2 = 315f;
                                        // logoY2 = 195f;
                                        if(filename.Substring(12) == "EU 6: 800 x 600"){
                                            logoX2 = 305f;
                                            logoY2 = 184f;
                                        }else if(filename.Substring(12) == "US 1: 1219 x 1016 "){
                                            logoX2 = 320f;
                                            logoY2 = 201f;
                                        }else if(filename.Substring(12) == "US 2: 1067 x 1067"){
                                            logoX2 = 315f;
                                            logoY2 = 196f;
                                        }else if(filename.Substring(12) == "EU 1: 1200 x 800"){
                                            logoX2 = 315f;
                                            logoY2 = 202f;
                                        }else if(filename.Substring(12) == "EU 2: 1200 x 1000"){
                                            logoX2 = 315f;
                                            logoY2 = 202f;
                                        }else if(filename.Substring(12) == "AU 1: 1165 x 1165"){
                                            logoX2 = 315f;
                                            logoY2 = 200f;
                                        }else if(filename.Substring(12) == "ASIA 1: 1100 x 1100"){
                                            logoX2 = 315f;
                                            logoY2 = 198f;
                                        }else{
                                            logoX2 = 30f;
                                        logoY2 = 300f;
                                        }
                                    }

                                    SchemaAimage.SetAbsolutePosition(logoX2, logoY2);
                                    doc.Add(SchemaAimage);

                            }  
                        }                     
                }  
                    
                    // if(imageFilePaths.Length==1){
                    // string img1 = imageFilePaths[0];
                    // // Drawing "Schema A:" as subheading
                    // canvas.SetFontAndSize(subHeadingFont.BaseFont, 16f);

                    // canvas.SetColorFill(brushColor);
                    // canvas.BeginText();
                    // canvas.ShowTextAligned(Element.ALIGN_LEFT, "Schema A:", 30, 450, 0);
                    // canvas.EndText();

                    // Image image2 = Image.GetInstance(img1);
                    // image2.ScalePercent(50);

                    // float width2 = image2.Width * 0.50f;
                    // float height2 = image2.Height * 0.50f;
                    // float x2 = 30f;
                    // float y2 = 300f;

                    // image2.SetAbsolutePosition(x2, y2);
                    // image2.ScaleAbsolute(width2, height2);
                    // doc.Add(image2);
                    // }else if(imageFilePaths.Length==2){
                    // string img1 = imageFilePaths[0];
                    // string img2 = imageFilePaths[1];
                    // // Drawing "Schema A:" as subheading
                    // canvas.SetFontAndSize(subHeadingFont.BaseFont, 16f);

                    // canvas.SetColorFill(brushColor);
                    // canvas.BeginText();
                    // canvas.ShowTextAligned(Element.ALIGN_LEFT, "Schema A:", 30, 450, 0);
                    // canvas.EndText();

                    // Image image2 = Image.GetInstance(img1);
                    // image2.ScalePercent(50);

                    // float width2 = image2.Width * 0.50f;
                    // float height2 = image2.Height * 0.50f;
                    // float x2 = 30f;
                    // float y2 = 300f;

                    // image2.SetAbsolutePosition(x2, y2);
                    // image2.ScaleAbsolute(width2, height2);
                    // doc.Add(image2);

                    // // for image2
                    // canvas.BeginText();
                    // canvas.ShowTextAligned(Element.ALIGN_CENTER, "Schema B:", 270, 450, 0);
                    // canvas.EndText();

                    // Image image3 = Image.GetInstance(img2);
                    // image3.ScalePercent(50);

                    // float width3 = image3.Width * 0.50f;
                    // float height3 = image3.Height * 0.50f;
                    // float x3 = 230f;
                    // float y3 = 300f;

                    // image3.SetAbsolutePosition(x3, y3);
                    // image3.ScaleAbsolute(width3, height3);
                    // doc.Add(image3);
                    // }else if(imageFilePaths.Length==3){
                    // string img1 = imageFilePaths[0];
                    // string img2 = imageFilePaths[1];
                    // string img3 = imageFilePaths[2];
                    // // Drawing "Schema A:" as subheading
                    // canvas.SetFontAndSize(subHeadingFont.BaseFont, 16f);

                    // canvas.SetColorFill(brushColor);
                    // canvas.BeginText();
                    // canvas.ShowTextAligned(Element.ALIGN_LEFT, "Schema A:", 30, 450, 0);
                    // canvas.EndText();

                    // Image image2 = Image.GetInstance(img1);
                    // image2.ScalePercent(50);

                    // float width2 = image2.Width * 0.50f;
                    // float height2 = image2.Height * 0.50f;
                    // float x2 = 30f;
                    // float y2 = 300f;

                    // image2.SetAbsolutePosition(x2, y2);
                    // image2.ScaleAbsolute(width2, height2);
                    // doc.Add(image2);

                    // // for image2
                    // canvas.BeginText();
                    // canvas.ShowTextAligned(Element.ALIGN_CENTER, "Schema B:", 270, 450, 0);
                    // canvas.EndText();

                    // Image image3 = Image.GetInstance(img2);
                    // image3.ScalePercent(50);

                    // float width3 = image3.Width * 0.50f;
                    // float height3 = image3.Height * 0.50f;
                    // float x3 = 230f;
                    // float y3 = 300f;

                    // image3.SetAbsolutePosition(x3, y3);
                    // image3.ScaleAbsolute(width3, height3);
                    // doc.Add(image3);

                    // // for image3
                    // canvas.BeginText();
                    // canvas.ShowTextAligned(Element.ALIGN_CENTER, "Schema C:", 510, 450, 0);
                    // canvas.EndText();

                    // Image image4 = Image.GetInstance(img3);
                    // image4.ScalePercent(50);

                    // float width4 = image4.Width * 0.50f;
                    // float height4 = image4.Height * 0.50f;
                    // float x4 = 470f;
                    // float y4 = 300f;

                    // image4.SetAbsolutePosition(x4, y4);
                    // image4.ScaleAbsolute(width4, height4);
                    // doc.Add(image4);

                    // }
                    doc.Close();
                    writer.Close();
                }

                return Ok(new { filePath = outputPath });
            }
            catch (Exception ex)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        // -------------------------------------



 // -------------------------------------

        [HttpGet("getInfo1")]
        public string GetInfo()
        {            
            try{
                string filepath =  Path.Combine(Directory.GetCurrentDirectory(), "auth.json");                
                JObject myJObject = JObject.Parse(System.IO.File.ReadAllText(filepath));
                foreach (JProperty property in myJObject.Properties())
                {
                    Console.WriteLine(property.Name + " - " + property.Value);
                    if(property.Name == "username"){
                        username = property.Value.ToString();
                    }
                    else if(property.Name == "usergroup"){
                        usergroup = property.Value.ToString();
                    }
                    else if(property.Name == "role"){
                        role = property.Value.ToString();
                    }
                    else if(property.Name == "lcid"){
                        lcid = property.Value.ToString();
                    }
                }
                
            }
            catch(Exception e){
                throw e;
            }
            return $"{username}:{role}:{usergroup}:{lcid}";            
        }

        [HttpGet("authInformate")]
        public RedirectResult GetUrl(string username, string usergroup, string role, string lcid)
        {     
            username = username;
            usergroup = usergroup;
            role = role;
            lcid = lcid;
            Console.WriteLine(username);
            Console.WriteLine(usergroup);
            Console.WriteLine(role);
            Console.WriteLine(lcid);
            try{
                JObject auth = new JObject(
                new JProperty("username", username),
                new JProperty("usergroup", usergroup),
                new JProperty("role", role),
                new JProperty("lcid", lcid));
                string filepath =  Path.Combine(Directory.GetCurrentDirectory(), "auth.json");                      
                System.IO.File.WriteAllText(filepath, auth.ToString());
                Thread.Sleep(5000);
                }
                catch(Exception e){
                    throw e;
            }           
            return Redirect("/"); // redirects to internal url
            // return RedirectPermanent("https://localhost:5001/"); //in local PC            
            //return RedirectPermanent("http://3.129.246.13:5000/"); //in AWS
        }

        // GET: api/Threed/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Threed>> GetThreeed(long id)
        {
            var threeed = await _context.Threeds.FindAsync(id);

            if (threeed == null)
            {
                return NotFound();
            }

            return threeed;
        }
        
        
        [HttpPut("LineDirection/{name}")]
        public async Task<IActionResult> UpdateLineDirection(string name, Threed threeed)
        {
            try
            {
                var threedModels = await _context.Threeds.Where(m => m.Name == name).ToListAsync();

                if (threedModels == null || threedModels.Count==0)
                        {
                            return BadRequest();
                        }
                        foreach(var threedModel in threedModels)
                    {
                            threedModel.line_rotation=threeed.line_rotation;
                            threedModel.line_position=threeed.line_position;
                            threedModel.UpdatedDatetime = DateTime.Now.ToString();
                            threedModel.UpdatedBy = GetAuthUser();
                    }         
                        await _context.SaveChangesAsync();
                        // return Ok (threedModel);

                // threedModel.line_rotation = threeed.line_rotation;

                // await _context.SaveChangesAsync();

                return Ok(threedModels);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreedExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }

        private bool ThreedExistsWithName(string name)
        {
            return _context.Threeds.Any(e => e.Name == name);
        }

        // PUT: api/Threed/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
[HttpPut("{id}")]
public async Task<IActionResult> PutThreeed(long id, Threed threeed)
{
    try
    {
        if (id != threeed.Id)
        {
            return BadRequest();
        }

 

        // Retrieve the existing Threed object from the context
        var existingThreed = await _context.Threeds.FindAsync(id);

 

        if (existingThreed == null)
        {
            return NotFound();
        }

 

        // Detach the existing Threed object from the context
        _context.Entry(existingThreed).State = EntityState.Detached;

 

        // Update the properties of the Threed object
        threeed.CreatedDatetime = existingThreed.CreatedDatetime;
        threeed.CreatedBy = existingThreed.CreatedBy;

        threeed.UpdatedBy = GetAuthUser();
        threeed.UpdatedDatetime = DateTime.Now.ToString();

 

        // Attach the updated Threed object to the context and mark it as modified
        _context.Entry(threeed).State = EntityState.Modified;

 

        // Save changes to the database
        await _context.SaveChangesAsync();
    }
    catch (DbUpdateConcurrencyException)
    {
        if (!ThreeedExists(id))
        {
            return NotFound();
        }
        else
        {
            throw;
        }
    }

 

    return NoContent();
}
      [HttpPut("caseDimension/{name}")]
        public async Task<IActionResult> CaseDimensionThreeed(string name, Threed threeed)
        {

            try
            {
                var caseDatas = await _context.Threeds.Where(x=>x.Name==name).ToListAsync();
               
                 if (caseDatas == null || caseDatas.Count==0)
                {
                    return BadRequest();
                }
              
               
             foreach(var caseData in caseDatas)
               {
                  
                    caseData.Length = threeed.Length;
                    caseData.Height= threeed.Height;
                    caseData.Width=threeed.Width;
                    caseData.Mass = threeed.Mass;
                    caseData.Material= threeed.Material;
                    caseData.UpdatedDatetime = DateTime.Now.ToString();
                    caseData.UpdatedBy = GetAuthUser();
               }         
                await _context.SaveChangesAsync();
                return Ok (caseDatas);
          
            
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }
    

        // PUT: api/Threed/6
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        //Rename Case for case design
        [HttpPut("renamecase/{name}")]
        public async Task<IActionResult> PutRenameThreeed(string name, Threed threeed)
        {

            try
            {
                var caseDatas = await _context.Threeds.Where(x=>x.Name==name).ToListAsync();
               
                 if (caseDatas == null || caseDatas.Count==0)
                {
                    return BadRequest();
                }
                var existingThreed = await _context.Threeds.FirstOrDefaultAsync(x => x.Name == threeed.Name);

              if (existingThreed != null)
             {
                 return BadRequest("CaseName already exists");
              }
               
             foreach(var caseData in caseDatas)
               {
                 if(caseData.Name==threeed.Name){
                    return BadRequest("CaseName already exist");
                 } 
                    caseData.old_case_name = caseData.Name;
                    caseData.Name= threeed.Name;
                    caseData.import_data_filename=threeed.import_data_filename;
                    caseData.renamed_by = GetAuthUser();
                    caseData.renamed_datetime = DateTime.Now.ToString();
                    caseData.UpdatedDatetime=DateTime.Now.ToString();
                    caseData.UpdatedBy = GetAuthUser();
                    // caseData.saveas_from_caseid = threeed.saveas_from_caseid;
                    // caseData.import_data_filename = threeed.import_data_filename;
               }         
                await _context.SaveChangesAsync();
                return Ok (caseDatas);
          
            
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }

        [HttpPut("importfile/{name}")]
        public async Task<IActionResult> ImportFileThreeed(string name, Threed threeed)
        {

            try
            {
                var caseDatas = await _context.Threeds.Where(x=>x.Name==name).ToListAsync();
               
                 if (caseDatas == null || caseDatas.Count==0)
                {
                    return BadRequest();
                }
               
             foreach(var caseData in caseDatas)
               {
                    caseData.import_data_filename=threeed.import_data_filename;
                   
               }         
                await _context.SaveChangesAsync();
                return Ok (caseDatas);
          
            
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }
       

        // POST: api/Threed
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("addcase")]
        public async Task<ActionResult<Threed>> PostThreeed(Threed threeed)
        {
           
            threeed.CreatedBy = GetAuthUser();
            threeed.UpdatedBy = GetAuthUser();
            threeed.CreatedDatetime= DateTime.Now.ToString();
            threeed.UpdatedDatetime= DateTime.Now.ToString();
            // threeed.import_data_filename=threeed.Name;
            // threeed.saveas_from_caseid=threeed.Id;
            _context.Threeds.Add(threeed);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetThreeed", new { id = threeed.Id }, threeed);
        }

        

        [HttpPost]
        public async Task<ActionResult<Threed>> PostThreeeD(Threed threeed)
        {
        var existingThreed = await _context.Threeds.FirstOrDefaultAsync(t => t.Name == threeed.Name);
        threeed.CreatedBy = existingThreed.CreatedBy;
        threeed.CreatedDatetime = existingThreed.CreatedDatetime;
        threeed.UpdatedBy = GetAuthUser();
        threeed.UpdatedDatetime = DateTime.Now.ToString();
        // threeed.import_data_filename = threeed.Name;
        // threeed.saveas_from_caseid = threeed.Id;
        _context.Threeds.Add(threeed);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetThreeed", new { id = threeed.Id }, threeed);
        }

        //SaveAs Api for case design
         [HttpPost("savecase/{name}")]
        public async Task<ActionResult<Threed>> SaveAsThreeed(string name, Threed threeed)
        {
        try
            {
                var caseDatas = await _context.Threeds.Where(x=>x.Name == name).ToListAsync();
               if (caseDatas == null || caseDatas.Count==0)
                {
                    return BadRequest();
                }
            var existingThreed = await _context.Threeds.FirstOrDefaultAsync(x => x.Name == threeed.Name);

                    if (existingThreed != null)
                    {
                        return BadRequest("CaseName already exists");
                    }
                
               foreach(var caseData in caseDatas)
               {
                 if(caseData.Name==threeed.Name){
                    return BadRequest("CaseName already exist");
                 }
                  caseData.Id = 0;
                  caseData.Name= threeed.Name;
                  caseData.renamed_datetime=DateTime.Now.ToString();
                  caseData.UpdatedDatetime=DateTime.Now.ToString();
                //   caseData.CreatedDatetime=DateTime.Now.ToString();
                 
                 _context.Threeds.Add(caseData);
              
               }         
                await _context.SaveChangesAsync();
                return Ok (caseDatas);
          
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

    }

        //saveAS api for pallet Design
 [HttpPost("savepallet/{id}")]
         public async Task<ActionResult<Threed>> SavePallet(long id, PalletDesign pallet)
        {
        try
            {
                var SavePalletNames= await _context.PalletDesigns.Where(x=>x.PalletId == id).ToListAsync();
                var LayerCreatorNames= await _context.LayerCreators.Where(x=>x.Palletid == id).ToListAsync();
                var programRoutineCreaterNames= await _context.ProgramRoutineCreaters.Where(x=>x.PalletId == id).ToListAsync();
               if (SavePalletNames == null || SavePalletNames.Count==0)
                {
                    return BadRequest();
                }
                var existingPallet = await _context.PalletDesigns.FirstOrDefaultAsync(x => x.PalletName == pallet.PalletName);
                if (existingPallet != null)
                {
                    return BadRequest("PalletName already exists");
                }
                var savpal = new  palletId{
                PalletName = pallet.PalletName
            };
                                _context.PalletIds.Add(savpal);

            await _context.SaveChangesAsync();
               

                 foreach(var SavePalletName in SavePalletNames)

               {

                 if(SavePalletName.PalletName==pallet.PalletName){

                    return BadRequest("palletName already exist");

                 }

                SavePalletName.pId=0;

                SavePalletName.PalletId=savpal.PalletId;

                SavePalletName.PalletName = pallet.PalletName;

                _context.PalletDesigns.Add(SavePalletName);
                            }        

                 foreach(var Lc in LayerCreatorNames)

               {

                Lc.Lid=0;

                Lc.Palletid=(int)savpal.PalletId;

                _context.LayerCreators.Add(Lc);

             

               }        

                 foreach(var Pc in programRoutineCreaterNames)

               {

                Pc.PRCId=0;

                Pc.PalletId= (int)savpal.PalletId;

                _context.ProgramRoutineCreaters.Add(Pc);

             

               }        

                await _context.SaveChangesAsync();

                 var response = new

                {

                    SavePalletNames = SavePalletNames,

                    LayerCreatorNames = LayerCreatorNames,

                    programRoutineCreaterNames = programRoutineCreaterNames

                };

                return Ok (response);

     

            }

            catch (DbUpdateConcurrencyException)

            {

                if (!PaletteExists(id))

                {

                    return NotFound();

                }

                else

                {

                    throw;

                }

            }

 

    }
        
        
         //Rename for pallet Design
    [HttpPut("renamepallet/{id}")]
        public async Task<IActionResult> RenamePallet(long id, PalletDesign pallet)
        {

            try
            {
                var PalletRenames = await _context.PalletDesigns.Where(x=>x.PalletId== id).ToListAsync();
                var PalletinPalletId= await _context.PalletIds.Where(x=>x.PalletId==id).FirstOrDefaultAsync();
                if(PalletinPalletId==null){
                    return BadRequest();
                } 
                 var existingPallet = await _context.PalletDesigns.FirstOrDefaultAsync(x => x.PalletName == pallet.PalletName);

                if (existingPallet != null)
                {
                    return BadRequest("PalletName already exists");
                }
        
                PalletinPalletId.PalletName=pallet.PalletName;
                await _context.SaveChangesAsync();

                if (PalletRenames == null || PalletRenames.Count==0)
                {
                    return BadRequest();
                }
                
                foreach(var PalletRename in PalletRenames)
               {
                if(PalletRename.PalletName==pallet.PalletName){
                    return BadRequest("palletName already exist");
                 }
                PalletRename.old_pallet_name = PalletRename.PalletName;
                PalletRename.PalletName=pallet.PalletName;
                PalletRename.renamed_by = GetAuthUser();
                PalletRename.renamed_datetime = DateTime.Now.ToString();
               }
                // _context.Entry(PalletRenames).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return Ok (PalletRenames);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaletteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }
    
        public string GetAuthUser(){
             string filepath =  Path.Combine(Directory.GetCurrentDirectory(), "auth.json"); 
           
             using (StreamReader r = new StreamReader(filepath))
            {
                string json = r.ReadToEnd();
                var item = JObject.Parse(json);
                var name = Convert.ToString(item["username"]);

                return name;
            }
            
        }

        // DELETE: api/Threed/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteThreeed(long id)
        {
            var threeed = await _context.Threeds.FindAsync(id);
            if (threeed == null)
            {
                return NotFound();
            }

            _context.Threeds.Remove(threeed);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ThreeedExists(long id)
        {
            return _context.Threeds.Any(e => e.Id == id);
        }
         private bool ThreeedExistsWithName(string id)
        {
            return _context.Threeds.Any(e => e.Name == id);
        }
         private bool PalletExistsWithName(string id)
        {
            return _context.PalletDesigns.Any(e => e.PalletName == id);
        }
        [HttpGet("getdropdown")]
        public async Task<ActionResult<IEnumerable<Dropdown>>> getDropdown()
        {
            return await _context.Dropdowns.ToListAsync();
        }

         // Get Palette design data from Sqlite DB
          [HttpGet("getPallets")]
        public async Task<ActionResult<IEnumerable<PalletDesign>>> getPallets()
        {
            return await _context.PalletDesigns.ToListAsync();
            
        }

        [HttpGet("getDataSet")]
    public async Task<ActionResult<IEnumerable<PalletDesign>>> getDataSet()
    {
        var pallets = await _context.PalletDesigns.Where(p => p.PalletId == 462).FirstOrDefaultAsync();
        return Ok(pallets);
    }


         [HttpGet("GetSinglePallet/{id}")]
         public async Task<ActionResult<object>> GetSinglePallet(long id)
         {
            var pallet = await _context.PalletDesigns.Where(x=>x.PalletId == id).Select(x => new {
                x.PalletId,
                x.OriginPal1,
                x.OriginPal2,
                x.Firstcasepal1,
                x.Firstcasepal2,
                x.IntermediateLayerType,
                x.CaseType,
                // x.pallet_no,
                // x.PalletName,
                // x.Working_area_1_Width_X_Direction,
                // x.Working_area_1_Length_Y_Direction,
                // x.Working_area_1_Offset_X_Direction,
                // x.Working_area_1_Offset_Y_Direction,
                // x.Working_area_2_Width_X_Direction,
                // x.Working_area_2_Length_Y_Direction,
                // x.Working_area_2_Offset_X_Direction,
                // x.Working_area_2_Offset_Y_Direction,
                // x.PalletType,
                // x.NoOfLayers,
                // x.CasesSchemaA,
                // x.CasesSchemaB,
                // x.CasesSchemaC,
                // x.OutsideLabelPriority,
                // x.rule_symmetric_mass_distribution,
                // x.horizontal_mass_distribution,
                // x.vertical_mass_distribution,
                // x.SchemaA,
                // x.SchemaB,
                // x.SchemaC,
            }).ToListAsync();
            if (pallet == null){
                return NotFound();
            }
            return Ok(pallet);
        }
        
        [HttpPut("addsequence/{id}")]
            public async Task<IActionResult> updatesequence(long id, PalletDesign pallet)
            {
                try
            {
                var updateData = await _context.PalletDesigns.Where(x=>x.PalletId == id).ToListAsync();
            foreach(var data in updateData)
            {
            data.layerSchemaA = pallet.layerSchemaA;
            data.layerSchemaB = pallet.layerSchemaB;
            data.layerSchemaC = pallet.layerSchemaC;
           
            _context.Update(data);
            }
            await _context.SaveChangesAsync();
            return Ok (updateData);
            }
            catch (DbUpdateConcurrencyException){
                throw;
            }
            }
        // ---adding images

[HttpPut("addImage/{id}")]

  public async Task<IActionResult> Images(long id, palletId images)

 {
    try

 {
    var imageData = await _context.PalletIds.Where(x=>x.PalletId == id).ToListAsync();

  foreach(var img in imageData)

 {

  img.Image_A = images.Image_A;

  img.Image_B=images.Image_B;

  img.Image_C = images.Image_C;

  _context.Update(img);




 }

  await _context.SaveChangesAsync();




  return Ok (imageData);

  }

  catch (DbUpdateConcurrencyException){




    throw;




  }

 }




// get image

[HttpGet("getPalImage/{id}")]
public async Task<ActionResult<object>> GetPalletImageData(long id)

    {

      var img = await _context.PalletIds.Where(x=>x.PalletId == id).ToListAsync();

      

       if (img == null){

          return NotFound();

          }

        return Ok(img);

  }

        // full update api for case design
[HttpPut("importforCase/{name}")]
        public async Task<IActionResult> PutRenameThreeedCase(string name, Threed threeed)
        {
            try
            {
                var caseDatas = await _context.Threeds.Where(x=>x.Name==name).ToListAsync();
               
                 if (caseDatas == null || caseDatas.Count==0)
                {
                    return BadRequest();
                }
               
             foreach(var caseData in caseDatas)
               {
                //  if(caseData.Name==threeed.Name){
                //     return BadRequest("CaseName already exist");
                //  } 
                   caseData.Name = threeed.Name;
                   caseData.Length = threeed.Length;
                   caseData.Width = threeed.Width;
                   caseData.Height = threeed.Height;
                   caseData.Material = threeed.Material;
                   caseData.Mass = threeed.Mass;
                   caseData.Directionx = threeed.Directionx;
                   caseData.Directiony = threeed.Directiony;
                   caseData.Directionz = threeed.Directionz;
                   caseData.labelcolour = threeed.labelcolour;
                   caseData.Typename = threeed.Typename;
                   caseData.Labelname = threeed.Labelname;
                   caseData.Labelx = threeed.Labelx;
                   caseData.Labely = threeed.Labely;
                   caseData.Labelwidth = threeed.Labelwidth;
                   caseData.Labelheight = threeed.Labelheight;


                    caseData.old_case_name = caseData.Name;
                    caseData.Name= threeed.Name;
                    caseData.import_data_filename=threeed.import_data_filename;
                    caseData.renamed_by = GetAuthUser();
                    caseData.renamed_datetime = DateTime.Now.ToString();
                    // caseData.saveas_from_caseid = threeed.saveas_from_caseid;
                    // caseData.import_data_filename = threeed.import_data_filename;
               }         
                await _context.SaveChangesAsync();
                return Ok (caseDatas);
          
            
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }

[HttpPut("importforCase1/{id}")]
        public async Task<IActionResult> PutThreeed1(long id, Threed threeed)
        {
            try
            {
                var caseDatas = await _context.Threeds.Where(x=>x.Id==id).ToListAsync();
               
                 if (caseDatas == null || caseDatas.Count==0)
                {
                    return BadRequest();
                }
               
             foreach(var caseData in caseDatas)
               {
                //  if(caseData.Name==threeed.Name){
                //     return BadRequest("CaseName already exist");
                //  } 
                // caseData.Id=threeed.id;
                   caseData.Name = threeed.Name;
                   caseData.Length = threeed.Length;
                   caseData.Width = threeed.Width;
                   caseData.Height = threeed.Height;
                   caseData.Material = threeed.Material;
                   caseData.Mass = threeed.Mass;
                   caseData.Directionx = threeed.Directionx;
                   caseData.Directiony = threeed.Directiony;
                   caseData.Directionz = threeed.Directionz;
                   caseData.labelcolour = threeed.labelcolour;
                   caseData.Typename = threeed.Typename;
                   caseData.Labelname = threeed.Labelname;
                   caseData.Labelx = threeed.Labelx;
                   caseData.Labely = threeed.Labely;
                   caseData.Labelwidth = threeed.Labelwidth;
                   caseData.Labelheight = threeed.Labelheight;


                    caseData.old_case_name = caseData.Name;
                    caseData.Name= threeed.Name;
                    caseData.import_data_filename=threeed.import_data_filename;
                    caseData.renamed_by = GetAuthUser();
                    caseData.renamed_datetime = DateTime.Now.ToString();
                    // caseData.saveas_from_caseid = threeed.saveas_from_caseid;
                    // caseData.import_data_filename = threeed.import_data_filename;
               }         
                await _context.SaveChangesAsync();
                return Ok (caseDatas);
          
            
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ThreeedExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }


    //full update api for pallet design
    [HttpPut("importForPallet/{name}")]
        public async Task<IActionResult> RenamePallet1(string name, PalletDesign pallet)
        {

            try
            {
                var PalletRenames = await _context.PalletDesigns.Where(x=>x.PalletName== name).ToListAsync();
                // var PalletinPalletId= await _context.PalletIds.Where(x=>x.PalletId==id).FirstOrDefaultAsync();
                // if(PalletinPalletId==null){
                //     return BadRequest();
                // }
        
                // PalletinPalletId.PalletName=pallet.PalletName;
                // await _context.SaveChangesAsync();

                if (PalletRenames == null || PalletRenames.Count==0)
                {
                    return BadRequest();
                }
                
                foreach(var PalletRename in PalletRenames)
               {

                // if(PalletRename.PalletName==pallet.PalletName){
                //     return BadRequest("palletName already exist");
                //  }
                 PalletRename.PalletId = pallet.PalletId;
                //  PalletRename.pallet_no = pallet.pallet_no;
                 PalletRename.PalletName = pallet.PalletName;
                 PalletRename.OriginPal1 = pallet.OriginPal1;
                 PalletRename.OriginPal2 = pallet.OriginPal2;
                 PalletRename.Firstcasepal1 = pallet.Firstcasepal1;
                 PalletRename.Firstcasepal2 = pallet.Firstcasepal2;
                 PalletRename.PalletType = pallet.PalletType;
                 PalletRename.IntermediateLayerType = pallet.IntermediateLayerType;
                 PalletRename.CaseType = pallet.CaseType;
                 PalletRename.NoOfLayers = pallet.NoOfLayers;
                 PalletRename.CasesSchemaA = pallet.CasesSchemaA;
                 PalletRename.CasesSchemaB = pallet.CasesSchemaB;
                 PalletRename.CasesSchemaC = pallet.CasesSchemaC;
                 PalletRename.OutsideLabelPriority = pallet.OutsideLabelPriority;
                 PalletRename.rule_symmetric_mass_distribution = pallet.rule_symmetric_mass_distribution;
                 PalletRename.horizontal_mass_distribution = pallet.horizontal_mass_distribution;
                 PalletRename.vertical_mass_distribution = pallet.vertical_mass_distribution;
                 PalletRename.SchemaA = pallet.SchemaA;
                 PalletRename.SchemaB = pallet.SchemaB;
                 PalletRename.SchemaC = pallet.SchemaC;
                 PalletRename.Working_area_1_Width_X_Direction = pallet.Working_area_1_Width_X_Direction;
                 PalletRename.Working_area_1_Length_Y_Direction = pallet.Working_area_1_Length_Y_Direction;
                 PalletRename.Working_area_1_Offset_X_Direction = pallet.Working_area_1_Offset_X_Direction;
                 PalletRename.Working_area_1_Offset_Y_Direction = pallet.Working_area_1_Offset_Y_Direction;
                 PalletRename.Working_area_2_Width_X_Direction = pallet.Working_area_2_Width_X_Direction;
                 PalletRename.Working_area_2_Length_Y_Direction = pallet.Working_area_2_Length_Y_Direction;
                 PalletRename.Working_area_2_Offset_Y_Direction = pallet.Working_area_2_Offset_X_Direction;
                 PalletRename.Working_area_2_Offset_X_Direction = pallet.Working_area_2_Offset_X_Direction;
                 PalletRename.Working_area_2_Offset_Y_Direction = pallet.Working_area_2_Offset_Y_Direction;

                 PalletRename.intermediate_Layer = pallet.intermediate_Layer;
                 PalletRename.case_position = pallet.case_position;

                PalletRename.old_pallet_name = pallet.PalletName;
                PalletRename.PalletName=pallet.PalletName;
                PalletRename.renamed_by = GetAuthUser();
                PalletRename.renamed_datetime = DateTime.Now.ToString();
                await _context.SaveChangesAsync();
               }
                // _context.Entry(PalletRenames).State = EntityState.Modified;
                
                return Ok (PalletRenames);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PalletExistsWithName(name))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }







     [HttpPut("importPalletFile/{id}")]
        public async Task<IActionResult> importPalletFile(long id, PalletDesign pallet)
        {

            try
            {
                var PalletRenames = await _context.PalletDesigns.Where(x=>x.PalletId== id).ToListAsync();

                if (PalletRenames == null || PalletRenames.Count==0)
                {
                    return BadRequest();
                }
                
                foreach(var PalletRename in PalletRenames)
               {
                // if(PalletRename.PalletName==pallet.PalletName){
                //     return BadRequest("palletName already exist");
                //  }
               PalletRename.import_data_filename=pallet.import_data_filename;
               }
                // _context.Entry(PalletRenames).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return Ok (PalletRenames);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaletteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

        }


        // Get Palette design data from Sqlite DB

        [HttpGet("getPallet/{PalletId}/{palletNo}")]
        public async Task<ActionResult<PalletDesign>> getPallet(long PalletId ,int palletNo)
        {
            var paletteData = await _context.PalletDesigns.Where( x=> x.PalletId == PalletId && x.pallet_no == palletNo).ToListAsync();
            if (paletteData.Count >0)
            {
                  return Ok(paletteData);            
            }
           return NotFound();;
        }
        // using in import data for pallets
        [HttpGet("getPallet/{name}")]
        public async Task<ActionResult<PalletDesign>> getPalletById(string name)
        {
            var paletteData = await _context.PalletDesigns.Where( x=> x.PalletName == name ).ToListAsync();
            
             return Ok(paletteData);            
          
        }
        



[HttpGet("getFiles")]
public async Task<ActionResult<object[]>> getImport()
{
    try
    {
        string importDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), "ImportForCase");

        string[] filePaths = Directory.GetFiles(importDirectoryPath);

        object[] fileObjects = filePaths.Select(filePath =>
        {
            string fileName = Path.GetFileNameWithoutExtension(filePath);
            // DateTime lastModified = File.GetLastWriteTime(filePath);

            return new
            {
                Name = fileName,
                // LastModified = lastModified
            };
        }).ToArray();

        return fileObjects;
    }
    catch (IOException ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}

[HttpGet("getLocalizationFiles")]
public async Task<ActionResult<object[]>> getLocalizationFiles()
{
    try
    {
        string importDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), "locales");

        string[] filePaths = Directory.GetFiles(importDirectoryPath);

        object[] fileObjects = filePaths.Select(filePath =>
        {
            string fileName = Path.GetFileNameWithoutExtension(filePath);
            // DateTime lastModified = File.GetLastWriteTime(filePath);

            return new
            {
                Name = fileName,
                // LastModified = lastModified
            };
        }).ToArray();

        return fileObjects;
    }
    catch (IOException ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}

[HttpGet("localizationLangData/{name}")]
        public ActionResult<string> localizationLangData(string name)
        {
            
                string filepath =  "locales/"+name+".json"; 
                string jsonContent = System.IO.File.ReadAllText(filepath);

                return Ok(jsonContent);
           
            //  using (StreamReader r = new StreamReader(filepath))
            // {
            //     string json = r.ReadToEnd();
            //     var item = JObject.Parse(json);
            //     var _namee = Convert.ToString(item);

            //     return _namee;
            // }
                
                }

[HttpGet("getFilesForPallet")]
public async Task<ActionResult<object[]>> getImport1()
{
    try
    {
        string importDirectoryPath = Path.Combine(Directory.GetCurrentDirectory(), "ImportForPallet");

        
        string[] filePaths = Directory.GetFiles(importDirectoryPath);

      
        object[] fileObjects = filePaths.Select(filePath =>
        {
            string fileName = Path.GetFileNameWithoutExtension(filePath);
           

            return new
            {
                Name = fileName,
                // LastModified = lastModified
            };
        }).ToArray();

        
        return fileObjects;
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}

[HttpGet("getCaseContents")]
public async Task<ActionResult<string>> getFileContents(string fileName)
{
    try
    {
        string filePath = Path.Combine(Directory.GetCurrentDirectory(), "ImportForCase", fileName + ".json");

        if (!System.IO.File.Exists(filePath))
        {
            return NotFound();
        }

        string fileContents = System.IO.File.ReadAllText(filePath);

        return fileContents;
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}


[HttpGet("getPalletContents")]
public async Task<ActionResult<string>> getPalletContents(string fileName)
{
    try
    {
        string filePath = Path.Combine(Directory.GetCurrentDirectory(), "ImportForPallet", fileName + ".json");

        if (!System.IO.File.Exists(filePath))
        {
            return NotFound();
        }

        string fileContents = System.IO.File.ReadAllText(filePath);

        return fileContents;
    }
    catch (Exception ex)
    {
        return StatusCode(500, $"An error occurred: {ex.Message}");
    }
}

            [HttpPost("savePallet")]
            public async Task<ActionResult<PalletDesign>> savePallet(PalletDesign pallet )
            {
            
                var savpal = new  palletId{
                    PalletName = pallet.PalletName
                };
            
                _context.PalletIds.Add(savpal);
                await _context.SaveChangesAsync();
            
                pallet.pId = 0;
                pallet.PalletId = savpal.PalletId;
                pallet.pallet_no = 1;
                pallet.PalletName = savpal.PalletName;
                pallet.CreatedDate = DateTime.Now.ToString();
                pallet.UpdatedDate = DateTime.Now.ToString();
                _context.PalletDesigns.Add(pallet);
                await _context.SaveChangesAsync();

            
                pallet.pId = 0;
                pallet.PalletId = savpal.PalletId;
                pallet.pallet_no = 2;
                pallet.PalletName = savpal.PalletName;
                pallet.CreatedDate = DateTime.Now.ToString();
                pallet.UpdatedDate = DateTime.Now.ToString();
                _context.PalletDesigns.Add(pallet);
                await _context.SaveChangesAsync();

            return pallet;
            }

            //Update the record in Palette design master

            [HttpPut("updatePallet/{PalletId}/{palletNo}")]
            public async Task<IActionResult> PutPalette(long PalletId, PalletDesign pallet , int palletNo)
            {
            try
                {
                var paletteData = await _context.PalletDesigns.Where( x=> x.PalletId == PalletId && x.pallet_no == palletNo).FirstOrDefaultAsync();

                if (paletteData == null)
                {
                    return BadRequest();
                } 
            
                paletteData.OriginPal1 =  pallet.OriginPal1;
                paletteData.OriginPal2 =  pallet.OriginPal2;
                paletteData.Firstcasepal1=  pallet.Firstcasepal1;
                paletteData.Firstcasepal2 =  pallet.Firstcasepal2;
                paletteData.PalletType =  pallet.PalletType;
                paletteData.IntermediateLayerType =  pallet.IntermediateLayerType;
                paletteData.IntermediateLayerWidth =  pallet.IntermediateLayerWidth;
                paletteData.IntermediateLayerLength =  pallet.IntermediateLayerLength;
                paletteData.CaseType =  pallet.CaseType;
                paletteData.NoOfLayers =  pallet.NoOfLayers;
                paletteData.CasesSchemaA =  pallet.CasesSchemaA;
                paletteData.CasesSchemaB =  pallet.CasesSchemaB;
                paletteData.CasesSchemaC =  pallet.CasesSchemaC;
                paletteData.OutsideLabelPriority =  pallet.OutsideLabelPriority;
                paletteData.rule_symmetric_mass_distribution =  pallet.rule_symmetric_mass_distribution;
                paletteData.horizontal_mass_distribution = pallet.horizontal_mass_distribution;
                paletteData.vertical_mass_distribution = pallet.vertical_mass_distribution;
                paletteData.SchemaA =  pallet.SchemaA;
                paletteData.SchemaB =  pallet.SchemaB;
                paletteData.SchemaC =  pallet.SchemaC;
                paletteData.Working_area_1_Width_X_Direction =  pallet.Working_area_1_Width_X_Direction;
                paletteData.Working_area_1_Length_Y_Direction =  pallet.Working_area_1_Length_Y_Direction;
                paletteData.Working_area_1_Offset_X_Direction =  pallet.Working_area_1_Offset_X_Direction;
                paletteData.Working_area_1_Offset_Y_Direction =  pallet.Working_area_1_Offset_Y_Direction;
                paletteData.Working_area_2_Width_X_Direction =  pallet.Working_area_2_Width_X_Direction;
                paletteData.Working_area_2_Length_Y_Direction =  pallet.Working_area_2_Length_Y_Direction;
                paletteData.Working_area_2_Offset_X_Direction =  pallet.Working_area_2_Offset_X_Direction;
                paletteData.Working_area_2_Offset_Y_Direction =  pallet.Working_area_2_Offset_Y_Direction;
                paletteData.working_area_1_Height_Z_Direction =  pallet.working_area_1_Height_Z_Direction;
                paletteData.working_area_2_Height_Z_Direction =  pallet.working_area_2_Height_Z_Direction;
                paletteData.intermediate_Layer =  pallet.intermediate_Layer;
                paletteData.case_position = pallet.case_position;
                paletteData.IsActive =  pallet.IsActive;
                paletteData.CreatedBy =  pallet.CreatedBy;
                // paletteData.CreatedDate =  DateTime.Now.ToString();
                paletteData.UpdatedBy =  pallet.UpdatedBy;
                paletteData.UpdatedDate =  DateTime.Now.ToString();

                paletteData.simulation_speed =  pallet.simulation_speed;
                paletteData.simulation_result =  pallet.simulation_result;
                paletteData.simulation_reason =  pallet.simulation_reason;
                paletteData.export_documentation =  pallet.export_documentation;
                paletteData.case_dimensions =  pallet.case_dimensions;
                paletteData.label_description =  pallet.label_description;
                paletteData.basic_parameter =  pallet.basic_parameter;
                paletteData.design_parameter =  pallet.design_parameter;
                paletteData.pattern_wizard =  pallet.pattern_wizard;
                paletteData.layer_creator =  pallet.layer_creator;
                paletteData.program_routine_creator =  pallet.program_routine_creator;
                paletteData.simulation =  pallet.simulation;
                paletteData.export_palette_data =  pallet.export_palette_data;
                
            
                _context.Entry(paletteData).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PaletteExists(PalletId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            return Ok(pallet);
            }


        


            private bool PaletteExists(long id)
            {
                return _context.PalletDesigns.Any(e => e.PalletId == id);
            }


            // DELETE: Delete Pallet design
            [HttpDelete("deletePallet/{PalletId}")]
            public async Task<IActionResult> DeletePallet(long PalletId)
            {
                try{
                    var Pallet1 = await _context.LayerCreators.Where(x=> x.Palletid == PalletId).ToListAsync();
                    _context.LayerCreators.RemoveRange(Pallet1);
                }
                catch(Exception ex){
                    throw ex;
                }
                try{
                    var Pallet2 = await _context.ProgramRoutineCreaters.Where(x=> x.PalletId == PalletId).ToListAsync();
                    _context.ProgramRoutineCreaters.RemoveRange(Pallet2);
                }
                catch(Exception ex){
                    throw ex;
                }            
                var Pallet = await _context.PalletDesigns.Where(x=> x.PalletId == PalletId).ToListAsync();
                if (Pallet == null)
                {
                    return NotFound();
                }
                if (PalletId == 462 )
                {
                    return BadRequest("Admin pallet cannot be deleted"); // or whatever status code you want to return
                }
                _context.PalletDesigns.RemoveRange(Pallet);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            [HttpGet("getLayer")]
            public async Task<ActionResult<IEnumerable<LayerCreator>>> getlayer()
            {
                return await _context.LayerCreators.ToListAsync();
            }

            
            [HttpGet("getLayer/{palletId}")]
            public async Task<ActionResult<IEnumerable<LayerCreator>>> getlayerbyPalletId(int palletId)
            {
                var getlayer = await _context.LayerCreators.Where(x=>x.Palletid == palletId).ToListAsync();

                if(getlayer == null)
                {
                    return NotFound();
                }
                return getlayer;
            }

            // Insert the record in Palette design master

            [HttpPost("saveLayer/{palletId}")]
            public async Task<ActionResult<LayerCreator>> saveLayer(int palletId, List<LayerCreator> layerCreator)
            {
                
            await DeleteLayer(palletId);
            if(layerCreator==null)
            return  BadRequest();

            // layerCreator.Updated_DateTime=DateTime.Now.ToString();
                await _context.LayerCreators.AddRangeAsync(layerCreator);
                try{
                    await _context.SaveChangesAsync();
                }catch(Exception ex){
                    throw ex;
                }
            // await _context.SaveChangesAsync();
                //return Ok();
            return Ok(layerCreator);
            }

            [HttpPost("saveLayerCreater/{palletId}")]
            public async Task<ActionResult<List<LayerCreator>>> SaveLayer1([FromBody]List<LayerCreator> layerCreator , int palletId )
            {
                await DeleteLayer(palletId);
            
            if(layerCreator != null){
                if(layerCreator.Count>0){
                    layerCreator.ForEach(l => l.Updated_DateTime = DateTime.Now.ToString());
                    await _context.LayerCreators.AddRangeAsync(layerCreator);
                await _context.SaveChangesAsync();
                return  layerCreator;
                }
                else{
                    return null;
                }
            }
            else{
                    return null;
            }
            
            }
            [HttpDelete("Deletelayer/{palletId}")]
            public async Task<ActionResult<List<LayerCreator>>> DeleteLayer(int palletId)
            {
                var layers = await _context.LayerCreators.Where(x=>x.Palletid == palletId).ToListAsync();
                if (layers != null && layers.Any())
                {
                    _context.LayerCreators.RemoveRange(layers);
                    await _context.SaveChangesAsync();
                    return layers;
                }

                return NotFound();
                
            }

            private bool LayerExists(long id)
            {
                return _context.LayerCreators.Any(e => e.Palletid == id);
            }

            [HttpGet("getPRCs")]
            public async Task<ActionResult<IEnumerable<ProgramRoutineCreater>>> GetPRC(){
                return await _context.ProgramRoutineCreaters.ToListAsync();
            }

            // Get PRC details by PalletId
            [HttpGet("getPrc/{PalletId}")]
            public async Task<ActionResult<IEnumerable<ProgramRoutineCreater>>> GetPRCbyPalletId(int PalletId ){
                var pallet = await _context.ProgramRoutineCreaters.Where(x => x.PalletId == PalletId).ToListAsync();
                if(pallet == null){
                    return NotFound();
                }

                return Ok(pallet);
            }
            
            // Insert records PRC based on palletID
            [HttpPost("savePRC/{PalletId}")]
            public async Task<ActionResult<List<ProgramRoutineCreater>>> SavePRCDetails( List<ProgramRoutineCreater> programRoutineCreater , int PalletId){
                
                await RemovePRCByPalletId(PalletId);
                if(programRoutineCreater != null)
                {   
                    if(programRoutineCreater.Count > 0){

                        programRoutineCreater=programRoutineCreater.Select(l =>{l.updated_datetime = DateTime.Now.ToString();
                                                                            l.created_datetime = DateTime.Now.ToString();return l;}).ToList();
                        await _context.ProgramRoutineCreaters.AddRangeAsync(programRoutineCreater);
                        try{
                            await _context.SaveChangesAsync();
                            }catch(Exception ex){
                                    throw(ex);
                            }
                        return programRoutineCreater;
                        }
                        else{
                            return null;
                        }
                }
                
                return null;
            }

[HttpPut("positions/{id}")]
    public async Task<IActionResult> Positions(long id, ProgramRoutineCreater position)
  {
   try
   {
     var Prcpositions = await _context.ProgramRoutineCreaters.Where(x=>x.PalletId== id).ToListAsync();
    foreach(var Prcposition in Prcpositions)
   {
    Prcposition.prePos_X_for_Auto = position.prePos_X_for_Auto;
    Prcposition.prePos_Y_for_Auto=position.prePos_Y_for_Auto;
    Prcposition.prePos_Z_for_Auto = position.prePos_Z_for_Auto;
    _context.Update(Prcposition);

   }
    await _context.SaveChangesAsync();

    return Ok (Prcpositions);
    }
    catch (DbUpdateConcurrencyException){

        throw;

    }
  }
            // Delete PRC  based on PalletId
            [HttpDelete("removePRC/{PalletId}")]
            public async Task<ActionResult<List<ProgramRoutineCreater>>> RemovePRCByPalletId(int PalletId){
                var pallets = await _context.ProgramRoutineCreaters.Where(x => x.PalletId == PalletId).ToListAsync();
                if(pallets !=null && pallets.Any()){
                    _context.ProgramRoutineCreaters.RemoveRange(pallets);
                    await _context.SaveChangesAsync();
                }
                return Ok("Records Deleted Successfully");
            }
            
            
            
            // Get case by label Id
            [HttpGet("getcasebyLabelId")]
            public async Task<ActionResult<IEnumerable<Threed>>> GetThreedslabelById(long id)
            {
                var getLabelById =await _context.Threeds.Where(x=>x.Id == id).Select(x=>$"labelName : {x.Labelname}").ToListAsync();
                
            Console.WriteLine(getLabelById);
            
                return Ok(getLabelById);
            }
            
            // Get case by label Id
            [HttpGet("getlabel/{caseid}")]
            public async Task<ActionResult<IEnumerable<Threed>>> getlabel(long caseid)
            {
            // var getLabelById =await _context.Threeds.Where(x=>x.Id == caseid).Select(x=>$"labelName : {x.Labelname}_{x.Typename}").ToListAsync();
                var getLabelById = await _context.Threeds.Where(x=>x.Id == caseid).Select(x => new {label = $"{x.Labelname}_{x.Typename}"}).ToListAsync();
                return Ok(getLabelById);
            }  
            


            // Get cases with case Id and case dimensions
            [HttpGet("getcase")]
        
            public async Task<ActionResult<Threed>> GetThreedsCase1( )
            {
                //  var getCase = await _context.Threeds.Select(s=> $"caseId : {s.Id}    caseType : {s.Name}_{s.Length}_{s.Width}_{s.Height}").ToListAsync();
            
            var getCase = await _context.Threeds.Select(s => new { caseId= s.Id,
                    caseType=$"{s.Name}_{s.Length}_{s.Width}_{s.Height}"
                }).ToListAsync();
                return Ok(getCase);
            
            }
         
            [HttpGet("getcase/{name}")]
        
            public async Task<ActionResult<Threed>> GetThreedsCaseByName(string name )
            {
                 var getCase = await _context.Threeds.Where(s=>s.Name==name).ToListAsync();
        
                return Ok(getCase);
            
            }
        }
    }
    