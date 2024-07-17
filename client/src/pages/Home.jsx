import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { FaSearch } from 'react-icons/fa';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-2 p-5 px-3 max-w-6xl mx-auto '>
        <h1
          className='text-3xl font-bol
        d  text-[#583ba8] lg:text-6xl'
        >
          Welcome
        </h1>
        <p className='text-gray-500 text-xs dark:text-white sm:text-sm'>
          Here you'll find a variety of articles and contents on topics such as
          Tailoring, Aparrel, and Materials.
        </p>
        <button
          className='bg-gray-200 flex flex-row justify-center
        lg:bg-transparent rounded-full
         text-[#c4458f] gap-x-5 py-1 mx-16'
        >
          <Link
            to='/search'
            className=' text-center sm:text-3xl text-[#c4458f] font-bold hover:underline'
          >
            Search cyberTailor
          </Link>
          <div className='lg:hidden mt-1'>
            <FaSearch />
          </div>
        </button>
      </div>
      <div className='py-0.5 bg-blue-950 dark:bg-slate-700'></div>
      <CallToAction />
      <div className=' p-7'>
        {posts && posts.length > 0 && (
          <div className=' gap-4'>
            <h2 className='text-2xl font-semibold text-center'>
              Lastest Posts
            </h2>
            <div
              className='flex flex-col lg:flex-row lg:flex-wrap
            '
            >
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
