import type { NextPage } from "next";
import { useAtom } from "jotai";
import { countAtom } from "store";
import useCount2 from "hook/index";

const Test: NextPage = () => {
  const [count] = useAtom(countAtom);
  const [count2]: any = useCount2();
  return (
    <div>
      <main>
        <div>{count}</div>
        <br />
        <div>{count2}</div>
      </main>
    </div>
  );
};

export default Test;
