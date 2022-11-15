const App = () => (
  <div>
    <main>
      <div className="mb-[80px]">
        <img
          src="/mainvisual.jpg"
          className="w-[100%]  h-[100vh] object-cover"
        />
      </div>
      <div className="mb-[80px] px-[20px]">
        <h1 className="text-[32px] font-semibold mb-[20px] text-center">
          Recipe Diary
        </h1>
        <p className="text-[16px] text-center">
          日々の料理レシピをまとめております。
          <br />
          和食や洋食、中華、お菓子までいろいろな料理のレシピをアップしていますので、
          <br />
          皆さんの献立にお役立てくださいね！
        </p>
      </div>

      <ul className="laptop:flex mb-[80px]">
        {PATH.map((path) => (
          <li className="laptop:w-[calc(100%/3)]" key={path}>
            <img
              src={path}
              className="h-[500px] w-[100%] align-bottom object-cover"
            />
          </li>
        ))}
      </ul>

      <div className="text-center px-[20px] mb-[80px]">
        <a className="px-[60px] py-[18px] border-black border cursor-pointer">
          レシピ一覧を見る
        </a>
      </div>
    </main>

    <footer className="p-[12px]">
      <ul className="flex flex-row justify-center mb-[20px]">
        {FOOTER.map((child) => (
          <li key={child}>
            <a className="underline mx-[10px] text-[12px]">{child}</a>
          </li>
        ))}
      </ul>
      <p className="text-center text-[12px]">&copy; 2021 Recipe Diary</p>
    </footer>
  </div>
);

const FOOTER = ["Instagram", "Twitter", "Facebook"];
const PATH = [
  "/public/recipe1.jpg",
  "/public/recipe2.jpg",
  "/public/recipe3.jpg",
];

export default App;
