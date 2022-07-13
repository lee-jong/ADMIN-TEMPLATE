import type { NextPage } from "next";
import { useRouter, NextRouter } from "next/router";
import { useAtom } from "jotai";
import { countAtom } from "store";
import useCount2 from "hook/index";

const Home: NextPage = () => {
  const router: NextRouter = useRouter();
  const [count, setCount] = useAtom(countAtom);
  const [count2, setCount2]: any = useCount2();
  return (
    <div>
      <main>
        <div>{count}</div>
        <br />
        <button onClick={() => setCount(count + 1)}>click</button>
        <br />
        <div>{count2}</div>
        <button onClick={() => setCount2(count2 + 1)}>click2</button>
        <br />
        <button onClick={() => router.push("/test")}>이동</button>
      </main>
    </div>
  );
};

export default Home;
