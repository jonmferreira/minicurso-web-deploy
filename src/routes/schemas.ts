export enum RoutersPathName {
    Login = '/login',
    Home = '/Home',
    /* Cliente */
    Solicitacoes = "/solicitacoes",
    SolicitacoesHome = "/home-solicitacoes",

    /* Tecnico CME Gerencimaneto de demandas */
    DemandasPendentes = `/demandas-pendentes`,
    SolicitacoesEmAndamento = `/solicitacoes-em-andamento`,
    DemandasEntregues = `/demandas-entregues`,
    DemandasCliente = `/demandas-clientes`,
    DemandasEmAndamento = "/demandas-em-andamento",
    Demandas = "/demandas",

    /* Motorista Gerencimaneto de demandas */
    SolicitacoesEntregaColeta = "/Solicitacoes-entrega-e-coleta",

    /* Gerenciar Coleta ou Entrega por Motorista */
    GerenciarSolicitacoesEntregaColeta = "/gerencia-solicitacoes-entrega-e-coleta",

    /* processo interno */
    Esterilizacao = "/esterilizacao",
    Distribuicao = "/distribuicao",
    Recebimento = "/recebimento",
    Producao = "/producao",
    Termo = "/termo",

    /* crud processo interno produtos */
    NovoSequencialEtiqueta = "/novo-sequencial-etiqueta",
    PesquisarEtiqueta = "/pesquisa-etiqueta",
    NovaEtiqueta = "/nova-etiqueta",

    /* crud processo interno patrimonio */
    Caixa = "/caixa",
    Produto = '/produto',

    /* crud processo interno especificações */
    TipoDeProduto = '/tipo-de-produto',
    SubTipoDeProduto = '/subtipo-de-produto',
    Embalagens = "/embalagens",
    Setor = "/setores",
    Profissao = "/profissoes",
    TipoDeCaixa = "/tipo-de-caixa",

    /* crud pessoas interno */
    NovoCliente = "/novo-cliente",
    NovoUsuarioCliente = "/novo-usuario-cliente",
    NovoMotorista = '/novo-motorista',
    NovoVeiculo = "/novo-veiculo",
    Equipamentos = "/equipamentos",
    GestaoInformacoesPessoais = "/gestao-informacoes-pessoais",
    GestaoInformacoesPessoaisConta = "/gestao-informacoes-pessoais/contas",
    GestaoInformacoesPessoaisAlterarSenha = "/gestao-informacoes-pessoais/alterar"
}

