import { useCallback } from "react";
import { documentService } from "../api"
import { useUserContext } from "../context/UserContext";

export const documentHook = () => {
    const { user } = useUserContext();

    const uploadDocument = useCallback(async (file: File) => {
        if (!user) 
        {
            throw Error('No user logged in...');
        }

        try {
            const response = await documentService.uploadFile(file);
            return response;
        }
        catch (err) {
            throw err instanceof Error ? Error(err.message) : Error('Failed to upload file');
        }
    }, [user]);

    return {
        uploadDocument
    }
}