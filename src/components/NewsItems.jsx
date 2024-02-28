/* eslint-disable react/prop-types */

export function NewsItems(props) {
  let { title, description, imageUrl, newsUrl, author, publishedAt } = props;
  return (
    <div className="mx-auto sm:px-3 md:px-3  ">
      <div className=" max-w-[20rem] sm:max-w-sm mx-auto md:max-w-sm bg-[#222831] rounded-2xl border-[3px] border-[#00ADB5] md:hover:scale-105 md:hover:shadow-[5px_5px_0px_0px_#00ADB5] md:hover:transition-all md:hover:delay-100 md:hover:ease-in-out  ">
        <a>
          <img
            className="rounded-t-2xl w-[385px] h-[215px]"
            src={imageUrl ? imageUrl : "https://source.unsplash.com/featured/"}
            alt=""
          />
        </a>
        <div className="p-5">
          <a>
            <h5 className="mb-2 text-2xl line-clamp-2 tracking-tight text-[#EEEEEE] break-all font-dm font-medium">
              {title}
            </h5>
          </a>
          <p className="mb-3 line-clamp-3 font-light text-base text-[#657489] break-all font-montserrat ">
            {description}
          </p>
          <p className="text-[10px] opacity-60 pb-3 text-gray-500 truncate dark:text-gray-400 font-montserrat ">
            By {author} on {new Date(publishedAt).toLocaleString()}
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="inline-flex items-center font-montserrat font-medium px-3 py-2 text-sm text-center text-white bg-[#00ADB5] rounded-lg hover:bg-[#54d1d7]"
            rel="noreferrer"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2 mt-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
