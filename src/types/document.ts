export interface UploadResponse {
    success: boolean;
    message: string;
    data?: UploadResult;
}

export interface UploadResult {
    _id: string,
    originalName: string,
    mimeType: string,
    size: number,
    uploadedAt: Date
}

export interface UploadStatus {
    message: string;
    error?: string;
}