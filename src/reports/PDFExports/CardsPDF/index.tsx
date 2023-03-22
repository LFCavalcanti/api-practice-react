import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js'
import { Content, ContextPageSize, DynamicContent, Margins, PageSize, Style, StyleDictionary, StyleReference, TDocumentDefinitions } from 'pdfmake/interfaces';
import { iInfoList } from '../../../interfaces/iInfoList';
import {logo} from '../../../assets/imagesBase64';


interface ICardsPDF{
    callerName: string,
    infoList:iInfoList[]
    itemList: any[]
}

export default function CardsPDF({callerName, infoList, itemList}:ICardsPDF){
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

    const reportTitle:any[] = [
        {
            columns: [
                {
                    image: 'data:image/jpeg;base64,' + logo,
                    width: 40,
                },
                {
                    text: `REPORT: ${callerName}`,
                    style: 'pageHeader'
                }
            ],
            style: 'header'
        }
    ]

    const columnHeaders = infoList.map((info)=>({text: info.label, style:'tableHeader'}))

    const columnWidths = infoList.map((info)=>'auto')

    console.log(columnWidths)

    const rowData = itemList.map((item)=>{
        const row:any[] = []
        infoList.map((info)=>{
            const value = (info.attribute in item) ? item[info.attribute as keyof typeof item] : 'ERRO'
            row.push({text: value, style:'tableRow'})
        })
        return row
    })

    const reportContent:any[] = [
        {
            table:{
                headerRows: 1,
                widths: columnWidths,
                body: [
                    [...columnHeaders],
                    ...rowData
                ]
            },
            layout: 'lightHorizontalLines'
        }
    ]

    function reportFooter(currentPage:number, pageCount: number, pageSize:ContextPageSize):Content {

        return {
            text: `PAGINA ${currentPage} DE ${pageCount}`,
            style: 'footer'
        }
        
    }

    const pageSize:PageSize = 'A4'
    const pageMargins:Margins = [ 40, 70, 40, 60 ] //[left, top, right, bottom]

    const styles:StyleDictionary = {
        pageHeader: {
            fontSize: 16,
            color: '#333652',
            bold: true,
            margin: [10, 12, 0, 12]
        },
        header: {
            margin: [40, 15, 40, 15],
        },
        tableHeader:{
            fontSize: 10,
            bold: true,
        },
        tableRow:{
            fontSize: 9,
        },
        footer: {
            fontSize: 11,
            color: '#333652',
            bold: true,
            alignment: 'right',
            margin: [40, 15, 40, 15],
        }

    }

    const defaultStyle:StyleReference = {
        fontSize: 11,
        color: '#4a4a4a'
    }

    const docDefinitions:TDocumentDefinitions = {
        pageSize,
        pageMargins,
        header: [reportTitle],
        content: [reportContent],
        styles,
        footer: reportFooter,
        defaultStyle
    }

    pdfMake.createPdf(docDefinitions).download(`REPORT_${callerName}.pdf`)
    
}


