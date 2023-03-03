import { DisplayBox } from '../components/DisplayBox';
import { Header } from '../components/Header';

export const Home = () => {
  return (
    <div className='w-full h-screen top-0 absolute bg-red dark:bg-primary flex flex-col items-center'>
      <Header />
      <div className='mt-8 mx-4 flex flex-wrap'>
        <div className='mr-8'>
          <DisplayBox name={'ტრიგონომეტირა'} link={'./trigonometry'} />
        </div>
        <div className='mr-8'>
          <DisplayBox name={'არითმეტიკა'} link={'./arithmetic'} />
        </div>
      </div>
    </div>
  );
};
