const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <div className='my-24 mx-auto flex items-center sm:flex-row flex-col'>
        <small>
          <time>2015 - {YEAR}</time> © tiff
        </small>
        <style jsx>{`
          footer {
            margin-top: 8rem;
          }
        `}</style>
        <div className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <a className="ml-1 -mb-7" aria-label="rss feed" href='/feed.xml'>
            <svg
              fill='#FFA500'
              stroke='currentColor'
              strokeLinecap='square'
              strokeLinejoin='round'
              strokeWidth='0'
              className='w-4 h-4'
              viewBox='0 0 24 24'
            >
              <path
                d='M19.199,24 C19.199,13.467 10.533,4.8 0,4.8 L0,0 C13.165,0 24,10.835 24,24 L19.199,24 L19.199,24 Z M3.291,17.415 C5.105,17.415 6.584,18.894 6.584,20.71 C6.584,22.523 5.099,24 3.283,24 C1.47,24 0,22.526 0,20.71 C0,18.894 1.475,17.416 3.291,17.415 Z M15.909,24 L11.244,24 C11.244,17.831 6.169,12.755 0,12.755 L0,8.09 C8.727,8.09 15.909,15.274 15.909,24 Z'
                id='Shape'
              ></path>
              <circle cx='4' cy='4' r='2' stroke='none'></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  ),
  darkMode: true,
};