export interface subTypeProductPropos {
    idsubtipoproduto: number,
    descricao: string,
}

export interface typeProductProps {
    idtipopacote: number,
    descricao: string,
}

export interface Product {
    idproduto: number
    descricao: string
    dtcadastro: Date
    embalagem: string
    status: string
    idsubtipoproduto: number
    idtipopacote: number
}
