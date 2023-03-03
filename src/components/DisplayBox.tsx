import { Link } from 'react-router-dom';

export const DisplayBox = (props: { name: string; link: string }) => {
  return (
    <Link to={props.link}>
      <div className='w-96 h-28 bg-primary-800 hover:bg-indigo-700 flex justify-center items-center rounded-md'>
        <h1 className='dark:text-white text-2xl font-semibold text-center'>
          {props.name}
        </h1>
      </div>
    </Link>
  );
};
