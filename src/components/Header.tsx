import { Link } from 'react-router-dom';
import { ToggleTheme } from './ToggleTheme';
import goBackImage from '../images/left-arrow.svg';
import { useNavigate } from 'react-router-dom';
export const Header = (props: { goBackLink?: boolean }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className='w-full flex justify-between bg-slate-200 dark:bg-primary-900 border-solid border-b-8 dark:border-red border-gray-600 h-16 items-center'>
        <div className='w-[48px] ml-8 h-[48px]'>
          {props.goBackLink ? (
            <img
              className='filter invert'
              src={goBackImage}
              alt='goBackImage'
              onClick={() => {
                navigate(-1);
              }}
            />
          ) : null}
        </div>
        <div className='flex items-center'>
          <h1 className='dark:text-white text-2xl font-semibold text-center'>
            მათემატიკის ფორმულები
          </h1>
        </div>
        <div className='flex justify-center items-center mr-4'>
          <ToggleTheme />
        </div>
      </div>
    </>
  );
};
