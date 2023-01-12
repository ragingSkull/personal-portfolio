export default function AboutMe() {
    const space = '\u00a0';

    return(
        <div className='container !max-w-none ho'>
            <div className='sub-container text-white flex-col items-center'>
                {/* <div className='float_child left_child'>
                    <p>HI</p>
                    <p className='dot bounce'>.</p>
                </div> */}
                <p className='text-left !text-base my-40 mob-txt'>
                <code>
                &#91;&#123;
                <br />
                {space.repeat(5)}&#34;career&#34;&#58;{space}&#123;
                <br />
                {space.repeat(10)}
                &#34;position&#34;&#58; &#34;Fullstack Developer&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;yearsOfExp&#34;&#58; &#34;6&#34;&#44;
                <br />
                {space.repeat(5)}&#125;&#44;
                <br />
                {space.repeat(5)}&#34;skills&#34;&#58;{space}&#91;
                <br />
                {space.repeat(10)}
                &#34;HTML&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;CSS&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;Twig&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;Javascript&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;JQuery&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;Node.js&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;React&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;Next.js&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;PHP&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;Go&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;Typescript&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;Drupal&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;MySQL&#34;
                <br />
                {space.repeat(5)}&#93;&#44;
                <br />
                {space.repeat(5)}&#34;contact&#34;&#58;{space}&#123;
                <br />
                {space.repeat(10)}
                &#34;email&#34;&#58; &#34;<a href="mailto:boonfu87@gmail.com">boonfu87@gmail.com</a>&#34;&#44;
                <br />
                {space.repeat(10)}
                &#34;facebook&#34;&#58; &#34;<a href="https://www.facebook.com/rottenegggs" rel="noreferrer" target="_blank">https://www.facebook.com/rottenegggs</a>&#34;
                <br />
                {space.repeat(5)}&#125;
                <br />
                &#125;&#93;
                {space.repeat(20)}
                </code>
                </p>
            </div>
        </div>
    );
}