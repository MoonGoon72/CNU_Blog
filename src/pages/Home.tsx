import PostListItem from '../components/PostListItem';
import NoPostList from '../components/NoPostList';
import useGetPostList from '../queries/useGetPostList';

const Home = () => {
  // const [postList, setPostList] = useState<IResponsePostList>([]);
  const { data: postList = [], isError, isLoading } = useGetPostList();

  // const fetchPostList = async () => {
  //   const { data } = await getPostList();
  //   data.reverse();
  //   setPostList(data);
  // };

  // useEffect(() => {
  //   fetchPostList();
  // }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (postList.length === 0 || isError) {
    return <NoPostList />;
  }

  // if (postList.length === 0) {
  //   return <NoPostList />;
  // }

  return (
    <div>
      {postList.map(item => (
        <PostListItem key={item.id} id={`${item.id}`} title={item.title} contents={item.contents} tag={item.tag} />
      ))}
    </div>
  );
};

export default Home;
