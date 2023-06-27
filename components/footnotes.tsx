import littlefoot from "littlefoot";
import "littlefoot/dist/littlefoot.css";
import { useFootnotes } from "../hooks/useFootnotes";


export function Footnotes() {
  const footnotes = useFootnotes();
  return (
    <>
      <p>
        <sup id='fnref:1'>
          <a href='#fn:1'>1</a>
        </sup>
      </p>

      <div className='footnotes'>
        <ol>
          <li className='footnote' id='fn:1'>
            <p>
              footnote.{" "}
              <a href='#fnref:1' title='return to article'>
                {" "}
                ↩
              </a>
            </p>
            <p></p>
          </li>
        </ol>
      </div>
    </>
  );
}

littlefoot();