import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { useEffect, useState } from 'react';
import './Preview.css';

function Preview() {
  const [input] = useState('x = 5\nprint("hello")');
  useEffect(() => {
    hljs.highlightAll();
    console.log('highlighted');
  }, []);

  return <div className="grow p-3">
    <pre><code className='language-python'>
      {input}
    </code></pre>
  </div>
}

export default Preview;
