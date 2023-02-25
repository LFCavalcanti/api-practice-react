export interface iCnpj{
    cnpj: string,
    razao_social: string,
    nome_fantasia: string,
    identificador_matriz_filial: Number,
    descricao_matriz_filial: string,
    descricao_situacao_cadastral: string,
    data_inicio_atividade: string,
    data_situacao_cadastral: string,
    descricao_tipo_logradouro: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cep: Number,
    uf: string,
    codigo_municipio: Number,
    municipio: string,
    nome_cidade_exterior: string | null,
    codigo_natureza_juridica: Number,
    cnae_fiscal: string,
    cnae_fiscal_descricao: string,
    ddd_telefone_1: string,
    ddd_telefone_2: string | null
}