import {create} from 'zustand';
import * as XLSX from 'xlsx';

const distStore = create(
    (set,get)=>({
        showCols : false,
        excelContent_as_json : [],
        extracted_columns : [],
        selectedColumnIndex : 0,
        isLoading : false,
        disableing : false,

        disablingTheFeature : async(data)=>{
            if(data.length==0){
                set({disableing : true})
            }else{
                set({disableing : false})

            }
        },

        settingLoaderON : ()=>{
            set({isLoading : true})
        }
        ,
        settingLoaderOFF : ()=>{
            set({isLoading : false})
        }
        ,
        choosen_distribution : '',
        setting_the_chossen_distribution : (distribution)=>{
            set({choosen_distribution : distribution})

        }
        ,
        demandedCol_data : {
            feature : '',
            dataCol : []
        },
        Gaussian_Distribution_results : {
            mean : 1,
            variance : 0,
            pdf_points : [],
        },
        standard_gaussian_Distribution_results : {
            mean : 1,
            variance : 0,
            pdf_points : [],
        },
        Exponential_Distribution_results : {
            mean : 1,
            variance : 'not needed',
            pdf_points : [],
        }
        ,
        standard_exponential_Distribution_results:{
            mean : 1,
            variance : 'not needed',
            pdf_points : [],
        }
        ,
        fileUploadToStore : async(file)=>{
            set({isLoading : true})
            const reader = new FileReader();
            reader.onload = (event)=>{
                console.log('File loaded!', event.target.result);
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, {type : 'array'});
                const worksheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[worksheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, {header : 1})
                set({disableing : false})
                
                set({showCols : true, isLoading : false,excelContent_as_json : jsonData, extracted_columns : jsonData[0]})
            }
            reader.readAsArrayBuffer(file)
        }

        ,

        specific_feature_col_data_extract : async(data, feature,index)=>{
            
            set({selectedColumnIndex : index, isLoading : true})
            let dataValues = []
            await Promise.resolve();
            data.forEach(el=>{
                dataValues.push(el[index])
            })

            set({demandedCol_data : {feature , dataCol : dataValues} });
            setTimeout(el=>{
                set({isLoading : false})

            }, 2000)
        }

        ,

        settingStandardGaussianDataTOCache : async()=>{
            if(localStorage.getItem('Gaussian_setup_tar')){
                let curve = JSON.parse(localStorage.getItem('Gaussian_setup_tar'))
                set({standard_gaussian_Distribution_results : curve})
                return;
            }else{
                let standardGaussian = [];
                let mean = 0;
                let variance = 1;
                let step = 8 / 500; // From -4 to +4 (covers 99.9% of standard normal)
                let x = -4;

                for (let i = 0; i < 500; i++, x += step) {
                    let exponent = -Math.pow(x - mean, 2) / (2 * variance);
                    let pdf = (1 / Math.sqrt(2 * Math.PI * variance)) * Math.exp(exponent);
                    standardGaussian.push({ x: x, y: pdf });
                }
                set({standard_gaussian_Distribution_results : {
                    mean : mean,
                    variance : variance,
                    pdf_points : standardGaussian
                }})
                localStorage.setItem('Gaussian_setup_tar', JSON.stringify({
                    mean : mean,
                    variance : variance,
                    pdf_points : standardGaussian
                }))
            }
        }
        ,


        Calculation_for_gaussian : async(data, feature)=>{
            // set({isLoading : true})
            // Assuming dataValues is cleaned (no headers)
            let dataValues = data.map(el => Number(el[feature])).filter(val => !isNaN(val));
            dataValues  .sort(function(a, b){return a-b});
            console.log(dataValues)
            // 1. Calculate Mean
            let mean = dataValues.reduce((acc, val) => acc + val, 0) / dataValues.length;

            // 2. Calculate Variance
            let variance = dataValues.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / dataValues.length;

            // 3. Create smooth range of X values (say from min to max)
            let minX = Math.min(...dataValues);
            let maxX = Math.max(...dataValues);

            let pdfpoints = [];
            let step = (maxX - minX) / 100;

            // for (let x = minX; x <= maxX; x += step) {
            //     let exponent = -Math.pow(x - mean, 2) / (2 * variance);
            //     let pdfValue = (1 / Math.sqrt(2 * Math.PI * variance)) * Math.exp(exponent);
            //     pdfValue = pdfValue*1000;
            //     pdfpoints.push({ Iteration: x, PDF: pdfValue });
            // }
            for (let x = 0; x<dataValues.length; x++) {
                let exponent = -Math.pow(dataValues[x]- mean, 2) / (2 * variance);
                let pdfValue = (1 / Math.sqrt(2 * Math.PI * variance)) * Math.exp(exponent);
                // pdfValue = pdfValue;
                pdfpoints.push({ Iteration: x, PDF: pdfValue });
            }
            console.log(mean)
            console.log(variance)
            console.log(pdfpoints)

            // Store it in state
            set({ Gaussian_Distribution_results: {
                mean, variance, pdf_points: pdfpoints
            }});


        }


        ,

        settingStandardExponentialDataTOCache : async()=>{
            if(localStorage.getItem('Exponential_setup_tar')){
                let curve = JSON.parse(localStorage.getItem('Exponential_setup_tar'))
                set({standard_exponential_Distribution_results : curve})
                return;
            }else{
                let standardExponential = [];
                let lambda = 1
                let points = 50
                let step = 0.1
                const data = []

                for (let i = 0; i < points; i++) {
                    let x = i * step;
                    let pdf = lambda * Math.exp(-lambda * x);
                    pdf = pdf*100
                    standardExponential.push({ x: x, y: pdf });
                }
                set({standard_exponential_Distribution_results : {
                    mean : 1,
                    variance : 'not needed',
                    pdf_points : standardExponential
                }})
                localStorage.setItem('Exponential_setup_tar', JSON.stringify({
                    mean : 1,
                    variance : 'not needed',
                    pdf_points : standardExponential
                }))
            }
        }
        
        ,



        Calculation_for_Exponantial : (data, feature)=>{
            // Assuming dataValues is cleaned (no headers)
            let dataValues = data.map(el => Number(el[feature])).filter(val => !isNaN(val));
            dataValues  .sort(function(a, b){return a-b});
            // 1. Calculate Mean
            let mean = dataValues.reduce((acc, val) => acc + val, 0) / dataValues.length;

            // calcualtions
            let pdf_points = [];
            for(let i = 0; i<dataValues.length; i++){
                let expo = Math.exp(-1*(1/mean)*dataValues[i]);
                let final = expo * (1/mean);
                // if(final<10000)
                pdf_points.push({ Iteration: i+1, PDF: final })
            }
            console.log(mean)
            console.log(dataValues)
            console.log(pdf_points)
            set({Exponential_Distribution_results : {
                mean,
                pdf_points
            }})
        }

        ,

        addingPDFCOLTOEXCEL : async(distribution, feature, index)=>{
            if(distribution == 'Gaussian'){
                get().Calculation_for_gaussian(get().excelContent_as_json,index);
                let colnewdata = get().Gaussian_Distribution_results
                console.log(colnewdata)
                // colnewdata = colnewdata.slice(0);
                let prevData = [...get().excelContent_as_json];
                prevData[0].push(`${feature}-PDF-${distribution}`)

                for(let i = 1; i<prevData.length; i++){
                    prevData[i].push(colnewdata.pdf_points[i-1].PDF)
                }

                console.log(prevData)

                set({excelContent_as_json : prevData})
            }else if(distribution == 'Exponential'){
                get().Calculation_for_Exponantial(get().excelContent_as_json,index);
                let colnewdata = get().Exponential_Distribution_results
                console.log(colnewdata)
                // colnewdata = colnewdata.slice(0);
                let prevData = [...get().excelContent_as_json];
                prevData[0].push(`${feature}-PDF-${distribution}`)

                for(let i = 1; i<prevData.length; i++){
                    prevData[i].push(colnewdata.pdf_points[i-1].PDF)
                }

                console.log(prevData)

                set({excelContent_as_json : prevData})
            }
        }

        ,

        exportDistributionAsExcel : async(dataToExport)=>{
            const worksheet = XLSX.utils.json_to_sheet(dataToExport);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "MySheet");
        
            XLSX.writeFile(workbook, "exported_file.xlsx");
        }
       
    })
)
export default distStore;