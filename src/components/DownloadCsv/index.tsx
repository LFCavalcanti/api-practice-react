import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'
import CsvDownloader from 'react-csv-downloader';
import { iInfoList } from "../../interfaces/iInfoList"


interface IDownloadCsv{
    infoList:iInfoList[]
    itemList: any[]
    callerName?: string
}

export default function DownloadCsv({infoList, itemList, callerName = 'results'}:IDownloadCsv){

    const columns = infoList.map((info)=>({id:info.attribute, displayName:info.label}))

    return (
        <div>
            <CsvDownloader
                filename={`EXPORT_${callerName}`}
                extension=".csv"
                separator=";"
                suffix={true}
                wrapColumnChar="'"
                columns={columns}
                datas={itemList}
            >
                <button><FontAwesomeIcon className="fa-xl" icon={faFileCsv} /> Download CSV</button>
            </CsvDownloader>
        </div>
    );

}