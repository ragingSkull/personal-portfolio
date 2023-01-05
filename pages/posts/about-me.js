export default function AboutMe() {
    const space = '\u00a0';

    return(
        <div className='aboutme-container'>
            <div className='float_container'>
                <div className='float_child left_child'>
                    <p className='aboutMeIntro'>Hi</p>
                    <p className='dot bounce'>.</p>
                </div>
                <p className='aboutMe'>
                <code>
                &#91;&#123;
                {space.repeat(20)}
                <br />
                &#34;career&#34;&#58;{space}&#123;
                <br />
                {space.repeat(25)}
                &#34;position&#34;&#58; &#34;Developer&#34;&#44;
                <br />
                {space.repeat(20)}
                &#34;yearsOfExp&#34;&#58; &#34;6&#34;&#44;
                <br />
                &#125;
                {space.repeat(10)}
                <br />
                &#125;&#93;
                {space.repeat(20)}
                </code>
                </p>
            </div>
        </div>
    );
}