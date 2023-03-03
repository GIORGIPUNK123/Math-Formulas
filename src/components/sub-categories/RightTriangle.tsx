import Latex from 'react-latex';
import { Header } from '../Header';

export const RightTriangle = () => {
  const areaFormulaInRight = `$\\frac{a \\, * \\, b}{2}$`;
  const areaFormulaWithHeight = `$\\frac{a \\, * \\, h}{2}$`;

  return (
    <>
      <div className='w-full top-0 absolute bg-red dark:bg-primary flex flex-col items-center'>
        <Header goBackLink />
        <div className='mt-8 flex flex-col items-center justify-center'>
          <h1 className='dark:text-white text-6xl font-semibold text-center'>
            მართკუთხა სამკუთხედი
          </h1>
          <div className='w-[80%]'>
            <div>
              <p className='dark:text-white text-4xl font-semibold text-center mt-20'>
                მართკუთხა სამკუთხედი არის სამკუთხედი, რომელშიც ერთი კუთხე მართია
                (ანუ 90 გრადუსიანი კუთხე). მართკუთხა სამკუთხედის გვერდებსა და
                სხვა კუთხეებს შორის კავშირი არის ტრიგონომეტრიის საფუძველი.
              </p>
            </div>
            <div className='mt-24 bg-primary-800 rounded-md py-10 flex flex-col items-center'>
              <h1 className='dark:text-white text-5xl font-semibold text-center'>
                პითაგორას თეორემა
              </h1>
              <p className='dark:text-white text-4xl font-semibold text-center mt-12'>
                მათემატიკაში პითაგორას თეორემა არის ურთიერთდამოკიდებულება
                ევკლიდეს გეომეტრიაში მართკუთხა სამკუთხედის სამ გვერდს შორის.
                თეორემას სახელი ბერძენი მათემატიკოსი პითაგორას გამო დაერქვა,
                რომელმაც პირველად დაამტკიცა მისი მართებულობა.
              </p>
              <div className='dark:text-white text-4xl font-semibold text-center mt-16 bg-primary-100 w-fit px-12 py-4 rounded-md'>
                <Latex>$a^2 + b^2 = c^2$</Latex>
              </div>
            </div>
            <div className='mt-24 bg-primary-800 rounded-md py-10 flex flex-col items-center'>
              <h1 className='dark:text-white text-5xl font-semibold text-center'>
                ფართობი
              </h1>
              <p className='dark:text-white text-4xl font-semibold text-center mt-12'>
                სამკუთხედის ფართობის დათვლა ბევრნაირად შეიძლება
              </p>
              <p className='dark:text-white text-4xl font-semibold text-center mt-12'>
                ალბათ ყველაზე ცნობილი ფორმულა რომ განვიხილოთ ეს არის გვერდის და
                მასზე დაშვებული სიმაღლის ნამრავლის ნახევარი ამ შემთხვევაში კი
                კათეტების ნამრავლის ნახევარი
              </p>
              <div className='dark:text-white text-5xl font-semibold text-center mt-16 bg-primary-100 w-fit px-12 py-4 rounded-md'>
                <Latex>{areaFormulaInRight}</Latex>
              </div>
            </div>
            <div className='mt-24 bg-primary-800 rounded-md py-10 flex flex-col items-center'>
              <h1 className='dark:text-white text-5xl font-semibold text-center'>
                პრიველი თვისება
              </h1>
              <p className='dark:text-white text-4xl font-semibold text-center mt-12'>
                სამკუთხედში ჩვენ შეგვიძლია ჰიპოტენუზას ან კათეტის პოვნა
                შემდეგნაირად
              </p>
              <p className='dark:text-white text-4xl font-semibold text-center mt-12'>
                თუ მართკუთხა სამკუთხედში რომელიმე კუთხე 30 გრადუსიანია მაშინ ამ
                კუთხის მოპირდაპირე კათეტი ჰიპოტენუზას ნახევარია
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
