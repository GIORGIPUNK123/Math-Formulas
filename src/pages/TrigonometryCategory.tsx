import { DisplayBox } from '../components/DisplayBox';
import { Header } from '../components/Header';

export const TrigonometryCategory = () => {
  return (
    <>
      <div className='w-full h-screen top-0 absolute bg-red dark:bg-primary flex flex-col items-center'>
        <Header goBackLink />
        <div className='mt-8 flex flex-col items-center justify-center'>
          <h1 className='dark:text-white text-6xl font-semibold text-center'>
            ტრიგონომეტირა
          </h1>
          <div className='w-[80%]'>
            <p className='dark:text-white text-4xl font-semibold text-center mt-20'>
              ტრიგონომეტრია — მათემატიკის დარგი, რომელშიც შეისწავლება
              ტრიგონომეტრიული ფუნქციები და მათი გამოყენებანი გეომეტრიაში.
              ტრიგონომეტრია იყოფა ბრტყელ, ანუ წრფივ და სფერულ ტრიგონომეტრიად.
            </p>
          </div>
          <div className='mt-16 flex flex-wrap justify-center'>
            <div className='mx-4 mb-6'>
              <DisplayBox name='მართკუთხა სამკუთხედი' link='./right' />
            </div>
            <div className='mx-4 mb-6'>
              <DisplayBox name='ტოლფერდა სამკუთხედი' link='./right' />
            </div>
            <div className='mx-4 mb-6'>
              <DisplayBox name='ტოლგვერდა სამკუთხედი' link='./right' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
