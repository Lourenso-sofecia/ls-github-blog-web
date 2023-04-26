export interface PublicationProps{
    number?: number;
    title?: string;
    created_at?: string;
    updated_at?: Date;
    comments?: string;
    body?: string | undefined;
}