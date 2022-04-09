import { useState } from 'react';
import axios from 'axios';
interface UseRequestProps {
  url: string;
  method: 'get' | 'post' | 'patch';
  body: any;
  onSuccess?: (data: any) => void;
}

export const useRequest = <ResponseType>({
  url,
  method,
  body,
  onSuccess,
}: UseRequestProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const doRequest = async (props = {}) => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios[method](url, { ...body, ...props });
      const responseData = response.data as ResponseType;
      if (onSuccess) {
        onSuccess(responseData);
      }
      setError(false);
      setLoading(false);
      return responseData;
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };
  return { loading, error, doRequest };
};
