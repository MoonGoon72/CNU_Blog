import { useMutation } from '@tanstack/react-query';
import { updatePostById } from '../api';

const useUpdatePostById = () => {
  const mutation = async ({ postId, title, contents, tag }: { postId: string; title: string; contents: string; tag: string }) => {
    await updatePostById(postId, title, contents, tag);
  };

  return useMutation({
    mutationKey: ['updatePost'],
    mutationFn: mutation,
  });
};

export default useUpdatePostById;
