import { Tooltip } from 'react-tooltip';
import { iCnpj } from '../../interfaces/iCnpj';
import styles from './DisplayCnpj.module.scss';

interface CepProps {
    cnpjInformation: iCnpj
}

export default function DisplayCnpj(props:CepProps){

    const id_filial = (props.cnpjInformation.identificador_matriz_filial) ? props.cnpjInformation.identificador_matriz_filial.toString() : ''
    const desc_filial = (props.cnpjInformation.descricao_matriz_filial) ? props.cnpjInformation.descricao_matriz_filial : ''
    const mat_filial = `${id_filial} - ${desc_filial}`
    const cep = props.cnpjInformation.cep.toString()
    const codMun = props.cnpjInformation.codigo_municipio.toString()
    const natJuridica = props.cnpjInformation.codigo_natureza_juridica.toString()

    return(
        <div className={styles.container}>

            
            <div className={styles.field}>
                <p className={styles.field__name}>CODIGO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.cnpj}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.cnpj)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.cnpj}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>RAZAO SOCIAL:</p>
                <p className={styles.field__content}>{props.cnpjInformation.razao_social}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.razao_social)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.razao_social}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>NOME FANTASIA:</p>
                <p className={styles.field__content}>{props.cnpjInformation.nome_fantasia}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.nome_fantasia)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.nome_fantasia}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>MATRIZ/FILAIL:</p>
                <p className={styles.field__content}>{mat_filial}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(mat_filial)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${mat_filial}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>SITUAÇÃO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.descricao_situacao_cadastral}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.descricao_situacao_cadastral)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.descricao_situacao_cadastral}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>DATA INICIO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.data_inicio_atividade}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.data_inicio_atividade)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.data_inicio_atividade}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>DATA ATUALIZAÇÃO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.data_situacao_cadastral}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.data_situacao_cadastral)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.data_situacao_cadastral}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>TIPO LOGRADOURO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.descricao_tipo_logradouro || '-'}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.descricao_tipo_logradouro)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.descricao_tipo_logradouro}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>LOGRADOURO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.logradouro || '-'}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.logradouro)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.logradouro}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>NUMERO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.numero}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.numero)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.numero}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>COMPLEMENTO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.complemento}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.complemento)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.complemento}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>BAIRRO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.bairro}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.bairro)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.bairro}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>CEP:</p>
                <p className={styles.field__content}>{cep}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(cep)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${cep}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>ESTADO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.uf}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.uf)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.uf}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>COD IBGE:</p>
                <p className={styles.field__content}>{codMun}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(codMun)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${codMun}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>MUNICIPIO:</p>
                <p className={styles.field__content}>{props.cnpjInformation.municipio}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.municipio)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.municipio}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>MUNICIPIO EXT:</p>
                <p className={styles.field__content}>{props.cnpjInformation.nome_cidade_exterior || '-'}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.nome_cidade_exterior || '')}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.nome_cidade_exterior}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>NATUREZA JURIDICA:</p>
                <p className={styles.field__content}>{natJuridica}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(natJuridica)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${natJuridica}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>CNAE FISCAL:</p>
                <p className={styles.field__content}>{props.cnpjInformation.cnae_fiscal}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.cnae_fiscal)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.cnae_fiscal}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>DESCRIÇÃO CNAE:</p>
                <p className={styles.field__content}>{props.cnpjInformation.cnae_fiscal_descricao}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.cnae_fiscal_descricao)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.cnae_fiscal_descricao}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>TELEFONE 1:</p>
                <p className={styles.field__content}>{props.cnpjInformation.ddd_telefone_1}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.ddd_telefone_1)}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.ddd_telefone_1}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

            <div className={styles.field}>
                <p className={styles.field__name}>TELEFONE 2:</p>
                <p className={styles.field__content}>{props.cnpjInformation.ddd_telefone_2 || '-'}</p>
                <button
                    className={styles.field__copyBtn}
                    onClick={()=>navigator.clipboard.writeText(props.cnpjInformation.ddd_telefone_2 || '')}
                    data-tooltip-id="btn-nome"
                    data-tooltip-content={`Copiou: ${props.cnpjInformation.ddd_telefone_2 || ''}`}>
                    Copiar
                </button>
                <Tooltip className={styles.field__toolTip} id="btn-nome" events={['click']} delayHide={2000} variant='light'/>
            </div>

        </div>
    )
}