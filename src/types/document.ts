export interface UploadResponse {
    success: boolean;
    message: string;
    data?: UploadResult;
}

export interface UploadResult {
    id: string,
    originalName: string,
    mimeType: string,
    size: number,
    uploadedAt: string;
}

export interface UploadStatus {
    message: string;
    error?: string;
}