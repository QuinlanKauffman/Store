export interface IComponent {
    getOuterHTMLElement(): HTMLElement 
}

export interface IService {
    getBaseEndpoint(): string
}

export interface IHTTP {
    getBaseURL(): string;
    get(): Promise<any>;
    post(): Promise<any>;
    put(): Promise<any>;
    delete(): Promise<any>;
}