export interface OpenBD {
    onix:    Onix;
    hanmoto: Hanmoto;
    summary: Summary;
}

export interface Hanmoto {
    toji:             string;
    zaiko:            number;
    maegakinado:      string;
    kaisetsu105w:     string;
    tsuiki:           string;
    genrecodetrc:     number;
    ndccode:          string;
    kankoukeitai:     string;
    sonotatokkijikou: string;
    jushoujouhou:     string;
    furokusonota:     string;
    dokushakakikomi:  string;
    zasshicode:       string;
    jyuhan:           Jyuhan[];
    hatsubai:         string;
    hatsubaiyomi:     string;
    hastameshiyomi:   boolean;
    author:           Author[];
    datemodified:     Date;
    datecreated:      Date;
    kanrenshoisbn:    string;
    reviews:          Review[];
    hanmotoinfo:      Hanmotoinfo;
    dateshuppan:      string;
}

export interface Author {
    listseq:     number;
    dokujikubun: string;
}

export interface Hanmotoinfo {
    name:             string;
    yomi:             string;
    url:              string;
    twitter:          string;
    facebook:         string;
    chokutori:        string;
    toritsugitorikyo: string;
    toritsugisonota:  string;
    eigyoudaihyousha: string;
    phoneshoten:      string;
    facsimileshoten:  string;
    emailshoten:      string;
    ordersite:        string;
    ordersitesonota:  string;
    ordersitejisha:   string;
    henpin:           string;
    jiyuukinyuu:      string;
}

export interface Jyuhan {
    date:     Date;
    ctime:    string;
    suri:     number;
    comment?: string;
}

export interface Review {
    post_user:  string;
    reviewer:   string;
    source_id:  number;
    kubun_id:   number;
    source:     string;
    choyukan:   string;
    han:        string;
    link:       string;
    appearance: Date;
    gou:        string;
}

export interface Onix {
    RecordReference:   string;
    NotificationType:  string;
    ProductIdentifier: ProductIdentifier;
    DescriptiveDetail: DescriptiveDetail;
    CollateralDetail:  CollateralDetail;
    PublishingDetail:  PublishingDetail;
    ProductSupply:     ProductSupply;
}

export interface CollateralDetail {
    TextContent:        TextContent[];
    SupportingResource: SupportingResource[];
}

export interface SupportingResource {
    ResourceContentType: string;
    ContentAudience:     string;
    ResourceMode:        string;
    ResourceVersion:     ResourceVersion[];
}

export interface ResourceVersion {
    ResourceForm:           string;
    ResourceVersionFeature: ResourceVersionFeature[];
    ResourceLink:           string;
}

export interface ResourceVersionFeature {
    ResourceVersionFeatureType: string;
    FeatureValue:               string;
}

export interface TextContent {
    TextType:        string;
    ContentAudience: string;
    Text:            string;
}

export interface DescriptiveDetail {
    ProductComposition: string;
    ProductForm:        string;
    ProductFormDetail:  string;
    TitleDetail:        TitleDetail;
    Contributor:        Contributor[];
    Language:           Language[];
    Extent:             Extent[];
    Subject:            Subject[];
}

export interface Contributor {
    SequenceNumber:    string;
    ContributorRole:   string[];
    PersonName:        PersonName;
    BiographicalNote?: string;
}

export interface PersonName {
    collationkey: string;
    content:      string;
}

export interface Extent {
    ExtentType:  string;
    ExtentValue: string;
    ExtentUnit:  string;
}

export interface Language {
    LanguageRole: string;
    LanguageCode: string;
    CountryCode:  string;
}

export interface Subject {
    MainSubject?:            string;
    SubjectSchemeIdentifier: string;
    SubjectCode:             string;
}

export interface TitleDetail {
    TitleType:    string;
    TitleElement: TitleElement;
}

export interface TitleElement {
    TitleElementLevel: string;
    TitleText:         PersonName;
    Subtitle:          PersonName;
}

export interface ProductIdentifier {
    ProductIDType: string;
    IDValue:       string;
}

export interface ProductSupply {
    MarketPublishingDetail: MarketPublishingDetail;
    SupplyDetail:           SupplyDetail;
}

export interface MarketPublishingDetail {
    MarketPublishingStatus:     string;
    MarketPublishingStatusNote: string;
}

export interface SupplyDetail {
    ProductAvailability: string;
    Price:               Price[];
}

export interface Price {
    PriceType:    string;
    PriceAmount:  string;
    CurrencyCode: string;
}

export interface PublishingDetail {
    Imprint:        Imprint;
    Publisher:      Publisher;
    PublishingDate: PublishingDate[];
}

export interface Imprint {
    ImprintIdentifier: ImprintIdentifier[];
    ImprintName:       string;
}

export interface ImprintIdentifier {
    ImprintIDType: string;
    IDValue:       string;
}

export interface Publisher {
    PublishingRole:      string;
    PublisherIdentifier: PublisherIdentifier[];
    PublisherName:       string;
}

export interface PublisherIdentifier {
    PublisherIDType: string;
    IDValue:         string;
}

export interface PublishingDate {
    PublishingDateRole: string;
    Date:               string;
}

export interface Summary {
    isbn:      string;
    title:     string;
    volume:    string;
    series:    string;
    publisher: string;
    pubdate:   string;
    cover:     string;
    author:    string;
}
