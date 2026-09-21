import React, { useState } from 'react';
import { documentHook } from '../hooks/documentHook.ts';
import { UploadStatus } from '../types/document.ts';

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [status, setStatus] = useState<UploadStatus>({ message: '' });

  const { uploadDocument } = documentHook();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setStatus({ message: 'File selected.' });
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setStatus({ message: 'Please select a file first.' });
      return;
    }

    setIsUploading(true);
    setStatus({ message: 'Uploading...' });

    try {
      const result = await uploadDocument(selectedFile);
      setStatus({ message: result.message || 'Upload failed...' });
      
      // Reset file input on success
      setSelectedFile(null);
  } catch (err: any) {
    const errorMessage =
    err?.response?.data?.message ||
    err?.message ||
    'An unknown error occurred';

    setStatus({
    message: 'Upload failed.',
    error: errorMessage
    });
  } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="user-list">
      <h3>Upload Document</h3>
      
      <input 
        type="file" 
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileChange} 
        disabled={isUploading} 
      />

      <button 
        onClick={handleUpload} 
        disabled={!selectedFile || isUploading}
        style={{ 
          marginLeft: '10px', 
          cursor: (!selectedFile || isUploading) ? 'not-allowed' : 'pointer' 
        }}
      >
        {isUploading ? 'Processing...' : 'Upload to Server'}
      </button>

      {status.message && <p>{status.message}</p>}
      {status.error && <p style={{ color: 'red' }}>{status.error}</p>}
    </div>
  );
};

export default FileUpload;