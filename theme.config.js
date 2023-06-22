const YEAR = new Date().getFullYear();

export default {
  footer: (
    <footer>
      <div className='my-24 mx-auto flex items-center sm:flex-row flex-col'>
        <small>
          <time>2015 - {YEAR}</time> © tiff
          <a className='ml-2' href='/feed.xml'>
            RSS
          </a>
        </small>
        <style jsx>{`
          footer {
            margin-top: 8rem;
          }
        `}</style>
        <div className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <a
            target='_blank'
            href='https://www.github.com/twhite96/'
            className='text-gray-500 p-1 rounded-full hover:bg-hover transition-all duration-300'
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_9914_10)'>
                <path
                  d='M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z'
                  fill='currentColor'
                />
              </g>
              <defs>
                <clipPath id='clip0_9914_10'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/tiffanyrwhite/'
            className='text-gray-500 p-1 rounded-full hover:bg-hover transition-all duration-300'
          >
            <svg
              fill='currentColor'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='0'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path
                stroke='none'
                d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
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
